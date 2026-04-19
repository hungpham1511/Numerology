// ================================================================
// NAME SUGGESTER  (js/suggest.js)
// Vietnamese name database + scoring algorithm for numerology
// optimization. Depends on engine.js for calculation functions.
// ================================================================

// ── Vietnamese Name Database ──────────────────────────────────────

const VN_NAMES = {
    middle: {
        male: [
            'Van', 'Duc', 'Minh', 'Huu', 'Dinh', 'Xuan', 'Tien',
            'Hoang', 'Quang', 'Bao', 'Cong', 'Thanh', 'Ngoc', 'Trong',
            'Anh', 'Duy', 'Phuc', 'The', 'Huy', 'Tan', 'Gia',
            'Nhat', 'Dai', 'Tri', 'Viet',
        ],
        female: [
            'Thi', 'Ngoc', 'Thanh', 'Phuong', 'Khanh', 'Dieu', 'Tuyet',
            'Mai', 'Bich', 'Ai', 'Thu', 'Thuy', 'Hoai', 'My',
            'Yen', 'Kim', 'Lan', 'Hong', 'Minh', 'Anh', 'Ha',
            'Cam', 'Uyen', 'Doan', 'Bao',
        ],
    },
    first: {
        male: [
            'Anh', 'Huy', 'Minh', 'Bao', 'Khang', 'Long', 'Nam',
            'Tuan', 'Hung', 'Hoang', 'Hieu', 'Phuc', 'Khoa', 'Dat',
            'Dung', 'Kien', 'Thang', 'Trung', 'Vinh', 'Tai', 'Quan',
            'Hung', 'Son', 'Phong', 'Loc', 'Nghia', 'Toan', 'Tri',
            'Nhan', 'Duc', 'Doan', 'Thinh', 'Hao', 'Lam', 'Sang',
        ],
        female: [
            'Anh', 'Phuong', 'Ngoc', 'Hong', 'Thuy', 'Linh', 'Lan',
            'Mai', 'Chi', 'Giang', 'Ha', 'Nhi', 'Vy', 'Trang',
            'Thy', 'Tram', 'Uyen', 'Duyen', 'Huong', 'Thao', 'Yen',
            'Quyen', 'Nhung', 'Chau', 'Van', 'Trinh', 'Huyen', 'Hanh',
            'Diem', 'An', 'Dao', 'Khanh', 'Ngan', 'Tien', 'Suong',
        ],
    },
};

// ── Harmonious number pairs ──────────────────────────────────────
// Numbers that work well together per numerology tradition
const HARMONY_MAP = {
    1: [1, 3, 5, 7, 9],
    2: [2, 4, 6, 8, 11],
    3: [1, 3, 5, 6, 9],
    4: [2, 4, 6, 8, 22],
    5: [1, 3, 5, 7, 9],
    6: [2, 3, 4, 6, 9, 33],
    7: [1, 5, 7],
    8: [2, 4, 6, 8],
    9: [1, 3, 5, 6, 9],
    11: [2, 4, 6, 11, 22],
    22: [2, 4, 8, 11, 22],
    33: [3, 6, 9, 33],
};

// ── Core suggestion function ──────────────────────────────────────

function generateNameSuggestions(lastName, day, month, year, gender, targetNumbers) {
    const middles = VN_NAMES.middle[gender] || VN_NAMES.middle.male;
    const firsts  = VN_NAMES.first[gender]  || VN_NAMES.first.male;

    // Calculate Life Path for harmony scoring
    const lpData = calcLifePath(day, month, year);
    const lifePath = lpData.value;
    const lpSingle = isMaster(lifePath) ? reduceSingleDigit(lifePath) : lifePath;

    const results = [];
    const seen = new Set();

    for (const mid of middles) {
        for (const first of firsts) {
            const fullName = `${lastName} ${mid} ${first}`;
            const key = fullName.toUpperCase();
            if (seen.has(key)) continue;
            seen.add(key);

            const nameData = getNameNumbers(fullName);
            const { soul, destiny, personality } = nameData;

            // Calculate bridge numbers
            const bdData = calcBirthday(day);
            const birthday = bdData.value;
            const bridges = calcBridgeNumbers(soul, personality, lifePath, birthday);

            // Karmic lessons from this name
            const karmic = calcKarmicLessons(nameData.letterCounts);

            // Score this combination
            const score = scoreName({
                destiny, soul, personality,
                lifePath, lpSingle,
                bridges, karmic,
                targetNumbers,
            });

            results.push({
                middleName: mid,
                firstName: first,
                fullName,
                destiny, soul, personality,
                bridgeSP: bridges.soulPersonality,
                bridgeLB: bridges.lifePathBirthday,
                karmicCount: karmic.length,
                karmic,
                score,
            });
        }
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 30); // top 30
}

// ── Scoring algorithm ──────────────────────────────────────────────

function scoreName({ destiny, soul, personality, lifePath, lpSingle, bridges, karmic, targetNumbers }) {
    let score = 0;

    // ── 1. Destiny number match (40 points max) ──
    if (targetNumbers && targetNumbers.length > 0) {
        // User specified target(s)
        const destSingle = isMaster(destiny) ? reduceSingleDigit(destiny) : destiny;
        if (targetNumbers.includes(destiny)) {
            score += 40;
        } else if (targetNumbers.some(t => {
            const tSingle = isMaster(t) ? reduceSingleDigit(t) : t;
            return tSingle === destSingle;
        })) {
            score += 25; // Same root number
        }
    } else {
        // Auto mode: reward harmony with Life Path
        const harmList = HARMONY_MAP[lpSingle] || [];
        const destSingle = isMaster(destiny) ? reduceSingleDigit(destiny) : destiny;
        if (harmList.includes(destiny) || harmList.includes(destSingle)) {
            score += 35;
        }
        // Extra bonus for master destiny numbers
        if (isMaster(destiny)) score += 8;
    }

    // ── 2. Soul-Personality harmony (20 points max) ──
    // Lower bridge = more harmony
    const spBridge = bridges.soulPersonality;
    score += Math.max(0, 20 - spBridge * 4);

    // ── 3. Life Path harmony (20 points max) ──
    const lbBridge = bridges.lifePathBirthday;
    const soulSingle = isMaster(soul) ? reduceSingleDigit(soul) : soul;
    const harmList = HARMONY_MAP[lpSingle] || [];
    if (harmList.includes(soul) || harmList.includes(soulSingle)) {
        score += 10;
    }
    const persSingle = isMaster(personality) ? reduceSingleDigit(personality) : personality;
    if (harmList.includes(personality) || harmList.includes(persSingle)) {
        score += 10;
    }

    // ── 4. Karmic lesson coverage (20 points max) ──
    // Fewer missing numbers = higher score
    const karmicPenalty = karmic.length * 3;
    score += Math.max(0, 20 - karmicPenalty);

    // Bonus: if no karmic lessons at all
    if (karmic.length === 0) score += 5;

    return Math.round(score);
}

// ── Render suggestion cards ──────────────────────────────────────

function renderSuggestCard(item, rank, lifePath) {
    const masterDest = isMaster(item.destiny) ? ' master' : '';
    const masterSoul = isMaster(item.soul) ? ' master' : '';
    const masterPers = isMaster(item.personality) ? ' master' : '';
    const scorePercent = Math.min(100, Math.round(item.score / 100 * 100));

    // Score color gradient
    let scoreColor;
    if (scorePercent >= 80) scoreColor = 'var(--success)';
    else if (scorePercent >= 60) scoreColor = 'var(--accent)';
    else if (scorePercent >= 40) scoreColor = 'var(--primary-light)';
    else scoreColor = 'var(--text-muted)';

    const karmicHtml = item.karmic.length > 0
        ? `<div class="sg-karmic">Thiếu: ${item.karmic.join(', ')}</div>`
        : `<div class="sg-karmic sg-karmic-ok">✅ Đủ 1–9</div>`;

    return `<div class="suggest-card" style="animation-delay:${rank * 50}ms">
        <div class="sg-rank">#${rank + 1}</div>
        <div class="sg-name">${item.fullName}</div>
        <div class="sg-score-bar">
            <div class="sg-score-fill" style="width:${scorePercent}%;background:${scoreColor}"></div>
        </div>
        <div class="sg-score-label" style="color:${scoreColor}">${item.score} điểm</div>
        <div class="sg-numbers">
            <div class="sg-num">
                <span class="sg-num-label">Vận Mệnh</span>
                <span class="sg-num-value${masterDest}">${item.destiny}</span>
            </div>
            <div class="sg-num">
                <span class="sg-num-label">Linh Hồn</span>
                <span class="sg-num-value${masterSoul}">${item.soul}</span>
            </div>
            <div class="sg-num">
                <span class="sg-num-label">Nhân Cách</span>
                <span class="sg-num-value${masterPers}">${item.personality}</span>
            </div>
        </div>
        <div class="sg-bridges">
            Cầu nối: SP=${item.bridgeSP} · LB=${item.bridgeLB}
        </div>
        ${karmicHtml}
    </div>`;
}

function renderSuggestSummary(lifePath, totalCombos, gender, targetNumbers) {
    const lpDisplay = isMaster(lifePath) ? `${lifePath} (Master)` : lifePath;
    const genderLabel = gender === 'female' ? 'Nữ' : 'Nam';
    const targetLabel = (targetNumbers && targetNumbers.length > 0)
        ? `Mục tiêu: Số ${targetNumbers.join(', ')}`
        : 'Tự động tối ưu hài hòa';

    return `<div class="sg-summary-inner">
        <div class="sg-summary-item">
            <span class="sg-summary-icon">🛤️</span>
            <span>Số Đường Đời: <strong>${lpDisplay}</strong></span>
        </div>
        <div class="sg-summary-item">
            <span class="sg-summary-icon">${gender === 'female' ? '👩' : '👨'}</span>
            <span>Giới tính: <strong>${genderLabel}</strong></span>
        </div>
        <div class="sg-summary-item">
            <span class="sg-summary-icon">🎯</span>
            <span>${targetLabel}</span>
        </div>
        <div class="sg-summary-item">
            <span class="sg-summary-icon">📊</span>
            <span>Đã phân tích <strong>${totalCombos}</strong> tổ hợp tên</span>
        </div>
    </div>`;
}

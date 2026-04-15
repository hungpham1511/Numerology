// ================================================================
// MAIN APP  (js/main.js)
// Wires up form → engine → render.  No raw calculations here.
// ================================================================

// ── Scroll reveal ────────────────────────────────────────────────
function revealAll() {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 40)
            el.classList.add('visible');
    });
}
window.addEventListener('scroll', revealAll, { passive: true });

// ── Reference table toggle ───────────────────────────────────────
function toggleRef() {
    document.getElementById('refToggle').classList.toggle('open');
    document.getElementById('refBody').classList.toggle('open');
}

// ── Form submit ──────────────────────────────────────────────────
function calculate() {
    const name        = document.getElementById('fullName').value.trim();
    const day         = parseInt(document.getElementById('birthDay').value);
    const month       = parseInt(document.getElementById('birthMonth').value);
    const year        = parseInt(document.getElementById('birthYear').value);
    const currentYear = parseInt(document.getElementById('currentYear').value) || new Date().getFullYear();
    const cmRaw       = document.getElementById('currentMonth').value;
    const currentMonth = cmRaw ? parseInt(cmRaw) : new Date().getMonth() + 1;

    if (!name || !day || !month || !year) {
        alert('Vui lòng nhập đầy đủ thông tin!'); return;
    }
    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900) {
        alert('Ngày tháng năm sinh không hợp lệ!'); return;
    }

    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.add('active');

    setTimeout(() => {
        try   { _doCalculate(name, day, month, year, currentYear, currentMonth); }
        catch (e) { console.error(e); alert('Có lỗi xảy ra: ' + e.message); }
        finally   { overlay.classList.remove('active'); }
    }, 450);
}

// ── Core render ──────────────────────────────────────────────────
function _doCalculate(name, day, month, year, currentYear, currentMonth) {

    // ── 1. Run all calculations ───────────────────────────────────
    const lpData       = calcLifePath(day, month, year);
    const lifePath     = lpData.value;

    const bdData       = calcBirthday(day);
    const birthday     = bdData.value;

    const nameData     = getNameNumbers(name);
    const { soul, destiny, personality } = nameData;
    const nd           = nameData.detail;

    const bridges      = calcBridgeNumbers(soul, personality, lifePath, birthday);
    const pinnData     = calcPinnacles(day, month, year, lifePath);
    const challData    = calcChallenges(day, month, year);
    const periodData   = calcLifePeriods(day, month, year, lifePath);
    const pyData       = calcPersonalYear(day, month, currentYear);
    const personalYear = pyData.value;
    const pmData       = calcPersonalMonth(personalYear, currentMonth);
    const personalMonth = pmData.value;
    const karmic       = calcKarmicLessons(nameData.letterCounts);
    const pythaResult  = calcPythagorasChart(day, month, year);
    const pythaCounts  = pythaResult.counts;
    const pythaArrows  = getPythaArrows(pythaCounts);

    // ── 2. Name breakdown ─────────────────────────────────────────
    document.getElementById('nameBreakdown').innerHTML =
        renderNameBreakdownTable(nameData.letters);

    // ── 3. Core numbers ───────────────────────────────────────────
    document.getElementById('coreNumbers').innerHTML = [
        renderNumCard('Số Đường Đời',  lifePath,    'Chỉ số quan trọng nhất',          '🛤️', 0),
        renderNumCard('Số Vận Mệnh',   destiny,     'Từ họ và tên đầy đủ',             '📜', 80),
        renderNumCard('Số Linh Hồn',   soul,        'Từ các nguyên âm trong tên',      '💜', 160),
        renderNumCard('Số Nhân Cách',  personality, 'Từ các phụ âm trong tên',        '🎭', 240),
        renderNumCard('Số Ngày Sinh',  birthday,    'Từ ngày sinh',                    '🎂', 320),
    ].join('');

    const lpD = lpData.detail;
    document.getElementById('coreCalcDetails').innerHTML =
        renderCalcDetail('Số Đường Đời (Life Path)',
            renderStep('Phương pháp', 'Rút gọn Ngày + Rút gọn Tháng + Rút gọn Năm → rút gọn tổng (giữ Master Number ở bước cuối)') +
            renderStep('Bước 1 · Rút gọn ngày',   `${lpD.day.raw}   → ${lpD.day.steps.join('   →   ')}   → <span class="highlight">${lpD.day.reduced}</span>`) +
            renderStep('Bước 2 · Rút gọn tháng',  `${lpD.month.raw} → ${lpD.month.steps.join('   →   ')}   → <span class="highlight">${lpD.month.reduced}</span>`) +
            renderStep('Bước 3 · Rút gọn năm',    `${lpD.year.raw}  → ${lpD.year.steps.join('   →   ')}   → <span class="highlight">${lpD.year.reduced}</span>`) +
            renderStep('Bước 4 · Tổng', `${lpD.day.reduced} + ${lpD.month.reduced} + ${lpD.year.reduced} = ${lpD.total}`) +
            (lpD.finalSteps.length ? renderStep('Bước 5 · Rút gọn', lpD.finalSteps.join('   →   ')) : '') +
            renderFormula(`Số Đường Đời = <span class="result">${lifePath}</span>`)) +

        renderCalcDetail('Số Vận Mệnh (Expression)',
            renderStep('Công thức', 'Cộng giá trị tất cả chữ cái → rút gọn') +
            renderStep('Giá trị', nd.allParts.join(' + ') + ` = <span class="highlight">${nd.totalSum}</span>`) +
            (nd.destinySteps.length ? renderStep('Rút gọn', nd.destinySteps.join(' → ')) : '') +
            renderFormula(`Số Vận Mệnh = <span class="result">${destiny}</span>`)) +

        renderCalcDetail('Số Linh Hồn (Soul Urge)',
            renderStep('Công thức', 'Chỉ cộng các <span class="highlight">nguyên âm</span> (A E I O U)') +
            renderStep('Nguyên âm', nd.vowelParts.join(' + ') + ` = <span class="highlight">${nd.vowelSum}</span>`) +
            (nd.soulSteps.length ? renderStep('Rút gọn', nd.soulSteps.join(' → ')) : '') +
            renderFormula(`Số Linh Hồn = <span class="result">${soul}</span>`)) +

        renderCalcDetail('Số Nhân Cách (Personality)',
            renderStep('Công thức', 'Chỉ cộng các <span class="highlight">phụ âm</span>') +
            renderStep('Phụ âm', nd.consonantParts.join(' + ') + ` = <span class="highlight">${nd.consonantSum}</span>`) +
            (nd.personalitySteps.length ? renderStep('Rút gọn', nd.personalitySteps.join(' → ')) : '') +
            renderFormula(`Số Nhân Cách = <span class="result">${personality}</span>`)) +

        renderCalcDetail('Số Ngày Sinh (Birthday)',
            renderStep('Công thức', 'Rút gọn ngày sinh, giữ Master Number (11, 22)') +
            renderStep('Tính', `Ngày = ${day} → ${bdData.steps.length ? bdData.steps.join(' → ') : 'không cần rút gọn'}`) +
            renderFormula(`Số Ngày Sinh = <span class="result">${birthday}</span>`));

    // ── 4. Bridge numbers ─────────────────────────────────────────
    const { soulPersonality: bSP, lifePathBirthday: bLB, detail: bD } = bridges;
    document.getElementById('bridgeNumbers').innerHTML = [
        renderNumCard('Cầu Nối Linh Hồn – Nhân Cách', bSP, `|${bD.sR} − ${bD.pR}| = ${bSP}`, '🌉', 0),
        renderNumCard('Cầu Nối Đường Đời – Ngày Sinh', bLB, `|${bD.lR} − ${bD.bR}| = ${bLB}`, '🔗', 80),
    ].join('');
    document.getElementById('bridgeCalcDetails').innerHTML =
        renderCalcDetail('Số Cầu Nối',
            renderStep('Công thức', '|Số A − Số B| (Master Number rút gọn về 1 chữ số trước khi trừ)') +
            renderStep('Cầu nối Linh Hồn − Nhân Cách', `|${bD.sR} − ${bD.pR}| = <span class="highlight">${bSP}</span>`) +
            renderStep('Cầu nối Đường Đời − Ngày Sinh',  `|${bD.lR} − ${bD.bR}| = <span class="highlight">${bLB}</span>`));

    // ── 5. Personal year / month ──────────────────────────────────
    document.getElementById('personalNumbers').innerHTML = [
        renderNumCard(`Số Năm Cá Nhân ${currentYear}`,    personalYear,  'Năng lượng của năm hiện tại',   '🌟', 0),
        renderNumCard(`Số Tháng Cá Nhân (T${currentMonth})`, personalMonth, 'Năng lượng của tháng hiện tại', '🌙', 80),
    ].join('');
    document.getElementById('personalCalcDetails').innerHTML =
        renderCalcDetail('Số Năm & Tháng Cá Nhân',
            renderStep('Công thức Năm', 'Tổng chữ số Ngày + Tháng + Năm hiện tại → rút gọn') +
            renderStep('Tính', pyData.detail.digitBreak) +
            (pyData.detail.steps.length ? renderStep('Rút gọn', pyData.detail.steps.join(' → ')) : '') +
            renderFormula(`Số Năm Cá Nhân ${currentYear} = <span class="result">${personalYear}</span>`) +
            renderStep('Công thức Tháng', 'Số Năm Cá Nhân + Tháng hiện tại → rút gọn') +
            renderStep('Tính', pmData.detail.formula) +
            (pmData.detail.steps.length ? renderStep('Rút gọn', pmData.detail.steps.join(' → ')) : '') +
            renderFormula(`Số Tháng Cá Nhân (T${currentMonth}) = <span class="result">${personalMonth}</span>`));

    // ── 6. Pinnacles ──────────────────────────────────────────────
    document.getElementById('pinnacles').innerHTML =
        pinnData.pinnacles.map((p, i) =>
            renderTimelineCard(
                `Đỉnh cao ${i + 1}`, p.num,
                `${p.from} – ${p.to !== null ? p.to : '∞'} tuổi`,
                '', i * 80
            )
        ).join('');
    const pd = pinnData.detail;
    document.getElementById('pinnacleCalcDetails').innerHTML =
        renderCalcDetail('Bốn Đỉnh Cao',
            renderStep('Chuẩn bị', `Ngày rút gọn = ${pd.d} · Tháng rút gọn = ${pd.m} · Năm rút gọn = ${pd.y}`) +
            renderStep('Tuổi bắt đầu', `36 − Số Đường Đời(${pd.lp}) = ${pd.firstEnd} tuổi`) +
            pd.formulas.map((f, i) => renderStep(`Đỉnh cao ${i + 1}`, f)).join(''));

    // ── 7. Challenges ─────────────────────────────────────────────
    document.getElementById('challenges').innerHTML =
        challData.challenges.map((c, i) =>
            renderTimelineCard(
                `Thử thách ${i + 1}`, c.num,
                `${pinnData.pinnacles[i].from} – ${pinnData.pinnacles[i].to !== null ? pinnData.pinnacles[i].to : '∞'} tuổi`,
                'challenge', i * 80
            )
        ).join('');
    const cd = challData.detail;
    document.getElementById('challengeCalcDetails').innerHTML =
        renderCalcDetail('Bốn Thử Thách',
            renderStep('Chuẩn bị', `Ngày = ${cd.d} · Tháng = ${cd.m} · Năm = ${cd.y}`) +
            cd.formulas.map((f, i) => renderStep(`Thử thách ${i + 1}`, f)).join(''));

    // ── 8. Life periods ───────────────────────────────────────────
    document.getElementById('periods').innerHTML =
        periodData.periods.map((p, i) =>
            renderTimelineCard(
                p.label, p.num,
                `${p.from} – ${p.to !== null ? p.to : '∞'} tuổi`,
                '', i * 80
            )
        ).join('');
    const prd = periodData.detail;
    document.getElementById('periodCalcDetails').innerHTML =
        renderCalcDetail('Ba Giai Đoạn',
            renderStep('Công thức', prd.note) +
            prd.formulas.map((f, i) => renderStep(`Giai đoạn ${i + 1}`, f)).join(''));

    // ── 9. Karmic lessons ─────────────────────────────────────────
    const presentNums = {};
    for (let i = 1; i <= 9; i++) presentNums[i] = nameData.letterCounts[i] || 0;
    const karmicDetailHtml =
        renderStep('Công thức', 'Đếm số lần xuất hiện mỗi số 1–9 trong tên. Số không xuất hiện = Bài học nghiệp.') +
        renderStep('Thống kê', Object.entries(presentNums).map(([k, v]) =>
            `Số ${k}: <span style="color:${v > 0 ? 'var(--success)' : 'var(--danger)'};">${v > 0 ? v + ' lần' : 'THIẾU'}</span>`
        ).join(' &nbsp;|&nbsp; '));

    if (karmic.length === 0) {
        document.getElementById('karmicLessons').innerHTML =
            '<div class="karmic-none">✅ Bạn không có bài học nghiệp nào — tên đã đủ các số từ 1 đến 9.</div>' +
            renderCalcDetail('Bài Học Nghiệp', karmicDetailHtml);
    } else {
        document.getElementById('karmicLessons').innerHTML =
            '<div class="karmic-grid">' +
            karmic.map(k => `<div class="karmic-badge">${k}</div>`).join('') +
            '</div>' +
            '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px;margin-bottom:12px">' +
            karmic.map(k =>
                `<div class="meaning-card" style="border-left-color:var(--danger)">
                    <div class="m-title">Số ${k}</div>
                    <div class="m-body">${KARMIC_MEANINGS[k]}</div>
                </div>`
            ).join('') +
            '</div>' +
            renderCalcDetail('Bài Học Nghiệp', karmicDetailHtml);
    }

    // ── 10. Pythagoras chart ──────────────────────────────────────
    const gridOrder = [3, 6, 9, 2, 5, 8, 1, 4, 7];
    document.getElementById('pythaGrid').innerHTML = gridOrder.map(d => {
        const count = pythaCounts[d];
        const display = count > 0 ? String(d).repeat(count) : '–';
        return `<div class="pytha-cell ${count > 0 ? 'filled' : 'empty'}">
            <span class="pc-digit">${d}</span>
            <span class="pc-count">${display}</span>
        </div>`;
    }).join('');

    document.getElementById('pythaArrows').innerHTML = pythaArrows.length > 0
        ? pythaArrows.map(a => {
            const cls = a.type === 'full' ? 'present' : 'absent';
            return `<div class="arrow-item">
                <span class="arrow-label ${cls}">${a.type === 'full' ? '✓' : '✗'} ${a.label}</span>
                <div class="arrow-desc">${a.desc}</div>
            </div>`;
        }).join('') +
        `<div class="arrow-item" style="background:rgba(245,158,11,0.05);border-color:rgba(245,158,11,0.2)">
            <span class="arrow-label" style="color:var(--accent-light)">Đọc biểu đồ</span>
            <div class="arrow-desc">Hàng ngang: 3-6-9 (Trí tuệ) · 2-5-8 (Cảm xúc) · 1-4-7 (Thể chất)<br>Hàng dọc: 1-2-3 (Suy nghĩ) · 4-5-6 (Ý chí) · 7-8-9 (Hành động)</div>
        </div>`
        : '<div class="arrow-item"><span class="arrow-desc">Không có mũi tên đặc biệt</span></div>';

    document.getElementById('pythaCalcDetails').innerHTML =
        renderCalcDetail('Biểu Đồ Pythagoras',
            renderStep('Công thức', 'Đếm mỗi chữ số 1–9 xuất hiện trong chuỗi ngày/tháng/năm sinh') +
            renderStep('Ngày sinh', `${day}/${month}/${year} → chữ số: <span class="highlight">${pythaResult.dateStr.split('').filter(c => c !== '0').join(', ')}</span> (bỏ số 0)`) +
            renderStep('Đếm', Object.entries(pythaCounts).map(([k, v]) => `Số ${k}: <strong>${v}</strong>`).join(' &nbsp;|&nbsp; ')));

    // ── 11. Detailed meanings ─────────────────────────────────────
    const allNums = [lifePath, destiny, soul, personality, birthday]
        .filter((v, i, a) => a.indexOf(v) === i);
    document.getElementById('meanings').innerHTML =
        allNums.map((n, i) => renderMeaningCard(n, i * 100)).join('');

    // ── 12. Show results ──────────────────────────────────────────
    const resultsEl = document.getElementById('results');
    resultsEl.style.display = 'block';
    setTimeout(revealAll, 50);
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').value = new Date().getFullYear();
    revealAll();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') calculate();
});

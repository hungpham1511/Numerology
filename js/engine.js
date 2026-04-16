// ================================================================
// NUMEROLOGY ENGINE  (js/engine.js)
// Pure functions only — no DOM access, easily testable in console.
// ================================================================

const PYTHA = {
    A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
    J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
    S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8
};

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

// ── Helpers ──────────────────────────────────────────────────────

function removeAccents(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[\u0110\u0111]/g, 'D');
}

function isMaster(n) {
    return n === 11 || n === 22 || n === 33;
}

function sumDigits(n) {
    return String(Math.abs(n))
        .split('')
        .reduce((s, d) => s + parseInt(d, 10), 0);
}

function reduceSingleDigit(n) {
    n = Math.abs(n);
    while (n > 9) n = sumDigits(n);
    return n;
}

function reduceMaster(n) {
    n = Math.abs(n);
    while (n > 9) {
        if (isMaster(n)) return n;
        n = sumDigits(n);
    }
    return n;
}

function reduceComponentTrace(n) {
    const digits = String(Math.abs(n)).split('').map(Number);
    let s = digits.reduce((a, b) => a + b, 0);
    const steps = [`${digits.join(' + ')} = ${s}`];

    while (s > 9) {
        const d2 = String(s).split('').map(Number);
        const s2 = d2.reduce((a, b) => a + b, 0);
        steps.push(`${d2.join(' + ')} = ${s2}`);
        s = s2;
    }

    return { value: s, steps };
}

function reduceTrace(n, keepMaster = true) {
    n = Math.abs(n);
    const steps = [];

    while (n > 9) {
        if (keepMaster && isMaster(n)) {
            steps.push(`${n} là Master Number → giữ nguyên`);
            return { value: n, steps };
        }

        const digits = String(n).split('').map(Number);
        const sum = digits.reduce((a, b) => a + b, 0);
        steps.push(`${digits.join(' + ')} = ${sum}`);
        n = sum;
    }

    return { value: n, steps };
}

// ── Life Path ────────────────────────────────────────────────────

function calcLifePath(day, month, year) {
    const dayR = reduceComponentTrace(day);
    const monthR = reduceComponentTrace(month);
    const yearR = reduceComponentTrace(year);

    const total = dayR.value + monthR.value + yearR.value;
    const finalR = reduceTrace(total, true);

    return {
        value: finalR.value,
        detail: {
            day: { raw: day, reduced: dayR.value, steps: dayR.steps },
            month: { raw: month, reduced: monthR.value, steps: monthR.steps },
            year: { raw: year, reduced: yearR.value, steps: yearR.steps },
            total,
            finalSteps: finalR.steps,
        },
    };
}

// ── Birthday Number ──────────────────────────────────────────────

function calcBirthday(day) {
    const r = reduceTrace(day, false);
    return { value: r.value, steps: r.steps };
}

// ── Name Numbers ─────────────────────────────────────────────────

function getNameNumbers(fullName) {
    const clean = removeAccents(fullName).toUpperCase().replace(/[^A-Z ]/g, '');
    const letters = [];
    let vowelSum = 0;
    let consonantSum = 0;
    let totalSum = 0;
    const letterCounts = {};
    const vowelParts = [];
    const consonantParts = [];
    const allParts = [];

    for (const ch of clean) {
        if (ch === ' ') {
            letters.push({ char: ' ', value: 0, isVowel: false, isSpace: true });
            continue;
        }

        const val = PYTHA[ch];
        if (!val) continue;

        const isV = VOWELS.has(ch);
        letters.push({ char: ch, value: val, isVowel: isV, isSpace: false });

        totalSum += val;
        allParts.push(String(val));
        letterCounts[val] = (letterCounts[val] || 0) + 1;

        if (isV) {
            vowelSum += val;
            vowelParts.push(String(val));
        } else {
            consonantSum += val;
            consonantParts.push(String(val));
        }
    }

    const soulR = reduceTrace(vowelSum, false);
    const destR = reduceTrace(totalSum, true);
    const persR = reduceTrace(consonantSum, false);

    return {
        soul: soulR.value,
        destiny: destR.value,
        personality: persR.value,
        letterCounts,
        letters,
        detail: {
            vowelParts, vowelSum, soulSteps: soulR.steps,
            consonantParts, consonantSum, personalitySteps: persR.steps,
            allParts, totalSum, destinySteps: destR.steps,
        },
    };
}

// ── Bridge Numbers ───────────────────────────────────────────────

function calcBridgeNumbers(soul, personality, lifePath, birthday) {
    const sR = soul;
    const pR = personality;
    const lR = isMaster(lifePath) ? reduceSingleDigit(lifePath) : lifePath;
    const bR = birthday;

    return {
        soulPersonality: Math.abs(sR - pR),
        lifePathBirthday: Math.abs(lR - bR),
        detail: { soul, personality, lifePath, birthday, sR, pR, lR, bR },
    };
}

// ── Pinnacles ────────────────────────────────────────────────────

function calcPinnacles(day, month, year, lifePath) {
    const d = reduceSingleDigit(day);
    const m = reduceSingleDigit(month);
    const y = reduceSingleDigit(year);
    const lp = isMaster(lifePath) ? reduceSingleDigit(lifePath) : lifePath;
    const fe = Math.max(27, 36 - lp);

    const p1 = reduceSingleDigit(m + d);
    const p2 = reduceSingleDigit(d + y);
    const p3 = reduceSingleDigit(p1 + p2);
    const p4 = reduceSingleDigit(m + y);

    return {
        pinnacles: [
            { num: p1, from: 0, to: fe },
            { num: p2, from: fe + 1, to: fe + 9 },
            { num: p3, from: fe + 10, to: fe + 18 },
            { num: p4, from: fe + 19, to: null },
        ],
        detail: {
            d, m, y, lp, firstEnd: fe,
            formulas: [
                `ĐC1 = Tháng(${m}) + Ngày(${d}) = ${m + d} → ${p1}`,
                `ĐC2 = Ngày(${d}) + Năm(${y}) = ${d + y} → ${p2}`,
                `ĐC3 = ĐC1(${p1}) + ĐC2(${p2}) = ${p1 + p2} → ${p3}`,
                `ĐC4 = Tháng(${m}) + Năm(${y}) = ${m + y} → ${p4}`,
            ],
        },
    };
}

// ── Challenges ───────────────────────────────────────────────────

function calcChallenges(day, month, year) {
    const d = reduceSingleDigit(day);
    const m = reduceSingleDigit(month);
    const y = reduceSingleDigit(year);
    const c1 = Math.abs(m - d);
    const c2 = Math.abs(d - y);
    const c3 = Math.abs(c1 - c2);
    const c4 = Math.abs(m - y);

    return {
        challenges: [
            { num: reduceSingleDigit(c1) },
            { num: reduceSingleDigit(c2) },
            { num: reduceSingleDigit(c3) },
            { num: reduceSingleDigit(c4) },
        ],
        detail: {
            d, m, y,
            formulas: [
                `TT1 = |Tháng(${m}) - Ngày(${d})| = ${c1} → ${reduceSingleDigit(c1)}`,
                `TT2 = |Ngày(${d}) - Năm(${y})| = ${c2} → ${reduceSingleDigit(c2)}`,
                `TT3 = |TT1(${c1}) - TT2(${c2})| = ${c3} → ${reduceSingleDigit(c3)}`,
                `TT4 = |Tháng(${m}) - Năm(${y})| = ${c4} → ${reduceSingleDigit(c4)}`,
            ],
        },
    };
}

// ── Life Periods ─────────────────────────────────────────────────

function calcLifePeriods(day, month, year, lifePath) {
    const d = reduceSingleDigit(day);
    const m = reduceSingleDigit(month);
    const y = reduceSingleDigit(year);
    const lp = isMaster(lifePath) ? reduceSingleDigit(lifePath) : lifePath;
    const fe = Math.max(27, 36 - lp);

    return {
        periods: [
            { num: m, label: 'Giai đoạn 1 · Hình thành', from: 0, to: fe },
            { num: d, label: 'Giai đoạn 2 · Hiện thực', from: fe + 1, to: fe + 27 },
            { num: y, label: 'Giai đoạn 3 · Hội nhập', from: fe + 28, to: null },
        ],
        detail: {
            firstEnd: fe,
            lp,
            note: `Tuổi chuyển giai đoạn = 36 − Số Đường Đời (${lp}) = ${fe}`,
            formulas: [
                `GĐ1 = Rút gọn tháng sinh (${month}) → ${m}  |  0 – ${fe} tuổi`,
                `GĐ2 = Rút gọn ngày sinh (${day}) → ${d}  |  ${fe + 1} – ${fe + 27} tuổi`,
                `GĐ3 = Rút gọn năm sinh (${year}) → ${y}  |  ${fe + 28}+ tuổi`,
            ],
        },
    };
}

// ── Personal Year / Month ────────────────────────────────────────

function calcPersonalYear(day, month, currentYear) {
    const dSum = sumDigits(day);
    const mSum = sumDigits(month);
    const ySum = sumDigits(currentYear);
    const total = dSum + mSum + ySum;
    const result = reduceTrace(total, false);

    return {
        value: result.value,
        detail: {
            digitBreak: `(${String(day).split('').join('+')}) + (${String(month).split('').join('+')}) + (${String(currentYear).split('').join('+')}) = ${dSum} + ${mSum} + ${ySum} = ${total}`,
            steps: result.steps,
        },
    };
}

function calcPersonalMonth(personalYear, currentMonth) {
    const sum = personalYear + currentMonth;
    const result = reduceTrace(sum, false);

    return {
        value: result.value,
        detail: {
            formula: `Số Năm(${personalYear}) + Tháng(${currentMonth}) = ${sum}`,
            steps: result.steps,
        },
    };
}

// ── Karmic Lessons ───────────────────────────────────────────────

function calcKarmicLessons(letterCounts) {
    const missing = [];
    for (let i = 1; i <= 9; i++) {
        if (!letterCounts[i]) missing.push(i);
    }
    return missing;
}

// ── Pythagoras Chart ─────────────────────────────────────────────

function calcPythagorasChart(day, month, year) {
    const dateStr = String(day) + String(month) + String(year);
    const counts = {};

    for (let i = 1; i <= 9; i++) counts[i] = 0;

    for (const c of dateStr) {
        const d = parseInt(c, 10);
        if (d >= 1 && d <= 9) counts[d]++;
    }

    return { counts, dateStr };
}

function getPythaArrows(counts) {
    const lines = [
        [3, 6, 9, 'Mũi tên 3-6-9', 'Trí tuệ, trí nhớ tốt, khả năng học hỏi'],
        [2, 5, 8, 'Mũi tên 2-5-8', 'Cân bằng cảm xúc, thực tế'],
        [1, 4, 7, 'Mũi tên 1-4-7', 'Hành động, thực tiễn, quyết đoán'],
        [3, 2, 1, 'Mũi tên 1-2-3', 'Lập kế hoạch và tổ chức tốt'],
        [6, 5, 4, 'Mũi tên 4-5-6', 'Ý chí, quyết tâm và sự bền bỉ'],
        [9, 8, 7, 'Mũi tên 7-8-9', 'Hành động, năng lực và hoàn thành'],
        [1, 5, 9, 'Mũi tên 1-5-9', 'Quyết tâm, ý chí mạnh mẽ'],
        [3, 5, 7, 'Mũi tên 3-5-7', 'Tâm linh, trực giác, tin tưởng nội tâm'],
    ];
    const arrows = [];

    for (const [a, b, c, label, desc] of lines) {
        if (counts[a] > 0 && counts[b] > 0 && counts[c] > 0) {
            arrows.push({ label, desc, type: 'full' });
        }
    }

    for (const [a, b, c, label, desc] of lines) {
        if (!counts[a] && !counts[b] && !counts[c]) {
            arrows.push({
                label: `Thiếu ${label}`,
                desc: `Cần phát triển: ${desc.toLowerCase()}`,
                type: 'empty',
            });
        }
    }

    return arrows;
}

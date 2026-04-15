// ================================================================
// RENDER HELPERS  (js/render.js)
// DOM-building utilities — receive data, return HTML strings.
// ================================================================

function renderNumCard(label, value, desc, icon = '', delay = 0) {
    const masterClass = isMaster(value) ? ' master' : '';
    return `<div class="num-card" style="animation-delay:${delay}ms">
        <div class="card-icon">${icon}</div>
        <div class="label">${label}</div>
        <div class="value${masterClass}">${value}</div>
        <div class="desc">${desc}</div>
    </div>`;
}

function renderCalcDetail(title, stepsHtml) {
    return `<details class="calc-detail">
        <summary>Xem cách tính: ${title}</summary>
        <div class="calc-steps">${stepsHtml}</div>
    </details>`;
}

function renderStep(label, content) {
    return `<div class="calc-step">
        <div class="step-label">${label}</div>
        <div class="step-content">${content}</div>
    </div>`;
}

function renderFormula(text) {
    return `<div class="formula-box">${text}</div>`;
}

function renderNameBreakdownTable(letters) {
    if (!letters.length) return '';
    let h = '', v = '', c = '', n = '';
    for (const l of letters) {
        if (l.isSpace) {
            h += `<td class="space-cell" style="width:16px"></td>`;
            v += `<td class="space-cell"></td>`;
            c += `<td class="space-cell"></td>`;
            n += `<td class="space-cell"></td>`;
        } else {
            const color = l.isVowel ? 'var(--accent-light)' : 'var(--primary-light)';
            h += `<td class="letter-cell" style="color:${color}">${l.char}</td>`;
            v += `<td>${l.isVowel ? l.value : ''}</td>`;
            c += `<td>${!l.isVowel ? l.value : ''}</td>`;
            n += `<td style="font-weight:700">${l.value}</td>`;
        }
    }
    return `<table class="name-table">
        <tr><th style="text-align:left;min-width:90px">Chữ cái</th>${h}</tr>
        <tr class="vowel-row"><th style="text-align:left">Nguyên âm</th>${v}</tr>
        <tr class="consonant-row"><th style="text-align:left">Phụ âm</th>${c}</tr>
        <tr class="total-row"><th style="text-align:left">Giá trị</th>${n}</tr>
    </table>`;
}

function renderMeaningCard(n, delay = 0) {
    const m = MEANINGS[n] || MEANINGS[reduceSingleDigit(n)];
    if (!m) return '';
    const masterClass = isMaster(n) ? ' master-card' : '';
    const kws = m.keywords.map(k => `<span class="kw-tag">${k}</span>`).join('');
    return `<div class="meaning-card${masterClass}" style="animation-delay:${delay}ms">
        <div class="m-title">${m.icon} ${m.title}</div>
        <div class="m-body">${m.desc}</div>
        <div class="m-keywords">${kws}</div>
        <div class="m-shadow">
            <div class="m-shadow-title">⚠ Mặt tối cần chú ý</div>
            <div class="m-shadow-body">${m.shadow}</div>
        </div>
    </div>`;
}

function renderTimelineCard(label, num, ages, extraClass = '', delay = 0) {
    const masterClass = isMaster(num) ? ' master' : '';
    return `<div class="timeline-card ${extraClass}" style="animation-delay:${delay}ms">
        <div class="tc-label">${label}</div>
        <div class="tc-num${masterClass}">${num}</div>
        <div class="tc-ages">${ages}</div>
    </div>`;
}

// ================================================================
// MAIN APP  (js/main.js)
// Wires up form → engine → render.  No raw calculations here.
// ================================================================

function revealAll() {} // Content is visible immediately; no scroll-time layout reads.

// ── Reference table toggle ───────────────────────────────────────
function toggleRef() {
    document.getElementById('refToggle').classList.toggle('open');
    document.getElementById('refBody').classList.toggle('open');
    document.getElementById('refToggle').setAttribute('aria-expanded', String(document.getElementById('refBody').classList.contains('open')));
}

let numberRequest = 0;

let suggestionRequest = 0;
let astroRequest = 0;

function startCalculation(formId, label) {
    const form = document.getElementById(formId);
    let status = form.querySelector('.calculation-status');
    if (!status) {
        status = document.createElement('div');
        status.className = 'calculation-status';
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        status.innerHTML = '<span class="calculation-orbit" aria-hidden="true"><i>✦</i><b>7</b><b>3</b><b>9</b></span><span class="calculation-copy"></span><span class="calculation-sparkles" aria-hidden="true">✧ ✦</span>';
        form.append(status);
    }
    status.querySelector('.calculation-copy').textContent = label;
    status.hidden = false;
    form.classList.add('is-calculating');
    form.setAttribute('aria-busy', 'true');
    // One short entrance beat, concurrent with actual work/loading; no fake progress.
    // Skip even this beat when the user asks for reduced motion.
    const ready = matchMedia('(prefers-reduced-motion: reduce)').matches || !status.animate
        ? Promise.resolve()
        : status.animate([{opacity:.4,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],
            {duration:360,easing:'ease-out'}).finished.catch(() => {});
    return {ready};
}

function finishCalculation(formId) {
    const form = document.getElementById(formId);
    form.classList.remove('is-calculating');
    form.setAttribute('aria-busy', 'false');
    const status = form.querySelector('.calculation-status');
    if (status) status.hidden = true;
}

function animateResults(id) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const result = document.getElementById(id);
    const cards = result.querySelectorAll('.num-card,.timeline-card,.suggest-card,.astro-highlight,.chart-card,.aspect-item');
    cards.forEach((card, i) => {
        if (card.animate) card.animate([{opacity:0,transform:'translateY(15px) scale(.97)'},{opacity:1,transform:'translateY(0) scale(1)'}],
            {duration:430,delay:Math.min(i,5)*45,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'});
    });
}

// ── Form submit ──────────────────────────────────────────────────
async function calculate() {
    const request = ++numberRequest;
    const button = document.getElementById('calcBtn');
    button.disabled = true;
    const read = id => Number(document.getElementById(id).value);
    const name = document.getElementById('fullName').value.trim();
    const day = read('birthDay'), month = read('birthMonth'), year = read('birthYear');
    const currentYear = read('currentYear');
    const rawMonth = document.getElementById('currentMonth').value;
    const currentMonth = rawMonth === '' ? new Date().getMonth() + 1 : read('currentMonth');
    const error = document.getElementById('numberError');
    error.textContent = '';
    try {
        normalizeName(name);
        validateBirthDate(day, month, year);
        if (!Number.isInteger(currentYear) || currentYear < 1900 || currentYear > 2100 ||
            !Number.isInteger(currentMonth) || currentMonth < 1 || currentMonth > 12) {
            throw new Error('Năm tính cần trong 1900–2100; tháng tính cần từ 1 đến 12.');
        }
        const feedback = startCalculation('numberForm', 'Đang kết nối những con số của bạn…');
        await Promise.all([...['js/meanings.js', 'js/render.js', 'js/numbers.js'].map(loadLocalScript), feedback.ready]);
        if (request !== numberRequest) return;
        _doCalculate(name, day, month, year, currentYear, currentMonth);
        document.getElementById('resultIdentity').textContent = `${name} · ${day}/${month}/${year}`;
        animateResults('results');
    } catch (e) {
        document.getElementById('results').style.display = 'none';
        error.textContent = e.message;
    } finally { finishCalculation('numberForm'); button.disabled = false; }
}

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').value = new Date().getFullYear();
    revealAll();
});

// ══════════════════════════════════════════════════════════════════
// NAME SUGGESTER UI WIRING
// ══════════════════════════════════════════════════════════════════

let _selectedGender = 'male';
let _selectedTargets = [];

function setGender(g) {
    suggestionRequest++;
    _selectedGender = g;
    document.getElementById('genderMale').classList.toggle('active', g === 'male');
    document.getElementById('genderFemale').classList.toggle('active', g === 'female');
    document.getElementById('genderMale').setAttribute('aria-pressed', String(g === 'male'));
    document.getElementById('genderFemale').setAttribute('aria-pressed', String(g === 'female'));
    document.getElementById('suggestResults').style.display = 'none';
}

function toggleChip(btn) {
    suggestionRequest++;
    document.getElementById('suggestResults').style.display = 'none';
    const num = parseInt(btn.dataset.num);

    if (num === 0) {
        // "Auto" chip — deselect all others
        _selectedTargets = [];
        document.querySelectorAll('.target-chips .chip').forEach(c => { c.classList.remove('active'); c.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        return;
    }

    // Deselect "Auto"
    const autoChip = document.querySelector('.chip[data-num="0"]');
    if (autoChip) autoChip.classList.remove('active');

    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
        if (!_selectedTargets.includes(num)) _selectedTargets.push(num);
    } else {
        _selectedTargets = _selectedTargets.filter(n => n !== num);
    }

    // If nothing selected, re-activate auto
    if (_selectedTargets.length === 0 && autoChip) {
        autoChip.classList.add('active');
    }
    document.querySelectorAll('.target-chips .chip').forEach(c => c.setAttribute('aria-pressed', String(c.classList.contains('active'))));
}

async function suggestNames() {
    const request = ++suggestionRequest;
    const error = document.getElementById('suggestError');
    error.textContent = '';
    const button = document.getElementById('suggestBtn');
    button.disabled = true;
    try {
        const lastName = document.getElementById('suggestLastName').value.trim();
        const day = Number(document.getElementById('suggestDay').value);
        const month = Number(document.getElementById('suggestMonth').value);
        const year = Number(document.getElementById('suggestYear').value);
        normalizeName(lastName);
        validateBirthDate(day, month, year);
        const feedback = startCalculation('suggestForm', 'Đang dệt những gợi ý tên…');
        await Promise.all([loadLocalScript('js/suggest.js'), feedback.ready]);
        if (request !== suggestionRequest) return;
        const targets = _selectedTargets.length ? _selectedTargets : null;
        const yIsVowel = document.getElementById('suggestYConvention').value === 'vowel';
        const results = generateNameSuggestions(lastName, day, month, year, _selectedGender, targets, yIsVowel);
        const lifePath = calcLifePath(day, month, year).value;
        const total = new Set(VN_NAMES.middle[_selectedGender]).size * new Set(VN_NAMES.first[_selectedGender]).size;
        document.getElementById('suggestSummary').innerHTML = renderSuggestSummary(lifePath, total, _selectedGender, targets);
        document.getElementById('suggestGrid').innerHTML = results.map((item, i) => renderSuggestCard(item, i, lifePath)).join('');
        document.getElementById('suggestResults').style.display = 'block';
        animateResults('suggestResults');
    } catch (e) {
        document.getElementById('suggestResults').style.display = 'none';
        error.textContent = e.message;
    } finally { finishCalculation('suggestForm'); button.disabled = false; }
}

const scriptLoads = new Map();
function loadLocalScript(src) {
    if (!scriptLoads.has(src)) {
        scriptLoads.set(src, new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = () => { script.remove(); scriptLoads.delete(src); reject(new Error('Không tải được dữ liệu. Vui lòng thử lại.')); };
            document.head.append(script);
        }));
    }
    return scriptLoads.get(src);
}

function selectView(view) {
    numberRequest++; suggestionRequest++; astroRequest++;
    document.querySelectorAll('[data-panel]').forEach(panel => { panel.hidden = panel.dataset.panel !== view; });
    document.querySelectorAll('[data-view]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.view === view));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => selectView(button.dataset.view)));
    document.getElementById('numberForm').addEventListener('submit', e => { e.preventDefault(); calculate(); });
    document.getElementById('suggestForm').addEventListener('submit', e => { e.preventDefault(); suggestNames(); });
    document.getElementById('astroForm').addEventListener('submit', async e => {
        e.preventDefault();
        const request = ++astroRequest;
        const button = document.getElementById('astroBtn');
        const error = document.getElementById('astroError');
        error.textContent = ''; button.disabled = true; button.textContent = 'Đang tính vị trí thiên thể…';
        try {
            const feedback = startCalculation('astroForm', 'Đang nối các vì sao trên bầu trời của bạn…');
            await Promise.all([loadLocalScript('js/vendor/astronomy.browser.min.js'), feedback.ready]);
            await loadLocalScript('js/astro.js');
            if (request !== astroRequest) return;
            showBirthChart();
            animateResults('astroResults');
        } catch (err) {
            document.getElementById('astroResults').hidden = true;
            error.textContent = err.message;
        } finally { finishCalculation('astroForm'); button.disabled = false; button.textContent = 'Vẽ bản đồ sao ↗'; }
    });
    document.getElementById('unknownTime').addEventListener('change', e => {
        document.getElementById('astroTime').disabled = e.target.checked;
        document.getElementById('astroResults').hidden = true;
    });
    document.getElementById('birthPlace').addEventListener('change', e => {
        astroRequest++;
        const option = e.target.selectedOptions[0];
        if (option.dataset.lat) {
            document.getElementById('latitude').value = option.dataset.lat;
            document.getElementById('longitude').value = option.dataset.lon;
            document.getElementById('timezone').value = option.dataset.zone;
        }
        document.getElementById('astroResults').hidden = true;
    });
    for (const formId of ['numberForm', 'suggestForm', 'astroForm']) {
        document.getElementById(formId).addEventListener('input', () => {
            if (formId === 'numberForm') { numberRequest++; document.getElementById('results').style.display = 'none'; }
            if (formId === 'suggestForm') { suggestionRequest++; document.getElementById('suggestResults').style.display = 'none'; }
            if (formId === 'astroForm') { astroRequest++; document.getElementById('astroResults').hidden = true; }
        });
    }
});

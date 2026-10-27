// Tropical, geocentric ecliptic-of-date positions. Astronomy Engine 2.1.19 (MIT).
// No network calls or user-data storage. Houses: Whole Sign, never Placidus.
const ZODIAC = ['Bạch Dương','Kim Ngưu','Song Tử','Cự Giải','Sư Tử','Xử Nữ','Thiên Bình','Bọ Cạp','Nhân Mã','Ma Kết','Bảo Bình','Song Ngư'];
const ZODIAC_SYMBOLS = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
const CELESTIAL = [
    ['Sun','Mặt Trời','☉'],['Moon','Mặt Trăng','☽'],['Mercury','Sao Thủy','☿'],
    ['Venus','Sao Kim','♀'],['Mars','Sao Hỏa','♂'],['Jupiter','Sao Mộc','♃'],
    ['Saturn','Sao Thổ','♄'],['Uranus','Thiên Vương','♅'],['Neptune','Hải Vương','♆'],['Pluto','Diêm Vương','♇'],
];
const SIGN_NOTES = [
    'Gợi ý chiêm nghiệm: cách bạn bắt đầu và chủ động.', 'Gợi ý chiêm nghiệm: điều đem lại cảm giác vững vàng.',
    'Gợi ý chiêm nghiệm: cách bạn học hỏi và kết nối.', 'Gợi ý chiêm nghiệm: cảm giác thuộc về và sự chăm sóc.',
    'Gợi ý chiêm nghiệm: cách bạn thể hiện và sáng tạo.', 'Gợi ý chiêm nghiệm: thói quen và sự tỉ mỉ.',
    'Gợi ý chiêm nghiệm: cân bằng và các mối quan hệ.', 'Gợi ý chiêm nghiệm: chiều sâu và sự chuyển mình.',
    'Gợi ý chiêm nghiệm: tò mò và những chân trời mới.', 'Gợi ý chiêm nghiệm: mục tiêu và sự bền bỉ.',
    'Gợi ý chiêm nghiệm: ý tưởng và cộng đồng.', 'Gợi ý chiêm nghiệm: trí tưởng tượng và sự đồng cảm.',
];
function wrapDegrees(n) { return ((n % 360) + 360) % 360; }
function angularDistance(a, b) { return Math.abs(((a - b + 540) % 360) - 180); }
function zodiacPosition(longitude) {
    const lon = wrapDegrees(longitude);
    // Truncate arcminutes so rounding never prints 30 degrees in the previous sign.
    const index = Math.floor(lon / 30), minutes = Math.floor((lon % 30) * 60 + 1e-8);
    return { index, name: ZODIAC[index], symbol: ZODIAC_SYMBOLS[index], degree: `${Math.floor(minutes / 60)}°${String(minutes % 60).padStart(2,'0')}′` };
}

function localBirthToUTC(dateText, timeText, timezone) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateText) || !/^\d{2}:\d{2}$/.test(timeText)) {
        throw new Error('Nhập ngày sinh và giờ sinh hợp lệ, hoặc chọn chưa biết giờ sinh.');
    }
    const [year, month, day] = dateText.split('-').map(Number);
    const [hour, minute] = timeText.split(':').map(Number);
    validateBirthDate(day, month, year);
    if (hour > 23 || minute > 59) throw new Error('Giờ sinh không hợp lệ.');
    const wall = Date.UTC(year, month - 1, day, hour, minute);
    const fixed = /^UTC([+-])(\d{2}):(\d{2})$/i.exec(timezone);
    if (fixed) {
        const hours = Number(fixed[2]), minutes = Number(fixed[3]);
        if (hours > 14 || minutes > 59 || (hours === 14 && minutes !== 0)) throw new Error('UTC offset cần trong −14:00 đến +14:00.');
        return new Date(wall - (fixed[1] === '+' ? 1 : -1) * (hours * 60 + minutes) * 60000);
    }
    let formatter;
    try {
        formatter = new Intl.DateTimeFormat('en-GB', { timeZone: timezone, year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23' });
    } catch { throw new Error('Múi giờ không hợp lệ. Dùng Asia/Ho_Chi_Minh, America/New_York hoặc UTC+07:00.'); }
    const wallAt = milliseconds => {
        const p = Object.fromEntries(formatter.formatToParts(new Date(milliseconds)).filter(p => p.type !== 'literal').map(p => [p.type, Number(p.value)]));
        return Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
    };
    // Sample both sides of any nearby daylight-saving transition, then validate all candidates.
    const offsets = new Set();
    for (let h = -36; h <= 36; h += 6) {
        const sample = wall + h * 3600000;
        offsets.add(wallAt(sample) - sample);
    }
    const candidates = [...offsets].map(offset => wall - offset).filter(utc => wallAt(utc) === wall);
    if (candidates.length === 0) throw new Error('Giờ địa phương này không tồn tại do chuyển giờ mùa hè. Kiểm tra lại giờ sinh.');
    if (candidates.length > 1) throw new Error('Giờ sinh bị lặp khi đổi giờ mùa hè. Nhập UTC offset đúng lúc sinh (ví dụ UTC-04:00 hoặc UTC-05:00).');
    return new Date(candidates[0]);
}

function chartAngles(date, latitude, longitude) {
    const time = Astronomy.MakeTime(date), rad = Math.PI / 180;
    const theta = wrapDegrees(Astronomy.SiderealTime(time) * 15 + longitude) * rad;
    const phi = latitude * rad;
    const rotation = Astronomy.Rotation_EQD_ECT(time);
    const rotate = (x,y,z) => Astronomy.RotateVector(rotation, new Astronomy.Vector(x,y,z,time));
    const up = rotate(Math.cos(phi)*Math.cos(theta), Math.cos(phi)*Math.sin(theta), Math.sin(phi));
    const east = rotate(-Math.sin(theta), Math.cos(theta), 0);
    const meridian = rotate(Math.cos(theta), Math.sin(theta), 0);
    function intersection(normal, positive) {
        let x = -normal.y, y = normal.x;
        if (Math.hypot(x,y) < 1e-10) throw new Error('Không xác định được góc tại tọa độ và giờ này.');
        if (x*positive.x + y*positive.y < 0) { x = -x; y = -y; }
        return wrapDegrees(Math.atan2(y,x)/rad);
    }
    return { ascendant: intersection(up,east), midheaven: intersection(east,meridian) };
}

function computeBirthChart({date, latitude, longitude, unknownTime = false}) {
    if (!(date instanceof Date) || !Number.isFinite(date.getTime()) || !Number.isFinite(latitude) ||
        !Number.isFinite(longitude) || Math.abs(latitude) >= 90 || Math.abs(longitude) > 180) {
        throw new Error('Ngày giờ hoặc tọa độ không hợp lệ (vĩ độ −90 đến 90, kinh độ −180 đến 180).');
    }
    const angles = unknownTime ? null : chartAngles(date,latitude,longitude);
    const houseStart = angles ? Math.floor(angles.ascendant / 30) * 30 : null;
    const planets = CELESTIAL.map(([body, name, symbol]) => {
        // GeoVector is EQJ. Ecliptic converts to the true ecliptic/equinox of date.
        const lon = Astronomy.Ecliptic(Astronomy.GeoVector(body,date,true)).elon;
        return {body,longitude:lon,...zodiacPosition(lon),name,symbol,house:angles ? Math.floor(wrapDegrees(lon-houseStart)/30)+1 : null};
    });
    const aspectTypes = [[0,'Đồng vị'],[60,'Lục hợp'],[90,'Vuông góc'],[120,'Tam hợp'],[180,'Đối đỉnh']];
    const aspects = [];
    for (let i=0; i<planets.length; i++) for (let j=i+1; j<planets.length; j++) {
        const separation = angularDistance(planets[i].longitude,planets[j].longitude);
        for (const [angle,name] of aspectTypes) {
            const orb = Math.abs(separation-angle);
            if (orb <= 6) aspects.push({a:i,b:j,angle,name,orb});
        }
    }
    aspects.sort((a,b) => a.orb-b.orb);
    return {date,latitude,longitude,unknownTime,angles,houseStart,planets,aspects};
}

function renderChartWheel(chart) {
    const center = 260, base = chart.angles ? chart.angles.ascendant : 0;
    const point = (lon,r) => {
        const angle = (180-(lon-base))*Math.PI/180;
        return [center+r*Math.cos(angle), center-r*Math.sin(angle)];
    };
    const line = (lon,r1,r2,color='#d2d8c7',width=1) => {
        const a=point(lon,r1),b=point(lon,r2);
        return `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${color}" stroke-width="${width}"/>`;
    };
    let svg = '<svg viewBox="0 0 520 520" role="img" aria-label="Bản đồ sao: vị trí thiên thể trong 12 cung hoàng đạo. Xem bảng bên cạnh để đọc chính xác.">';
    for (const r of [238,204,166,115]) svg+=`<circle cx="260" cy="260" r="${r}" fill="none" stroke="#cbd2be" stroke-width="1"/>`;
    for (let d=0;d<360;d+=5) svg+=line(d,204,d%30===0?238: d%10===0?213:209);
    for (let i=0;i<12;i++) {
        const p=point(i*30+15,222);
        svg+=`<text x="${p[0]}" y="${p[1]+6}" text-anchor="middle" fill="#48654f" font-size="21">${ZODIAC_SYMBOLS[i]}\uFE0E</text>`;
        if(chart.angles) {
            svg+=line(chart.houseStart+i*30,115,204,'#c0cbb3');
            const h=point(chart.houseStart+i*30+15,133);
            svg+=`<text x="${h[0]}" y="${h[1]+4}" text-anchor="middle" fill="#7e8b74" font-size="10">${i+1}</text>`;
        }
    }
    for(const aspect of chart.aspects) {
        const a=point(chart.planets[aspect.a].longitude,113),b=point(chart.planets[aspect.b].longitude,113);
        const color=[90,180].includes(aspect.angle)?'#b77a5d':'#769182';
        svg+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${color}" stroke-opacity=".45" stroke-width=".8"/>`;
    }
    // Greedy radial tracks keep nearby planet symbols legible, including across 0 degrees.
    const placed=[];
    chart.planets.forEach(p=>{
        let lane=0;
        while(placed.some(q=>q.lane===lane&&angularDistance(q.longitude,p.longitude)<11)) lane++;
        placed.push({...p,lane});
        const xy=point(p.longitude,188-lane*17);
        svg+=line(p.longitude,199,204,'#395d49',1.6);
        svg+=`<text x="${xy[0]}" y="${xy[1]+6}" text-anchor="middle" fill="#315c4a" font-size="19"><title>${p.name}: ${p.name==='Mặt Trời'?'':p.symbol} ${p.degree} ${ZODIAC[p.index]}</title>${p.symbol}</text>`;
    });
    if(chart.angles) for(const [label,lon] of [['ASC',chart.angles.ascendant],['MC',chart.angles.midheaven]]) {
        svg+=line(lon,116,246,'#a3743f',1.5);
        const p=point(lon,252);
        svg+=`<text x="${p[0]}" y="${p[1]+3}" text-anchor="middle" fill="#8a5b29" font-size="9" font-weight="bold">${label}</text>`;
    }
    svg+='<circle cx="260" cy="260" r="26" fill="#fffdf8"/><text x="260" y="266" text-anchor="middle" fill="#a3743f" font-size="23">✧</text></svg>';
    return svg;
}

function showBirthChart() {
    const value = id=>document.getElementById(id).value.trim();
    const unknownTime = document.getElementById('unknownTime').checked;
    if(value('latitude')===''||value('longitude')==='') throw new Error('Nhập đầy đủ tọa độ nơi sinh.');
    const timezone=value('timezone');
    const date=localBirthToUTC(value('astroDate'),unknownTime?'12:00':value('astroTime'),timezone);
    const chart=computeBirthChart({date,latitude:Number(value('latitude')),longitude:Number(value('longitude')),unknownTime});
    const sun=chart.planets[0],moon=chart.planets[1];
    const asc=chart.angles?zodiacPosition(chart.angles.ascendant):null;
    const highlight=(label,p,note)=>`<div class="astro-highlight"><small>${label}</small><h3>${p?ZODIAC[p.index]:'Chưa xác định'}</h3><p>${p?p.degree+' · '+note:'Cần giờ sinh để tính cung Mọc.'}</p></div>`;
    let html=`<div class="result-heading"><span class="eyebrow">HỒ SƠ BẦU TRỜI</span><h2>${escapeHtml(value('astroDate'))} · ${unknownTime?'Chưa biết giờ':escapeHtml(value('astroTime'))}</h2></div>`;
    html+=`<div class="astro-overview">${highlight('Mặt Trời',sun,'Cốt lõi & biểu đạt')}${highlight('Mặt Trăng'+(unknownTime?' · ước tính':''),moon,'Cảm xúc & nhu cầu')}${highlight('Cung Mọc',asc,'Cách bạn bước vào thế giới')}</div>`;
    if(unknownTime) html+='<p class="chart-warning">Đang dùng 12:00 địa phương làm mốc tham khảo. Các vị trí và góc hợp có thể đổi trong ngày, đặc biệt Mặt Trăng. Không hiển thị ASC, MC hoặc nhà khi thiếu giờ sinh.</p>';
    html+=`<div class="astro-layout"><div class="chart-card">${renderChartWheel(chart)}<p class="chart-caption">Tropical · ${unknownTime?'0° Bạch Dương ở bên trái':'Cung Mọc ở bên trái · Nhà Whole Sign'}</p></div><div><h3 class="astro-subtitle">Vị trí các thiên thể${unknownTime?' (mốc 12:00)':''}</h3><div class="table-scroll"><table class="astro-table"><thead><tr><th scope="col">Thiên thể</th><th scope="col">Cung</th><th scope="col">Vị trí</th>${chart.angles?'<th scope="col">Nhà</th>':''}</tr></thead><tbody>`;
    for(const p of chart.planets) html+=`<tr><td>${p.symbol} ${p.name}</td><td>${ZODIAC[p.index]}</td><td>${p.degree}</td>${chart.angles?`<td>${p.house}</td>`:''}</tr>`;
    if(chart.angles) for(const [label,lon] of [['ASC · Cung Mọc',chart.angles.ascendant],['MC · Thiên Đỉnh',chart.angles.midheaven]]) {
        const p=zodiacPosition(lon);
        html+=`<tr><td>${label}</td><td>${p.name}</td><td>${p.degree}</td><td>—</td></tr>`;
    }
    html+='</tbody></table></div></div></div>';
    html+='<div class="section-header"><h2>Các góc hợp chính</h2><div class="section-divider"></div></div><div class="aspect-list">';
    html+=chart.aspects.map(a=>`<div class="aspect-item">${chart.planets[a.a].name} · ${chart.planets[a.b].name}<small>${a.name} ${a.angle}° · lệch ${a.orb.toFixed(2)}°</small></div>`).join('')||'<p>Không có góc hợp trong ngưỡng 6°.</p>';
    html+='</div>';
    html+=`<div class="section-header"><h2>Gợi ý để tự chiêm nghiệm</h2></div><p class="astro-method">${SIGN_NOTES[sun.index]} Đây là mô tả biểu tượng truyền thống của cung Mặt Trời, không phải đánh giá tính cách đã được kiểm chứng.</p>`;
    html+=`<div class="astro-disclosure">Thời điểm quy đổi UTC: <strong>${date.toISOString()}</strong> · Múi giờ nhập: ${escapeHtml(timezone)} · Tọa độ: ${chart.latitude}, ${chart.longitude}.<br>Vị trí địa tâm theo hoàng đạo nhiệt đới, kinh độ hoàng đạo của ngày; Astronomy Engine 2.1.19. Hệ nhà Whole Sign, mỗi cung trọn một nhà; MC có thể nằm ngoài nhà 10. Chưa gồm Chiron, La Hầu/Kế Đô hay nghịch hành.<br><a href="https://github.com/cosinekitty/astronomy" target="_blank" rel="noopener">Thuật toán &amp; giấy phép MIT</a>. Giờ lịch sử theo dữ liệu múi giờ của trình duyệt; kiểm tra UTC offset nếu giấy khai sinh hoặc địa phương dùng quy ước khác.</div>`;
    const results=document.getElementById('astroResults');
    results.innerHTML=html; results.hidden=false;
    results.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
}

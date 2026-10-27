const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({Date,Intl,console,Astronomy:require('../js/vendor/astronomy.browser.min.js')});
for(const file of ['engine','suggest','astro'])vm.runInContext(fs.readFileSync(path.join(root,'js',file+'.js'),'utf8'),context);
const run=code=>vm.runInContext(code,context);
const json=code=>JSON.parse(run(`JSON.stringify(${code})`));

test('Gregorian date validation includes leap centuries and rejects fractions/ranges',()=>{
    for(const [d,m,y,valid] of [[29,2,2000,true],[29,2,1900,false],[29,2,2024,true],[29,2,2023,false],[31,4,2000,false],[31,12,2100,true],[0,1,2000,false],[1,13,2000,false],[1.5,1,2000,false],[1,1,2101,false]])
        assert.equal(run(`isValidDate(${d},${m},${y})`),valid);
    assert.throws(()=>run('calcLifePath(31,2,2000)'));
});
test('reduction traces and values agree, including master numbers',()=>{
    for(let n=1;n<=9999;n++)for(const keep of [false,true]){
        const result=run(`reduceComponentTrace(${n},${keep}).value`);
        assert.equal(result,run(`${keep?'reduceMaster':'reduceSingleDigit'}(${n})`),`${n}/${keep}`);
    }
});
test('Life Path preserves component masters and final 11/22/33',()=>{
    assert.equal(run('calcLifePath(22,11,2000).value'),8); // 22 + 11 + 2 = 35 -> 8 (not flat digit sum 17 -> 8; trace differs)
    assert.equal(run('calcLifePath(29,11,1990).value'),5); // 11 + 11 + 1 = 23
    assert.equal(run('calcLifePath(11,2,2000).value'),6); // 11 + 2 + 2 = 15
    assert.equal(run('calcLifePath(1,1,2007).value'),11);
    assert.equal(run('calcLifePath(22,1,2007).value'),5); // 22+1+9=32
    assert.equal(run('calcLifePath(11,11,2009).value'),33);
    assert.equal(run('calcLifePath(9,1,2001).value'),4);
});
test('Vietnamese normalization, Đ and explicit Y classification',()=>{
    assert.equal(run('normalizeName("Đặng Thị Mỹ")'),'DANG THI MY');
    assert.deepEqual(json('getNameNumbers("Đặng Thị Mỹ").detail'),json('getNameNumbers("Dang Thi My").detail'));
    const vi=json('getNameNumbers("My",true)'),en=json('getNameNumbers("My",false)');
    assert.equal(vi.soul,7);assert.equal(vi.personality,4);assert.equal(vi.destiny,11);
    assert.equal(en.soul,null);assert.equal(en.personality,11);
    assert.equal(run('getNameNumbers("AEIOU").personality'),null);
    for(const invalid of ['123','😀','<img src=x onerror=alert(1)>','A'.repeat(101)])assert.throws(()=>run(`getNameNumbers(${JSON.stringify(invalid)})`));
});
test('name sums and digit-frequency invariants',()=>{
    const names=['Nguyễn Văn An','Đỗ Mỹ Linh','Lý Ý','Anne-Marie O\'Neil'];
    for(const name of names){
        const data=json(`getNameNumbers(${JSON.stringify(name)})`);
        assert.equal(data.detail.vowelSum+data.detail.consonantSum,data.detail.totalSum);
        assert.equal(data.letters.filter(l=>!l.isSpace).length,Object.values(data.letterCounts).reduce((a,b)=>a+b,0));
    }
    assert.deepEqual(json('calcPythagorasChart(20,10,2000).counts'),{1:1,2:2,3:0,4:0,5:0,6:0,7:0,8:0,9:0});
    assert.deepEqual(json('calcKarmicLessons({1:2,3:1,5:1})'),[2,4,6,7,8,9]);
});
test('bridges reduce both master operands; undefined values stay undefined',()=>{
    const b=json('calcBridgeNumbers(22,11,33,9)');
    assert.equal(b.soulPersonality,2);assert.equal(b.lifePathBirthday,3);
    assert.equal(run('calcBridgeNumbers(null,4,6,1).soulPersonality'),null);
});
test('pinnacles retain master results and consecutive nonoverlapping ages',()=>{
    const p=json('calcPinnacles(9,2,2000,6)');
    assert.deepEqual(p.pinnacles.map(x=>x.num),[11,11,22,4]);
    assert.deepEqual(p.pinnacles.map(x=>[x.from,x.to]),[[0,30],[31,39],[40,48],[49,null]]);
    assert.deepEqual(json('calcChallenges(9,2,2000).challenges').map(x=>x.num),[7,7,0,0]);
});
test('personal cycles use calendar year and never master numbers',()=>{
    assert.equal(run('calcPersonalYear(15,11,2026).value'),9);
    assert.equal(run('calcPersonalMonth(9,11).value'),2);
    const p=json('calcLifePeriods(11,11,2009,33)');
    assert.deepEqual(p.periods.map(x=>x.num),[11,11,11]);
    assert.equal(p.periods[1].to-p.periods[1].from+1,27);
    assert.equal(run(`calcPersonalYear(11,11,${2009+p.periods[1].from}).value`),1);
    assert.equal(p.periods[0].to+1,p.periods[1].from);
    assert.equal(p.periods[1].to+1,p.periods[2].from);
});
test('suggestions have no duplicates, bounded scores, and match the main engine',()=>{
    for(const gender of ['male','female'])for(const y of [true,false]){
        const items=json(`generateNameSuggestions('Nguyễn',15,11,2000,'${gender}',[11,22,33],${y})`);
        assert.equal(items.length,30);assert.equal(new Set(items.map(x=>x.fullName)).size,30);
        items.forEach((x,i)=>{
            assert.ok(x.score>=0&&x.score<=100);if(i)assert.ok(items[i-1].score>=x.score);
            assert.equal(x.destiny,run(`getNameNumbers(${JSON.stringify(x.fullName)},${y}).destiny`));
        });
    }
    assert.equal(run('escapeHtml("<b>\\\"&")'),'&lt;b&gt;&quot;&amp;');
});
test('local time conversion handles UTC offsets and historical DST gaps/overlaps',()=>{
    assert.equal(run('localBirthToUTC("2000-01-01","07:00","Asia/Ho_Chi_Minh").toISOString()'),'2000-01-01T00:00:00.000Z');
    assert.equal(run('localBirthToUTC("2000-01-01","00:00","UTC+05:30").toISOString()'),'1999-12-31T18:30:00.000Z');
    assert.equal(run('localBirthToUTC("2024-11-03","01:30","UTC-04:00").toISOString()'),'2024-11-03T05:30:00.000Z');
    assert.throws(()=>run('localBirthToUTC("2024-03-10","02:30","America/New_York")'),/không tồn tại/);
    assert.throws(()=>run('localBirthToUTC("2024-11-03","01:30","America/New_York")'),/bị lặp/);
    assert.throws(()=>run('localBirthToUTC("2024-02-31","12:00","UTC+07:00")'));
    assert.throws(()=>run('localBirthToUTC("2024-01-01","24:00","UTC+07:00")'));
    assert.throws(()=>run('localBirthToUTC("2024-01-01","12:00","UTC+14:30")'));
});
test('zodiac boundaries, wraparound and aspects',()=>{
    assert.equal(run('zodiacPosition(359.9999).name'),'Song Ngư');
    assert.equal(run('zodiacPosition(359.9999).degree'),'29°59′');
    assert.equal(run('zodiacPosition(360).name'),'Bạch Dương');
    assert.equal(run('angularDistance(359,1)'),2);
    const chart=json('computeBirthChart({date:new Date("2000-01-01T12:00:00Z"),latitude:10.8231,longitude:106.6297})');
    assert.equal(chart.planets.length,10);
    assert.deepEqual(chart.planets.map(p=>p.name),['Mặt Trời','Mặt Trăng','Sao Thủy','Sao Kim','Sao Hỏa','Sao Mộc','Sao Thổ','Thiên Vương','Hải Vương','Diêm Vương']);
    for(const p of chart.planets){assert.ok(p.longitude>=0&&p.longitude<360);assert.ok(p.house>=1&&p.house<=12)}
    for(const a of chart.aspects){assert.ok(a.orb<=6);assert.ok(a.a<a.b)}
    assert.ok(chart.aspects.some(a=>a.a===0&&a.b===9&&a.angle===0)===false);
    assert.equal(json('computeBirthChart({date:new Date("2000-01-01T12:00:00Z"),latitude:10,longitude:106,unknownTime:true})').angles,null);
});
test('ASC is on the east horizon, MC on the meridian for varied dates and latitudes',()=>{
    for(const date of ['1950-06-01T03:00:00Z','2000-01-01T12:00:00Z','2024-03-20T03:06:00Z'])for(const latitude of [-60,-33.87,0,10.8231,51.5,65]){
        context.input={date,latitude};
        const result=json(`(()=>{
            const d=new Date(input.date),A=Astronomy,angles=chartAngles(d,input.latitude,106.6297);
            const observer=new A.Observer(input.latitude,106.6297,0);
            const horizontal=lon=>{
                const r=lon*Math.PI/180;
                const v=A.RotateVector(A.Rotation_ECT_EQD(d),new A.Vector(Math.cos(r),Math.sin(r),0,A.MakeTime(d)));
                const e=A.EquatorFromVector(v);
                return A.Horizon(d,observer,e.ra,e.dec);
            };
            return {asc:horizontal(angles.ascendant),mc:horizontal(angles.midheaven)};
        })()`);
        assert.ok(Math.abs(result.asc.altitude)<1e-7,`${date}/${latitude}: horizon`);
        assert.ok(result.asc.azimuth>0&&result.asc.azimuth<180,`${date}/${latitude}: eastern horizon`);
        assert.ok(Math.min(Math.abs(result.mc.azimuth),Math.abs(result.mc.azimuth-180),Math.abs(result.mc.azimuth-360))<1e-6,`${date}/${latitude}: meridian`);
    }
});

test('independent Swiss Ephemeris reference: ten bodies, ASC and MC across 1900–2100',()=>{
    const reference=require('./astronomy-reference.json');
    let planetMax=0,angleMax=0;
    for(const fixture of reference.cases){
        context.fixture=fixture;
        const actual=json('computeBirthChart({...fixture,date:new Date(fixture.date)})');
        const distance=(a,b)=>Math.abs(((a-b+540)%360)-180);
        actual.planets.forEach((p,i)=>{
            const delta=distance(p.longitude,fixture.planets[i]);planetMax=Math.max(planetMax,delta);
            assert.ok(delta<0.03,`${fixture.date} ${p.name}: delta ${delta} degrees`);
        });
        for(const key of ['ascendant','midheaven']){
            const delta=distance(actual.angles[key],fixture[key]);angleMax=Math.max(angleMax,delta);
            assert.ok(delta<0.003,`${fixture.date} ${key}: delta ${delta} degrees`);
        }
    }
    console.log(`Swiss reference max delta: planet=${planetMax.toFixed(6)}°, ASC/MC=${angleMax.toFixed(6)}°`);
});

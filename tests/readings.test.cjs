const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({Date,Intl,console,Astronomy:require('../js/vendor/astronomy.browser.min.js')});
for(const file of ['engine','meanings','astro','astro-readings'])vm.runInContext(fs.readFileSync(path.join(root,'js',file+'.js'),'utf8'),context);
const run=code=>vm.runInContext(code,context);
const data=code=>JSON.parse(run(`JSON.stringify(${code})`));
const chartCode='computeBirthChart({date:new Date("2000-01-01T12:00:00Z"),latitude:10.8231,longitude:106.6297})';
const unknownCode='computeBirthChart({date:new Date("2000-01-01T12:00:00Z"),latitude:10.8231,longitude:106.6297,unknownTime:true})';

test('all twelve numerology profiles have distinct text for the five core roles',()=>{
    const roles=['life','expression','soul','personality','birthday'];
    for(const n of [1,2,3,4,5,6,7,8,9,11,22,33]){
        const texts=roles.map(role=>data(`getNumberReading('${role}',${n})`).text);
        assert.equal(new Set(texts).size,5,`Role text collapsed for ${n}`);
        for(const role of [...roles,'pinnacle','period','challenge','bridge','karmic']){
            const result=data(`getNumberReading('${role}',${n})`);
            assert.ok(result.text.length>25);assert.ok(result.practice.length>25);assert.ok(result.question.endsWith('?'));
            assert.equal(Boolean(result.master),[11,22,33].includes(n));
            assert.doesNotMatch(run(`renderNumberReading('${role}',${n})`),/undefined|NaN/);
        }
    }
});
test('missing name groups remain unknown; zero bridge and zero challenge are different',()=>{
    assert.match(data('getNumberReading("soul",null)').title,/Chưa đủ/);
    assert.doesNotMatch(run('renderNumberReading("soul",null)'),/\bnull\b|Master Number/);
    assert.notEqual(data('getNumberReading("bridge",0)').text,data('getNumberReading("challenge",0)').text);
    assert.match(data('getNumberReading("bridge",0)').text,/cùng gốc/);
    assert.throws(()=>run('getNumberReading("life",0)'));
    assert.throws(()=>run('getNumberReading("life",44)'));
    assert.throws(()=>run('getNumberReading("invented",1)'));
});
test('nine personal-cycle readings cover both year and month without inventing master cycles',()=>{
    for(let n=1;n<=9;n++){
        assert.match(run(`renderCycleReading(${n},'Năm 2026')`),/Năm 2026/);
        assert.match(run(`renderCycleReading(${n},'Tháng 10')`),/Tháng 10/);
    }
    assert.throws(()=>run('renderCycleReading(11,"Năm")'));
});
test('all ten bodies and twelve signs have readings; unknown time never inherits a house',()=>{
    for(let index=0;index<12;index++)for(const body of ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto']){
        context.p={body,index,name:body,house:index+1,degree:'0°00′'};
        const r=data('getPlacementReading(p)');
        assert.ok(r.text.length>25);assert.equal(r.houseNumber,index+1);assert.ok(r.houseText.length>30);
        const unknown=data('getPlacementReading(p,true)');
        assert.equal(unknown.house,null);assert.equal(unknown.houseText,null);assert.equal(unknown.houseNumber,null);assert.match(unknown.note,/12:00/);
        assert.equal(r.slow,['Uranus','Neptune','Pluto'].includes(body));
    }
    assert.notEqual(data('getPlacementReading({body:"Sun",name:"Sun",index:9})').text,data('getPlacementReading({body:"Moon",name:"Moon",index:9})').text);
});
test('complete chart renders ten placements and all twelve houses; unknown chart renders no angle/house readings',()=>{
    const known=run(`renderAstroReadings(${chartCode})`),unknown=run(`renderAstroReadings(${unknownCode})`);
    assert.equal((known.match(/data-planet-reading=/g)||[]).length,10);
    assert.equal((known.match(/data-house-reading=/g)||[]).length,12);
    assert.equal((known.match(/data-angle-reading=/g)||[]).length,2);
    assert.equal((unknown.match(/data-planet-reading=/g)||[]).length,10);
    assert.doesNotMatch(unknown,/data-house-reading=|data-angle-reading=|id="astro-houses"/);
    for(const html of [known,unknown]){assert.doesNotMatch(html,/undefined|NaN/);assert.match(html,/Nguồn tham khảo/);assert.match(html,/Cafe Astrology/)}
    assert.equal(run('getAngleReading("ASC",null)'),null);
});
test('element and modality counts are unweighted, complete and do not drop tied groups',()=>{
    const actual=data(`getChartDistribution(${chartCode})`);
    assert.equal(actual.total,10);
    assert.equal(actual.elements.reduce((s,x)=>s+x.count,0),10);assert.equal(actual.modes.reduce((s,x)=>s+x.count,0),10);
    assert.equal(actual.elements.reduce((s,x)=>s+x.percent,0),100);
    const balanced=data('getChartDistribution({planets:Array.from({length:12},(_,index)=>({index}))})');
    assert.deepEqual(balanced.elements.map(x=>x.count),[3,3,3,3]);assert.deepEqual(balanced.modes.map(x=>x.count),[4,4,4]);
    assert.equal(data('getChartDistribution({planets:[]})').total,0);
});
test('all five aspect types use the actual pair and identify noon estimates',()=>{
    for(const angle of [0,60,90,120,180]){
        context.angle=angle;
        const r=data('getAspectReading({planets:[{body:"Sun",name:"Mặt Trời"},{body:"Moon",name:"Mặt Trăng"}],unknownTime:true},{a:0,b:1,angle})');
        assert.equal(r.title,'Mặt Trời · Mặt Trăng');assert.match(r.pair,/cảm xúc/);assert.match(r.note,/12:00/);assert.ok(r.practice.length>25);
    }
    assert.throws(()=>run(`getAspectReading(${chartCode},{a:0,b:99,angle:90})`));
});
test('renderers escape supplied display labels rather than creating executable markup',()=>{
    context.payload='<img src=x onerror=alert(1)>';
    assert.ok(run('renderNumberReading("life",1,payload)').includes('&lt;img'));
    assert.ok(run('renderCycleReading(1,payload)').includes('&lt;img'));
    const html=run(`(()=>{const chart=${chartCode};chart.planets[0].name=payload;return renderAstroReadings(chart)})()`);
    assert.doesNotMatch(html,/<img/);assert.match(html,/&lt;img/);
});

test('every core role has its own everyday example; missing groups and zero keep their meaning',()=>{
    for(const n of [1,2,3,4,5,6,7,8,9,11,22,33]){
        const examples=['life','expression','soul','personality','birthday'].map(role=>run(`getNumberExample('${role}',${n})`));
        assert.equal(new Set(examples).size,5);
        for(const example of examples)assert.ok(example.length>90);
    }
    assert.match(run('getNumberExample("soul",null)'),/nguyên âm/);
    assert.match(run('getNumberExample("personality",null)'),/Nhân cách/);
    assert.match(run('getNumberExample("bridge",0)'),/11 và 2/);
    assert.notEqual(run('getNumberExample("bridge",0)'),run('getNumberExample("challenge",0)'));
});

test('calculation guide uses actual inputs, component masters and the selected Y convention',()=>{
    const demo=run('renderCoreCalculationGuide("DEMO",1,1,2000,true)');
    assert.match(demo,/D\(4\) \+ E\(5\) \+ M\(4\) \+ O\(6\)/);
    assert.match(demo,/1 \+ 1 \+ 2 = 4/);
    assert.match(demo,/E\(5\) \+ O\(6\): 11.*kết quả 11/);
    assert.match(run('renderCoreCalculationGuide("MY",11,2,2000,false)'),/ngày → 11; tháng → 2; năm → 2/);
    assert.match(run('renderCoreCalculationGuide("MY",11,2,2000,false)'),/Y đang được tính là <strong>phụ âm/);
    for(const name of ['AEIOU','BCDF','MY'])assert.doesNotMatch(run(`renderCoreCalculationGuide('${name}',11,2,2000,false)`),/undefined|NaN|\bnull\b/);
});

test('source disclosure distinguishes the published excerpt from unverified book formulas',()=>{
    const html=run('renderNumberSources()');
    assert.match(html,/nhasachthaiha\.vn/);assert.match(html,/Vận mệnh 1–2/);
    assert.match(html,/chưa có đủ nội dung/);
    assert.match(run('renderCycleReading(4,"Năm cá nhân")'),/Ví dụ để hình dung/);
});

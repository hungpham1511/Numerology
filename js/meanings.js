// Original Vietnamese editorial content. Sources and scope: docs/INTERPRETATIONS.md.
const NUMBER_STORIES = {
  "1": {
    "label": "Chủ động và tự lập",
    "keywords": [
      "Khởi xướng",
      "Độc lập",
      "Quyết đoán"
    ],
    "path": "Học cách đưa ra lựa chọn của mình, rồi chịu trách nhiệm cho lựa chọn ấy.",
    "work": "Làm rõ quyền quyết định, bắt đầu bằng một bản thử nhỏ và xin phản hồi sớm.",
    "need": "Cần khoảng tự chủ để làm điều mình thực sự muốn, thay vì chỉ hoàn thành kỳ vọng của người khác.",
    "social": "Có thể tạo ấn tượng thẳng thắn, nhanh nhẹn, đôi lúc khiến người khác chưa kịp lên tiếng.",
    "gift": "Khả năng mở đường: biến một ý tưởng còn mơ hồ thành bước đầu tiên.",
    "balance": "Phân biệt tự lập với ôm hết việc; sự chủ động vẫn có chỗ cho lắng nghe.",
    "practice": "Chọn một việc đang trì hoãn và làm phiên bản đầu trong 20 phút.",
    "question": "Tôi đang chờ sự cho phép nào mà thực ra mình có thể tự trao?"
  },
  "2": {
    "label": "Kết nối và tinh tế",
    "keywords": [
      "Hợp tác",
      "Lắng nghe",
      "Ngoại giao"
    ],
    "path": "Rèn sự hợp tác mà không đánh mất tiếng nói riêng.",
    "work": "Phát huy khi làm rõ nhu cầu, kết nối các bên và tạo nhịp phối hợp.",
    "need": "Cần cảm giác được lắng nghe, có qua có lại và không phải đoán ý liên tục.",
    "social": "Thường được đọc như phong thái mềm mỏng, biết quan sát bầu không khí.",
    "gift": "Khả năng nhận ra sắc thái nhỏ và giúp cuộc trò chuyện bớt đối đầu.",
    "balance": "Hòa khí không đồng nghĩa luôn đồng ý; tránh dùng sự im lặng thay cho một lời từ chối.",
    "practice": "Nói một mong muốn bằng câu bắt đầu với “Mình cần…” và nghe câu trả lời.",
    "question": "Tôi đang đồng ý vì muốn hợp tác hay vì ngại làm người khác thất vọng?"
  },
  "3": {
    "label": "Biểu đạt và sáng tạo",
    "keywords": [
      "Biểu đạt",
      "Sáng tạo",
      "Hóm hỉnh"
    ],
    "path": "Tập đưa điều mình nghĩ và cảm nhận thành một hình thức có thể chia sẻ.",
    "work": "Có thể thử viết, trình bày, kể chuyện hoặc tìm một cách giải thích dễ hiểu hơn.",
    "need": "Cần cơ hội chơi với ý tưởng và được biểu đạt mà không phải luôn tỏ ra vui vẻ.",
    "social": "Dễ gợi cảm giác sinh động, cởi mở; người khác cũng cần biết lúc bạn muốn được nghe nghiêm túc.",
    "gift": "Khả năng làm ý tưởng trở nên gần gũi bằng ngôn từ, hình ảnh hoặc sự hài hước.",
    "balance": "Đừng để nhiều ý tưởng thay thế việc hoàn thành; cảm xúc khó cũng đáng được gọi tên.",
    "practice": "Hoàn thành một đoạn viết, bản phác hoặc lời nhắn thật lòng trước khi mở ý tưởng mới.",
    "question": "Điều gì tôi muốn nói nhưng thường biến thành một câu đùa?"
  },
  "4": {
    "label": "Nền tảng và bền bỉ",
    "keywords": [
      "Kỷ luật",
      "Thực tế",
      "Tin cậy"
    ],
    "path": "Xây một nhịp có thể duy trì, thay vì chỉ trông vào hứng thú nhất thời.",
    "work": "Mạnh ở việc chia nhỏ nhiệm vụ, kiểm tra chi tiết và làm cho quy trình rõ ràng.",
    "need": "Cần sự nhất quán, lịch hẹn đáng tin và cảm giác biết mình đang đứng trên nền nào.",
    "social": "Có thể được nhìn như người chắc chắn, thực tế; đôi khi vẻ nghiêm túc che mất sự ấm áp.",
    "gift": "Khả năng giữ lời và biến những việc nhỏ thành kết quả tích lũy.",
    "balance": "Nề nếp cần phục vụ cuộc sống; đổi kế hoạch không phải lúc nào cũng là thiếu kỷ luật.",
    "practice": "Chọn một thói quen 10 phút và một khoảng trống được phép linh hoạt trong lịch.",
    "question": "Quy tắc nào đang giúp tôi, quy tắc nào chỉ khiến tôi căng hơn?"
  },
  "5": {
    "label": "Trải nghiệm và linh hoạt",
    "keywords": [
      "Tò mò",
      "Thay đổi",
      "Tự do"
    ],
    "path": "Học qua trải nghiệm và điều chỉnh, đồng thời giữ một vài cam kết làm điểm tựa.",
    "work": "Phù hợp với cách làm có phản hồi nhanh, nhiều góc nhìn và không gian thử nghiệm.",
    "need": "Cần lựa chọn và sự mới mẻ, nhưng cũng cần biết điều gì mình sẽ ở lại đủ lâu để hiểu.",
    "social": "Có thể tạo cảm giác linh hoạt, dễ bắt chuyện, khó đoán nhịp tiếp theo.",
    "gift": "Khả năng thích nghi và nối các kinh nghiệm khác nhau thành một cách làm mới.",
    "balance": "Phân biệt khám phá với né tránh sự khó chịu; tự do vẫn đi cùng trách nhiệm.",
    "practice": "Thử một thay đổi nhỏ trong một tuần và giữ nguyên một cam kết quan trọng.",
    "question": "Tôi đang muốn khám phá điều mới hay chỉ muốn thoát khỏi việc đang khó?"
  },
  "6": {
    "label": "Chăm sóc và trách nhiệm",
    "keywords": [
      "Quan tâm",
      "Trách nhiệm",
      "Hài hòa"
    ],
    "path": "Tìm cách quan tâm người khác mà vẫn dành chỗ cho nhu cầu của mình.",
    "work": "Có thể phát huy khi nâng chất lượng công việc, hỗ trợ đồng đội và tạo môi trường dễ cộng tác.",
    "need": "Cần sự gắn bó, lòng trân trọng và cảm giác việc chăm sóc được chia sẻ.",
    "social": "Dễ được nhìn như người biết lo liệu; hãy nói rõ khi mình cũng cần được giúp.",
    "gift": "Khả năng nhận ra điều khiến một không gian hoặc quan hệ trở nên dễ chịu hơn.",
    "balance": "Giúp đỡ không phải quyết định thay; tránh nhận cả phần trách nhiệm của người khác.",
    "practice": "Hỏi “Bạn muốn mình lắng nghe hay cùng tìm giải pháp?” trước khi giúp.",
    "question": "Tôi đang chăm sóc vì muốn hay vì nghĩ mình phải giữ mọi thứ ổn?"
  },
  "7": {
    "label": "Đào sâu và suy ngẫm",
    "keywords": [
      "Phân tích",
      "Chiều sâu",
      "Tĩnh lặng"
    ],
    "path": "Dành thời gian hiểu một vấn đề, rồi tìm cách đưa điều đã hiểu trở lại đời sống.",
    "work": "Hợp với nhịp tập trung, kiểm tra giả định, nghiên cứu và giải thích có căn cứ.",
    "need": "Cần khoảng riêng để sắp xếp suy nghĩ và những cuộc nói chuyện có chiều sâu.",
    "social": "Có thể được cảm nhận là kín đáo, quan sát kỹ hoặc khó tiếp cận lúc đầu.",
    "gift": "Khả năng đặt câu hỏi đằng sau câu trả lời đầu tiên.",
    "balance": "Suy nghĩ thêm không luôn đem lại rõ ràng hơn; đôi lúc cần hỏi người thật hoặc thử thật.",
    "practice": "Chọn một giả định và tìm một bằng chứng có thể bác bỏ nó.",
    "question": "Khi nào sự cẩn trọng của tôi đang biến thành trì hoãn hoặc xa cách?"
  },
  "8": {
    "label": "Nguồn lực và thực thi",
    "keywords": [
      "Mục tiêu",
      "Tổ chức",
      "Trách nhiệm"
    ],
    "path": "Học cách sử dụng nguồn lực và ảnh hưởng một cách có trách nhiệm.",
    "work": "Chú ý mục tiêu, phân công, tiêu chuẩn hoàn thành và tác động của quyết định.",
    "need": "Cần cảm giác có năng lực tác động đến hoàn cảnh, không chỉ bị hoàn cảnh dẫn đi.",
    "social": "Có thể tạo ấn tượng quyết liệt và có định hướng; sự mềm mỏng giúp người khác hiểu động cơ phía sau.",
    "gift": "Khả năng nối tầm nhìn với việc tổ chức và theo đuổi kết quả.",
    "balance": "Đừng gộp giá trị bản thân với thành tích; kiểm soát quá chặt có thể làm giảm hợp tác.",
    "practice": "Viết một mục tiêu cùng giới hạn về thời gian, sức lực và cách đối xử với người liên quan.",
    "question": "Kết quả nào đáng theo đuổi, và tôi không muốn trả cái giá nào cho nó?"
  },
  "9": {
    "label": "Bao quát và khép lại",
    "keywords": [
      "Đồng cảm",
      "Lý tưởng",
      "Bao quát"
    ],
    "path": "Kết nối việc mình làm với điều có ý nghĩa, đồng thời học cách hoàn tất và buông điều đã hết vai trò.",
    "work": "Có thể phát huy khi nhìn bức tranh chung, tổng hợp góc nhìn và chia sẻ kinh nghiệm.",
    "need": "Cần cảm giác điều mình đóng góp có ích và phù hợp với giá trị sống.",
    "social": "Dễ gợi sự rộng lượng, từng trải; đôi khi khó để người khác biết nhu cầu rất cụ thể của mình.",
    "gift": "Khả năng nhìn ra điểm chung giữa các câu chuyện khác nhau.",
    "balance": "Lòng tốt cần giới hạn; không phải mọi việc chưa trọn đều thuộc trách nhiệm của bạn.",
    "practice": "Khép lại một việc tồn đọng hoặc nói rõ giới hạn cho một lời nhờ.",
    "question": "Điều gì tôi giữ vì còn ý nghĩa, điều gì chỉ vì chưa nỡ buông?"
  },
  "11": {
    "label": "Cảm nhận và truyền đạt",
    "keywords": [
      "Nhạy cảm",
      "Cảm hứng",
      "Hợp tác"
    ],
    "path": "Theo truyền thống, 11/2 gợi việc chuyển cảm nhận tinh tế thành điều có thể chia sẻ và kiểm tra.",
    "work": "Thử kết hợp ý tưởng, quan sát con người và một quy trình thực hiện đơn giản.",
    "need": "Cần được hiểu và có nhịp nghỉ giữa những lúc tiếp nhận quá nhiều thông tin.",
    "social": "Có thể được đọc như phong thái giàu cảm hứng; người khác vẫn cần lời nói cụ thể để hiểu bạn.",
    "gift": "Khả năng tìm một hình ảnh hoặc cách diễn đạt chạm tới trải nghiệm chung.",
    "balance": "Nhạy cảm không phải khả năng biết chắc người khác nghĩ gì; hãy hỏi thay vì suy đoán.",
    "practice": "Ghi một linh cảm, rồi tách thành điều quan sát được và phần mình đang diễn giải.",
    "question": "Cảm nhận nào của tôi cần được đối chiếu trước khi kết luận?"
  },
  "22": {
    "label": "Tầm nhìn và nền móng",
    "keywords": [
      "Tầm nhìn",
      "Hệ thống",
      "Phối hợp"
    ],
    "path": "Theo truyền thống, 22/4 gợi sự kết hợp giữa ý tưởng lớn và những bước nhỏ bền vững.",
    "work": "Thử tổ chức một mục tiêu dài hạn thành các mốc, người phụ trách và tiêu chí rõ ràng.",
    "need": "Cần cảm giác mình đang xây điều có ý nghĩa, nhưng không phải lúc nào cũng phải làm việc lớn.",
    "social": "Có thể được nhìn như người có kế hoạch; hãy để người khác có chỗ đóng góp vào kế hoạch ấy.",
    "gift": "Khả năng nối các phần rời rạc thành một hệ thống dễ dùng.",
    "balance": "Không cần chứng minh “tiềm năng lớn” bằng việc ôm quá sức; bản thử nhỏ vẫn có giá trị.",
    "practice": "Chuyển một mục tiêu lớn thành bước có thể hoàn tất trong tuần này.",
    "question": "Nếu bỏ kỳ vọng phải làm điều vĩ đại, bước nào vẫn đáng làm hôm nay?"
  },
  "33": {
    "label": "Nâng đỡ và chia sẻ",
    "keywords": [
      "Hướng dẫn",
      "Quan tâm",
      "Ranh giới"
    ],
    "path": "Theo truyền thống, 33/6 gợi việc chia sẻ điều đã học bằng sự quan tâm có giới hạn.",
    "work": "Có thể thử hướng dẫn, truyền đạt và giúp người khác tự làm thay vì phụ thuộc.",
    "need": "Cần cảm giác gắn bó và có ích, đồng thời có quyền nghỉ và nhận sự giúp đỡ.",
    "social": "Dễ được đọc như người sẵn sàng nâng đỡ; đừng để hình ảnh ấy buộc mình phải luôn ổn.",
    "gift": "Khả năng tạo một cách giải thích kiên nhẫn và không làm người học thấy nhỏ bé.",
    "balance": "Quan tâm không đòi hỏi cứu mọi người; không cần nhận vai “người chữa lành” hay người hy sinh.",
    "practice": "Chia sẻ một điều hữu ích, rồi để người nhận tự chọn cách áp dụng.",
    "question": "Tôi có đang cho người khác sự tự chủ mà mình cũng cần không?"
  }
};
const CYCLE_STORIES = {
  "1": [
    "Khởi động có chủ đích",
    "Chọn một hướng và thử bước đầu có thể kiểm tra.",
    "Ôm nhiều khởi đầu cùng lúc hoặc chờ đủ tự tin mới bắt đầu.",
    "Làm bản thử nhỏ, ghi lại điều muốn học thay vì đòi kết quả ngay."
  ],
  "2": [
    "Hợp tác và điều chỉnh",
    "Nghe phản hồi, thống nhất nhịp làm việc và chăm các kết nối.",
    "Chờ người khác quyết định hộ hoặc né cuộc nói chuyện cần thiết.",
    "Hẹn một cuộc trao đổi rõ nhu cầu và ghi lại phần hai bên cùng nhận."
  ],
  "3": [
    "Biểu đạt và chia sẻ",
    "Đưa ý tưởng ra ngoài qua một sản phẩm hoặc cuộc trò chuyện.",
    "Phân tán, nhận quá nhiều lời mời, dùng sự vui vẻ để lảng tránh.",
    "Hoàn thành một điều có thể chia sẻ trước khi chuyển sang ý tưởng mới."
  ],
  "4": [
    "Củng cố nền tảng",
    "Rà lịch, tài liệu và những việc đều đặn đang nâng đỡ mục tiêu.",
    "Làm mọi thứ thành nghĩa vụ hoặc đợi kế hoạch hoàn hảo.",
    "Sửa một điểm nghẽn lặp lại và dành sẵn một khoảng nghỉ."
  ],
  "5": [
    "Thử nghiệm và linh hoạt",
    "Đổi một cách làm, tiếp xúc một góc nhìn và quan sát phản hồi.",
    "Đổi liên tục khi chưa đủ dữ liệu hoặc dùng thay đổi để né cam kết.",
    "Giới hạn một thử nghiệm trong tuần rồi đánh giá điều đáng giữ."
  ],
  "6": [
    "Quan tâm và cam kết",
    "Xem lại các thỏa thuận và cách chia phần trách nhiệm.",
    "Làm thay tất cả hoặc chờ sự biết ơn mà chưa nói nhu cầu của mình.",
    "Thống nhất lại một việc chung để ai cũng có phần chủ động."
  ],
  "7": [
    "Soi lại và đào sâu",
    "Dành chỗ cho học hỏi, kiểm tra giả định và suy ngẫm.",
    "Thu mình quá lâu hoặc nhầm nghi ngờ với sự chắc chắn rằng mọi thứ sai.",
    "Đặt một câu hỏi hẹp, tìm bằng chứng rồi trao đổi với một người đáng tin."
  ],
  "8": [
    "Thực thi và đánh giá",
    "Nhìn vào kết quả, nguồn lực sử dụng và trách nhiệm đi kèm.",
    "Đồng nhất thành tích với giá trị bản thân hoặc kiểm soát mọi chi tiết.",
    "Chọn một tiêu chí hoàn thành và một giới hạn không muốn đánh đổi."
  ],
  "9": [
    "Hoàn tất và sắp xếp lại",
    "Tổng kết điều đã học, kết thúc việc dang dở và xem điều nào còn phù hợp.",
    "Cố giữ mọi thứ hoặc quyết định cắt bỏ chỉ vì con số của chu kỳ.",
    "Dọn một việc tồn đọng; quyết định lớn vẫn dựa vào hoàn cảnh thực tế."
  ]
};

const MEANINGS = Object.fromEntries(Object.entries(NUMBER_STORIES).map(([n,p])=>[n,{
    icon:isMaster(Number(n))?'✦':'✧',title:`Số ${n} · ${p.label}`,
    desc:`Trong lối đọc Pythagoras, đây là chủ đề ${p.keywords.join(', ').toLowerCase()}. ${p.path}`,
    keywords:p.keywords,shadow:p.balance,
}]));
const KARMIC_MEANINGS = Object.fromEntries(Object.entries(NUMBER_STORIES).filter(([n])=>Number(n)<=9).map(([n,p])=>[n,`Gợi ý rèn luyện: ${p.practice}`]));
const NUMBER_ROLES = {
    life:['Đường đời','Chủ đề học hỏi dài hạn; không phải một nghề hay số phận cố định.','path'],
    expression:['Vận mệnh / Biểu đạt','Cách hình dung năng lực thể hiện qua tên khai sinh; không phải mức độ thành công.','work'],
    soul:['Linh hồn','Góc đọc về nhu cầu bên trong, khác với điều người khác nhìn thấy.','need'],
    personality:['Nhân cách','Góc đọc về ấn tượng bên ngoài, không phải toàn bộ con người.','social'],
    birthday:['Ngày sinh rút gọn','Một góc về cách bắt tay vào việc; công cụ dùng dạng rút gọn 1–9.','gift'],
    pinnacle:['Đỉnh cao','Chủ đề để suy ngẫm trong khoảng tuổi đang hiển thị, không bảo đảm có biến cố hoặc thành tựu.','path'],
    period:['Giai đoạn','Một mạch đọc dài hạn từ tháng/ngày/năm sinh, không phải lịch định trước.','path'],
    challenge:['Thử thách','Một cách đặt câu hỏi về kỹ năng cần rèn, không phải dự báo điều xấu.','balance'],
    bridge:['Cầu nối','Khoảng cách số học giữa hai chỉ số; không đo mức xung đột hay độ tương hợp thực tế.','practice'],
    karmic:['Số thiếu trong tên','Một con số vắng trong bảng chữ cái không có nghĩa bạn thiếu phẩm chất đó hoặc mang lỗi lầm.','practice'],
};
function getNumberReading(role,value) {
    if(!Object.hasOwn(NUMBER_ROLES,role)) throw new Error('Vai trò diễn giải không được hỗ trợ.');
    const [label,intro,key]=NUMBER_ROLES[role];
    if(value===null) return {label,title:'Chưa đủ dữ liệu',intro,text:'Tên không có nhóm nguyên âm hoặc phụ âm tương ứng theo quy ước đã chọn. Không gán ý nghĩa cho số 0.',practice:'Kiểm tra cách viết tên và lựa chọn chữ Y.',question:'Quy ước đang dùng có phù hợp với cách đọc tên của tôi không?'};
    if(value===0 && (role==='challenge'||role==='bridge')) return {
        label,intro,title:role==='bridge'?'Hai chỉ số cùng giá trị rút gọn':'Không gắn với một bài học số đơn lẻ',
        text:role==='bridge'?'Hiệu bằng 0 nghĩa là hai chỉ số đang so sánh có cùng gốc số. Điều đó không chứng minh không còn mâu thuẫn hoặc luôn hợp nhau.':'Trong cách đọc truyền thống, số 0 được dùng như lời nhắc nhìn nhiều bài học cùng lúc. Không có nghĩa cuộc đời không có thử thách.',
        practice:'Chọn một tình huống thực tế để xem mình cần nói rõ nhu cầu, giới hạn hay hành động nào.',question:'Vấn đề đang xảy ra cần được hiểu bằng dữ kiện nào ngoài các con số?'
    };
    const p=NUMBER_STORIES[value];
    if(!p) throw new Error('Giá trị diễn giải không được hỗ trợ.');
    return {label,title:p.label,intro,text:p[key],balance:p.balance,practice:p.practice,question:p.question,master:isMaster(value)};
}
function renderNumberReading(role,value,label='',open=false) {
    const r=getNumberReading(role,value),e=escapeHtml;
    return `<details class="reading-card" data-reading-role="${role}" data-reading-number="${value===null?'unknown':value}" ${open?'open':''}><summary><span><span class="reading-kicker">${e(label||r.label)} · ${value===null?'—':value}</span><strong>${e(r.title)}</strong></span><span class="reading-chevron" aria-hidden="true">＋</span></summary><div class="reading-body"><p class="reading-context">${e(r.intro)}</p><p>${e(r.text)}</p>${r.balance&&role!=='challenge'?`<p><strong>Điểm cần cân bằng.</strong> ${e(r.balance)}</p>`:''}<p><strong>Thử trong đời thường.</strong> ${e(r.practice)}</p><blockquote>${e(r.question)}</blockquote>${r.master?`<p class="reading-footnote">Master Number ${value} cũng có gốc ${reduceSingleDigit(value)}. Đây là nhãn truyền thống, không phải thứ bậc hay yêu cầu phải có năng lực đặc biệt.</p>`:''}</div></details>`;
}
function renderCycleReading(value,label) {
    const c=CYCLE_STORIES[value];if(!c) throw new Error('Chu kỳ cần từ 1 đến 9.');const e=escapeHtml;
    return `<details class="reading-card" data-cycle-reading="${value}"><summary><span><span class="reading-kicker">${e(label)} · ${value}</span><strong>${e(c[0])}</strong></span><span class="reading-chevron" aria-hidden="true">＋</span></summary><div class="reading-body"><p>${e(c[1])}</p><p><strong>Dễ vướng.</strong> ${e(c[2])}</p><p><strong>Một việc nhỏ.</strong> ${e(c[3])}</p><p class="reading-footnote">Chủ đề tự chiêm nghiệm theo chu kỳ, không dự đoán sự kiện. Tháng là một góc ngắn hạn nằm trong bối cảnh của năm; không cộng các mô tả thành một kết luận chắc chắn.</p></div></details>`;
}
function renderNumberSynthesis(lifePath,expression,soul) {
    const p=NUMBER_STORIES[lifePath],x=NUMBER_STORIES[expression],same=reduceSingleDigit(lifePath)===reduceSingleDigit(expression);
    const need=soul===null?'Chưa đủ dữ liệu để đọc nhu cầu bên trong từ nhóm nguyên âm.':NUMBER_STORIES[soul].need;
    return `<div class="reading-overview"><span class="eyebrow">ĐỌC NHỮNG CON SỐ CÙNG NHAU</span><h3>Một con số, nhiều vai trò.</h3><p>Đường đời ${lifePath} đặt câu hỏi về <strong>${escapeHtml(p.keywords[0].toLowerCase())}</strong>; Vận mệnh ${expression} gợi một cách thể hiện thiên về <strong>${escapeHtml(x.keywords.join(' · ').toLowerCase())}</strong>.</p><p>${same?'Hai chỉ số có cùng gốc số: một chủ đề được nhắc lại ở hai vai trò, không phải bằng chứng nó mạnh gấp đôi.':'Hai chỉ số khác gốc: bạn có thể dùng chúng để hỏi cách hành động và điều muốn học đang bổ trợ hay kéo nhau ở đâu.'} ${escapeHtml(need)}</p><nav class="reading-nav" aria-label="Các phần diễn giải số học"><a href="#personalNumbersReadings">Năm / tháng</a><a href="#pinnaclesReadings">Giai đoạn</a><a href="#bridgeNumbersReadings">Cầu nối</a><a href="#meaningsReadings">Nguồn</a></nav><p class="reading-footnote">Các đoạn dưới là cách ghép biểu tượng theo từng chỉ số, không phải đánh giá độc lập về tính cách. Mở từng mục và chỉ giữ lại điều phù hợp với trải nghiệm của bạn.</p></div>`;
}
function renderNumberSources() {
    return `<details class="reading-sources"><summary>Nguồn tham khảo & cách biên soạn diễn giải</summary><p>Nội dung tiếng Việt do NUMEN biên soạn theo vai trò của chỉ số và các chủ đề truyền thống; không sao chép hoặc dịch nguyên bài của nguồn. Các nguồn dùng để đối chiếu khung khái niệm, không xác nhận kết luận về từng người.</p><ul><li><a href="https://www.numerology.com/articles/your-numerology-chart/core-numbers-numerology/" target="_blank" rel="noopener">Numerology.com · Năm chỉ số cốt lõi</a></li><li><a href="https://www.numerology.com/articles/your-numerology-chart/expression-number/" target="_blank" rel="noopener">Numerology.com · Expression / Vận mệnh</a></li><li><a href="https://www.worldnumerology.com/numerology-single-digit-numbers/" target="_blank" rel="noopener">World Numerology · Các số 1–9</a></li><li><a href="https://www.worldnumerology.com/numerology-period-cycles/" target="_blank" rel="noopener">World Numerology · Ba giai đoạn</a></li></ul><p>Quy ước chữ Y, Master Number, ngày sinh rút gọn và mốc tuổi của NUMEN được nêu ở phần “Quy ước tính”. Nguồn khác có thể dùng cách tính khác.</p></details>`;
}

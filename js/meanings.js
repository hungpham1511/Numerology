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
    "work": "Bạn có thể làm tốt khi được chủ động đề xuất cách làm. Hãy thử một phần nhỏ rồi hỏi ý kiến để cải thiện.",
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
    "work": "Bạn có thể làm tốt việc lắng nghe, giúp hai bên hiểu nhau và thống nhất cách cùng làm.",
    "need": "Cần cảm giác được lắng nghe, có qua có lại và không phải đoán ý liên tục.",
    "social": "Người mới tiếp xúc có thể thấy bạn nhẹ nhàng, biết lắng nghe và để ý cảm xúc của người xung quanh.",
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
    "social": "Người khác có thể thấy bạn vui vẻ, cởi mở và dễ nói chuyện. Khi muốn nói chuyện nghiêm túc, hãy cho họ biết thay vì luôn pha trò.",
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
    "work": "Bạn có thể phát huy khi có thời gian tìm hiểu kỹ, kiểm tra thông tin và giải thích điều mình hiểu cho người khác.",
    "need": "Cần khoảng riêng để sắp xếp suy nghĩ và những cuộc nói chuyện có chiều sâu.",
    "social": "Người mới gặp có thể thấy bạn ít nói, quan sát kỹ và cần thêm thời gian để cởi mở.",
    "gift": "Khả năng đặt câu hỏi đằng sau câu trả lời đầu tiên.",
    "balance": "Suy nghĩ thêm không luôn đem lại rõ ràng hơn; đôi lúc cần hỏi người thật hoặc thử thật.",
    "practice": "Chọn một điều mình đang tin và tự hỏi: “Mình đã kiểm tra thông tin này chưa?”.",
    "question": "Khi nào sự cẩn trọng của tôi đang biến thành trì hoãn hoặc xa cách?"
  },
  "8": {
    "label": "Tổ chức và theo đuổi mục tiêu",
    "keywords": [
      "Mục tiêu",
      "Tổ chức",
      "Trách nhiệm"
    ],
    "path": "Học cách sử dụng nguồn lực và ảnh hưởng một cách có trách nhiệm.",
    "work": "Bạn có thể làm tốt việc đặt mục tiêu, chia việc và theo dõi tới khi hoàn thành. Nhớ hỏi xem cách phân công có phù hợp với mọi người không.",
    "need": "Bạn có thể muốn được chủ động sắp xếp công việc và thấy rõ kết quả từ công sức mình bỏ ra.",
    "social": "Người khác có thể thấy bạn rõ mục tiêu và muốn giải quyết việc nhanh. Nói thêm lý do sẽ giúp họ hiểu rằng bạn muốn công việc tốt hơn.",
    "gift": "Khả năng nối tầm nhìn với việc tổ chức và theo đuổi kết quả.",
    "balance": "Đừng gộp giá trị bản thân với thành tích; kiểm soát quá chặt có thể làm giảm hợp tác.",
    "practice": "Viết một mục tiêu cùng giới hạn về thời gian, sức lực và cách đối xử với người liên quan.",
    "question": "Kết quả nào đáng theo đuổi, và tôi không muốn trả cái giá nào cho nó?"
  },
  "9": {
    "label": "Đồng cảm và biết hoàn tất",
    "keywords": [
      "Đồng cảm",
      "Lý tưởng",
      "Bao quát"
    ],
    "path": "Kết nối việc mình làm với điều có ý nghĩa, đồng thời học cách hoàn tất và buông điều đã hết vai trò.",
    "work": "Có thể phát huy khi nhìn bức tranh chung, tổng hợp góc nhìn và chia sẻ kinh nghiệm.",
    "need": "Cần cảm giác điều mình đóng góp có ích và phù hợp với giá trị sống.",
    "social": "Bạn có thể tạo cảm giác bao dung và sẵn lòng nghe chuyện của người khác. Hãy nhớ nói cả điều chính mình đang cần.",
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
    "social": "Bạn có thể khiến người nghe hào hứng khi kể một ý tưởng. Để họ hiểu rõ, hãy nói thêm điều bạn muốn làm cụ thể.",
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
    "social": "Người khác có thể thấy bạn có kế hoạch và biết lo xa. Mời họ góp ý sẽ giúp kế hoạch dễ thực hiện hơn.",
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
    "social": "Người khác có thể thấy bạn kiên nhẫn, dễ tâm sự và hay giúp đỡ. Bạn vẫn có quyền nói khi mình cần nghỉ.",
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

const NUMBER_EXAMPLES = {
  "1": {
    "life": "Nhóm bạn muốn đi chơi nhưng chưa ai chốt kế hoạch. Bạn đề xuất một phương án, hỏi ý kiến rồi nhận phần đặt chỗ. Bài học nằm ở chỗ dám bắt đầu và vẫn nghe người khác.",
    "expression": "Khi nhận một việc mới, bạn tự phác cách làm rồi đem ra trao đổi, thay vì chờ hướng dẫn từng bước. Để làm tốt hơn, hãy hỏi đồng đội xem kế hoạch còn thiếu gì.",
    "soul": "Bạn vẫn có thể làm việc nhóm rất vui, nhưng thấy thoải mái hơn khi được tự quyết cách làm phần việc của mình. Bị kiểm tra từng bước có thể khiến bạn ngột ngạt.",
    "personality": "Trong buổi họp đầu tiên, bạn nói thẳng điều mình muốn và đề nghị cách giải quyết. Người khác có thể thấy bạn tự tin, dù bên trong bạn vẫn đang lo.",
    "birthday": "Khi cả nhóm còn đang bàn, bạn thử làm một bản nháp trước. Điểm hữu ích là tạo được bước khởi đầu; nhớ báo cho nhóm trước khi tự đổi hướng."
  },
  "2": {
    "life": "Hai người bạn bất đồng về cách chia việc. Bạn thử nghe từng bên, rồi đề xuất cách chia mà cả hai chấp nhận. Điều cần học thêm là nói rõ phần mình muốn, thay vì chỉ đứng ra dàn hòa.",
    "expression": "Trong một dự án, bạn giỏi nối thông tin giữa người thiết kế và người làm kỹ thuật. Việc đặt đúng câu hỏi giúp hai bên hiểu nhau hơn, dù bạn không phải người nói nhiều nhất.",
    "soul": "Bạn không cần quà lớn, nhưng một lời hỏi han đúng lúc hoặc việc người kia giữ lời hẹn có thể khiến bạn thấy được quan tâm. Hãy nói nhu cầu ấy thay vì chờ họ tự đoán.",
    "personality": "Ở nhóm mới, bạn thường nghe trước và nói sau. Người khác có thể thấy bạn nhẹ nhàng, dễ trao đổi; điều đó không có nghĩa bạn luôn đồng ý.",
    "birthday": "Bạn nhận ra một bạn chưa được hỏi ý kiến và mời họ góp lời. Sự chú ý nhỏ ấy có thể giúp cả nhóm phối hợp dễ hơn."
  },
  "3": {
    "life": "Bạn có nhiều ý tưởng cho một bài viết, nhưng cứ mở bản nháp mới. Bài học của số 3 có thể được tập bằng việc chọn một ý và hoàn thành nó trước khi chuyển sang ý tiếp theo.",
    "expression": "Bạn biến một hướng dẫn khô khan thành câu chuyện hoặc ví dụ dễ nhớ. Năng lực biểu đạt có thể dùng trong nhiều việc, không chỉ những nghề sáng tạo.",
    "soul": "Bạn thấy nhẹ người sau khi kể lại một chuyện bằng lời của mình, viết vài dòng hoặc làm một món đồ nhỏ. Khoảng được tự do biểu đạt có thể quan trọng hơn lời khen.",
    "personality": "Bạn pha một câu đùa để buổi gặp bớt ngượng. Người mới quen có thể thấy bạn vui vẻ, dù hôm đó bạn cũng có chuyện buồn chưa kể.",
    "birthday": "Khi hướng dẫn một người mới, bạn nghĩ ra ví dụ gần với việc họ đang làm. Đó là một cách dùng sự sáng tạo trong chuyện rất bình thường."
  },
  "4": {
    "life": "Bạn muốn học ngoại ngữ. Thay vì học thật nhiều một ngày rồi bỏ dở, bạn dành 15 phút mỗi tối. Bài học của số 4 nằm ở việc duy trì, đồng thời biết đổi lịch khi cuộc sống thay đổi.",
    "expression": "Bạn làm một bảng theo dõi để cả nhóm biết ai làm gì và khi nào xong. Cách tổ chức này giúp công việc ít bị bỏ sót; đừng làm bảng phức tạp hơn việc cần giải quyết.",
    "soul": "Bạn dễ yên tâm khi lịch hẹn rõ ràng và lời đã hứa được giữ. Nếu kế hoạch thay đổi, được báo sớm có thể khiến bạn thoải mái hơn nhiều.",
    "personality": "Bạn đến đúng giờ và kiểm tra kỹ tài liệu. Người khác có thể nghĩ bạn nghiêm túc, đáng tin, nhưng chưa biết rằng bạn cũng rất thích đùa với người thân.",
    "birthday": "Trước một nhiệm vụ dài, bạn tự chia thành các bước nhỏ và đánh dấu từng việc đã xong. Đó là cách biến sự cẩn thận thành hành động."
  },
  "5": {
    "life": "Bạn hào hứng thử ba sở thích mới trong một tháng. Bài học là khám phá có lựa chọn: thử một việc đủ lâu để biết mình có thật sự thích, rồi mới quyết định giữ hay bỏ.",
    "expression": "Khi kế hoạch gặp trục trặc, bạn nhanh chóng tìm một cách làm khác. Sự linh hoạt hữu ích nhất khi bạn vẫn báo lại cho những người đang phối hợp.",
    "soul": "Bạn thích được chọn cách học, cách đi chơi hoặc cách sắp xếp một ngày. Một lịch quá kín có thể làm bạn mệt, dù bạn vẫn sẵn sàng giữ những lời hẹn quan trọng.",
    "personality": "Ở buổi gặp mới, bạn bắt chuyện được với nhiều người và đổi chủ đề khá nhanh. Người khác có thể thấy bạn năng động, nhưng chưa biết bạn muốn gắn bó với điều gì.",
    "birthday": "Khi cách cũ không hiệu quả, bạn thử một công cụ khác trên một phần việc nhỏ. Thử trước, xem kết quả rồi mới đổi toàn bộ là cách dùng tốt sự tò mò."
  },
  "6": {
    "life": "Bạn hay đứng ra lo việc nhà. Bài học không chỉ là chăm sóc tốt hơn, mà còn là chia việc và nói khi mình cần nghỉ, thay vì chờ mọi người tự nhận ra.",
    "expression": "Bạn nhận ra đồng nghiệp mới đang lúng túng và soạn một hướng dẫn ngắn. Cách hỗ trợ tốt là giúp họ tự làm được, không phải nhận luôn việc của họ.",
    "soul": "Bạn vui khi bữa cơm có người cùng chuẩn bị và cùng dọn. Điều bạn cần có thể là cảm giác cùng chăm lo cho nhau, chứ không phải làm tất cả thật hoàn hảo.",
    "personality": "Mọi người hay nhờ bạn sắp xếp buổi gặp vì thấy bạn chu đáo. Hình ảnh biết lo liệu ấy không có nghĩa bạn lúc nào cũng đủ sức nhận thêm việc.",
    "birthday": "Bạn chỉnh lại một góc làm việc để người dùng thấy dễ chịu hơn, hoặc hỏi xem một người đang cần gì. Sự quan tâm được thể hiện qua việc nhỏ cụ thể."
  },
  "7": {
    "life": "Bạn đọc nhiều để hiểu một vấn đề nhưng vẫn ngại bắt tay làm. Bài học của số 7 là kết hợp suy nghĩ với trải nghiệm: tìm hiểu vừa đủ, thử một bước rồi học tiếp từ kết quả.",
    "expression": "Khi báo cáo có số liệu lạ, bạn kiểm tra nguồn và cách tính thay vì vội kết luận. Khả năng đào sâu hữu ích khi bạn giải thích lại cho người khác bằng lời dễ hiểu.",
    "soul": "Sau một ngày gặp nhiều người, bạn muốn có khoảng yên tĩnh để đọc hoặc đi bộ. Nói trước nhu cầu ấy giúp người thân hiểu rằng bạn đang cần nghỉ, không phải xa lánh họ.",
    "personality": "Ở lần gặp đầu, bạn hỏi ít nhưng nghe kỹ. Người khác có thể thấy bạn kín đáo; khi thân hơn họ mới biết bạn có rất nhiều điều muốn chia sẻ.",
    "birthday": "Bạn không dừng ở câu trả lời “trước giờ vẫn làm vậy” mà hỏi thêm lý do. Hãy dùng câu hỏi để hiểu vấn đề, thay vì biến cuộc trao đổi thành một cuộc kiểm tra."
  },
  "8": {
    "life": "Bạn muốn dẫn một dự án đến kết quả rõ ràng. Bài học là vừa theo dõi tiến độ, vừa biết giao quyền và nhìn xem cách làm của mình ảnh hưởng tới người khác ra sao.",
    "expression": "Bạn chia một mục tiêu thành việc cần làm, người phụ trách và thời hạn. Năng lực tổ chức nằm ở việc giúp cả nhóm làm được, không chỉ thúc mọi người chạy nhanh hơn.",
    "soul": "Bạn thấy yên tâm khi được chủ động sắp xếp công việc và biết nỗ lực của mình tạo ra kết quả gì. Khi việc chưa đạt, hãy tách kết quả ấy khỏi cách bạn nhìn giá trị bản thân.",
    "personality": "Bạn đi thẳng vào mục tiêu và hỏi rõ khi nào hoàn thành. Người khác có thể thấy bạn quyết liệt; một lời giải thích về lý do sẽ giúp họ dễ phối hợp hơn.",
    "birthday": "Khi tổ chức một hoạt động, bạn để ý cả thời gian, người tham gia và những thứ cần chuẩn bị. Đó là cách rất thực tế để đưa ý tưởng thành việc làm được."
  },
  "9": {
    "life": "Bạn muốn giúp nhiều người nên nhận lời quá nhiều. Bài học có thể là chọn một việc mình làm tốt, giúp trong khả năng và hoàn tất việc ấy trước khi nhận thêm.",
    "expression": "Sau một dự án, bạn gom lại những điều cả nhóm học được rồi viết thành tài liệu dùng chung. Việc chia sẻ kinh nghiệm giúp công sức không chỉ dừng ở một lần làm.",
    "soul": "Bạn dễ thấy có ý nghĩa khi công việc của mình giúp ai đó bớt khó khăn. Dù vậy, nhu cầu nghỉ ngơi và được hỗ trợ của chính bạn vẫn cần được nói ra.",
    "personality": "Bạn lắng nghe một câu chuyện mà ít vội phán xét. Người khác có thể thấy bạn bao dung, nhưng họ vẫn cần biết điều gì làm bạn không thoải mái.",
    "birthday": "Khi nghe hai người kể khác nhau về cùng một việc, bạn tìm ra phần cả hai cùng quan tâm. Nhìn được bức tranh chung giúp cuộc trao đổi dễ đi tiếp."
  },
  "11": {
    "life": "Bạn nhận ra không khí trong nhóm có vẻ căng. Thay vì tin chắc mình đã hiểu, bạn hỏi “Mọi người có đang vướng điều gì không?”. Đây là cách đưa sự nhạy cảm của 11/2 vào một cuộc trao đổi rõ ràng.",
    "expression": "Bạn tìm được một hình ảnh giúp cả nhóm hiểu ý tưởng khó. Sau phần truyền cảm hứng, bạn viết thêm một bước thực hiện cụ thể để mọi người biết bắt đầu từ đâu.",
    "soul": "Bạn muốn được lắng nghe kỹ và có thời gian yên sau những buổi gặp đông người. Nói rõ điều ấy hữu ích hơn việc cố chịu rồi đột ngột thu mình.",
    "personality": "Bạn kể một ý tưởng với nhiều cảm xúc và khiến người nghe hào hứng. Họ có thể thấy bạn giàu cảm hứng, dù bạn vẫn cần thời gian để tự tin vào ý tưởng ấy.",
    "birthday": "Bạn nghĩ ra một phép so sánh khiến người khác thốt lên “À, giờ mình hiểu rồi”. Cách diễn đạt tinh tế ấy vẫn cần được kiểm tra xem có đúng ý họ hiểu không."
  },
  "22": {
    "life": "Bạn muốn mở một nhóm học miễn phí. Thay vì chuẩn bị một chương trình thật lớn ngay, bạn thử một buổi cho vài người rồi cải thiện dần. Đó là cách đọc 22/4: ý tưởng lớn đi cùng bước làm chắc.",
    "expression": "Bạn biến ý tưởng chung thành lịch làm, tài liệu và phần việc rõ ràng. Hệ thống tốt là hệ thống người khác dùng được, kể cả khi bạn vắng mặt.",
    "soul": "Bạn muốn thấy mình đang xây một điều có ích lâu dài. Hãy cho phép bản thân vui với một bước nhỏ đã hoàn thành, không phải đợi tới lúc dự án thật lớn.",
    "personality": "Bạn nói chuyện có kế hoạch và thường nghĩ vài bước tiếp theo. Người khác có thể thấy bạn vững vàng, nhưng bạn vẫn nên nói rõ những phần mình còn chưa chắc.",
    "birthday": "Bạn gom những hướng dẫn rời rạc thành một tài liệu để người mới tự tra cứu. Một việc nhỏ cũng có thể thể hiện cách xây nền tảng của 22/4."
  },
  "33": {
    "life": "Bạn thường giúp bạn bè học một kỹ năng. Bài học của 33/6 là hướng dẫn kiên nhẫn nhưng vẫn để họ tự thử, đồng thời giữ thời gian cho việc của mình.",
    "expression": "Bạn giải thích lại một việc theo cách người mới không ngại hỏi. Năng lực hỗ trợ phát huy tốt khi bạn giúp họ tiến bộ mà không cần mình làm thay mãi.",
    "soul": "Bạn muốn cảm thấy mình có ích trong một quan hệ. Tuy vậy, một ngày bạn cần được chăm sóc hoặc chỉ muốn nghỉ cũng là điều bình thường.",
    "personality": "Người mới gặp có thể thấy bạn dễ tâm sự vì bạn lắng nghe lâu và ít ngắt lời. Bạn vẫn có quyền nói “Hôm nay mình chưa đủ sức nghe tiếp, để lúc khác nhé”.",
    "birthday": "Bạn nhận ra người học đang ngại vì chưa hiểu và đổi sang một ví dụ đơn giản hơn. Sự kiên nhẫn có ích hơn việc cố chứng minh mình biết nhiều."
  }
};
const CYCLE_EXAMPLES = {
  "1": "Bạn muốn học chụp ảnh: chọn một bài tập nhỏ và chụp thử trong tuần này, thay vì đợi đủ thiết bị mới bắt đầu.",
  "2": "Bạn và người cùng làm chưa thống nhất cách chia việc. Dành một buổi nghe nhu cầu của nhau rồi ghi lại thỏa thuận.",
  "3": "Bạn có một ý tưởng đã giữ lâu. Viết thành một bài ngắn hoặc kể cho một người bạn, rồi nghe xem họ hiểu được gì.",
  "4": "Việc học hay bị đứt quãng. Đặt một khung 15 phút cố định mỗi ngày và theo dõi trong hai tuần để xem lịch có vừa sức không.",
  "5": "Bạn muốn đổi cách làm việc. Thử một cách mới với một nhiệm vụ nhỏ trong một tuần rồi so sánh, thay vì đổi tất cả cùng lúc.",
  "6": "Việc nhà đang dồn về một người. Cùng liệt kê và chia lại phần việc để cả hai có thời gian nghỉ.",
  "7": "Bạn có một chủ đề chưa hiểu rõ. Chọn một câu hỏi cụ thể, đọc hai nguồn đáng tin và viết lại điều mình đã hiểu.",
  "8": "Bạn muốn hoàn thành một dự án. Chốt tiêu chí “xong”, chia việc và xem tiến độ mỗi tuần; nhớ dành thời gian cho những việc phát sinh.",
  "9": "Bạn còn một khóa học dang dở. Xem phần nào đáng hoàn thành và phần nào nên dừng, dựa vào nhu cầu hiện tại của mình."
};

const MEANINGS = Object.fromEntries(Object.entries(NUMBER_STORIES).map(([n,p])=>[n,{
    icon:isMaster(Number(n))?'✦':'✧',title:`Số ${n} · ${p.label}`,
    desc:`Trong lối đọc Pythagoras, đây là chủ đề ${p.keywords.join(', ').toLowerCase()}. ${p.path}`,
    keywords:p.keywords,shadow:p.balance,
}]));
const KARMIC_MEANINGS = Object.fromEntries(Object.entries(NUMBER_STORIES).filter(([n])=>Number(n)<=9).map(([n,p])=>[n,`Gợi ý rèn luyện: ${p.practice}`]));
const NUMBER_ROLES = {
    life:['Đường đời','Đọc chỉ số này để nhìn lại những bài học và cách mình lựa chọn trong một chặng đường dài.','path'],
    expression:['Vận mệnh / Biểu đạt','Chỉ số từ toàn bộ tên khai sinh, nói về cách bạn thể hiện và phát triển năng lực.','work'],
    soul:['Linh hồn','Chỉ số từ nguyên âm trong tên, dùng để nói về điều bạn mong muốn và nhu cầu bên trong.','need'],
    personality:['Nhân cách','Chỉ số từ phụ âm trong tên, nói về ấn tượng người khác có thể nhận thấy khi tiếp xúc với bạn.','social'],
    birthday:['Ngày sinh rút gọn','Một góc về điểm mạnh bạn có thể đem vào việc thường ngày. Ở đây ngày sinh được rút gọn về 1–9.','gift'],
    pinnacle:['Đỉnh cao','Một chủ đề để đọc trong khoảng tuổi hiển thị. “Đỉnh cao” là tên của chu kỳ trong thần số học.','path'],
    period:['Giai đoạn','Một trong ba chặng dài được tính từ tháng, ngày và năm sinh. Đọc phần này như bối cảnh chung của chặng đó.','path'],
    challenge:['Thử thách','Tập trung vào điều cần tập thêm: khi gặp khó khăn, bạn có thể thay đổi cách phản ứng ra sao?','balance'],
    bridge:['Cầu nối','Hiệu của hai chỉ số sau khi rút gọn. Trong cách diễn giải, con số này gợi một kỹ năng giúp nối hai mặt đang được so sánh.','practice'],
    karmic:['Số thiếu trong tên','Số không xuất hiện khi đổi chữ cái của tên sang 1–9. Phần dưới gợi một điều có thể rèn thêm trong đời thường.','practice'],
};
function getNumberExample(role,value) {
    if(value===null) return role==='soul'?'Nếu tên không có nguyên âm theo lựa chọn hiện tại, chưa thể đọc chỉ số Linh hồn. Bạn có thể kiểm tra lại chữ Y trước khi xem tiếp.':'Nếu tên chỉ có nguyên âm theo lựa chọn hiện tại, chưa thể đọc chỉ số Nhân cách. Không lấy số 0 để thay cho phần dữ liệu còn thiếu.';
    if(value===0) return role==='bridge'
        ? 'Hai chỉ số 11 và 2 đều rút gọn về 2, nên cầu nối là |2 − 2| = 0. Hai người có cùng kết quả này vẫn có thể cư xử rất khác nhau.'
        : 'Bạn có thể vừa cần tập nói rõ ý kiến, vừa cần giữ nề nếp làm việc. Với thử thách 0, hãy chọn điều thực sự đang vướng để tập trước.';
    const examples=NUMBER_EXAMPLES[value];
    if(examples[role]) return examples[role];
    if(role==='challenge') return examples.life;
    if(role==='bridge') return examples.expression;
    if(role==='karmic') return examples.birthday;
    return examples.life;
}
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
    return {label,title:p.label,intro,text:p[key],balance:p.balance,practice:p.practice,question:p.question,example:getNumberExample(role,value),master:isMaster(value)};
}
function renderNumberReading(role,value,label='',open=false) {
    const r=getNumberReading(role,value),e=escapeHtml;
    return `<details class="reading-card" data-reading-role="${role}" data-reading-number="${value===null?'unknown':value}" ${open?'open':''}><summary><span><span class="reading-kicker">${e(label||r.label)} · ${value===null?'—':value}</span><strong>${e(r.title)}</strong></span><span class="reading-chevron" aria-hidden="true">＋</span></summary><div class="reading-body"><p class="reading-context">${e(r.intro)}</p><p><strong>Hiểu đơn giản.</strong> ${e(r.text)}</p><div class="reading-example"><strong>Ví dụ trong đời thường</strong><p>${e(r.example||getNumberExample(role,value))}</p></div>${r.balance&&role!=='challenge'?`<p><strong>Điểm cần cân bằng.</strong> ${e(r.balance)}</p>`:''}<p><strong>Bạn có thể thử.</strong> ${e(r.practice)}</p><blockquote>${e(r.question)}</blockquote>${r.master?`<p class="reading-footnote">${value}/${reduceSingleDigit(value)}: số ${value} được giữ theo quy ước, còn ${reduceSingleDigit(value)} là kết quả khi cộng tiếp hai chữ số. Đọc cả chủ đề của số gốc; không cần tự ép mình phải làm điều lớn lao.</p>`:''}</div></details>`;
}
function renderCycleReading(value,label) {
    const c=CYCLE_STORIES[value];if(!c) throw new Error('Chu kỳ cần từ 1 đến 9.');const e=escapeHtml;
    return `<details class="reading-card" data-cycle-reading="${value}"><summary><span><span class="reading-kicker">${e(label)} · ${value}</span><strong>${e(c[0])}</strong></span><span class="reading-chevron" aria-hidden="true">＋</span></summary><div class="reading-body"><p><strong>Hiểu đơn giản.</strong> ${e(c[1])}</p><div class="reading-example"><strong>Ví dụ để hình dung</strong><p>${e(CYCLE_EXAMPLES[value])}</p></div><p><strong>Dễ vướng.</strong> ${e(c[2])}</p><p><strong>Một việc nhỏ.</strong> ${e(c[3])}</p><p class="reading-footnote">Chủ đề tự chiêm nghiệm theo chu kỳ, không dự đoán sự kiện. Tháng là một góc ngắn hạn nằm trong bối cảnh của năm; không cộng các mô tả thành một kết luận chắc chắn.</p></div></details>`;
}
function renderNumberSynthesis(lifePath,expression,soul) {
    const p=NUMBER_STORIES[lifePath],x=NUMBER_STORIES[expression];
    const need=soul===null?'Tên hiện tại chưa có đủ nguyên âm để đọc chỉ số Linh hồn.':`Ở Linh hồn ${soul}: ${NUMBER_STORIES[soul].need}`;
    return `<div class="reading-overview"><span class="eyebrow">BẮT ĐẦU TỪ ĐÂU?</span><h3>Đọc từng chỉ số, rồi đặt cạnh nhau.</h3><p><strong>Đường đời ${lifePath}:</strong> bài học dài hạn về ${escapeHtml(p.keywords[0].toLowerCase())}. <strong>Vận mệnh ${expression}:</strong> cách thể hiện năng lực qua ${escapeHtml(x.keywords.join(', ').toLowerCase())}.</p><p>${escapeHtml(need)}</p><p>Ví dụ: cùng là số 4, ở Đường đời có thể đọc là bài học về sự đều đặn; ở Linh hồn là nhu cầu có sự ổn định; ở Nhân cách là ấn tượng chỉn chu. Vì vậy, hãy đọc cả tên chỉ số, đừng chỉ nhìn con số.</p><nav class="reading-nav" aria-label="Các phần diễn giải số học"><a href="#coreCalculationGuide">Hiểu cách tính</a><a href="#personalNumbersReadings">Năm / tháng</a><a href="#pinnaclesReadings">Giai đoạn</a><a href="#bridgeNumbersReadings">Cầu nối</a><a href="#meaningsReadings">Nguồn</a></nav><p class="reading-footnote">Ví dụ bên dưới là tình huống minh họa do NUMEN viết, không phải sự kiện suy ra từ tên hoặc ngày sinh của bạn. Hãy đặt lời diễn giải cạnh trải nghiệm thực tế của mình.</p></div>`;
}
function renderCoreCalculationGuide(name,day,month,year,yIsVowel) {
    const e=escapeHtml,lp=calcLifePath(day,month,year),n=getNameNumbers(name,yIsVowel),d=lp.detail;
    const chain=(total,steps,value)=>`${total}${steps.length?' → '+steps.join(' → '):''} → kết quả ${value===null?'chưa xác định':value}`;
    const letters=n.letters.filter(l=>!l.isSpace);
    const sumLine=items=>items.length?items.map(l=>`${l.char}(${l.value})`).join(' + '):'Không có chữ cái trong nhóm này';
    const rows=[
        ['Đường đời',`${day}/${month}/${year}: ngày → ${d.day.reduced}; tháng → ${d.month.reduced}; năm → ${d.year.reduced}. Cộng lại: ${d.day.reduced} + ${d.month.reduced} + ${d.year.reduced} = ${d.total}${d.finalSteps.length?' → '+d.finalSteps.join(' → '):''}. Kết quả: ${lp.value}.`,'Lấy ngày, tháng, năm riêng rồi mới cộng; dừng ở 11, 22 hoặc 33 khi rút gọn từng phần và tổng.'],
        ['Vận mệnh',`${sumLine(letters)} = ${chain(n.detail.totalSum,n.detail.destinySteps,n.destiny)}.`,'Dùng tất cả chữ cái. Cộng giá trị toàn tên rồi rút gọn tổng, không rút gọn từng từ trước.'],
        ['Linh hồn',`${sumLine(letters.filter(l=>l.isVowel))}${n.soul===null?'':': '+chain(n.detail.vowelSum,n.detail.soulSteps,n.soul)}.`,'Chỉ lấy nguyên âm; chữ Y theo lựa chọn của bạn.'],
        ['Nhân cách',`${sumLine(letters.filter(l=>!l.isVowel))}${n.personality===null?'':': '+chain(n.detail.consonantSum,n.detail.personalitySteps,n.personality)}.`,'Chỉ lấy phụ âm. Tổng nguyên âm và phụ âm phải bằng tổng toàn tên.'],
        ['Ngày sinh',`${day} → ${reduceSingleDigit(day)}.`,'Chỉ dùng ngày trong tháng. Ví dụ 24 → 2 + 4 = 6; công cụ hiện dùng dạng 1–9.']
    ];
    return `<details class="reading-sources calculation-guide" id="coreCalculationGuide"><summary>Các con số của bạn được tính từ đâu?</summary><p>Đây là cách tính đang dùng trên NUMEN. Có thể mở “Xem cách tính” bên dưới để xem thêm từng phép cộng.</p><p>Tên được bỏ dấu, Đ đổi thành D; Y đang được tính là <strong>${yIsVowel?'nguyên âm':'phụ âm'}</strong>. Bảng A–Z ở đầu trang cho biết giá trị từng chữ.</p><ol>${rows.map(([label,calculation,note])=>`<li><strong>${e(label)}</strong><p class="calculation-example">${e(calculation)}</p><p>${e(note)}</p></li>`).join('')}</ol></details>`;
}
function renderNumberSources() {
    return `<details class="reading-sources"><summary>Nguồn tham khảo & cách biên soạn diễn giải</summary><p>Nội dung tiếng Việt do NUMEN biên soạn theo vai trò của chỉ số và các chủ đề truyền thống; không sao chép hoặc dịch nguyên bài của nguồn. Các nguồn dùng để đối chiếu khung khái niệm. Ví dụ đời thường do NUMEN tự viết.</p><p><strong>Về Thần số học dễ hiểu của Alex Alpha và Huyền Minh Group:</strong> đã đọc giới thiệu và trích đoạn Số Vận mệnh 1–2 do Thái Hà công bố; chưa có đủ nội dung để xác nhận toàn bộ công thức của sách. NUMEN hiện chưa phải bản triển khai đã đối chiếu đầy đủ theo sách này.</p><ul><li><a href="https://nhasachthaiha.vn/products/than-so-hoc-de-hieu" target="_blank" rel="noopener">Thái Hà · Giới thiệu và trích đoạn chính thức Thần số học dễ hiểu</a></li><li><a href="https://www.numerology.com/articles/your-numerology-chart/core-numbers-numerology/" target="_blank" rel="noopener">Numerology.com · Năm chỉ số cốt lõi</a></li><li><a href="https://www.numerology.com/articles/your-numerology-chart/expression-number/" target="_blank" rel="noopener">Numerology.com · Expression / Vận mệnh</a></li><li><a href="https://www.worldnumerology.com/numerology-single-digit-numbers/" target="_blank" rel="noopener">World Numerology · Các số 1–9</a></li><li><a href="https://www.worldnumerology.com/numerology-period-cycles/" target="_blank" rel="noopener">World Numerology · Ba giai đoạn</a></li></ul><p>Quy ước chữ Y, Master Number, ngày sinh rút gọn và mốc tuổi của NUMEN được nêu ở phần “Quy ước tính”. Nguồn khác có thể dùng cách tính khác.</p></details>`;
}

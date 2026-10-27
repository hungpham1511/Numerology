// Original Vietnamese interpretive templates; source concepts are documented separately.
const SIGN_STORIES = [
  {
    "name": "Bạch Dương",
    "element": "Lửa",
    "mode": "Tiên phong",
    "style": "Đọc theo biểu tượng, Bạch Dương nhấn vào việc bắt đầu, tự thử và học qua hành động.",
    "Sun": "Cảm giác được là mình có thể gắn với việc tự chọn hướng và tạo ra một bước tiến.",
    "Moon": "Cảm xúc có thể lên nhanh; khoảng dừng trước khi phản ứng giúp biết mình thực sự cần gì.",
    "Mercury": "Cách nghĩ được gợi như trực tiếp, thích đi vào vấn đề và kiểm tra ý tưởng bằng cách làm.",
    "Venus": "Sự gần gũi có thể được thể hiện qua chủ động, rõ ràng và cùng thử điều mới.",
    "Mars": "Động lực dễ hình thành khi có một việc cụ thể để bắt tay làm ngay.",
    "gift": "Sẵn sàng mở đường và nói điều cần nói.",
    "balance": "Tốc độ của mình không phải tốc độ duy nhất; chủ động vẫn có chỗ cho đồng thuận.",
    "practice": "Trước một quyết định nhanh, viết một câu về điều muốn đạt và một câu về điều chưa biết."
  },
  {
    "name": "Kim Ngưu",
    "element": "Đất",
    "mode": "Kiên định",
    "style": "Kim Ngưu gợi nhịp chậm vừa đủ để cảm nhận, duy trì và làm điều có giá trị lâu dài.",
    "Sun": "Cảm giác được là mình có thể gắn với sự bền vững và những điều có thể trực tiếp trải nghiệm.",
    "Moon": "Sự đều đặn, quen thuộc và các cam kết được giữ có thể tạo cảm giác yên tâm.",
    "Mercury": "Cách nghĩ có thể thiên về ví dụ cụ thể, thời gian suy xét và điều áp dụng được.",
    "Venus": "Sự quan tâm có thể hiện qua việc có mặt đều đặn, chăm chút và trân trọng điều giản dị.",
    "Mars": "Động lực thường được hình dung như sức bền; đã chọn rồi thì muốn theo đến nơi.",
    "gift": "Kiên nhẫn với tiến trình và nhận ra chất lượng của những điều nhỏ.",
    "balance": "Sự quen thuộc không luôn đồng nghĩa phù hợp; cân nhắc lý do trước khi giữ hoặc đổi.",
    "practice": "Giữ một thói quen có ích và thử thay một chi tiết nhỏ trong cách làm."
  },
  {
    "name": "Song Tử",
    "element": "Khí",
    "mode": "Linh hoạt",
    "style": "Song Tử gợi sự tò mò, trao đổi thông tin và khả năng chuyển góc nhìn.",
    "Sun": "Cảm giác được là mình có thể gắn với học hỏi, kết nối các ý và kể lại điều vừa khám phá.",
    "Moon": "Nói hoặc viết ra điều đang cảm thấy có thể giúp hiểu cảm xúc rõ hơn.",
    "Mercury": "Cách nghĩ thiên về đặt câu hỏi, tìm liên hệ và so sánh nhiều cách giải thích.",
    "Venus": "Sự gần gũi có thể được nuôi bằng trò chuyện, dí dỏm và cùng học điều mới.",
    "Mars": "Động lực dễ bật lên khi có câu hỏi thú vị hoặc nhiều cách giải một việc.",
    "gift": "Nhìn thấy thêm một khả năng trước khi chốt câu trả lời.",
    "balance": "Thông tin mới không luôn quan trọng hơn việc đang làm; cần điểm dừng để tổng hợp.",
    "practice": "Chọn một câu hỏi và viết kết luận tạm của mình trước khi đọc thêm."
  },
  {
    "name": "Cự Giải",
    "element": "Nước",
    "mode": "Tiên phong",
    "style": "Cự Giải gợi việc tạo một nơi thuộc về và chú ý điều khiến con người thấy được chăm sóc.",
    "Sun": "Cảm giác được là mình có thể gắn với các mối liên hệ thân thuộc và việc bảo vệ điều quan trọng.",
    "Moon": "Cảm xúc có thể cần không gian riêng và sự xác nhận nhẹ nhàng trước khi nói rõ.",
    "Mercury": "Cách diễn đạt có thể đi qua ký ức, câu chuyện và việc cảm nhận bối cảnh.",
    "Venus": "Tình cảm có thể được thể hiện qua ghi nhớ, chăm lo và những cử chỉ quen thuộc.",
    "Mars": "Động lực có thể rõ hơn khi hành động phục vụ một người, nhóm hoặc không gian mình gắn bó.",
    "gift": "Nhận ra bầu không khí và nhu cầu chưa được nói thành lời.",
    "balance": "Không phải ai im lặng cũng đang từ chối; hỏi lại thay vì chỉ đọc tín hiệu.",
    "practice": "Nói một nhu cầu cụ thể và một cách người khác có thể hỗ trợ bạn."
  },
  {
    "name": "Sư Tử",
    "element": "Lửa",
    "mode": "Kiên định",
    "style": "Sư Tử gợi việc thể hiện bản sắc, sáng tạo và chia sẻ niềm vui với người khác.",
    "Sun": "Cảm giác được là mình có thể gắn với việc tạo ra điều mang dấu ấn và được nhìn nhận chân thành.",
    "Moon": "Sự ấm áp và việc cảm thấy mình có vị trí trong quan hệ có thể rất đáng quý.",
    "Mercury": "Cách diễn đạt có thể giàu hình ảnh, tự tin và chú ý câu chuyện muốn truyền tải.",
    "Venus": "Sự gần gũi có thể hiện bằng sự hào phóng, trân trọng nhau và cùng tạo kỷ niệm.",
    "Mars": "Động lực có thể đến từ một việc đáng tự hào và cơ hội thực hiện bằng cả tâm sức.",
    "gift": "Mang nhiệt tình vào một việc và giúp người khác cũng muốn tham gia.",
    "balance": "Được nhìn thấy không đòi hỏi phải luôn nổi bật; phản hồi khác ý không xóa giá trị của mình.",
    "practice": "Hoàn thành một điều mình thích rồi chia sẻ mà không sửa theo mọi phản ứng."
  },
  {
    "name": "Xử Nữ",
    "element": "Đất",
    "mode": "Linh hoạt",
    "style": "Xử Nữ gợi việc quan sát chi tiết, tìm điều chưa khớp và cải thiện từng bước.",
    "Sun": "Cảm giác được là mình có thể gắn với việc làm điều hữu ích và thấy tiến trình rõ ràng.",
    "Moon": "Những việc nhỏ có thể sắp xếp được đôi khi giúp cảm xúc có chỗ tựa.",
    "Mercury": "Cách nghĩ thiên về phân tích, kiểm tra từ ngữ và tìm giải pháp có thể thực hiện.",
    "Venus": "Sự quan tâm có thể hiện qua nhớ chi tiết, giúp đúng việc và chăm sóc đời thường.",
    "Mars": "Động lực có thể tăng khi vấn đề được chia thành các bước vừa sức.",
    "gift": "Nhận ra chỗ cần chỉnh và biến góp ý thành việc cụ thể.",
    "balance": "Tiêu chuẩn cao cần đi cùng tiêu chí “đủ tốt”; người khác không phải một dự án cần sửa.",
    "practice": "Đặt một tiêu chí hoàn tất trước khi bắt đầu chỉnh sửa."
  },
  {
    "name": "Thiên Bình",
    "element": "Khí",
    "mode": "Tiên phong",
    "style": "Thiên Bình gợi việc nhìn từ nhiều phía, tìm cách cùng tồn tại và cân nhắc sự công bằng.",
    "Sun": "Cảm giác được là mình có thể gắn với trao đổi và tạo một cách làm hợp lý cho các bên.",
    "Moon": "Cảm xúc có thể cần đối thoại và sự cân nhắc lẫn nhau để được sắp xếp.",
    "Mercury": "Cách nghĩ chú ý quan hệ giữa các ý, các lựa chọn và hệ quả với người liên quan.",
    "Venus": "Sự gần gũi có thể nuôi bằng phép lịch sự, chia sẻ quyết định và cảm giác được đối xử ngang hàng.",
    "Mars": "Động lực có thể được khơi lên bởi một bất cân bằng cần điều chỉnh.",
    "gift": "Tạo không gian để hai góc nhìn cùng được nghe.",
    "balance": "Đồng thuận không cần mọi người hoàn toàn giống nhau; tránh chờ lựa chọn không có đánh đổi.",
    "practice": "Nói rõ ưu tiên của mình trước khi hỏi người khác muốn gì."
  },
  {
    "name": "Bọ Cạp",
    "element": "Nước",
    "mode": "Kiên định",
    "style": "Bọ Cạp gợi sự tập trung, riêng tư và mong muốn hiểu điều nằm dưới lời nói bề mặt.",
    "Sun": "Cảm giác được là mình có thể gắn với sự thành thật và việc theo đuổi điều có chiều sâu.",
    "Moon": "Niềm tin và quyền giữ riêng tư có thể quan trọng khi chia sẻ cảm xúc.",
    "Mercury": "Cách nghĩ có thể đào vào động cơ, điểm chưa rõ và điều người khác bỏ qua.",
    "Venus": "Sự gần gũi có thể cần sự nhất quán, chiều sâu và các ranh giới được tôn trọng.",
    "Mars": "Động lực có thể mạnh khi đã xác định điều thật sự đáng để dốc sức.",
    "gift": "Ở lại đủ lâu với một vấn đề khó và nhận ra phần chưa được nói.",
    "balance": "Sâu sắc không đồng nghĩa phải nghi ngờ; không thể biết động cơ chỉ bằng suy đoán.",
    "practice": "Tách điều quan sát được khỏi câu chuyện mình đang gán cho nó."
  },
  {
    "name": "Nhân Mã",
    "element": "Lửa",
    "mode": "Linh hoạt",
    "style": "Nhân Mã gợi việc tìm ý nghĩa, mở góc nhìn và học từ trải nghiệm rộng hơn.",
    "Sun": "Cảm giác được là mình có thể gắn với một hướng khám phá và điều mình tin là có ý nghĩa.",
    "Moon": "Cảm xúc có thể cần khoảng thoáng, sự thành thật và một góc nhìn rộng hơn tình huống trước mắt.",
    "Mercury": "Cách nghĩ thiên về bức tranh chung, giả thuyết và những câu hỏi “vì sao”.",
    "Venus": "Sự gần gũi có thể nuôi bằng không gian tự chủ và cùng khám phá điều mới.",
    "Mars": "Động lực có thể đến từ mục tiêu có ý nghĩa hoặc cơ hội học điều chưa biết.",
    "gift": "Nhìn thấy khả năng và giúp một câu chuyện bớt bế tắc.",
    "balance": "Lạc quan không thay thế việc kiểm tra chi tiết; sự thẳng thắn vẫn cần chọn cách nói.",
    "practice": "Nối một ý tưởng lớn với bước nhỏ và thông tin cần xác minh."
  },
  {
    "name": "Ma Kết",
    "element": "Đất",
    "mode": "Tiên phong",
    "style": "Ma Kết gợi việc tạo cấu trúc, chọn ưu tiên và theo đuổi điều đáng làm trong thời gian dài.",
    "Sun": "Cảm giác được là mình có thể gắn với năng lực tự chịu trách nhiệm và làm nên kết quả có thực.",
    "Moon": "Sự đáng tin, cam kết rõ và quyền được mềm yếu có thể cùng cần thiết để thấy an tâm.",
    "Mercury": "Cách nghĩ thiên về trình tự, hệ quả và điều có thể duy trì.",
    "Venus": "Sự gần gũi có thể hiện bằng cam kết, sự có mặt và những việc làm nhất quán.",
    "Mars": "Động lực có thể mạnh khi có mục tiêu, mốc tiến độ và phạm vi trách nhiệm rõ.",
    "gift": "Giữ định hướng trong khi làm từng việc cần thiết.",
    "balance": "Không cần biến mọi phút thành hiệu suất; nghỉ ngơi không làm mất năng lực.",
    "practice": "Đặt một mốc hoàn thành vừa sức và một khoảng nghỉ không cần phải kiếm được."
  },
  {
    "name": "Bảo Bình",
    "element": "Khí",
    "mode": "Kiên định",
    "style": "Bảo Bình gợi góc nhìn độc lập, ý tưởng khác thường và câu hỏi về cách nhóm hoặc hệ thống vận hành.",
    "Sun": "Cảm giác được là mình có thể gắn với tự do suy nghĩ và đóng góp một góc nhìn khác.",
    "Moon": "Cảm xúc có thể cần khoảng cách để hiểu, nhưng sự gần gũi vẫn cần được biểu đạt cụ thể.",
    "Mercury": "Cách nghĩ thích nhận ra mô hình, thử giả định và xem điều gì có thể thiết kế lại.",
    "Venus": "Sự gần gũi có thể bắt đầu từ tình bạn, sự tôn trọng khác biệt và không gian riêng.",
    "Mars": "Động lực có thể rõ khi đang cải thiện cách làm chung hoặc thử một hướng chưa quen.",
    "gift": "Đưa một giả định quen thuộc ra để cùng xem lại.",
    "balance": "Khác biệt không tự nó làm một ý tưởng tốt hơn; lý lẽ cũng cần chỗ cho cảm xúc.",
    "practice": "Hỏi một người bị ảnh hưởng bởi ý tưởng xem họ thực sự cần gì."
  },
  {
    "name": "Song Ngư",
    "element": "Nước",
    "mode": "Linh hoạt",
    "style": "Song Ngư gợi trí tưởng tượng, sự cảm thông và khả năng nhận ra nhiều tầng ý nghĩa trong trải nghiệm.",
    "Sun": "Cảm giác được là mình có thể gắn với sáng tạo, cảm thông hoặc một điều khó diễn đạt bằng lý lẽ đơn thuần.",
    "Moon": "Cảm xúc có thể cần sự dịu dàng và ranh giới để không mang hết tâm trạng xung quanh.",
    "Mercury": "Cách nghĩ có thể dùng liên tưởng, hình ảnh và trực giác trước khi sắp xếp thành lời.",
    "Venus": "Sự gần gũi có thể hiện qua cảm thông, tưởng tượng và những cử chỉ khó gọi tên.",
    "Mars": "Động lực có thể rõ khi hành động gắn với một hình ảnh, lý tưởng hoặc người mình quan tâm.",
    "gift": "Tìm một cách nhìn giàu cảm thông khi lời giải thích thông thường chưa đủ.",
    "balance": "Đồng cảm không có nghĩa biết chắc người khác nghĩ gì; lý tưởng cần một giới hạn có thể thực hiện.",
    "practice": "Gọi tên một điều mình cảm nhận, một điều biết chắc và một việc có thể làm."
  }
];
const PLANET_STORIES = {
  "Sun": {
    "topic": "Bản sắc và định hướng",
    "intro": "Mặt Trời được dùng như biểu tượng về điều muốn chủ động thể hiện và cảm giác sống đúng với mình.",
    "need": "sự tự thể hiện",
    "practice": "Chọn một việc nhỏ mình thực sự muốn làm, rồi nhận phần trách nhiệm của lựa chọn ấy.",
    "question": "Tôi muốn được nhận ra ở điều gì ngoài thành tích?"
  },
  "Moon": {
    "topic": "Cảm xúc và cảm giác an toàn",
    "intro": "Mặt Trăng được đọc như biểu tượng về phản ứng quen thuộc, nhu cầu được chăm sóc và điều giúp mình thấy yên tâm.",
    "need": "nhu cầu cảm xúc",
    "practice": "Gọi tên cảm xúc và nhu cầu trước khi quyết định phải làm gì với chúng.",
    "question": "Điều gì giúp tôi thấy được an ủi mà không phải đoán ý nhau?"
  },
  "Mercury": {
    "topic": "Học hỏi và giao tiếp",
    "intro": "Sao Thủy được dùng để suy ngẫm về cách tiếp nhận thông tin, sắp xếp ý và trao đổi với người khác.",
    "need": "cách nghĩ và diễn đạt",
    "practice": "Thử diễn đạt lại điều người kia vừa nói và hỏi xem mình hiểu đúng chưa.",
    "question": "Tôi có đang nói để được hiểu hay chỉ để khẳng định mình đúng?"
  },
  "Venus": {
    "topic": "Giá trị, tình cảm và điều thấy đẹp",
    "intro": "Sao Kim tượng trưng cho điều ta trân trọng và cách tìm sự dễ chịu, gần gũi hoặc hòa hợp.",
    "need": "giá trị và sự gần gũi",
    "practice": "Nói một cách nhận và thể hiện sự quan tâm mà mình thực sự thích.",
    "question": "Tôi đang lựa chọn vì thấy phù hợp hay vì muốn được yêu thích?"
  },
  "Mars": {
    "topic": "Hành động và ranh giới",
    "intro": "Sao Hỏa được đọc như biểu tượng về cách bắt đầu, theo đuổi mong muốn và phản ứng khi có bất đồng.",
    "need": "động lực hành động",
    "practice": "Chọn một hành động rõ ràng, có sự đồng thuận và giới hạn vừa sức.",
    "question": "Tôi có thể nói điều mình muốn mà không gây sức ép lên người khác không?"
  },
  "Jupiter": {
    "topic": "Mở rộng và niềm tin",
    "intro": "Sao Mộc gợi cách tìm ý nghĩa, học thêm và mở rộng góc nhìn; đây không phải chỉ báo bảo đảm may mắn.",
    "need": "mong muốn mở rộng",
    "practice": "Thử một cách nhìn mới và kiểm tra nó bằng trải nghiệm có giới hạn.",
    "question": "Niềm tin nào đang giúp tôi học, niềm tin nào khiến tôi bỏ qua phản hồi?"
  },
  "Saturn": {
    "topic": "Cấu trúc và trách nhiệm",
    "intro": "Sao Thổ được dùng để đặt câu hỏi về giới hạn, tiêu chuẩn và điều cần thời gian rèn luyện; không phải dự báo trừng phạt.",
    "need": "nhu cầu cấu trúc",
    "practice": "Chia một việc khó thành mốc nhỏ và nói rõ phần mình có thể chịu trách nhiệm.",
    "question": "Tiêu chuẩn này do tôi chọn hay đang mang theo mà chưa xem lại?"
  },
  "Uranus": {
    "topic": "Đổi mới và sự độc lập",
    "intro": "Thiên Vương gợi việc thử cách khác và xem lại các khuôn mẫu đã quen.",
    "need": "mong muốn đổi mới",
    "practice": "Thử thay đổi trên phạm vi nhỏ trước khi quyết định bỏ hẳn cách cũ.",
    "question": "Tôi muốn thay đổi điều gì, và ai sẽ chịu tác động?",
    "slow": true
  },
  "Neptune": {
    "topic": "Tưởng tượng và lý tưởng",
    "intro": "Hải Vương gợi trí tưởng tượng, cảm thông và điều mình lý tưởng hóa; cần phân biệt liên tưởng với điều có thể kiểm chứng.",
    "need": "trí tưởng tượng và lý tưởng",
    "practice": "Viết riêng điều biết chắc, điều đang hy vọng và điều muốn sáng tạo.",
    "question": "Chi tiết thực tế nào tôi dễ bỏ qua vì quá muốn tin một câu chuyện?",
    "slow": true
  },
  "Pluto": {
    "topic": "Đào sâu và thay đổi cách nắm giữ",
    "intro": "Diêm Vương được dùng như biểu tượng về quyền kiểm soát, điều khó buông và những thay đổi sâu trong cách nhìn.",
    "need": "nhu cầu nhìn sâu và làm mới",
    "practice": "Nhận ra một việc nằm trong quyền lựa chọn và một việc cần tôn trọng quyền của người khác.",
    "question": "Điều gì tôi đang cố kiểm soát để tránh phải đối diện với sự chưa chắc chắn?",
    "slow": true
  }
};
const HOUSE_STORIES = [
  [
    "Bản thân và cách xuất hiện",
    "cách bắt đầu, giới thiệu mình và tiếp xúc với môi trường",
    "Tôi muốn chủ động thể hiện điều gì và giữ ranh giới nào?"
  ],
  [
    "Nguồn lực và giá trị",
    "thời gian, đồ vật, năng lực và điều mình coi là đáng giữ",
    "Tôi đang dùng những nguồn lực có hạn cho điều thực sự quan trọng nào?"
  ],
  [
    "Học và trao đổi hằng ngày",
    "cách học, nói, viết và kết nối trong môi trường gần",
    "Thói quen giao tiếp nào giúp tôi hiểu nhau rõ hơn?"
  ],
  [
    "Gốc rễ và không gian riêng",
    "cảm giác thuộc về, nơi chốn riêng và các mối gắn bó nền tảng",
    "Tôi có thể tạo cảm giác ở nhà theo cách phù hợp với mình như thế nào?"
  ],
  [
    "Sáng tạo và niềm vui",
    "cách chơi, thử sức, thể hiện cá tính và tận hưởng",
    "Điều gì tôi vẫn thích làm khi không cần ai chấm điểm?"
  ],
  [
    "Nếp sống và công việc thường ngày",
    "lịch sinh hoạt, việc đều đặn và cách đóng góp trong đời thường",
    "Nếp sống nào đang nâng đỡ tôi, nếp sống nào cần điều chỉnh?"
  ],
  [
    "Quan hệ một đối một",
    "đối thoại, thỏa thuận và cách phối hợp với một người khác",
    "Thỏa thuận nào cần được nói rõ để hai bên có quyền lựa chọn?"
  ],
  [
    "Chia sẻ và sự tin cậy",
    "nguồn lực chung, riêng tư, tính dễ tổn thương và giới hạn",
    "Điều gì có thể chia sẻ và điều gì cần xin phép hoặc giữ riêng?"
  ],
  [
    "Góc nhìn và việc học xa hơn",
    "niềm tin, học hỏi sâu và tiếp xúc với trải nghiệm khác mình",
    "Tôi sẵn sàng xem lại niềm tin nào khi gặp bằng chứng mới?"
  ],
  [
    "Vai trò và đóng góp bên ngoài",
    "trách nhiệm được nhìn thấy, định hướng công việc và điều muốn đóng góp",
    "Tôi muốn được tin cậy ở việc gì, với giới hạn như thế nào?"
  ],
  [
    "Bạn bè và việc chung",
    "mạng lưới bạn bè, nhóm cùng quan tâm và mục tiêu chung",
    "Tôi tìm sự thuộc về ở đâu mà vẫn có thể giữ tiếng nói riêng?"
  ],
  [
    "Khoảng lặng và suy ngẫm",
    "thời gian riêng, điều ít nói ra và cách nghỉ khỏi các vai trò thường ngày",
    "Tôi cần giữ khoảng riêng nào để nghe được mình rõ hơn?"
  ]
];
const ASPECT_STORIES = {
  "0": [
    "Cùng một điểm nhấn",
    "Hai chức năng được đọc như đi cùng nhau, dễ hỗ trợ nhưng cũng dễ bị coi là một.",
    "Phân biệt lúc nào mình cần mỗi phần, thay vì mặc định chúng luôn muốn cùng một điều."
  ],
  "60": [
    "Cơ hội phối hợp",
    "Có thể dùng như lời gợi về một cách kết hợp thuận tiện, thường rõ hơn khi chủ động thực hành.",
    "Chọn một tình huống nhỏ để hai phần cùng đóng góp thay vì chờ sự thuận lợi tự thành kết quả."
  ],
  "90": [
    "Hai nhu cầu cần thương lượng",
    "Trong cách đọc truyền thống, góc vuông gợi hai cách vận hành khó làm cùng một lúc; không có nghĩa đây là một nét xấu.",
    "Xác định nhu cầu của mỗi phía rồi thử một thỏa thuận cụ thể, có thể sửa lại."
  ],
  "120": [
    "Một nhịp phối hợp quen thuộc",
    "Góc tam hợp thường được dùng để suy ngẫm về sự trôi chảy; điều dễ làm cũng có thể ít được chú ý rèn luyện.",
    "Chọn một cách sử dụng có chủ đích cho điều mình thường làm theo quán tính."
  ],
  "180": [
    "Cân bằng hai phía",
    "Góc đối đỉnh gợi hai trọng tâm cần được nhìn thấy cùng lúc, thay vì luôn nghiêng về một phía.",
    "Viết nhu cầu của hai phía và tìm một nhịp luân phiên phù hợp với hoàn cảnh."
  ]
};

const PAIR_LENSES = {
    'Moon|Sun':'Một góc để xem điều muốn thể hiện có đang dành chỗ cho nhu cầu cảm xúc hay chưa.',
    'Mercury|Moon':'Một góc để phân biệt điều mình đang cảm thấy với lời giải thích đang gán cho cảm giác ấy.',
    'Mars|Venus':'Một góc để đối chiếu điều mình coi trọng với cách mình hành động và nói rõ mong muốn.',
    'Mercury|Saturn':'Một góc để thử cân bằng giữa nghĩ kỹ, diễn đạt rõ và cho phép mình chưa có câu trả lời hoàn hảo.',
    'Jupiter|Saturn':'Một góc để đặt mong muốn mở rộng bên cạnh giới hạn và phần trách nhiệm có thể nhận.',
};
function getPlacementReading(planet,unknownTime=false) {
    const s=SIGN_STORIES[planet.index],t=PLANET_STORIES[planet.body];
    if(!s||!t) throw new Error('Thiên thể hoặc cung diễn giải không được hỗ trợ.');
    const house=!unknownTime&&Number.isInteger(planet.house)&&planet.house>=1&&planet.house<=12?HOUSE_STORIES[planet.house-1]:null;
    return {
        title:`${planet.name} tại ${s.name}`,topic:t.topic,intro:t.intro,text:s[planet.body]||s.style,
        gift:s.gift,balance:s.balance,practice:t.practice,
        houseNumber:house?planet.house:null,house:house?`Nhà ${planet.house} · ${house[0]}`:null,
        houseText:house?`Đặt biểu tượng ${t.need} vào bối cảnh ${house[1]}. Đây là cách ghép hai lớp ý nghĩa, không phải một dự báo sự kiện.`:null,
        question:house?house[2]:t.question,
        note:unknownTime?'Vị trí đang đọc là mốc 12:00 địa phương, chưa phải vị trí chắc chắn tại giờ sinh.':t.slow?'Thiên thể di chuyển chậm: vị trí cung được chia sẻ với nhiều người cùng thế hệ; nên đọc cùng nhà và góc hợp.':null,
        slow:!!t.slow,
    };
}
function getAngleReading(kind,longitude) {
    if(longitude===null||longitude===undefined) return null;
    const p=zodiacPosition(longitude),s=SIGN_STORIES[p.index];
    if(kind!=='ASC'&&kind!=='MC') throw new Error('Góc diễn giải không được hỗ trợ.');
    return {
        title:`${kind==='ASC'?'Cung Mọc':'Thiên Đỉnh'} ${s.name}`,
        intro:kind==='ASC'?'Cung Mọc được dùng để suy ngẫm về cách bước vào một tình huống và phong thái dễ được nhìn thấy lúc đầu.':'Thiên Đỉnh gợi câu hỏi về vai trò được nhìn thấy và điều muốn đóng góp ra bên ngoài; không chọn nghề thay cho bạn.',
        text:s.style,balance:s.balance,practice:s.practice,
        question:kind==='ASC'?'Cách tôi xuất hiện lúc đầu có giúp người khác hiểu đúng nhu cầu của tôi không?':'Tôi muốn đóng góp điều gì và có thể chịu trách nhiệm tới đâu?',
    };
}
function getAspectReading(chart,aspect) {
    const a=chart.planets[aspect.a],b=chart.planets[aspect.b],story=ASPECT_STORIES[aspect.angle];
    if(!a||!b||!story) throw new Error('Góc hợp diễn giải không được hỗ trợ.');
    const key=[a.body,b.body].sort().join('|');
    return {
        title:`${a.name} · ${b.name}`,theme:story[0],text:story[1],practice:story[2],
        domains:`${PLANET_STORIES[a.body].need} ↔ ${PLANET_STORIES[b.body].need}`,
        pair:PAIR_LENSES[key]||`Thử quan sát khi ${PLANET_STORIES[a.body].need} và ${PLANET_STORIES[b.body].need} xuất hiện trong cùng một tình huống.`,
        note:chart.unknownTime?'Góc hợp được tính tại mốc 12:00; nhất là góc có Mặt Trăng có thể đổi nhiều khi biết giờ sinh.':null,
    };
}
function getChartDistribution(chart) {
    const elements=['Lửa','Đất','Khí','Nước'],modes=['Tiên phong','Kiên định','Linh hoạt'];
    const total=chart.planets.length;
    if(!total) return {total:0,elements:[],modes:[]};
    const count=(values,key)=>values.map(label=>{
        const n=chart.planets.filter(p=>{if(!SIGN_STORIES[p.index])throw new Error('Cung không hợp lệ.');return SIGN_STORIES[p.index][key]===label;}).length;
        return {label,count:n,percent:n/total*100};
    });
    return {total,elements:count(elements,'element'),modes:count(modes,'mode')};
}
function renderPlacementReading(p,chart,open=false) {
    const r=getPlacementReading(p,chart.unknownTime),e=escapeHtml;
    return `<details class="reading-card" data-planet-reading="${e(p.body)}" ${open?'open':''}><summary><span><span class="reading-kicker">${e(r.topic)} · ${e(p.degree)}</span><strong>${e(r.title)}</strong></span><span class="reading-chevron" aria-hidden="true">＋</span></summary><div class="reading-body"><p class="reading-context">${e(r.intro)}</p><p>${e(r.text)}</p><p><strong>Góc thuận để thử.</strong> ${e(r.gift)}</p><p><strong>Điểm cần cân bằng.</strong> ${e(r.balance)}</p>${r.house?`<div class="reading-location"><strong>${e(r.house)}</strong><p>${e(r.houseText)}</p></div>`:''}<p><strong>Một cách thực hành.</strong> ${e(r.practice)}</p><blockquote>${e(r.question)}</blockquote>${r.note?`<p class="reading-footnote">${e(r.note)}</p>`:''}</div></details>`;
}
function renderAstroReadings(chart) {
    const e=escapeHtml,sun=chart.planets.find(p=>p.body==='Sun'),moon=chart.planets.find(p=>p.body==='Moon');
    const d=getChartDistribution(chart);
    let html='<section class="reading-section" aria-label="Diễn giải bản đồ sao"><div class="section-header"><h2>Đọc bản đồ sao theo từng lớp</h2></div>';
    html+='<div class="reading-overview"><span class="eyebrow">THIÊN THỂ · CUNG · NHÀ · GÓC HỢP</span><h3>Không chỉ có cung Mặt Trời.</h3><p>Thiên thể đặt câu hỏi về một chức năng; cung gợi phong cách thể hiện; nhà chỉ bối cảnh; góc hợp gợi cách hai chức năng tương tác. Đây là phép ghép các biểu tượng truyền thống, không phải kết luận độc lập về con người.</p>';
    html+=`<p><strong>Mặt Trời ${e(ZODIAC[sun.index])}:</strong> ${e(SIGN_STORIES[sun.index].Sun)}<br><strong>Mặt Trăng ${e(ZODIAC[moon.index])}${chart.unknownTime?' (mốc 12:00)':''}:</strong> ${e(SIGN_STORIES[moon.index].Moon)}</p>`;
    html+=`<p>${sun.index===moon.index?'Hai vị trí cùng cung: một phong cách xuất hiện ở cả lớp tự thể hiện lẫn cảm xúc; không có nghĩa hai lớp luôn giống nhau.':'Hai vị trí khác cung: cách muốn thể hiện và cách tìm cảm giác an toàn có thể cần những điều khác nhau. Hãy xem tình huống thực tế thay vì coi đó là mâu thuẫn cố định.'}</p>`;
    html+=chart.unknownTime?'<p class="reading-footnote">Chưa biết giờ sinh: mọi diễn giải dùng mốc 12:00, không đọc ASC/MC/nhà. Các vị trí và góc hợp có thể thay đổi, đặc biệt Mặt Trăng.</p>':'<p class="reading-footnote">Mở từng mục để đọc vị trí theo cung và nhà Whole Sign. Mô tả là gợi ý chiêm nghiệm; không dùng để đánh giá hay quyết định thay một người.</p>';
    html+='</div><nav class="reading-nav" aria-label="Các phần diễn giải bản đồ sao"><a href="#astro-planets">Thiên thể</a>'+(chart.angles?'<a href="#astro-houses">12 nhà</a>':'')+'<a href="#astro-aspects">Góc hợp</a><a href="#astro-distribution">Nguyên tố</a><a href="#astro-reading-sources">Nguồn</a></nav><div class="reading-grid" id="astro-planets">'+chart.planets.map((p,i)=>renderPlacementReading(p,chart,i===0)).join('')+'</div>';
    if(chart.angles){
        html+='<div class="section-header"><h2>Cung Mọc &amp; Thiên Đỉnh</h2></div><div class="reading-grid">';
        for(const [kind,lon] of [['ASC',chart.angles.ascendant],['MC',chart.angles.midheaven]]){
            const r=getAngleReading(kind,lon);
            html+=`<details class="reading-card" data-angle-reading="${kind}"><summary><span><span class="reading-kicker">${kind} · ${e(zodiacPosition(lon).degree)}</span><strong>${e(r.title)}</strong></span><span class="reading-chevron" aria-hidden="true">＋</span></summary><div class="reading-body"><p class="reading-context">${e(r.intro)}</p><p>${e(r.text)}</p><p>${e(r.balance)}</p><p><strong>Thử.</strong> ${e(r.practice)}</p><blockquote>${e(r.question)}</blockquote></div></details>`;
        }
        html+='</div><div class="section-header" id="astro-houses"><h2>12 nhà: những bối cảnh trong đời sống</h2></div><p class="reading-footnote">Nhà trống chỉ nghĩa là không có một trong 10 thiên thể đang tính ở đó. Không có nghĩa lĩnh vực ấy vắng mặt, yếu hoặc xấu. Nhà Whole Sign có thể khác cách chia nhà của website dùng Placidus.</p><div class="reading-grid">';
        HOUSE_STORIES.forEach((h,i)=>{
            const occupants=chart.planets.filter(p=>p.house===i+1);
            html+=`<details class="reading-card" data-house-reading="${i+1}"><summary><span><span class="reading-kicker">NHÀ ${i+1} · ${occupants.length} thiên thể</span><strong>${e(h[0])}</strong></span><span class="reading-chevron" aria-hidden="true">＋</span></summary><div class="reading-body"><p>Góc nhìn về ${e(h[1])}.</p><p>${occupants.length?'Các vị trí trong nhà này: '+occupants.map(p=>e(p.name)+' tại '+e(ZODIAC[p.index])).join(' · ')+'.':'Không có thiên thể đang xét trong nhà này; điều đó không mô tả giá trị hoặc mức độ quan trọng của lĩnh vực này.'}</p><blockquote>${e(h[2])}</blockquote></div></details>`;
        });
        html+='</div>';
    }
    html+='<div class="section-header" id="astro-aspects"><h2>Hiểu các góc hợp đang có</h2></div><p class="reading-footnote">Sắp theo độ lệch góc từ nhỏ đến lớn, không phải điểm tốt/xấu hay độ tin cậy của lời diễn giải. Chỉ đọc năm loại góc đã tính trong ngưỡng 6°.</p><div class="reading-grid">';
    html+=chart.aspects.map(a=>{
        const r=getAspectReading(chart,a);
        return `<details class="reading-card" data-aspect-reading="${a.a}-${a.b}"><summary><span><span class="reading-kicker">${e(a.name)} ${a.angle}° · lệch ${a.orb.toFixed(2)}°</span><strong>${e(r.title)}</strong></span><span class="reading-chevron" aria-hidden="true">＋</span></summary><div class="reading-body"><p class="reading-context">${e(r.domains)}</p><p><strong>${e(r.theme)}.</strong> ${e(r.text)}</p><p>${e(r.pair)}</p><p><strong>Thử trong đời thường.</strong> ${e(r.practice)}</p>${r.note?`<p class="reading-footnote">${e(r.note)}</p>`:''}</div></details>`;
    }).join('')||'<p>Không có góc hợp trong ngưỡng đã chọn; điều này không có nghĩa các phần trong bạn không tương tác.</p>';
    html+='</div><div class="section-header" id="astro-distribution"><h2>Phân bố nguyên tố &amp; tính chất</h2></div><div class="reading-grid">';
    for(const [title,items] of [['Nguyên tố',d.elements],['Tính chất',d.modes]]) html+=`<div class="distribution-card"><h3>${title}</h3>${items.map(x=>`<div class="distribution-row"><span>${e(x.label)}</span><span>${x.count}/${d.total}</span><div class="distribution-track"><i style="width:${x.percent}%"></i></div></div>`).join('')}</div>`;
    html+='</div><p class="reading-footnote">Đếm mỗi thiên thể một lần với trọng số bằng nhau; không tính ASC/MC. Đây là thống kê vị trí theo cung, không phải phép xác định “nguyên tố trội” đầy đủ hoặc phần trăm tính cách. Lửa gợi hành động; Đất gợi cụ thể; Khí gợi trao đổi; Nước gợi cảm nhận. Tiên phong / Kiên định / Linh hoạt gợi bắt đầu / duy trì / điều chỉnh. Số 0 không có nghĩa thiếu phẩm chất.</p>';
    html+='<details class="reading-sources" id="astro-reading-sources"><summary>Nguồn tham khảo &amp; cách biên soạn</summary><p>NUMEN viết mới các đoạn tiếng Việt và ghép theo vị trí đã tính; không sao chép hoặc dịch nguyên phần luận giải cá nhân của website khác. Tham khảo khung khái niệm và thuật ngữ từ:</p><ul><li><a href="https://cafeastrology.com/articles/planetsinastrology.html" target="_blank" rel="noopener">Cafe Astrology · Các thiên thể và góc bản đồ</a></li><li><a href="https://cafeastrology.com/natal/planetsinhouses.html" target="_blank" rel="noopener">Cafe Astrology · Thiên thể trong nhà</a></li><li><a href="https://cafeastrology.com/articles/housesofthehoroscope.html" target="_blank" rel="noopener">Cafe Astrology · 12 nhà</a></li><li><a href="https://cafeastrology.com/articles/aspectsinastrology.html" target="_blank" rel="noopener">Cafe Astrology · Góc hợp</a></li><li><a href="https://cafeastrology.com/natal/elements-astrology.html" target="_blank" rel="noopener">Cafe Astrology · Nguyên tố</a> / <a href="https://cafeastrology.com/natal/thequalitiesinastrology.html" target="_blank" rel="noopener">Tính chất</a></li></ul><p>Các mô tả chỉ là gợi ý tự quan sát theo truyền thống; chưa được khoa học xác nhận là công cụ đánh giá tính cách hoặc dự đoán. Khi những mô tả khác nhau, không tự chọn một đoạn để áp đặt lên người khác.</p></details></section>';
    return html;
}

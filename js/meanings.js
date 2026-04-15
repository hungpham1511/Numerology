// ================================================================
// MEANINGS DATA  (js/meanings.js)
// ================================================================

const MEANINGS = {
    1: {
        icon: '🦁', title: 'Số 1 · Người Tiên Phong',
        desc: 'Bạn sinh ra để dẫn đầu. Số 1 mang năng lượng khởi đầu mạnh mẽ, ý chí sắt đá và khả năng độc lập vượt trội. Người mang số này tự tin bước vào những lãnh thổ chưa ai khai phá, trở thành người định hướng và truyền cảm hứng cho người xung quanh.',
        keywords: ['Lãnh đạo', 'Tiên phong', 'Độc lập', 'Sáng tạo', 'Quyết đoán'],
        shadow: 'Dễ có xu hướng độc đoán, tự cao và thiếu lắng nghe người khác. Đôi khi cứng nhắc và khó chia sẻ quyền kiểm soát.',
    },
    2: {
        icon: '🕊️', title: 'Số 2 · Người Hợp Tác',
        desc: 'Nhạy cảm, nhân ái và có tài ngoại giao thiên bẩm. Số 2 là sợi dây kết nối — bạn tìm thấy niềm vui trong việc làm cho những mối quan hệ trở nên hài hòa, điều giải xung đột và hỗ trợ người khác từ hậu trường.',
        keywords: ['Hợp tác', 'Ngoại giao', 'Nhạy cảm', 'Hòa giải', 'Trực giác'],
        shadow: 'Dễ quá phụ thuộc vào sự chấp thuận của người khác, thiếu lập trường và bỏ qua nhu cầu của bản thân.',
    },
    3: {
        icon: '🎨', title: 'Số 3 · Người Sáng Tạo',
        desc: 'Bạn là ánh sáng trong phòng — tràn đầy năng lượng, óc hài hước và tài biểu đạt. Số 3 mang năng lực sáng tạo vượt bậc, có thể truyền đạt ý tưởng qua lời nói, nghệ thuật hoặc văn chương khiến người nghe mê đắm.',
        keywords: ['Sáng tạo', 'Biểu đạt', 'Lạc quan', 'Nghệ thuật', 'Giao tiếp'],
        shadow: 'Dễ phân tán, thiếu tập trung và bỏ dở việc giữa chừng. Đôi khi nói nhiều hơn làm và tránh né cảm xúc sâu.',
    },
    4: {
        icon: '🏗️', title: 'Số 4 · Người Xây Dựng',
        desc: 'Kiên nhẫn, tỉ mỉ và đáng tin cậy như đá tảng. Số 4 xây dựng mọi thứ từ nền móng vững chắc — từ sự nghiệp, gia đình đến các hệ thống. Bạn là người mà mọi người tìm đến khi cần sự ổn định và bền vững thực sự.',
        keywords: ['Kỷ luật', 'Bền bỉ', 'Thực tế', 'Tổ chức', 'Đáng tin'],
        shadow: 'Dễ trở nên quá cứng nhắc, chống lại sự thay đổi và kiệt sức vì làm việc quá mức. Đôi khi chú trọng vật chất hơn tình cảm.',
    },
    5: {
        icon: '🦋', title: 'Số 5 · Người Tự Do',
        desc: 'Không thể bị giam cầm — bạn sinh ra để khám phá, trải nghiệm và biến đổi. Số 5 yêu thích sự đa dạng, du lịch và bất kỳ điều gì mới mẻ. Bạn thích nghi nhanh và có khả năng kết nối với mọi loại người.',
        keywords: ['Tự do', 'Phiêu lưu', 'Linh hoạt', 'Đa năng', 'Năng động'],
        shadow: 'Dễ thiếu ổn định, sợ cam kết và tìm kiếm kích thích liên tục, dẫn đến bỏ lỡ chiều sâu trong các mối quan hệ.',
    },
    6: {
        icon: '💝', title: 'Số 6 · Người Chăm Sóc',
        desc: 'Trái tim của cộng đồng. Số 6 mang tình yêu vô điều kiện, tinh thần trách nhiệm sâu sắc và thiên hướng bảo vệ người mình yêu thương. Bạn tạo ra không gian an toàn và ấm áp để người khác được nghỉ ngơi và chữa lành.',
        keywords: ['Yêu thương', 'Trách nhiệm', 'Gia đình', 'Hòa bình', 'Bảo vệ'],
        shadow: 'Dễ trở thành người hy sinh thái quá, kiểm soát từ sự lo lắng và khó chấp nhận khi người khác không làm đúng ý mình.',
    },
    7: {
        icon: '🔭', title: 'Số 7 · Người Tìm Kiếm',
        desc: 'Tâm hồn triết học với trí tuệ sâu thẳm. Số 7 không chấp nhận câu trả lời bề mặt — bạn đào sâu vào bản chất của vạn vật, từ khoa học đến tâm linh, để tìm ra sự thật ẩn sau tất cả. Trực giác của bạn rất đặc biệt.',
        keywords: ['Trí tuệ', 'Trực giác', 'Chiều sâu', 'Tâm linh', 'Phân tích'],
        shadow: 'Dễ thu mình lại, khó tin tưởng người khác và sống quá nhiều trong đầu. Đôi khi lạnh lùng hoặc bi quan trước thực tại.',
    },
    8: {
        icon: '👑', title: 'Số 8 · Người Thành Đạt',
        desc: 'Quyền năng và tầm nhìn kinh doanh hiếm có. Số 8 biết cách biến nguồn lực thành kết quả — không chỉ về vật chất mà còn về tầm ảnh hưởng và di sản. Bạn hiểu sâu về chu kỳ nhân-quả và cân bằng vũ trụ.',
        keywords: ['Thành công', 'Quyền lực', 'Tham vọng', 'Tài chính', 'Di sản'],
        shadow: 'Dễ bị cuốn vào tham vọng, bỏ qua cảm xúc bản thân và người thân. Đôi khi độc đoán hoặc ám ảnh với sự kiểm soát.',
    },
    9: {
        icon: '🌍', title: 'Số 9 · Người Nhân Văn',
        desc: 'Linh hồn vĩ đại nhất — bác ái, lý tưởng và tầm nhìn toàn nhân loại. Số 9 đã trải qua tất cả các số trước và mang trí tuệ tổng hợp. Bạn có khả năng chữa lành, truyền cảm hứng và đóng góp cho điều lớn lao hơn bản thân.',
        keywords: ['Bác ái', 'Nhân văn', 'Lý tưởng', 'Buông bỏ', 'Truyền cảm hứng'],
        shadow: 'Dễ hy sinh bản thân đến kiệt sức, khó buông bỏ quá khứ và đôi khi xa cách vì tư duy quá lý tưởng.',
    },
    11: {
        icon: '✨', title: 'Số 11 · Master Number – Người Soi Sáng',
        desc: 'Con số thiêng liêng nhất. Số 11 mang trực giác siêu việt, khả năng kết nối với nguồn năng lượng cao hơn và sứ mệnh truyền sáng tới thế giới. Bạn cảm nhận được những điều người khác không thể thấy và thường là chất xúc tác cho sự thức tỉnh của tập thể.',
        keywords: ['Tâm linh', 'Trực giác mạnh', 'Truyền cảm hứng', 'Sứ mệnh', 'Soi sáng'],
        shadow: 'Dễ chịu áp lực của kỳ vọng cao, lo âu mãn tính và cảm giác không thuộc về nơi này. Phải học cân bằng giữa lý tưởng và thực tại.',
    },
    22: {
        icon: '🏛️', title: 'Số 22 · Master Number – Người Xây Dựng Vĩ Đại',
        desc: 'Master Builder — người duy nhất có thể biến ước mơ thành công trình vĩ đại. Số 22 kết hợp tầm nhìn của số 11 với năng lực thực thi của số 4, tạo ra những điều có thể thay đổi hàng ngàn cuộc đời. Đây là tiềm năng cao nhất để lại di sản.',
        keywords: ['Tầm nhìn lớn', 'Thực thi xuất sắc', 'Di sản', 'Quy mô', 'Bứt phá'],
        shadow: 'Gánh nặng quá lớn dễ dẫn đến tê liệt, sợ thất bại và đôi khi thu mình sống với năng lượng số 4 thay vì bộc lộ toàn bộ tiềm năng.',
    },
    33: {
        icon: '🙏', title: 'Số 33 · Master Number – Người Thầy Yêu Thương',
        desc: 'Tình yêu vô điều kiện ở cấp độ cao nhất. Số 33 là Master Teacher — sứ mệnh là giảng dạy, chữa lành và nâng đỡ nhân loại bằng tình thương thuần khiết. Ảnh hưởng của bạn không ồn ào nhưng sâu sắc và biến đổi cuộc đời người khác.',
        keywords: ['Tình yêu vô điều kiện', 'Chữa lành', 'Giảng dạy', 'Phụng sự', 'Cao cả'],
        shadow: 'Dễ bị lợi dụng, mang vác gánh nặng của người khác đến kiệt cùng. Cần học đặt ranh giới lành mạnh và yêu thương bản thân trước.',
    },
};

const KARMIC_MEANINGS = {
    1: 'Cần học cách tự tin, độc lập và chủ động hơn trong cuộc sống.',
    2: 'Cần học cách hợp tác, kiên nhẫn và nhạy cảm với người khác.',
    3: 'Cần học cách biểu đạt bản thân, giao tiếp và sáng tạo hơn.',
    4: 'Cần học cách kỷ luật, tổ chức và xây dựng nền tảng vững chắc.',
    5: 'Cần học cách chấp nhận thay đổi, linh hoạt và tự do hơn.',
    6: 'Cần học cách yêu thương, trách nhiệm và chăm sóc người khác.',
    7: 'Cần học cách suy ngẫm, tin tưởng trực giác và tìm kiếm chiều sâu.',
    8: 'Cần học cách quản lý tài chính, quyền lực và sự thành công.',
    9: 'Cần học cách bao dung, rộng lượng và phụng sự cộng đồng.',
};

# Rà soát NUMEN — 27/10/2026

Phạm vi: sửa bản gốc commit `aeb0dff` tại `D:/Hobby/Numerology`, đổi UI, tối ưu tải và thêm bản đồ sao. Báo cáo được lập trước khi commit/deploy; trạng thái phát hành xem trong lịch sử Git và Vercel.

## Kết luận công thức

Bản gốc không đúng hết. Bản mới kiểm tra phép tính theo quy ước công bố; không khẳng định mọi trường phái thần số học có cùng kết quả hay các diễn giải là khoa học.

| Hạng mục | Kết quả rà soát |
|---|---|
| Ngày tháng | Sửa việc nhận 31/02, ngày thập phân và năm ngoài giới hạn. Kiểm tra Gregorian, nhuận và 1900–2100 cho cả hai công cụ số học. |
| Tên | Giữ bỏ dấu Unicode/Đ → D; chặn tên chỉ có số/ký tự không hỗ trợ/quá 100 ký tự; cho khoảng trắng, gạch nối, nháy đơn. |
| Chữ Y | Trước đây luôn là phụ âm; nay cho chọn độc lập trong hai biểu mẫu, mặc định nguyên âm với tên Việt. Không tự đoán phát âm tên nước ngoài. |
| Đường đời | Đúng theo phương pháp rút riêng từng thành phần và giữ 11/22/33; giữ công thức và làm rõ mô tả. |
| Ba chỉ số tên | Giữ bảng A–Z và cộng giá trị. Sửa Y; không có nguyên âm/phụ âm thì trả về không xác định (—) thay vì số 0 để luận giải. |
| Ngày sinh | Giữ dạng rút gọn 1–9, công khai rằng khác hệ 1–31 hoặc giữ Master Number. |
| Cầu nối | Trước đây hai cầu nối xử lý Master Number khác nhau. Nay cả hai vế về 1–9 trước khi trừ. Thêm Đường đời–Vận mệnh, ghi rõ Đường đời–Ngày sinh là bổ sung. |
| Đỉnh cao | Trước đây bỏ cả kết quả 11; nay giữ Master Number ở kết quả. Thành phần đầu vào dùng 1–9 theo quy ước. Khoảng tuổi liên tiếp, không trùng. |
| Thử thách | Bốn phép lấy hiệu đúng; giữ nguyên. 0 hợp lệ. |
| Ba giai đoạn | Sửa việc dùng lại mốc đỉnh cao và bỏ Master Number: lấy năm cá nhân 1 đầu tiên từ năm tròn 27 tuổi; giai đoạn giữa 27 năm; giữ Master Number. Tuổi là mốc gần đúng theo năm lịch. |
| Năm/tháng cá nhân | Phép cộng về 1–9 đúng; thêm kiểm tra năm/tháng tính, không cho parseInt âm thầm bỏ phần lẻ. |
| Nghiệp/biểu đồ sinh | Đếm số 1–9, bỏ 0 đúng; giữ nguyên. Ý nghĩa mũi tên là nội dung truyền thống tham khảo. |
| Gợi ý tên | Đồng nhất Y/cầu nối với công cụ chính, giữ loại trùng; sửa trọng số 40/20/20/20 và bonus làm vượt 100. Hiển thị đúng số tổ hợp duy nhất (nam 850, nữ 875). Điểm nội bộ, mục tiêu không phải bộ lọc bắt buộc. |
| Điều khiển | Bỏ Enter toàn trang gây tính nhầm công cụ; submit riêng từng form, bỏ kết quả cũ khi sửa dữ liệu, thêm label/trạng thái nút/lỗi tại form. |

Nguồn đối chiếu: [tự tính](https://www.worldnumerology.com/do-your-own-reading/), [cầu nối](https://www.worldnumerology.com/numerology-bridge-numbers/), [giai đoạn](https://www.worldnumerology.com/numerology-period-cycles/), [Master Number](https://www.numerology.com/articles/about-numerology/master-numbers/). Quy ước Y, ngày sinh, rút gọn và đỉnh cao được ghi riêng trong README/giao diện.

## Bản đồ sao

Astronomy Engine 2.1.19 cố định, kèm giấy phép. `GeoVector` EQJ chuyển bằng `Ecliptic` sang true ecliptic/equinox of date; không dùng nhầm kinh độ nhật tâm/J2000. ASC là giao chân trời–hoàng đạo phía Đông; MC là giao kinh tuyến–hoàng đạo phía trên. Nhà Whole Sign theo cung chứa ASC.

Đối chiếu độc lập 11 lá số với Swiss Ephemeris / pysweph 2.10.3.6, Moshier, địa tâm biểu kiến, Tropical: 110 vị trí thiên thể, 22 góc ASC/MC. Mẫu gồm 1900, 1950, 1985, 2000, 2024, 2026, 2050, 2100; Bắc/Nam bán cầu, xích đạo.

- Sai lệch lớn nhất hành tinh: **0,019010°**, khoảng 1,14 phút cung; ngưỡng test 0,03°.
- Sai lệch lớn nhất ASC/MC: **0,000747°**, khoảng 2,69 giây cung; ngưỡng test 0,003°.

Đây là kết quả trên tập mẫu, không bảo đảm sai số tối đa cho mọi ngày. Sai giờ/nơi sinh, múi giờ lịch sử và vị trí sát ranh cung có thể thay đổi kết quả. Không biết giờ sinh chỉ tính mốc 12:00 và ẩn ASC/MC/nhà.

## Tốc độ tải

Tổng file nội bộ tham chiếu khi mở trang từ **115.123 byte** xuống khoảng **66 KB**, giảm khoảng **42,5%**. Đây là tổng kích thước HTML/CSS/script, chưa gzip; không tính Google Fonts của bản cũ. Không phải benchmark tốc độ mạng thực tế.

CSS từ 38.135 xuống 16.030 byte. Bỏ font ngoài, canvas/blur animation, đọc vị trí mọi `.reveal` mỗi lần scroll, delay giả 450ms số học và 400ms gợi ý tên. Tách module theo nhu cầu; thư viện thiên văn 116.424 byte chỉ tải khi tính bản đồ sao.

Một lần reload localhost có cache: FCP 68ms, DOMContentLoaded 48,8ms, trước bước tách thêm module số học. Chỉ là quan sát cục bộ; chưa benchmark production, mạng chậm hay điện thoại thật.

## Bằng chứng kiểm tra

`node --test tests/engine.test.cjs`: **13/13 nhóm qua**. Gồm reduction/trace với 1–9999 ở hai chế độ, tên Unicode/Đ/Y, thiếu nguyên âm, nhuận 1900/2000, Master Number, cầu nối, đỉnh cao, thử thách, chu kỳ, xếp hạng tên, DST gap/overlap, hình học ASC/MC tại nhiều vĩ độ và mẫu Swiss độc lập.

Trình duyệt desktop (nội dung 1265px) và mobile (viewport 390px, nội dung 375px): đã thử tính số, tên không có nguyên âm, 30 gợi ý tên, bản đồ sao có giờ, chưa biết giờ, lỗi DST lặp. Không có lỗi console hoặc tràn ngang trong các trạng thái kiểm tra. Ảnh ở `docs/screenshots/`.

## Giới hạn

Chưa geocoding mọi địa điểm; nơi khác nhập tọa độ/múi giờ thủ công. Whole Sign, chưa Placidus/Chiron/La Hầu/Kế Đô/nghịch hành. Diễn giải mới là gợi ý theo cung Mặt Trời. Chưa thử mọi trình duyệt hoặc hosting production. Độ đúng phép tính không chứng minh giá trị khoa học của diễn giải.

## Cập nhật giao diện tím

Theo yêu cầu sau bản phát hành `8040613`: đổi nền tím đêm, điểm hồng/cyan, thẻ nhiều màu và SVG bản đồ sao theo theme. Thêm animation xử lý 360ms đồng thời tải module, hiệu ứng xuất hiện thẻ, trạng thái aria-busy và hủy kết quả cũ khi đổi đầu vào/công cụ. Không đổi công thức. Chế độ giảm chuyển động bỏ cả nhịp animation.

Đã thử trạng thái đang tính và hoàn tất ở ba công cụ, mobile 390px không tràn ngang, và chế độ giảm chuyển động. 13/13 nhóm test công thức vẫn qua. Tải đầu gồm HTML/CSS/engine/main hiện là 77,092 byte, vẫn không tải font ngoài hoặc thư viện thiên văn lúc mở trang; con số 66 KB/42,5% ở mục trước thuộc bản `8040613`.

## Cập nhật diễn giải mở rộng

Sau bản theme tím `0ae8875`: thêm nội dung tiếng Việt theo vai trò chỉ số, chu kỳ, giai đoạn, thử thách, gợi ý tên và các lớp bản đồ sao. Các đoạn khẳng định số phận hoặc năng lực vượt trội trong bảng ý nghĩa cũ được thay bằng chủ đề, thực hành và câu hỏi. Nguồn, cách ghép theo mẫu và giới hạn được công bố trong [INTERPRETATIONS.md](INTERPRETATIONS.md) và trên giao diện. Không đổi công thức tính. Bộ kiểm thử mở rộng: 21/21 nhóm qua.

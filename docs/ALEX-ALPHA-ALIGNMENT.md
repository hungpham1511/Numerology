# Đối chiếu mục lục Thần số học dễ hiểu — Alex Alpha và Huyền Minh Group

## Phạm vi yêu cầu

Ngày 27/10/2026, người dùng xác nhận ưu tiên kiểm tra danh mục phần tính số theo mục lục, sau đó cung cấp 5 ảnh của tr. 10–18. Bản đối chiếu này dùng chính ảnh người dùng gửi; không suy ra công thức từ một tiêu đề mục lục và không yêu cầu toàn văn sách để hoàn thành bước kiểm tra danh mục.

Ảnh nguồn nằm trong cuộc trò chuyện, không đưa ảnh cá nhân hoặc ảnh sách vào repository công khai. Photo 1: tr. 10–11; Photo 2: tr. 12–13; Photo 3: tr. 14–15; Photo 4: tr. 16–17; Photo 5: tr. 18.

## Kết luận

**Đủ 14/14 nhóm được liệt kê trong chương 3, Cách tính các con số chủ chốt (tr. 45–53).** Đây là kết quả kiểm tra phạm vi chức năng và tên gọi, không phải chứng nhận từng công thức đã trùng sách.

| STT | Mục tính trong sách | Trang cách tính | Code hiện có |
|---|---|---|---|
| 1 | Số linh hồn | 46 | `getNameNumbers().soul` |
| 2 | Số vận mệnh | 47 | `getNameNumbers().destiny` |
| 3 | Số nhân cách | 48 | `getNameNumbers().personality` |
| 4 | Số đường đời | 49 | `calcLifePath` |
| 5 | Số ngày sinh | 49 | `calcBirthday` |
| 6 | Cầu nối linh hồn–nhân cách | 49 | `calcBridgeNumbers().soulPersonality` |
| 7 | Cầu nối đường đời–ngày sinh | 49 | `calcBridgeNumbers().lifePathBirthday` |
| 8 | Bốn đỉnh cao | 51 | `calcPinnacles` |
| 9 | Bốn thử thách | 51 | `calcChallenges` |
| 10 | Ba giai đoạn | 52 | `calcLifePeriods` |
| 11 | Số năm cá nhân | 52 | `calcPersonalYear` |
| 12 | Số tháng cá nhân | 53 | `calcPersonalMonth` |
| 13 | Bài học nghiệp | 53 | `calcKarmicLessons` |
| 14 | Biểu đồ ngày sinh | 53 | `calcPythagorasChart` |

## Sai khác và thay đổi đã thực hiện

- **Sửa nhãn cầu nối.** Cầu nối Đường đời–Ngày sinh được nêu trong mục 3.7 (tr. 49) và mục 4.G (tr. 160); không gọi nó là chỉ số bổ sung nữa. Hai cặp trong sách được xếp trước. Cặp Đường đời–Vận mệnh vẫn có trên NUMEN nhưng được ghi là phần bổ sung ngoài danh mục mục lục này.
- **Phân biệt bài học nghiệp và nợ nghiệp.** Mục 4.J (tr. 185–192) có bài học nghiệp 1–9; mục 4.K (tr. 193–198) có nợ nghiệp 13, 14, 16, 19. NUMEN đang có nhóm đầu, chưa có phép xác định riêng nhóm sau. Không dùng số thiếu trong tên để gán nợ nghiệp, cũng không gán chỉ vì sinh ngày 13/14/16/19 khi chưa có quy tắc của sách.
- **Thông tin nguồn được cập nhật.** Không tiếp tục nói chưa có mục lục; ghi rõ đã kiểm đủ 14 nhóm và công thức chi tiết chưa được đối chiếu. Thuật toán số học giữ nguyên.

## Những điểm mục lục chưa đủ để xác nhận

| Nội dung thấy trong ảnh | NUMEN hiện tại | Cách ghi nhận |
|---|---|---|
| Ý nghĩa chung có 11/2, 22/4, 33/6; Đường đời và Vận mệnh có các mục 11/22/33 | Giữ số đặc biệt ở các thành phần và tổng theo quy ước hiện có | Xác nhận có các số đặc biệt trong sách; mục lục không chỉ ra chính xác bước dừng rút gọn |
| Linh hồn, Nhân cách, Ngày sinh, Đỉnh cao được liệt kê 1–9 | Linh hồn/Nhân cách/Đỉnh cao hiện có thể giữ 11/22/33; Ngày sinh về 1–9 | Ghi nhận khác biệt phạm vi liệt kê; chưa tự đổi công thức chỉ từ việc không có tiêu đề 11/22/33 |
| Cầu nối và Thử thách được liệt kê 0–8 | Phép hiệu trong engine cho 0–8, có diễn giải riêng cho 0 | Phạm vi kết quả phù hợp danh mục |
| Năm và tháng cá nhân được liệt kê 1–9 | Engine luôn rút gọn về 1–9 | Phạm vi kết quả phù hợp danh mục |
| Chương Nguyên âm trong Thần số học (tr. 231) | Bỏ dấu tiếng Việt, Đ→D; Y lựa chọn thủ công | Chưa thể suy ra quy tắc Y hoặc các ngoại lệ phát âm từ tên chương |
| Ba giai đoạn (tr. 52), đỉnh cao/thử thách | Có công thức và mốc tuổi được công bố trên web | Mục lục không xác nhận cách chốt mốc tuổi |

Các mục cuối sách: luận giải cho nhóm (tr. 221), ví dụ thực tế (tr. 225), nguyên âm (tr. 231), tài liệu tham khảo (tr. 241). NUMEN chưa có công cụ luận giải nhóm; các ví dụ hiện tại là nội dung tự biên soạn, không phải các ví dụ ở chương 6 của sách. Gợi ý tên và bản đồ sao là chức năng thêm của NUMEN, không tính vào 14 nhóm chương 3.

## Nguồn công khai bổ trợ

[Thái Hà](https://nhasachthaiha.vn/products/than-so-hoc-de-hieu) cung cấp giới thiệu và trích đoạn Vận mệnh 1–2. Nội dung này được dùng đối chiếu chủ đề, không thay ảnh mục lục hoặc công thức trong sách. Không sao chép lời luận hoặc trình bày sự tương đồng chủ đề như bằng chứng đánh giá tính cách.

## Xác minh triển khai

Chỉnh thứ tự/nhãn và thông tin nguồn; không thay engine, cách xử lý chữ Y, số đặc biệt, phép tính hay mốc tuổi. Chạy bộ kiểm tra hiện có và kiểm tra ba thẻ cầu nối trên trình duyệt trước khi phát hành.

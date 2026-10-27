# NUMEN · Thần số học & Bản đồ sao

Web tĩnh tiếng Việt: thần số học Pythagoras, gợi ý tên và bản đồ sao cá nhân. HTML/CSS/JavaScript thuần; không build, tài khoản hoặc API key. Dữ liệu được tính trong trình duyệt và không lưu vào storage.

## Chạy và kiểm tra

Mở `index.html` trực tiếp, hoặc chạy từ thư mục project:

```powershell
python -m http.server 4323 --bind 127.0.0.1
# Mở http://127.0.0.1:4323
node --test tests/*.test.cjs
```

Test dùng Node.js với `node:test`, không cần npm package. [Báo cáo rà soát](docs/AUDIT.md) ghi các thay đổi công thức, kết quả đối chiếu và giới hạn.

## Quy ước tính

- Đường đời: rút gọn riêng ngày/tháng/năm, giữ 11/22/33 ở mỗi thành phần và tổng.
- Tên: bỏ dấu, Đ → D; bảng A–Z Pythagoras. Y theo lựa chọn, mặc định nguyên âm với tên tiếng Việt. Tên tiếng Anh cần chọn theo cách phát âm.
- Ngày sinh: dạng rút gọn 1–9, ngày gốc có trong phần cách tính; khác hệ giữ nguyên 1–31 hoặc giữ Master Number.
- Cầu nối: hiệu tuyệt đối khi cả hai chỉ số về 1–9. Có Linh hồn–Nhân cách và Đường đời–Ngày sinh như mục lục sách; Đường đời–Vận mệnh là cặp bổ sung ngoài danh mục đó.
- Đỉnh cao: thành phần ngày/tháng/năm về 1–9, giữ Master Number ở kết quả cộng; tuổi kết thúc đỉnh đầu = 36 − Đường đời rút gọn. Thử thách dùng 0–8.
- Ba giai đoạn giữ Master Number trong tháng/ngày/năm; chuyển ở năm cá nhân 1 đầu tiên từ năm tròn 27 tuổi, sau đó 27 năm. Tuổi là mốc theo năm lịch, không phải ngày chuyển chính xác.
- Năm/tháng cá nhân theo năm lịch, rút gọn về 1–9.
- Gợi ý tên: điểm nội bộ 0–100, trọng số 40/20/20/20 cho Vận mệnh, cầu nối Linh hồn–Nhân cách, quan hệ với Đường đời, độ phủ chữ số. Mục tiêu là ưu tiên điểm, không phải bộ lọc bắt buộc. Không đo chất lượng thực tế của tên.

Các trường phái có thể dùng quy ước khác. Giao diện công bố cách tính và nguồn đối chiếu. Không có nguyên âm/phụ âm thì chỉ số tương ứng không xác định (—).

## Bản đồ sao

10 thiên thể từ Mặt Trời đến Diêm Vương; hoàng đạo Tropical, vị trí địa tâm theo hoàng đạo và điểm xuân phân của ngày; ASC/MC; 12 nhà Whole Sign. Năm góc hợp 0°/60°/90°/120°/180° giữa các thiên thể, orb 6°.

Múi giờ IANA hoặc UTC±HH:mm. Giờ không tồn tại do DST bị chặn; giờ lặp cần UTC offset để xác định duy nhất. Dữ liệu múi giờ lịch sử phụ thuộc trình duyệt. Có 5 địa điểm Việt Nam với tọa độ trung tâm; nhập tọa độ/múi giờ thủ công cho nơi khác.

Không biết giờ sinh: dùng 12:00 địa phương, ẩn ASC/MC/nhà. Tất cả vị trí/góc hợp là tham khảo tại mốc này; Mặt Trăng có thể đổi cung trong ngày. Chưa gồm Chiron, La Hầu/Kế Đô, nghịch hành, Placidus; diễn giải gồm các lớp thiên thể/cung/nhà/góc hợp, được biên soạn theo mẫu để tự chiêm nghiệm.

[Astronomy Engine 2.1.19](https://github.com/cosinekitty/astronomy) lưu tại `js/vendor/`, có giấy phép MIT. Swiss Ephemeris chỉ dùng tạo fixture đối chiếu, không đóng gói làm thư viện web. 11 mẫu độc lập nằm trong `tests/astronomy-reference.json`.

## Diễn giải mở rộng

Có nội dung theo vai trò từng chỉ số số học, chu kỳ, giai đoạn, thử thách và gợi ý tên. Bản đồ sao có diễn giải theo thiên thể/cung/nhà, ASC/MC, góc hợp và thống kê nguyên tố. Mục mở rộng và liên kết chuyển nhanh giúp đọc theo nhu cầu. [Nguồn, cách biên soạn và giới hạn](docs/INTERPRETATIONS.md). Bộ kiểm tra hiện có 24 nhóm.

## Giao diện và chuyển động

Theme tím đêm với điểm hồng–cyan, thẻ kết quả nhiều màu và bản đồ sao cùng bảng màu. Cả ba công cụ có một nhịp animation 360ms đồng thời tải dữ liệu cần thiết, sau đó thẻ kết quả xuất hiện lần lượt. Không hiển thị phần trăm tiến độ giả. Với `prefers-reduced-motion`, bỏ cả nhịp chờ animation và hiệu ứng kết quả.

## Tải tài nguyên

`engine.js` và `main.js` tải ban đầu bằng `defer`. `meanings.js`, `render.js`, `numbers.js` tải khi tính số; `suggest.js` khi gợi ý tên; `astro.js`, `astro-readings.js` và thư viện thiên văn khi vẽ bản đồ sao. Không font ngoài, animation canvas hoặc delay giả. `particles.js` cũ không được tải.

Thần số học và chiêm tinh là công cụ chiêm nghiệm theo niềm tin; phép tính có thể kiểm chứng, các diễn giải tính cách/dự đoán chưa được khoa học xác nhận.

From hngphm with ♥ love.

Bản phát hành gắn `asset-version` trong `index.html` và query version cho CSS/script; module tải theo nhu cầu dùng cùng version để tránh trộn script cũ với nội dung mới khi trình duyệt còn cache. Đổi version cùng CSS/engine/main URLs khi phát hành thay đổi phụ thuộc giữa module.


## Nguồn đích Alex Alpha

Đã đối chiếu 5 ảnh mục lục tr. 10–18 của *Thần số học dễ hiểu* (Alex Alpha và Huyền Minh Group): đủ 14/14 nhóm tính của chương 3. Đã sửa nhãn cầu nối Đường đời–Ngày sinh thành nhóm trong sách, đánh dấu Đường đời–Vận mệnh là phần thêm. Bài học nghiệp hiện có khác chỉ số nợ nghiệp 13/14/16/19 hiện chưa tính riêng. [Bảng đối chiếu và giới hạn xác minh](docs/ALEX-ALPHA-ALIGNMENT.md). Mục lục chưa xác nhận chi tiết công thức, mốc tuổi hoặc ngoại lệ chữ Y/số đặc biệt.

Diễn giải có 60 ví dụ đời thường riêng cho các vai trò cốt lõi, 9 ví dụ chu kỳ và cách tính bằng chính dữ liệu người dùng nhập. Các ví dụ không phải trích sách hoặc sự kiện suy ra về người đọc.

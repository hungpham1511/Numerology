# 🔮 Thần Số Học · Pythagoras Numerology Calculator

> *Khám phá bản thân qua khoa học về những con số*

A beautiful, fully client-side Numerology (Thần Số Học) calculator built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies, no build step. Just open and use.

**From hngphm with ♥ love**

---

## ✨ Features

### 🧮 Full Numerology Engine (Pythagorean Method)
| Chỉ số | Mô tả |
|--------|-------|
| **Số Đường Đời** (Life Path) | Chỉ số quan trọng nhất — tính từ ngày/tháng/năm sinh |
| **Số Vận Mệnh** (Destiny/Expression) | Tổng giá trị tất cả chữ cái trong tên |
| **Số Linh Hồn** (Soul Urge) | Từ các nguyên âm trong tên khai sinh |
| **Số Nhân Cách** (Personality) | Từ các phụ âm trong tên khai sinh |
| **Số Ngày Sinh** (Birthday) | Rút gọn ngày sinh |
| **Số Cầu Nối** (Bridge Numbers) | Khoảng cách cần hài hòa giữa các chỉ số |
| **Số Năm / Tháng Cá Nhân** | Năng lượng chu kỳ hiện tại |
| **Bốn Đỉnh Cao** (Pinnacles) | 4 giai đoạn cơ hội lớn theo tuổi |
| **Bốn Thử Thách** (Challenges) | 4 thử thách cần vượt qua |
| **Ba Giai Đoạn** (Life Periods) | 3 làn sóng định hình cuộc đời |
| **Bài Học Nghiệp** (Karmic Lessons) | Các số thiếu trong tên |
| **Biểu Đồ Pythagoras** | Ma trận 3×3 + mũi tên năng lượng |

- ✅ Hỗ trợ **Master Numbers**: 11, 22, 33
- ✅ Hiển thị **từng bước tính toán** chi tiết (có thể expand/collapse)
- ✅ **Luận giải sâu** từng con số: tố chất, từ khoá, mặt tối cần chú ý

---

## 🎨 Design Highlights

- **Dark mode** glassmorphism với nền tím sâu
- **Particle system** — ngôi sao 4 cánh và chấm tròn nhấp nháy
- **Floating orbs** — vầng sáng màu tím/vàng/hồng trôi nổi nền
- **Stagger animations** — thẻ bật ra tuần tự khi kết quả hiện lên
- **Shimmer gradient** — tiêu đề "Thần Số Học" có hiệu ứng lấp lánh
- **Micro-interactions** — hover, scale, pulse trên mọi element
- **Responsive** — tối ưu cho desktop, tablet, và mobile (320px+)
- Font chữ: `Playfair Display` · `Cinzel Decorative` · `Inter`

---

## 🚀 Cách dùng

Không cần cài đặt gì — chỉ cần mở file:

```bash
# Clone repo
git clone https://github.com/hungpham1511/Numerology.git
cd Numerology

# Mở trực tiếp trong trình duyệt
open index.html       # macOS
start index.html      # Windows
xdg-open index.html   # Linux
```

Hoặc dùng Live Server (VS Code extension) để tải font Google Fonts đúng cách.

---

## 📖 Hướng dẫn nhập liệu

1. **Họ và tên khai sinh** — nhập không dấu (ví dụ: `Nguyen Van An`)  
   - Tên khai sinh trong giấy khai sinh, không phải tên thường dùng  
   - Hệ thống tự xử lý diacritics tiếng Việt nếu bạn nhập có dấu  
2. **Ngày / Tháng / Năm sinh** — nhập đầy đủ
3. **Năm tính toán** — mặc định năm hiện tại (dùng cho Số Năm Cá Nhân)
4. **Tháng tính toán** — để trống = tháng hiện tại

Nhấn **Khám Phá Thần Số Học** hoặc phím `Enter` để tính.

---

## 🔢 Bảng quy đổi Pythagoras

```
1  2  3  4  5  6  7  8  9
A  B  C  D  E  F  G  H  I
J  K  L  M  N  O  P  Q  R
S  T  U  V  W  X  Y  Z
```

- **Nguyên âm** (A, E, I, O, U) → tính Số Linh Hồn  
- **Phụ âm** → tính Số Nhân Cách  
- **Tất cả chữ cái** → tính Số Vận Mệnh  

---

## 🏗️ Cấu trúc dự án

```
Numerology/
└── index.html      # Toàn bộ app (HTML + CSS + JS trong 1 file)
```

Single-file architecture — không phụ thuộc, không build step, chạy offline hoàn toàn (ngoại trừ Google Fonts).

---

## 📝 Changelog

### v2.0.0 – 2026-04-15
- 🔤 **Fix font "Thần Số Học"**: tách sang `Playfair Display` thay vì `Cinzel` để hiển thị tiếng Việt đúng
- 🎬 **Animations mới**: header entrance, floating orbs, twinkling star particles, card stagger pop
- 📖 **Luận giải chi tiết**: mỗi số nay có mô tả sâu + keyword tags + mặt tối (shadow aspects)
- ✍️ **Footer signature**: *"From hngphm with ♥ love"* với heartbeat animation
- 📱 **Responsive hoàn thiện**: layout tối ưu cho mọi breakpoint từ 320px đến 1440px+
- ✨ **Button shimmer** effect và loading overlay đẹp hơn

### v1.0.0 – 2026-04-14
- 🎉 Initial release — full Pythagorean numerology engine, glassmorphism UI, particle background

---

## 📄 License

MIT — dùng tự do, học tập, chia sẻ. Credit appreciated ✨

---

*Made with ♥ by hngphm*
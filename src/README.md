# PX UI Library

Thư viện UI xây dựng trên React, TypeScript và Styled Components theo kiến trúc Atomic Design.

---

## Cấu trúc thư mục `src/`

### 1. `components/`

Chứa các component UI chia theo cấp độ Atomic Design:

- **`atoms/`**  
  Thành phần nhỏ nhất, không thể chia nhỏ hơn nữa (Button, Input, Label, Icon, Spinner...).

- **`molecules/`**  
  Tập hợp các atoms tạo thành component chức năng (FormField, CardItem...).

- **`organisms/`**  
  Nhóm các molecules hoặc atoms phức tạp hơn (Header, Footer, Sidebar...).

- **`templates/`**  
  Layout chứa các organisms, định hình cấu trúc lớn của trang.

- **`pages/`**  
  Trang hoàn chỉnh, kết hợp các templates và organisms thành giao diện cuối cùng.

- **`index.ts`**  
  File tập hợp và xuất các component để dễ dàng import từ bên ngoài.

---

### 2. `theme/`

Chứa cấu hình theme cho styled-components:

- Màu sắc, font chữ, spacing, breakpoint, shadow...
- Cấu hình `ThemeProvider` cung cấp theme toàn cục cho thư viện.

---

### 3. `utils/`

Các hàm tiện ích dùng chung:

- Hàm xử lý dữ liệu, chuyển đổi, format, debounce, throttle...
- Các helper function hỗ trợ component.

---

### 4. `hooks/`

Chứa các custom React hooks dùng chung:

- Ví dụ: `useDebounce`, `useToggle`, `useWindowSize`, `useTheme`...

---

### 5. `icons/`

Chứa bộ icon hoặc các component icon (SVG, React component):

- Dùng để export icon riêng biệt hoặc bộ icon system.

---

### 6. `index.ts`

Entry point của thư viện:

- Export tổng hợp tất cả các phần từ `components`, `theme`, `hooks`, `utils`, `icons`.
- Giúp bên ngoài import chỉ từ `px-ui` mà không cần quan tâm đến cấu trúc thư mục.

---

## Tóm tắt

| Thư mục      | Chức năng                                           |
| ------------ | --------------------------------------------------- |
| `components` | Các UI component theo Atomic Design (atoms → pages) |
| `theme`      | Theme, design tokens, config cho styled-components  |
| `utils`      | Hàm tiện ích chung                                  |
| `hooks`      | Các custom React hooks                              |
| `icons`      | Bộ icon, component icon hoặc SVG                    |
| `index.ts`   | Export tổng hợp cho cả thư viện                     |

---

Nếu có thắc mắc hoặc cần hỗ trợ thêm, vui lòng liên hệ.

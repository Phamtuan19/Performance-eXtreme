/**
 * Cấu trúc thư mục components theo Atomic Design:
 *
 * - **atoms/**
 *   Thành phần UI nhỏ nhất, không thể chia nhỏ hơn nữa.
 *   Ví dụ: Button, Input, Label, Icon, Spinner...
 *
 * - **molecules/**
 *   Tập hợp các atoms thành component có chức năng cụ thể.
 *   Ví dụ: FormField, CardItem, Dropdown...
 *
 * - **organisms/**
 *   Nhóm các molecules hoặc atoms phức tạp hơn, tạo thành phần UI lớn.
 *   Ví dụ: Header, Footer, Sidebar...
 *
 * - **templates/**
 *   Layout chứa các organisms, định hình cấu trúc tổng thể của trang.
 *
 * - **pages/**
 *   Trang hoàn chỉnh, kết hợp templates và organisms thành giao diện cuối cùng.
 *
 * - **index.ts**
 *   Tập hợp và xuất tất cả component để dễ dàng import bên ngoài.
 */

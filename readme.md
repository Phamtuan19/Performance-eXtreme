performance-extreme/
├── packages/
│ └── px-ui/
│ ├── src/
│ │ ├── components/
│ │ │ ├── atoms/
| | | | |** Button/
│ │ │ │ | ├── Button.tsx
│ │ │ │ | └── index.ts
│ │ │ | |** Input/
| | | | |
│ │ │ │ └── ...
| | | |** icons/...
| | |  
│ │ ├── core
| | | |** helpers/...
| | | |** styled/...
| | | |** theme/...
| | | |** type/...
| | | |** utils/...
| | | |** index.ts
| | |
| | |** hooks/...
| | |
| | |** type
│ │ |
│ │ ├── index.ts
│ ├── tsconfig.json
│ ├── package.json
│ └── README.md
| |** vite.config.ts
|
├── preview/ ← Chạy demo trong quá trình phát triển
│ ├── src/
│ │ └── App.tsx
│ ├── index.html
│ └── vite.config.ts
|
|
├── playground/ ← Chạy thư viện khi đã build để test sau khi build thư viện
│ ├── src/
│ │ └── App.tsx
│ ├── index.html
│ └── vite.config.ts
├── tsconfig.base.json
├── package.json ← script global + tool + lint
├── .eslintrc.js
└── .prettierrc

packages/px-ui/
Là nơi chứa toàn bộ mã nguồn thư viện PX UI.

Áp dụng kiến trúc Atomic Design + tổ chức module rõ ràng.

Có thể build độc lập bằng rollup hoặc vite.

2. preview/
   Dùng để chạy trực tiếp source thư viện trong quá trình dev.

Không cần build, alias trực tiếp vào packages/px-ui/src.

3. playground/
   Dùng để test thư viện sau khi đã build ra dist/.

Import từ packages/px-ui/dist/index.js hoặc @px-ui/core.

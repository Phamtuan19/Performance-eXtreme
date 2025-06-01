import type { CSSObject } from 'styled-components';

import type { SxConfigProps, SxProps, Theme, TypeInputColor, TypeInputSize } from '@PUI/core';

export interface PXComponentSwitch {
   defaultProps: {
      /**
       * Màu sắc của Switch: ví dụ 'primary', 'secondary', 'danger', 'success', v.v...
       * Tương ứng với các màu trong theme.palette.
       */
      color: TypeInputColor;

      /**
       * Kích thước của Switch: 'small' | 'medium' | 'large'.
       * Ảnh hưởng đến kích thước tổng thể của Switch.
       */
      size: TypeInputSize;

      /**
       * Nếu true, Switch sẽ bị disable và không thể tương tác.
       */
      disabled: boolean;

      /**
       * Trạng thái checked khi sử dụng dạng controlled component.
       * Phải đi kèm onChange.
       */
      checked: boolean;

      /**
       * Trạng thái checked mặc định khi dùng uncontrolled component.
       * Chỉ sử dụng khi không có `checked`.
       */
      defaultChecked: boolean;

      /**
       * Trạng thái loading, hiển thị indicator và disable tương tác.
       */
      loading: boolean;

      /**
       * Nội dung (label) khi Switch ở trạng thái checked.
       */
      checkedLabel: React.ReactNode;

      /**
       * Nội dung (label) khi Switch ở trạng thái unchecked.
       */
      unCheckedLabel: React.ReactNode;
   };

   styleOverrides: {
      /**
       * Style cho phần root bọc ngoài của radio.
       * Áp dụng cho thẻ <label> chứa toàn bộ radio và label.
       */
      root: CSSObject;

      /**
       * Cấu hình kích thước cho Switch theo từng size ('sm', 'md', 'lg'):
       * - `thumbSize`: kích thước nút tròn.
       * - `padding`: khoảng cách lề trong.
       * - `trackHeight`: chiều cao thanh nền.
       * - `trackWidth`: chiều dài thanh nền (nếu muốn cố định).
       */
      size: Record<
         TypeInputSize,
         CSSObject & { thumbSize: number; padding: number; trackHeight: number; trackWidth: number }
      >;

      /**
       * Style theo từng màu sắc: primary, secondary, v.v.
       * Gồm borderColor và backgroundColor (khi checked).
       */
      color: Record<TypeInputColor, CSSObject>;
   };
}

export type SwitchStyledProps = PXComponentSwitch['defaultProps'] &
   SxConfigProps & {
      /**
       * Custom style với hệ thống sx (hỗ trợ responsive, theme-aware).
       */
      sx?: SxProps<Theme>;
   };

export type SwitchProps = Omit<
   React.InputHTMLAttributes<HTMLInputElement>,
   'size' | 'onChange' | 'checked' | 'defaultChecked'
> &
   Partial<SwitchStyledProps> & {
      /**
       * Sự kiện khi Switch thay đổi trạng thái.
       */
      onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
   };

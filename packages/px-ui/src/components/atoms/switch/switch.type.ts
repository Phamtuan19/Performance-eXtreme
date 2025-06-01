import type { CSSObject } from 'styled-components';

import type { SxConfigProps, ThemeColor, ThemeSize } from '@pui/material/core';
import type { DeepOptional } from '@pui/material/core/helpers';

export interface PXComponentSwitch {
   defaultProps: {
      /**
       * Màu sắc của Switch: ví dụ 'primary', 'secondary', 'danger', 'success', v.v...
       * Tương ứng với các màu trong theme.palette.
       */
      color: ThemeColor;

      /**
       * Kích thước của Switch: 'small' | 'medium' | 'large'.
       * Ảnh hưởng đến kích thước tổng thể của Switch.
       */
      size: ThemeSize;

      /**
       * Nếu true, Switch sẽ bị disable và không thể tương tác.
       */
      disabled: boolean;

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
         ThemeSize,
         CSSObject & { thumbSize: number; padding: number; trackHeight: number; trackWidth: number }
      >;

      /**
       * Style theo từng màu sắc: primary, secondary, v.v.
       * Gồm borderColor và backgroundColor (khi checked).
       */
      color: Record<ThemeColor, CSSObject>;
   };
}

export type SwitchStyledProps = PXComponentSwitch['defaultProps'] &
   SxConfigProps & {
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
   };

type InputCheckBoxSafeProps = Pick<
   React.InputHTMLAttributes<HTMLInputElement>,
   | 'name'
   | 'value'
   | 'checked'
   | 'defaultChecked'
   | 'onChange'
   | 'disabled'
   | 'required'
   | 'autoFocus'
   | 'id'
   | 'aria-label'
   | 'aria-labelledby'
   | 'onBlur'
   | 'onFocus'
   | 'tabIndex'
   | 'readOnly'
> &
   DeepOptional<SwitchStyledProps> & {
      /**
       * Sự kiện khi Switch thay đổi trạng thái.
       */
      onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

      onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
   };

type SwitchProps = InputCheckBoxSafeProps;

export default SwitchProps;

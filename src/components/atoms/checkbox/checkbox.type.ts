import type React from 'react';
import type { CSSObject } from 'styled-components';

import type { SxConfigProps, ThemeColor, ThemeSize } from '@PUI/core';

export interface PXComponentCheckbox {
   /**
    * Các giá trị mặc định cho component Radio.
    */
   defaultProps: {
      /**
       * Màu sắc của Radio: ví dụ 'primary', 'secondary', 'danger', 'success', v.v...
       * Tương ứng với các màu trong theme.palette.
       */
      color: ThemeColor;

      /**
       * Kích thước của Radio: 'small' | 'medium' | 'large'.
       * Ảnh hưởng đến đường kính của vòng tròn hiển thị.
       */
      size: ThemeSize;

      /**
       * Nếu true, Radio sẽ bị disable và không thể tương tác.
       */
      disabled: boolean;

      /**
       * Trạng thái checked khi sử dụng theo dạng controlled component.
       * Khi được set, phải luôn đi kèm với onChange để đảm bảo hoạt động đúng.
       */
      checked: boolean;

      /**
       * Trạng thái checked mặc định khi sử dụng uncontrolled component.
       * Chỉ được sử dụng khi không sử dụng `checked`.
       */
      defaultChecked: boolean;

      /**
       * Trạng thái bán chọn (hiển thị trạng thái trung gian).
       * Có thể dùng để thể hiện chọn một phần (ít khi dùng với radio).
       */
      indeterminate: boolean;

      /**
       * Nếu true, sẽ đánh dấu Radio có lỗi (ví dụ validation fail).
       * Có thể hiển thị màu sắc hoặc border khác để biểu thị.
       */
      error: boolean;
   };

   /**
    * Ghi đè style cho từng phần của component.
    * Dùng để custom hoặc mở rộng theme một cách linh hoạt.
    */
   styleOverrides: {
      /**
       * Style cho phần root bọc ngoài của radio.
       * Áp dụng cho thẻ <label> chứa toàn bộ radio và label.
       */
      root: CSSObject;

      /**
       * Style theo từng kích thước: sm, md, lg.
       * Ảnh hưởng trực tiếp đến size của hình tròn (radio circle).
       */
      size: Record<ThemeSize, CSSObject>;

      /**
       * Style theo từng màu sắc: primary, secondary, v.v.
       * Gồm borderColor và backgroundColor (khi checked).
       */
      color: Record<ThemeColor, CSSObject>;
   };
}

export type CheckBoxStyledProps = PXComponentCheckbox['defaultProps'] & SxConfigProps;

export type CheckBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'height' | 'width'> &
   Partial<CheckBoxStyledProps> & {
      /**
       * Sự kiện khi checkbox thay đổi trạng thái
       */
      onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

      /**
       * Text hoặc ReactNode hiển thị cạnh checkbox
       */
      label?: string;
   };

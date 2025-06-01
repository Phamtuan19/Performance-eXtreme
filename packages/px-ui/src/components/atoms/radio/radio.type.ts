import type { CSSObject } from 'styled-components';

import type { SxConfigProps, SxProps, Theme, ThemeColor, ThemeSize } from '@pui/material/core';
import type { DeepOptional } from '@pui/material/core/helpers';

/**
 * Interface định nghĩa cấu hình cho component Radio trong thư viện PX UI.
 */
export interface PXComponentRadio {
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
       * Nếu true, sẽ đánh dấu Radio có lỗi (ví dụ validation fail).
       * Có thể hiển thị màu sắc hoặc border khác để biểu thị.
       */
      error: boolean;
   };

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

export type RadioStyledProps = PXComponentRadio['defaultProps'] & SxConfigProps;

type InputRadioSafeProps = Omit<
   React.InputHTMLAttributes<HTMLInputElement>,
   | 'accept'
   | 'alt'
   | 'capture'
   | 'files'
   | 'formAction'
   | 'formEncType'
   | 'formMethod'
   | 'formNoValidate'
   | 'formTarget'
   | 'height'
   | 'width'
   | 'multiple'
   | 'src'
   | 'step'
   | 'min'
   | 'max'
   | 'size'
   | 'list'
   | 'type'
   | 'color'
> &
   DeepOptional<RadioStyledProps> & {
      /**
       * Sự kiện khi Radio thay đổi trạng thái
       */
      onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;

      /**
       * Text hoặc ReactNode hiển thị cạnh Radio
       */
      label?: React.ReactNode;
   };

export type RadioProps = InputRadioSafeProps;

export type RadioOption = Partial<Pick<PXComponentRadio['defaultProps'], 'size' | 'disabled'>> & {
   label: React.ReactNode;
   value: string;
};

export interface RadioGroupBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
   /** Tên dùng chung cho tất cả radio trong nhóm */
   name?: string;

   /** Giá trị radio được chọn (controlled) */
   value?: string;

   /** Giá trị radio mặc định (uncontrolled) */
   defaultValue?: string;

   /**
    * Callback khi radio thay đổi
    * @param value Giá trị của radio được chọn
    * @param event Sự kiện onChange của input
    */
   onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;

   /** Vô hiệu hóa toàn bộ radio trong nhóm */
   disabled?: boolean;

   /** Trạng thái lỗi cho toàn nhóm */
   error?: boolean;

   /**
    * Style theo từng kích thước: sm, md, lg.
    * Ảnh hưởng trực tiếp đến size của hình tròn (radio circle).
    */
   size?: ThemeSize;

   /** Hướng hiển thị của nhóm radio, mặc định 'column' */
   direction?: 'row' | 'column';

   /** Style props hỗ trợ sx system */
   sx?: SxProps<Theme>;

   /** Các phần tử con (thường là các Radio item) */
   children?: React.ReactNode;

   options?: RadioOption[];
}

/**
 * Props của RadioGroup mở rộng thêm config sx không ổn định
 */
export type RadioGroupProps = RadioGroupBaseProps & SxConfigProps;

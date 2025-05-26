import { SxProps, Theme } from '@/core';
import { UnstableSxConfigProps } from '@/core/styled';

export interface BoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, UnstableSxConfigProps {
   /**
    * Hệ thống `sx` hỗ trợ style động, responsive theo theme
    */
   sx?: SxProps<Theme>;

   /**
    * Nội dung bên trong Box
    */
   children?: React.ReactNode;

   /**
    * Loại thẻ HTML hoặc component custom được render (mặc định là 'div')
    */
   component?: React.ElementType;

   /**
    * Đường dẫn khi sử dụng Box như một thẻ `<a>`
    */
   href?: string;
}

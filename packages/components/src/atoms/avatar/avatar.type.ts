import type { CSSObject } from 'styled-components';

import type { DeepOptional } from '@pui/core';
import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface AvatarSxConfigProps {
   sx?: CSSObject;
   className?: string;
}

export type PXComponentAvatar = {
   defaultProps: {
      /**
       * Kích thước avatar
       */
      size: ThemeSize;

      /**
       * Màu sắc background khi không có src
       */
      color: ThemeColor;

      /**
       * Shape của avatar
       */
      variant: 'circular' | 'square' | 'rounded';
   };

   styleOverrides: {
      root: CSSObject;
      image: CSSObject;
      fallback: CSSObject;
   };
};

export type AvatarStyledProps = PXComponentAvatar['defaultProps'] & AvatarSxConfigProps;

export type AvatarProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
   DeepOptional<AvatarStyledProps> & {
      /**
       * URL của hình ảnh
       */
      src?: string;

      /**
       * Alt text cho hình ảnh
       */
      alt?: string;

      /**
       * Children hiển thị khi không có src (thường là initials)
       */
      children?: React.ReactNode;
   };

export type PXComponentAvatarGroup = {
   defaultProps: {
      /**
       * Số lượng avatar tối đa hiển thị
       */
      maxCount: number;

      /**
       * Kích thước của các avatar trong group
       */
      size: ThemeSize;
   };

   styleOverrides: {
      root: CSSObject;
      avatar: CSSObject;
      surplus: CSSObject;
   };
};

export type AvatarGroupStyledProps = PXComponentAvatarGroup['defaultProps'] & AvatarSxConfigProps;

export type AvatarGroupProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
   DeepOptional<AvatarGroupStyledProps> & {
      /**
       * Avatar children
       */
      children: React.ReactElement<AvatarProps>[];
   };

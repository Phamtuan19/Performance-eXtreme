import type React from 'react';

import type { SxConfigProps, ThemeColor, ThemeSize } from '@pui/material/core';

import type { AvatarProps } from '../avatar';

type TagVariant = 'outline' | 'filled';

export type TagStyledProps = SxConfigProps & {
   color: ThemeColor;

   size: Exclude<ThemeSize, 'large'>;

   variant: Exclude<TagVariant, 'standard'>;
};

export type TagProps = React.HTMLAttributes<HTMLSpanElement> &
   Partial<TagStyledProps> &
   SxConfigProps & {
      children?: React.ReactNode;

      avatar?: Pick<AvatarProps, 'src' | 'alt' | 'className' | 'children'> & {
         render?: () => React.ReactElement;
      };

      icon?: React.ReactNode;

      deleteIcon?: boolean | React.ReactElement;

      onDelete?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
   };

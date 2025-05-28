import React from 'react';

import { SxConfigProps, ThemeColor, ThemeSize, ThemeVariant } from '@PUI/core';

import { AvatarProps } from '../avatar';

export type TagStyledProps = SxConfigProps & {
   color: ThemeColor;

   size: Exclude<ThemeSize, 'large'>;

   variant: Exclude<ThemeVariant, 'standard'>;
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

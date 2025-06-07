import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { BadgeRoot, BadgeContent } from './badge.styled';
import type { PXComponentBadge, BadgeProps } from './badge.type';

export const BADGE_DEFAULT_PROPS: PXComponentBadge['defaultProps'] = {
   color: 'primary',
   size: 'medium',
   dot: false,
   anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
   },
   animationType: 'none',
   showZero: false,
   max: 99,
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
   const theme = getTheme();
   const PXBadge = theme.components?.PXBadge?.defaultProps ?? {};

   const {
      className,
      sx,
      color,
      size,
      dot,
      anchorOrigin,
      animationType,
      showZero,
      max,
      children,
      content,
      ...resProps
   } = merge({}, BADGE_DEFAULT_PROPS, PXBadge, props);

   const shouldShow = content !== undefined && (showZero || content !== 0);

   const displayContent = React.useMemo(() => {
      if (dot) return '';
      if (typeof content === 'number' && content > max) {
         return `${max}+`;
      }
      return content;
   }, [content, dot, max]);

   return (
      <BadgeRoot
         ref={ref}
         className={cn('px-badge', className)}
         $styleProps={{ sx, color, size, dot, anchorOrigin, animationType, showZero, max }}
         {...resProps}
      >
         {children}
         {shouldShow && (
            <BadgeContent
               className="px-badge-content"
               $styleProps={{ color, size, anchorOrigin, animationType }}
               $isDot={dot}
            >
               {displayContent}
            </BadgeContent>
         )}
      </BadgeRoot>
   );
});

Badge.displayName = 'PXBadge';

export default Badge;

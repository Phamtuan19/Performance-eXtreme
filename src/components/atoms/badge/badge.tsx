import React from 'react';

import { getTheme } from '@/core';
import { separateProps } from '@/core/styled';
import { cn } from '@/core/utils';

import { BadgeContainer, BadgeContent } from './badge.styled';
import { BadgeProps } from './badge.type';
import { BADGE_DEFAULT_PROPS } from './constants';

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
   const theme = getTheme();

   const PXBadge = theme.components?.PXBadge?.defaultProps ?? BADGE_DEFAULT_PROPS;

   const {
      sx,
      color = PXBadge.color,
      badgePosition = PXBadge.badgePosition,
      dot = PXBadge.dot,
      animationType = PXBadge.animationType,
      content,
      maxContent,
      children,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   let displayContent: string | number | null = null;
   let multipleWord: boolean = false;

   if (typeof content === 'number' && typeof maxContent === 'number') {
      displayContent = content > maxContent ? `${maxContent}+` : content;

      multipleWord = !dot && content > maxContent;
   } else {
      displayContent = content ?? null;
   }

   return (
      <BadgeContainer ref={ref} $styledProps={{ ...styleProps, sx }} {...remainingProps} className="px-badge-container">
         {children}
         {displayContent !== null && (
            <BadgeContent
               className={cn('PXBadge-content', {
                  'PXBadge-dot': dot,
                  [`PXBadge-animation-${animationType}`]: animationType !== 'none',
                  'PXBadge-content-multiple-words': multipleWord,
               })}
               $styledProps={{ animationType, dot, color, badgePosition, multipleWord }}
            >
               {!dot && displayContent}

               {animationType === 'wave-multi' && <span className="PXBadge-wave-third" />}
            </BadgeContent>
         )}
      </BadgeContainer>
   );
});

Badge.displayName = 'PXBadge';

export default Badge;

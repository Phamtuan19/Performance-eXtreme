import { merge } from 'lodash';
import React, { useState } from 'react';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { StyledAvatar, Badge } from './avatar.styled';
import type { AvatarProps, PXComponentAvatar } from './avatar.type';

const AVATAR_DEFAULT_PROPS: PXComponentAvatar['defaultProps'] = {
   size: 'medium',
   shape: 'circle',
   badgeColor: 'primary',
   showBadge: false,
   color: 'default',
   badgePosition: 'top-right',
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
   const theme = getTheme();

   const PXAvatar = theme.components?.PXAvatar?.defaultProps;

   const { src, alt, color, size, shape, showBadge, badgeColor, badgePosition, children, title, ...resProps } = merge(
      {},
      AVATAR_DEFAULT_PROPS,
      PXAvatar,
      props,
   );

   const { styleProps, remainingProps } = separateProps(resProps);

   const [imgError, setImgError] = useState(false);
   const showInitials = !src || imgError;

   return (
      <StyledAvatar
         tabIndex={0}
         ref={ref}
         {...remainingProps}
         className={cn('px-avatar-root', remainingProps.className)}
         $styleProps={{ ...styleProps, color, size, shape }}
      >
         {showInitials ? (
            <span className="px-avatar-initials">{children ?? title?.charAt(0).toUpperCase()}</span>
         ) : (
            <img className="px-avatar-image" src={src} alt={alt || 'avatar'} onError={() => setImgError(true)} />
         )}
         {showBadge && <Badge className="px-avatar-badge" $styleProps={{ badgePosition, badgeColor }} />}
      </StyledAvatar>
   );
});

Avatar.displayName = 'PXAvatar';

export default Avatar;

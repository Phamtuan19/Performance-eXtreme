import React, { useState } from 'react';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { StyledAvatar, Badge } from './avatar.styled';
import type { AvatarProps } from './avatar.type';
import { AVATAR_DEFAULT_PROPS } from './constants';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
   const theme = getTheme();

   const PXAvatar = theme.components?.PXAvatar?.defaultProps ?? AVATAR_DEFAULT_PROPS;

   const {
      sx,
      src,
      alt,
      color = PXAvatar.color,
      size = PXAvatar.size,
      shape = PXAvatar.shape,
      showBadge = PXAvatar.showBadge,
      badgeColor = PXAvatar.badgeColor,
      badgePosition = PXAvatar.badgePosition,
      children,
      title,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   const [imgError, setImgError] = useState(false);
   const showInitials = !src || imgError;

   return (
      <StyledAvatar
         ref={ref}
         {...remainingProps}
         className={cn('PXAvatar__root', remainingProps.className)}
         $styleProps={{ sx, ...styleProps, color, size, shape }}
      >
         {showInitials ? (
            <span className="PXAvatar__initials">{children ?? title?.charAt(0).toUpperCase()}</span>
         ) : (
            <img className="PXAvatar__image" src={src} alt={alt || 'avatar'} onError={() => setImgError(true)} />
         )}
         {showBadge && <Badge className="PXAvatar__badge" $styleProps={{ badgePosition, badgeColor }} />}
      </StyledAvatar>
   );
});

Avatar.displayName = 'PXAvatar';

export default Avatar;

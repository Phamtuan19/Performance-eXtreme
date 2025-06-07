import { merge } from 'lodash';
import React, { useState } from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { AvatarRoot, AvatarImage, AvatarFallback } from './avatar.styled';
import type { PXComponentAvatar, AvatarProps } from './avatar.type';

export const AVATAR_DEFAULT_PROPS: PXComponentAvatar['defaultProps'] = {
   size: 'medium',
   color: 'primary',
   variant: 'circular',
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
   const theme = getTheme();
   const PXAvatar = theme.components?.PXAvatar?.defaultProps ?? {};

   const { className, sx, size, color, variant, src, alt, children, ...resProps } = merge(
      {},
      AVATAR_DEFAULT_PROPS,
      PXAvatar,
      props,
   );

   const [imageError, setImageError] = useState(false);
   const [imageLoaded, setImageLoaded] = useState(false);

   const handleImageError = () => {
      setImageError(true);
   };

   const handleImageLoad = () => {
      setImageLoaded(true);
   };

   const shouldShowImage = src && !imageError;
   const shouldShowFallback = !shouldShowImage || !imageLoaded;

   return (
      <AvatarRoot
         ref={ref}
         className={cn('px-avatar', className)}
         $styleProps={{ sx, size, color, variant }}
         {...resProps}
      >
         {shouldShowImage && (
            <AvatarImage
               src={src}
               alt={alt}
               onError={handleImageError}
               onLoad={handleImageLoad}
               style={{ display: imageLoaded ? 'block' : 'none' }}
            />
         )}
         {shouldShowFallback && <AvatarFallback>{children || (alt ? alt.charAt(0) : '?')}</AvatarFallback>}
      </AvatarRoot>
   );
});

Avatar.displayName = 'PXAvatar';

export default Avatar;

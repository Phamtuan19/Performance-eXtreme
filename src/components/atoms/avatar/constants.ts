import type { PXComponentAvatar } from './avatar.type';

export const AVATAR_DEFAULT_PROPS: PXComponentAvatar['defaultProps'] = {
   size: 'medium',
   shape: 'circle',
   badgeColor: 'primary',
   showBadge: false,
   color: 'default',
   badgePosition: 'top-right',
};

export const AVATAR_CSS_VARIANT: PXComponentAvatar['styleOverrides'] = {
   root: {},
   size: {
      small: {
         pixelSize: 32,
      },
      medium: {
         pixelSize: 40,
      },
      large: {
         pixelSize: 64,
      },
   },
   color: {
      primary: {},
      secondary: {},
      success: {},
      error: {},
      warning: {},
      info: {},
   },
};

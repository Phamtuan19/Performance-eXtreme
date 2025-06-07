import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { AvatarGroupRoot, AvatarGroupSurplus } from './avatar.styled';
import type { PXComponentAvatarGroup, AvatarGroupProps, AvatarProps } from './avatar.type';
import Avatar from './avatar';

export const AVATAR_GROUP_DEFAULT_PROPS: PXComponentAvatarGroup['defaultProps'] = {
   maxCount: 5,
   size: 'medium',
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
   const theme = getTheme();
   const PXAvatarGroup = theme.components?.PXAvatarGroup?.defaultProps ?? {};

   const { className, sx, maxCount, size, children, ...resProps } = merge(
      {},
      AVATAR_GROUP_DEFAULT_PROPS,
      PXAvatarGroup,
      props,
   );

   const childrenArray = React.Children.toArray(children) as React.ReactElement<AvatarProps>[];
   const visibleChildren = childrenArray.slice(0, maxCount);
   const surplus = childrenArray.length - maxCount;

   return (
      <AvatarGroupRoot
         ref={ref}
         className={cn('px-avatar-group', className)}
         $styleProps={{ sx, maxCount, size }}
         {...resProps}
      >
         {visibleChildren.map((child, index) =>
            React.cloneElement(child, {
               key: index,
               size: child.props.size || size,
               style: { zIndex: visibleChildren.length - index, ...child.props.style },
            }),
         )}
         {surplus > 0 && <AvatarGroupSurplus $styleProps={{ size }}>+{surplus}</AvatarGroupSurplus>}
      </AvatarGroupRoot>
   );
});

AvatarGroup.displayName = 'PXAvatarGroup';

export default AvatarGroup;

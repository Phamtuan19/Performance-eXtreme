import { merge } from 'lodash';
import React, { Children, isValidElement } from 'react';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import Avatar from './avatar';
import { StyledAvatarGroup } from './avatar.styled';
import type { AvatarGroupProps, AvatarProps, PXComponentAvatarGroup } from './avatar.type';

const AVATAR_GROUP_DEFAULT_PROPS: PXComponentAvatarGroup['defaultProps'] = {
   size: 'medium',
   shape: 'circle',
   direction: 'ltr',
   spacing: 8,
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
   const theme = getTheme();

   const PXAvatarGroup = theme.components.PXAvatarGroup?.defaultProps;

   const { children, maxCount, size, shape, spacing, collapseAvatar, direction, className, ...resProps } = merge(
      {},
      AVATAR_GROUP_DEFAULT_PROPS,
      PXAvatarGroup,
      props,
   );

   const { styleProps, remainingProps } = separateProps(resProps);

   const validChildren = Children.toArray(children).filter(isValidElement);
   const total = validChildren.length;

   const displayAvatars = maxCount && total > maxCount ? validChildren.slice(0, maxCount) : validChildren;

   const remainingCount = maxCount && total > maxCount ? total - maxCount : 0;

   return (
      <StyledAvatarGroup
         ref={ref}
         {...remainingProps}
         className={cn('px-avatar-group-root', className)}
         $styleProps={{ ...styleProps, spacing, direction }}
      >
         {displayAvatars.map((child, idx) => {
            const avatarChild = child as React.ReactElement<Partial<AvatarProps>>;
            return React.cloneElement(avatarChild, {
               key: idx,
               size,
               shape,
               className: cn('px-avatar-group-avatar', avatarChild.props.className),
               sx: {
                  zIndex: total - idx,
               },
            });
         })}

         {remainingCount > 0 &&
            (collapseAvatar ? (
               collapseAvatar(remainingCount)
            ) : (
               <Avatar size={size} shape={shape} className="px-avatar-group-collapse">
                  +{remainingCount}
               </Avatar>
            ))}
      </StyledAvatarGroup>
   );
});

AvatarGroup.displayName = 'PXAvatarGroup';

export default AvatarGroup;

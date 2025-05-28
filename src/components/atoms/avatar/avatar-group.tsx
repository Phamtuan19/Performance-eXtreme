import React, { Children, isValidElement } from 'react';

import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import Avatar from './avatar';
import { StyledAvatarGroup } from './avatar.styled';
import { AvatarGroupProps, AvatarProps } from './avatar.type';

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
   const {
      children,
      maxCount,
      size = 'medium',
      shape = 'circle',
      spacing = 8,
      collapseAvatar,
      direction = 'ltr',
      className,
      sx,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   const validChildren = Children.toArray(children).filter(isValidElement);
   const total = validChildren.length;

   const displayAvatars = maxCount && total > maxCount ? validChildren.slice(0, maxCount) : validChildren;

   const remainingCount = maxCount && total > maxCount ? total - maxCount : 0;

   return (
      <StyledAvatarGroup
         ref={ref}
         {...remainingProps}
         className={cn('PXAvatarGroup__root', className)}
         $styleProps={{ spacing, direction, sx, ...styleProps }}
      >
         {displayAvatars.map((child, idx) => {
            const avatarChild = child as React.ReactElement<Partial<AvatarProps>>;
            return React.cloneElement(avatarChild, {
               key: idx,
               size,
               shape,
               className: cn('PXAvatarGroup__avatar', avatarChild.props.className),
               style: {
                  zIndex: total - idx,
               },
            });
         })}

         {remainingCount > 0 &&
            (collapseAvatar ? (
               collapseAvatar(remainingCount)
            ) : (
               <Avatar size={size} shape={shape} className="PXAvatarGroup__avatar--collapse">
                  +{remainingCount}
               </Avatar>
            ))}
      </StyledAvatarGroup>
   );
});

AvatarGroup.displayName = 'PXAvatarGroup';

export default AvatarGroup;

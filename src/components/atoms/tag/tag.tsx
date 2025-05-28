import React from 'react';

import { Close } from '@PUI/components/icons';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { Avatar, AvatarProps } from '../avatar';

import { DeleteIcon, TagContainer } from './tag.styled';
import { TagProps } from './tag.type';

const Tag = React.forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
   const {
      children,
      className,
      variant = 'filled',
      color = 'primary',
      size = 'medium',
      icon,
      avatar,
      deleteIcon,
      onDelete,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   const avatarElement =
      avatar && avatar?.render ? (
         React.cloneElement(avatar.render() as React.ReactElement<AvatarProps>, {
            ...avatar,
            className: cn('px-tag-avatar', avatar?.className),
         })
      ) : (
         <Avatar
            size={24}
            color={color}
            src={avatar?.src}
            alt={avatar?.alt}
            sx={(theme) => ({
               border: 'none',
               backgroundColor: theme.palette?.[color].dark,
            })}
            className="px-tag-avatar"
         >
            {avatar?.children}
         </Avatar>
      );

   return (
      <TagContainer
         ref={ref}
         {...remainingProps}
         $styleProps={{ ...styleProps, color, size, variant }}
         className={cn('px-tag-container', className)}
      >
         {!avatar && icon && <span className="px-tag-icon">{icon}</span>}
         {avatar && <>{avatarElement}</>}
         {children}
         {deleteIcon && (
            <DeleteIcon
               className="px-span-delete-icon"
               onClick={onDelete}
               role="button"
               $styleProps={{ variant, color }}
            >
               {React.isValidElement(deleteIcon) ? deleteIcon : <Close />}
            </DeleteIcon>
         )}
      </TagContainer>
   );
});

Tag.displayName = 'PXTag';

export default Tag;

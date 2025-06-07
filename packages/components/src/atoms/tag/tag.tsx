import React from 'react';
import type { TagProps } from './tag.type';
import { TagRoot, TagContent, TagIcon, TagDeleteButton } from './tag.styled';

// Simple Close icon component
const CloseIcon = () => (
   <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
   </svg>
);

export const TAG_DEFAULT_PROPS: Required<Pick<TagProps, 'variant' | 'color' | 'size' | 'deletable' | 'disabled'>> = {
   variant: 'filled',
   color: 'primary',
   size: 'medium',
   deletable: false,
   disabled: false,
};

export const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
   const {
      children,
      variant = TAG_DEFAULT_PROPS.variant,
      color = TAG_DEFAULT_PROPS.color,
      size = TAG_DEFAULT_PROPS.size,
      deletable = TAG_DEFAULT_PROPS.deletable,
      icon,
      onClick,
      onDelete,
      disabled = TAG_DEFAULT_PROPS.disabled,
      className,
      id,
      ...rest
   } = props;

   const isClickable = !disabled && (!!onClick || !!onDelete);

   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && onClick) {
         onClick(event);
      }
   };

   const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (!disabled && onDelete) {
         onDelete(event);
      }
   };

   const handleDeleteKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
         event.preventDefault();
         event.stopPropagation();
         if (!disabled && onDelete) {
            onDelete(event as any);
         }
      }
   };

   const styleProps = {
      variant,
      color,
      size,
      deletable,
      disabled,
      clickable: isClickable,
   };

   return (
      <TagRoot
         ref={ref}
         role={onClick ? 'button' : undefined}
         tabIndex={onClick && !disabled ? 0 : undefined}
         onClick={handleClick}
         onKeyDown={
            onClick
               ? (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                       event.preventDefault();
                       handleClick(event as any);
                    }
                 }
               : undefined
         }
         $styleProps={styleProps}
         className={className}
         id={id}
         {...rest}
      >
         {icon && (
            <TagIcon $size={size} $position="start">
               {icon}
            </TagIcon>
         )}

         <TagContent>{children}</TagContent>

         {deletable && (
            <TagDeleteButton
               type="button"
               onClick={handleDelete}
               onKeyDown={handleDeleteKeyDown}
               aria-label="Remove tag"
               tabIndex={-1}
               $styleProps={styleProps}
            >
               <CloseIcon />
            </TagDeleteButton>
         )}
      </TagRoot>
   );
});

Tag.displayName = 'Tag';

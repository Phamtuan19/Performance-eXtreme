import styled, { css } from 'styled-components';
import type { TagStyledProps } from './tag.type';

export const TagRoot = styled('div')<{
   $styleProps: Partial<TagStyledProps>;
}>(({ theme, $styleProps }) => {
   const { variant = 'filled', color = 'primary', size = 'medium', disabled = false, clickable = false } = $styleProps;

   const sizeMap = {
      small: {
         height: '20px',
         padding: '0 6px',
         fontSize: '12px',
         borderRadius: '10px',
      },
      medium: {
         height: '24px',
         padding: '0 8px',
         fontSize: '13px',
         borderRadius: '12px',
      },
      large: {
         height: '32px',
         padding: '0 12px',
         fontSize: '14px',
         borderRadius: '16px',
      },
   };

   const variantStyles = {
      filled: css`
         background-color: ${theme.palette[color].main};
         color: ${theme.palette[color].contrastText};
         border: 1px solid transparent;
      `,
      outlined: css`
         background-color: transparent;
         color: ${theme.palette[color].main};
         border: 1px solid ${theme.palette[color].main};
      `,
      soft: css`
         background-color: ${theme.palette[color].main}15;
         color: ${theme.palette[color].main};
         border: 1px solid transparent;
      `,
   };

   return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      lineHeight: 1,
      textDecoration: 'none',
      cursor: clickable ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'all 0.2s ease-in-out',
      opacity: disabled ? 0.6 : 1,
      pointerEvents: disabled ? 'none' : 'auto',
      maxWidth: '100%',
      ...sizeMap[size],
      ...variantStyles[variant],

      ...(clickable &&
         !disabled && {
            '&:hover': {
               transform: 'translateY(-1px)',
               boxShadow: theme.shadows[1],
               ...(variant === 'filled' && {
                  backgroundColor: theme.palette[color].dark,
               }),
               ...(variant === 'outlined' && {
                  backgroundColor: theme.palette[color].main + '10',
               }),
               ...(variant === 'soft' && {
                  backgroundColor: theme.palette[color].main + '25',
               }),
            },
            '&:active': {
               transform: 'translateY(0)',
            },
         }),
   };
});

export const TagContent = styled('span')({
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   whiteSpace: 'nowrap',
   flex: 1,
});

export const TagIcon = styled('span')<{
   $size: 'small' | 'medium' | 'large';
   $position: 'start' | 'end';
}>(({ $size, $position }) => {
   const sizeMap = {
      small: { size: '14px', margin: '0 2px' },
      medium: { size: '16px', margin: '0 4px' },
      large: { size: '18px', margin: '0 4px' },
   };

   return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      marginLeft: $position === 'end' ? sizeMap[$size].margin : '0',
      marginRight: $position === 'start' ? sizeMap[$size].margin : '0',
      '& svg': {
         width: sizeMap[$size].size,
         height: sizeMap[$size].size,
      },
   };
});

export const TagDeleteButton = styled('button')<{
   $styleProps: Partial<TagStyledProps>;
}>(({ theme, $styleProps }) => {
   const { color = 'primary', size = 'medium' } = $styleProps;

   const sizeMap = {
      small: { size: '14px', margin: '0 0 0 4px' },
      medium: { size: '16px', margin: '0 0 0 4px' },
      large: { size: '18px', margin: '0 0 0 6px' },
   };

   return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      color: 'inherit',
      opacity: 0.7,
      transition: 'all 0.2s ease-in-out',
      borderRadius: '50%',
      flexShrink: 0,
      margin: sizeMap[size].margin,

      '& svg': {
         width: sizeMap[size].size,
         height: sizeMap[size].size,
      },

      '&:hover': {
         opacity: 1,
         backgroundColor: 'rgba(0, 0, 0, 0.1)',
         transform: 'scale(1.1)',
      },

      '&:active': {
         transform: 'scale(0.95)',
      },

      '&:focus': {
         outline: 'none',
         boxShadow: `0 0 0 2px ${theme.palette[color].main}40`,
      },
   };
});

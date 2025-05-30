import styled from 'styled-components';

import type { SxConfigProps, Theme } from '@PUI/core';

export const ButtonBaseRoot = styled('button')<{ theme: Theme; $styleProps: SxConfigProps }>((props) => {
   const { theme, $styleProps } = props;

   return {
      // 🔹 Base layout
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      boxSizing: 'border-box',
      width: 'max-content',
      padding: 0,
      margin: 0,

      // 🔹 Appearance
      border: '1px solid transparent',
      borderColor: 'currentColor',
      borderRadius: 0,
      backgroundColor: 'transparent',
      color: 'inherit',
      textDecoration: 'none',

      // 🔹 Interaction
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      outline: 0,
      transition: 'all 0.2s ease-in-out',

      '&:focus-visible': {
         boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.2)', // hoặc dùng token
      },

      '&:disabled': {
         pointerEvents: 'none',
         cursor: 'default',
         color: theme.palette.disabled.color,
         backgroundColor: theme.palette.disabled.backgroundColor,
         borderColor: theme.palette.disabled.borderColor,
      },

      // Only spread style properties that are compatible with styled-components
      ...theme.sxConfig($styleProps),
   };
});

import styled from 'styled-components';

import type { Theme } from '@PUI/core';

import type { TextareaStyledProps } from './textarea.type';

export const Wrapper = styled('div')({
   position: 'relative',
   width: '100%',
});

export const StyledTextarea = styled.textarea<{
   theme: Theme;
   $styleProps: Omit<TextareaStyledProps, 'disabled'>;
}>(({ theme, $styleProps }) => {
   const { palette } = theme;
   const { error, resize, autoExpand, ...resProps } = $styleProps;

   const gray = palette.gray ?? palette.grey ?? palette.neutral;

   const resultSxConfig = theme.sxConfig(resProps, theme.components?.PXTextarea?.styleOverrides?.root);

   return {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      color: 'inherit',
      width: '100%',
      border: `1px solid ${error ? palette.error.main : '#d9d9d9'}`,
      borderRadius: 6,
      backgroundColor: palette.common.white,
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      resize,
      minHeight: '15px',
      boxSizing: 'border-box',
      overflow: autoExpand ? 'hidden' : 'auto',
      padding: '6px 12px',

      '&:hover:not(:disabled)': {
         borderColor: error ? palette.error.main : palette.primary.main,
      },

      '&:focus:not(:disabled)': {
         outline: 'none',
         borderColor: error ? palette.error.dark : palette.primary.main,
         boxShadow: `0 0 0 2px ${error ? palette.error.light : palette.primary.light}66`,
      },

      '&:disabled': {
         borderColor: theme.palette.gray[300],
         backgroundColor: theme.palette.gray[100],
         boxShadow: 'none',
         cursor: 'not-allowed',
         resize: 'none',
      },

      '&::placeholder': {
         color: gray[400],
         opacity: 1,
      },

      ...resultSxConfig,
   };
});

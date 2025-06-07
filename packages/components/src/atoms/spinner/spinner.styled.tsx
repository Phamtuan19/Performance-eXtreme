import styled, { keyframes, css } from 'styled-components';

import type { SpinnerStyledProps } from './spinner.type';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const linearProgress = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const SpinnerRoot = styled('div')<{
   $styleProps: Partial<SpinnerStyledProps>;
}>(({ $styleProps }) => {
   const { variant = 'circular' } = $styleProps;

   return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      ...(variant === 'linear' && {
         width: '100%',
         height: '4px',
         backgroundColor: 'rgba(0, 0, 0, 0.1)',
         borderRadius: '2px',
         overflow: 'hidden',
      }),
   };
});

export const SpinnerCircular = styled('div')<{
   $styleProps: Partial<SpinnerStyledProps>;
}>`
   ${({ theme, $styleProps }) => {
      const { color = 'primary', size = 'medium', thickness = 4 } = $styleProps;

      const sizeMap = {
         small: 20,
         medium: 24,
         large: 32,
      };

      const actualSize = typeof size === 'number' ? size : sizeMap[size];

      return css`
         width: ${actualSize}px;
         height: ${actualSize}px;
         border: ${thickness}px solid rgba(0, 0, 0, 0.1);
         border-top: ${thickness}px solid ${theme.palette[color]?.main || theme.palette.primary.main};
         border-radius: 50%;
         animation: ${spin} 1s linear infinite;
      `;
   }}
`;

export const SpinnerLinear = styled('div')<{
   $styleProps: Partial<SpinnerStyledProps>;
}>`
   ${({ theme, $styleProps }) => {
      const { color = 'primary' } = $styleProps;

      return css`
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background-color: ${theme.palette[color]?.main || theme.palette.primary.main};
         border-radius: inherit;
         animation: ${linearProgress} 1.5s ease-in-out infinite;
      `;
   }}
`;

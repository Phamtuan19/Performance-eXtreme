import styled, { css, keyframes } from 'styled-components';

import { SPINNER_SIZE_DEFAULT } from './constants';
import type { SpinnerStyleProps } from './spinner.type';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled('span')<{
   $styleProps: SpinnerStyleProps;
}>(({ theme, $styleProps }) => {
   const { size, color, thickness: thicknessProps, ...rest } = $styleProps;

   const styleOverrides = theme.components?.PXSpinner?.styleOverrides;
   const overrideSize = styleOverrides?.size?.[size];
   const defaultSize = SPINNER_SIZE_DEFAULT[size];

   const thickness = overrideSize?.thickness ?? thicknessProps ?? defaultSize?.thickness;

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const { thickness: _, ...resOverridesSize } = {
      ...defaultSize,
      ...overrideSize,
   };

   const finalColor = theme.palette[color]?.main ?? color;

   return css`
      display: inline-block;
      border: ${thickness}px solid rgba(0, 0, 0, 0.1);
      border-top: ${thickness}px solid ${finalColor};
      border-radius: 50%;
      animation: ${rotate} 1s linear infinite;

      ${styleOverrides?.color?.[color as keyof typeof styleOverrides.color]}
      ${resOverridesSize}
      ${theme.sxConfig(rest)}
   `;
});

export const LoaderWrapper = styled('div')<{
   $styleProps: SpinnerStyleProps;
}>(({ theme, $styleProps }) => {
   const { fullScreen, overlay, ...rest } = $styleProps;

   return {
      position: fullScreen ? 'fixed' : overlay ? 'absolute' : 'relative',
      top: fullScreen || overlay ? 0 : undefined,
      left: fullScreen || overlay ? 0 : undefined,
      width: fullScreen || overlay ? '100%' : undefined,
      height: fullScreen || overlay ? '100%' : undefined,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: overlay || fullScreen ? 'rgba(255,255,255,0.6)' : 'transparent',
      zIndex: 9999,

      ...theme.sxConfig(rest),
   };
});

export const LoaderMessage = styled('div')({
   marginTop: 8,
   fontSize: 14,
   color: '#666',
});

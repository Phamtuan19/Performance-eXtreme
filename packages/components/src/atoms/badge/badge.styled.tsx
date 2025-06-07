import styled, { keyframes, css } from 'styled-components';

import type { BadgeStyledProps } from './badge.type';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const waveAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
`;

export const BadgeRoot = styled('div')<{
   $styleProps: Partial<BadgeStyledProps>;
}>(({ $styleProps }) => {
   return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
   };
});

export const BadgeContent = styled('span')<{
   $styleProps: Partial<BadgeStyledProps>;
   $isDot: boolean;
}>`
   ${({ theme, $styleProps, $isDot }) => {
      const {
         color = 'primary',
         size = 'medium',
         anchorOrigin = { vertical: 'top', horizontal: 'right' },
         animationType = 'none',
      } = $styleProps;

      const sizeMap = {
         small: {
            minWidth: $isDot ? '8px' : '16px',
            height: $isDot ? '8px' : '16px',
            fontSize: '10px',
            padding: $isDot ? '0' : '0 4px',
         },
         medium: {
            minWidth: $isDot ? '10px' : '20px',
            height: $isDot ? '10px' : '20px',
            fontSize: '12px',
            padding: $isDot ? '0' : '0 6px',
         },
         large: {
            minWidth: $isDot ? '12px' : '24px',
            height: $isDot ? '12px' : '24px',
            fontSize: '14px',
            padding: $isDot ? '0' : '0 8px',
         },
      };

      const positionMap = {
         'top-right': { top: '0', right: '0', transform: 'translate(50%, -50%)' },
         'top-left': { top: '0', left: '0', transform: 'translate(-50%, -50%)' },
         'bottom-right': { bottom: '0', right: '0', transform: 'translate(50%, 50%)' },
         'bottom-left': { bottom: '0', left: '0', transform: 'translate(-50%, 50%)' },
      };

      const positionKey = `${anchorOrigin.vertical}-${anchorOrigin.horizontal}` as keyof typeof positionMap;
      const currentSize = sizeMap[size];
      const currentPosition = positionMap[positionKey];

      return css`
         position: absolute;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: ${theme.palette[color]?.main || theme.palette.primary.main};
         color: ${theme.palette[color]?.contrastText || theme.palette.primary.contrastText};
         border-radius: ${$isDot ? '50%' : '10px'};
         font-weight: 500;
         line-height: 1;
         border: 2px solid white;
         box-sizing: border-box;
         z-index: 1;
         min-width: ${currentSize.minWidth};
         height: ${currentSize.height};
         font-size: ${currentSize.fontSize};
         padding: ${currentSize.padding};
         top: ${currentPosition.top};
         right: ${currentPosition.right || 'auto'};
         bottom: ${currentPosition.bottom || 'auto'};
         left: ${currentPosition.left || 'auto'};
         transform: ${currentPosition.transform};

         ${animationType === 'pulse' &&
         css`
            animation: ${pulseAnimation} 1.4s ease-in-out infinite;
         `}

         ${animationType === 'wave' &&
         css`
            animation: ${waveAnimation} 1.4s ease-in-out infinite;
         `}
      `;
   }}
`;

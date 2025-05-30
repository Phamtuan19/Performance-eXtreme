import styled, { css } from 'styled-components';

// Styled component với css
const SpinnerWrapper = styled('svg')`
   z-index: 0;
   position: relative;
   overflow: hidden;
   animation: ${({ theme }) => css`
      ${theme.keyframes.spinnerSpin} 0.8s linear infinite
   `};

   & circle:first-of-type {
      height: 100%;
      stroke: rgba(187, 187, 187, 0.5);
   }

   & circle:last-of-type {
      height: 100%;
      stroke: currentColor;
      transition: all 500ms;
   }
`;

const CircularProgress = () => {
   return (
      <SpinnerWrapper viewBox="0 0 32 32" fill="none" strokeWidth="3" width={16} height={16}>
         <circle
            cx="16"
            cy="16"
            r="13"
            role="presentation"
            strokeDasharray="81.68140899333463 81.68140899333463"
            strokeDashoffset="0"
            transform="rotate(-90 16 16)"
            strokeLinecap="round"
         />
         <circle
            cx="16"
            cy="16"
            r="13"
            role="presentation"
            strokeDasharray="81.68140899333463 81.68140899333463"
            strokeDashoffset="61.26105674500097"
            transform="rotate(-90 16 16)"
            strokeLinecap="round"
         />
      </SpinnerWrapper>
   );
};

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;

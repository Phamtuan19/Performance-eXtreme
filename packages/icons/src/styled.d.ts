import 'styled-components';
import type { Keyframes } from 'styled-components/dist/types';

declare module 'styled-components' {
   export interface DefaultTheme {
      keyframes: {
         spinnerSpin: Keyframes;
      };
   }
}

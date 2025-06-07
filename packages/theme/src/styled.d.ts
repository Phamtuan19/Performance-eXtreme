import type { Theme } from './types';
import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme extends Theme {}
}

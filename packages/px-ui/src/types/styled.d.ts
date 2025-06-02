import 'styled-components';
import type { Theme } from '../core';

declare module 'styled-components' {
   export interface DefaultTheme extends Theme {}
}

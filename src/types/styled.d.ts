import type { Theme } from '@PUI/core';
import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme extends Theme {}
}

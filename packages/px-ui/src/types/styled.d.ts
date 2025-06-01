import type { Theme } from '@pui/material/core';
import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme extends Theme {}
}

import type { Theme } from '@pui/theme';
import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme extends Theme {}
}

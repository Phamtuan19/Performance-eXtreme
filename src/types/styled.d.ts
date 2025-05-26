import 'styled-components';
import { Theme } from '@/core';

declare module 'styled-components' {
   export interface DefaultTheme extends Theme {}
}

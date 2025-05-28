import { StandardCSSProperties } from '@PUI/types';

export const positionCss = ['static', 'relative', 'absolute', 'fixed', 'sticky'];

export type PositionConfig = {
   position?: StandardCSSProperties['position'];
};

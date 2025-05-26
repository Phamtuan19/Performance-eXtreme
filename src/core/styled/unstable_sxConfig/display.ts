import { StandardCSSProperties } from '@/core/types';

export type FlexCssItem = {
   key: string;
   property: string[];
};

export const display = {
   key: 'display',
   property: [
      'inline',
      'block',
      'contents',
      'flex',
      'grid',
      'inline-block',
      'inline-flex',
      'inline-grid',
      'inline-table',
      'list-item',
      'run-in',
      'table',
      'table-caption',
      'table-column-group',
      'table-header-group',
      'table-footer-group',
      'table-row-group',
      'table-cell',
      'table-column',
      'table-row',
      'none',
      'initial',
      'inherit',
   ],
};

export const flex: FlexCssItem = {
   key: 'flex',
   property: ['flex-grow', 'flex-shrink', 'flex-basis', 'auto', 'initial', 'none', 'inherit'],
};

export const flexDirection = {
   key: 'flexDirection',
   property: ['row', 'row-reverse', 'column', 'column-reverse', 'initial', 'inherit'],
};

export const flexWrap: FlexCssItem = {
   key: 'flexWrap',
   property: ['nowrap', 'wrap', 'wrap-reverse', 'initial', 'inherit'],
};

export const justifyContent: FlexCssItem = {
   key: 'justifyContent',
   property: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'initial',
      'inherit',
   ],
};

export const justifyItems: FlexCssItem = {
   key: 'justifyItems',
   property: [
      'legacy',
      'normal',
      'stretch',
      'positional alignment',
      'overflow-alignment',
      'baseline alignment',
      'initial',
      'inherit',
   ],
};

export const justifySelf: FlexCssItem = {
   key: 'justifySelf',
   property: [
      'legacy',
      'normal',
      'stretch',
      'positional alignment',
      'overflow-alignment',
      'baseline alignment',
      'initial',
      'inherit',
   ],
};

export const alignItems: FlexCssItem = {
   key: 'alignItems',
   property: ['normal', 'stretch', 'positional alignment', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit'],
};

export const alignContent = {
   key: 'alignContent',
   property: [
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly',
      'initial',
      'inherit',
   ],
};

export const alignSelf: FlexCssItem = {
   key: 'alignSelf',
   property: ['auto', 'stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit'],
};

export const flexCssKey = [
   flex,
   flexDirection,
   flexWrap,
   justifyContent,
   justifyItems,
   justifySelf,
   alignItems,
   alignContent,
   alignSelf,
];

export type DisplayCssConfig = {
   display?: StandardCSSProperties['display'];

   flex?: StandardCSSProperties['flex'];

   flexDirection?: StandardCSSProperties['flexDirection'];

   flexWrap?: StandardCSSProperties['flexWrap'];

   justifyContent?: StandardCSSProperties['justifyContent'];

   justifyItems?: StandardCSSProperties['justifyItems'];

   justifySelf?: StandardCSSProperties['justifySelf'];

   alignItems?: StandardCSSProperties['alignItems'];

   alignContent?: StandardCSSProperties['alignContent'];

   alignSelf?: StandardCSSProperties['alignSelf'];

   gap?: StandardCSSProperties['gap'];

   grid?: StandardCSSProperties['grid'];

   gridArea?: StandardCSSProperties['gridArea'];

   gridColumn?: StandardCSSProperties['gridColumn'];

   gridRow?: StandardCSSProperties['gridRow'];

   gridColumnGap?: StandardCSSProperties['gridColumnGap'];

   gridRowGap?: StandardCSSProperties['gridRowGap'];

   gridGap?: StandardCSSProperties['gridGap'];

   gridTemplate?: StandardCSSProperties['gridTemplate'];

   gridTemplateAreas?: StandardCSSProperties['gridTemplateAreas'];

   gridTemplateColumns?: StandardCSSProperties['gridTemplateColumns'];

   gridTemplateRows?: StandardCSSProperties['gridTemplateRows'];

   gridAutoFlow?: StandardCSSProperties['gridAutoFlow'];

   gridAutoColumns?: StandardCSSProperties['gridAutoColumns'];

   gridAutoRows?: StandardCSSProperties['gridAutoRows'];

   gridColumnStart?: StandardCSSProperties['gridColumnStart'];

   gridColumnEnd?: StandardCSSProperties['gridColumnEnd'];

   gridRowStart?: StandardCSSProperties['gridRowStart'];

   gridRowEnd?: StandardCSSProperties['gridRowEnd'];
};

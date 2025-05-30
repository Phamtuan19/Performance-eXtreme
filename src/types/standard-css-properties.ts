import type * as CSS from 'csstype';

// type LiteralCSSProperties = {
//    [K in keyof CSS.Properties]: CSS.Properties[K];
// };

// export type StandardCSSProperties = CSS.PropertiesFallback<number | string> | LiteralCSSProperties;

export type StandardCSSProperties = {
   [K in keyof CSS.Properties]: CSS.Properties[K] | (string & object) | number;
};

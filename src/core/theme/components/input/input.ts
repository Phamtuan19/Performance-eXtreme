export const VARIANTS_INPUT = {
   VARIANT: ['outline', 'filled', 'standard'],
   COLOR: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
   SIZE: ['small', 'medium', 'large'],
} as const;

export type TypeInputVariant = (typeof VARIANTS_INPUT.VARIANT)[number];

export type TypeInputColor = (typeof VARIANTS_INPUT.COLOR)[number];

export type TypeInputSize = (typeof VARIANTS_INPUT.SIZE)[number];

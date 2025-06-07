import { merge } from 'lodash';
import React from 'react';
import styled from 'styled-components';

import type { Palette } from '@pui/theme';

import type { PXComponentTypography, TypographyStyledProps } from './typography.type';

// Tạo style mặc định theo palette
const createPXTypographyCssVariant = (palette: Palette): PXComponentTypography['styleOverrides'] => ({
   root: {},
   variants: {
      h1: { fontSize: '2.25rem', fontWeight: 700, lineHeight: 1.3 },
      h2: { fontSize: '1.875rem', fontWeight: 600, lineHeight: 1.35 },
      h3: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
      h4: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.45 },
      h5: { fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.5 },
      h6: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.55 },
      p: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
   },
   color: {
      success: { color: palette.success.main },
      warning: { color: palette.warning.main },
      error: { color: palette.error.main },
      secondary: { color: palette.secondary.main },
      default: { color: palette.common.black },
      primary: { color: palette.primary.main },
      info: { color: palette.info.main },
   },
   strong: {
      fontWeight: 700,
   },
   underline: {
      textDecoration: 'underline',
   },
   delete: {
      textDecoration: 'line-through',
   },
   italic: {
      fontStyle: 'italic',
   },
});

// Forward ref để hỗ trợ styled-component
const TypographyForwardRef = React.forwardRef<
   HTMLElement,
   { as?: React.ElementType } & React.ComponentPropsWithoutRef<'span'>
>(({ as: Component = 'span', ...rest }, ref) => <Component ref={ref} {...rest} />);
TypographyForwardRef.displayName = 'TypographyForwardRef';

export const TypographyStyled = styled(TypographyForwardRef).withConfig({
   shouldForwardProp: (prop) =>
      !['underline', 'delete', 'italic', 'strong', 'disabled', 'color', 'sx', 'variant'].includes(prop),
})<{
   $styleProps: TypographyStyledProps;
}>(({ theme, $styleProps }) => {
   const { variant, underline, delete: isDelete, italic, color, strong, ...restProps } = $styleProps;

   // Tổng hợp style từ default + theme override
   const styleOverrides: PXComponentTypography['styleOverrides'] = merge(
      {},
      createPXTypographyCssVariant(theme.palette),
      theme.components?.PXTypography?.styleOverrides,
   );

   return {
      ...styleOverrides.variants?.[variant ?? 'p'],
      ...styleOverrides.color?.[color ?? 'default'],
      ...(strong ? styleOverrides.strong : {}),
      ...(underline ? styleOverrides.underline : {}),
      ...(isDelete ? styleOverrides.delete : {}),
      ...(italic ? styleOverrides.italic : {}),

      ...styleOverrides.root,

      // Placeholder for sx functionality
      // ...theme.sxConfig?.(restProps),
   };
});

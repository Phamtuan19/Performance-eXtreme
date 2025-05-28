import React from 'react';
import styled from 'styled-components';

import { Theme } from '@PUI/core';
import { sxConfig } from '@PUI/core/styled';

import { createPXTypographyCssVariant, TYPOGRAPHY_DEFAULT_PROPS } from './constants';
import { TypographyStyleRoot } from './typography.type';

const TypographyForwardRef = React.forwardRef<
   HTMLElement,
   { as?: React.ElementType } & React.ComponentPropsWithoutRef<'span'>
>(({ as: Component = 'span', ...rest }, ref) => <Component ref={ref} {...rest} />);
TypographyForwardRef.displayName = 'TypographyForwardRef';

export const TypographyStyled = styled(TypographyForwardRef).withConfig({
   shouldForwardProp: (prop) => !['underline', 'delete', 'italic', 'strong', 'disabled', 'color'].includes(prop),
})<{
   theme: Theme;
   $styleProps: TypographyStyleRoot;
}>((props) => {
   const { theme, $styleProps } = props;

   const defaultProps = theme.components?.PXTypography?.defaultProps ?? TYPOGRAPHY_DEFAULT_PROPS;

   const styleOverrides =
      theme.components?.PXTypography?.styleOverrides ?? createPXTypographyCssVariant(theme.palette).styleOverrides;

   const {
      sx,
      variant = defaultProps.variant,
      underline = defaultProps.underline,
      delete: isDelete = defaultProps.delete,
      italic = defaultProps.italic,
      disabled = defaultProps.disabled,
      color = defaultProps.color,
      strong,
      ...resProps
   } = $styleProps;

   return {
      ...styleOverrides.variants[variant as keyof typeof styleOverrides.variants],
      ...styleOverrides.color[color as keyof typeof styleOverrides.color],
      ...(strong ? styleOverrides.strong : {}),
      ...(underline ? styleOverrides.underline : {}),
      ...(isDelete ? styleOverrides.delete : {}),
      ...(italic ? styleOverrides.italic : {}),
      ...(disabled ? styleOverrides.disabled : {}),

      ...sxConfig({ ...styleOverrides.root, sx, ...resProps }),
   };
});

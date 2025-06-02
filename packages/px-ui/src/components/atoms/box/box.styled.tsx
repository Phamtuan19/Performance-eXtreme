import React from 'react';
import styled from 'styled-components';

import type { Theme } from '@pui/material/core';

import type { BoxStyledProps } from './box.type';

const ForwardedButton = React.forwardRef<
   HTMLDivElement,
   { as?: React.ElementType } & React.ComponentPropsWithoutRef<'div'>
>(({ as: Component = 'div', ...rest }, ref) => <Component ref={ref} {...rest} />);
ForwardedButton.displayName = 'BoxRoot';

export const BoxStyle = styled(ForwardedButton)<{
   theme: Theme;
   $styleProps: BoxStyledProps;
}>((props) => {
   const { theme, $styleProps } = props;

   const rootOverride = theme.components.PXBox?.styleOverrides?.root;

   const result = theme.sxConfig($styleProps);

   return {
      ...rootOverride,

      ...result,
   };
});

BoxStyle.displayName = 'BoxStyle';

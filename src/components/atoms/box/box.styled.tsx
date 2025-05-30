import styled from 'styled-components';

import type { Theme } from '@PUI/core';

import type { BoxStyledProps } from './box.type';

export const BoxStyle = styled(({ as: Component = 'div', ...rest }) => <Component {...rest} />)<{
   theme: Theme;
   $styleProps: BoxStyledProps;
}>((props) => {
   const { theme, $styleProps } = props;

   const { root } = theme.components?.PXBox?.styleOverrides ?? {};

   const result = theme.sxConfig($styleProps, root);

   return result;
});

BoxStyle.displayName = 'BoxStyle';

import styled from 'styled-components';

import { SxProps, Theme } from '@/core';
import { sxConfig, UnstableSxConfigProps } from '@/core/styled';

export const BoxStyle = styled(({ as: Component = 'div', ...rest }) => <Component {...rest} />)<{
   theme: Theme;
   $styleProps: UnstableSxConfigProps & { sx: SxProps<Theme> };
}>((props) => {
   const { theme, $styleProps } = props;

   const { root } = theme.components?.PXBox?.styleOverrides ?? {};

   const result = sxConfig({ ...root, ...$styleProps });

   return result;
});

BoxStyle.displayName = 'BoxStyle';

import { merge } from 'lodash';
import React from 'react';
import styled from 'styled-components';

import type { Theme } from '@pui/theme';

import { ButtonBase } from './button-base';
import type { ButtonStyleProps } from './button.type';
import { createButtonDefaultCssVariant, CLASS_NAME_RIPPLE } from './constants';

const renderButtonStyle = ({
   theme,
   variant,
   color,
   size,
}: {
   theme: Theme;
   variant: NonNullable<ButtonStyleProps['variant']>;
   color: NonNullable<ButtonStyleProps['color']>;
   size: NonNullable<ButtonStyleProps['size']>;
}) => {
   const overrides = merge(
      {},
      createButtonDefaultCssVariant(theme.palette),
      theme.components?.PXButton?.styleOverrides,
   );

   // Lấy nhóm variant trong overrides.variant, ví dụ overrides.variant.container, overrides.variant.text, overrides.variant.outlined
   const variantColorStyle = overrides.variant?.[variant][color] ?? {};

   // Lấy style chung color (màu chữ, ... trong overrides.color)
   const colorStyle = overrides.color?.[color] ?? {};

   // Lấy style size
   const sizeStyle = overrides.size?.[size] ?? {};

   return {
      ...colorStyle,
      ...sizeStyle,
      ...variantColorStyle,
   };
};

const ForwardedButton = React.forwardRef<
   HTMLButtonElement,
   { as?: React.ElementType } & React.ComponentPropsWithoutRef<'button'>
>(({ as: Component = ButtonBase, ...rest }, ref) => <Component ref={ref} {...rest} />);
ForwardedButton.displayName = 'ButtonRoot';

export const ButtonRoot = styled(ForwardedButton)<{
   $styleProps: Omit<
      ButtonStyleProps,
      'startIcon' | 'endIcon' | 'disableRipple' | 'loadingContent' | 'loadingPosition' | 'loadingIndicator' | 'loading'
   >;
}>((props) => {
   const { theme, $styleProps } = props;

   const { color, size, variant, fullWidth, ...resProps } = $styleProps;

   // Placeholder for sxConfig functionality
   const resultSxConfig = {}; // theme.sxConfig?.(resProps) ?? {};

   return {
      position: 'relative',
      outline: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontWeight: 500,
      letterSpacing: 0,
      whiteSpace: 'nowrap',
      transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
      touchAction: 'manipulation',
      border: 'none',
      boxSizing: 'border-box',
      borderRadius: 6,
      cursor: 'pointer',
      overflow: 'hidden',
      textDecoration: 'none',
      width: fullWidth ? '100%' : 'fit-content',
      userSelect: 'none',

      ...renderButtonStyle({ theme, color, size, variant }),

      [`& .${CLASS_NAME_RIPPLE}`]: {
         position: 'absolute',
         display: 'inline-block',
         overflow: 'hidden',
         zIndex: 0,
         inset: '0px',
         borderRadius: 'inherit',
         pointerEvents: 'none',

         '.ripple': {
            position: 'absolute',
            borderRadius: '50%',
            transform: 'scale(0)',
            animation: 'ripple-animation 600ms linear',
            backgroundColor: 'var(--ripple-color)',
         },
      },

      '@keyframes ripple-animation': {
         to: {
            transform: 'scale(4)',
            opacity: 0,
         },
      },

      ...resultSxConfig,
   };
});

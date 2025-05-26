import React from 'react';
import styled, { CSSObject } from 'styled-components';

import { Theme } from '@/core';
import { sxConfig } from '@/core/styled';
import { hexToRgba } from '@/core/utils';

import { ButtonBase } from './button-base';
import { ButtonStyleRoot } from './button.type';
import { createButtonDefaultCssVariant, BUTTON_DEFAULT_CSS, CLASS_NAME_RIPPLE } from './constants';

const renderButtonStyle = ({
   theme,
   variant = 'container',
   color = 'primary',
   size = 'medium',
}: {
   theme: Theme;
   variant: ButtonStyleRoot['variant'];
   color: ButtonStyleRoot['color'];
   size: ButtonStyleRoot['size'];
}) => {
   const overrides = theme.components?.PXButton ?? createButtonDefaultCssVariant(theme.palette);

   const cap = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

   const variantColorKey = `variant${cap(variant)}${cap(color)}`;
   const colorKey = `color${cap(color)}`;

   // Lấy style base variantColor và color
   const variantColorStyle = overrides?.styleOverrides?.[variantColorKey] ?? {};
   const colorStyle = overrides?.styleOverrides?.[colorKey] ?? {};

   // Lấy backgroundColor mặc định
   const backgroundColor = variantColorStyle.backgroundColor ?? colorStyle.backgroundColor ?? '#000000';

   // Lấy backgroundColor cho ripple:
   // Nếu variantTextPrimary thì ưu tiên lấy backgroundColor ở &:active
   let rippleBackgroundColor = backgroundColor;

   if (variant === 'text') {
      if (variantColorStyle?.color && typeof variantColorStyle.color === 'string') {
         rippleBackgroundColor = variantColorStyle.color;
      }
   }
   if (variant === 'outlined') {
      if (
         (variantColorStyle as Record<string, CSSObject>)['&:active']?.backgroundColor &&
         typeof (variantColorStyle as Record<string, CSSObject>)['&:active']?.backgroundColor === 'string'
      ) {
         rippleBackgroundColor = (variantColorStyle as Record<string, CSSObject>)['&:active']?.backgroundColor ?? '';
      }
   }
   return {
      ...overrides?.styleOverrides?.[`variant${cap(variant)}`],
      ...overrides?.styleOverrides?.[colorKey],
      ...overrides?.styleOverrides?.[`size${cap(size)}`],
      ...variantColorStyle,
      '--ripple-color':
         typeof rippleBackgroundColor === 'string' ? hexToRgba(rippleBackgroundColor, 0.3) : hexToRgba('#000000', 0.3),
   };
};

const ForwardedButton = React.forwardRef<
   HTMLButtonElement,
   { as?: React.ElementType } & React.ComponentPropsWithoutRef<'button'>
>(({ as: Component = ButtonBase, ...rest }, ref) => <Component ref={ref} {...rest} />);
ForwardedButton.displayName = 'ButtonRoot';

export const ButtonRoot = styled(ForwardedButton)<{
   theme: Theme;
   $styleProps: ButtonStyleRoot;
}>((props) => {
   const { theme, $styleProps } = props;
   const buttonDefaultProps = theme.components?.PXButton?.defaultProps ?? BUTTON_DEFAULT_CSS;

   const {
      color = buttonDefaultProps.color,
      size = buttonDefaultProps.size,
      variant = buttonDefaultProps.variant,
      sx,
      fullWidth,
      ...resProps
   } = $styleProps;

   const resultSxConfig = sxConfig({ ...(theme.components?.PXButton?.styleOverrides?.root ?? {}), ...resProps, sx });

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
      width: fullWidth ? '100%' : 'auto',

      // apply style from renderButtonStyle
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

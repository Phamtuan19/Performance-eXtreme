import { merge } from 'lodash';
import React, { useRef } from 'react';

import { CircularProgress } from '@pui/material/components/icons';
import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import { ButtonRoot } from './button.styled';
import type { ButtonProps, PXComponentButton } from './button.type';
import { CLASS_NAME_BUTTON, CLASS_NAME_RIPPLE } from './constants';

const BUTTON_DEFAULT_CSS: PXComponentButton['defaultProps'] = {
   variant: 'container',
   color: 'primary',
   size: 'medium',
   disabled: false,
   fullWidth: false,
   loading: false,
   loadingPosition: 'start',
   loadingIndicator: null,
   disableRipple: false,
   loadingContent: null,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
   const theme = getTheme();

   const PXButton = theme.components?.PXButton?.defaultProps ?? {};

   const {
      children,
      className,
      sx,
      component = 'div',
      disabled,
      loading,
      size,
      variant,
      color,
      disableRipple,
      loadingPosition,
      loadingContent,
      loadingIndicator,
      startIcon,
      endIcon,
      fullWidth,
      ...resProps
   } = merge({}, BUTTON_DEFAULT_CSS, PXButton, props);

   const rippleRef = useRef<HTMLSpanElement | null>(null);

   const { styleProps, remainingProps } = separateProps(resProps);

   const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const rippleComp = rippleRef.current;
      if (!rippleComp) return;

      const rect = rippleComp.getBoundingClientRect();
      const size = Math.max(rippleComp.offsetWidth, rippleComp.offsetHeight);
      const x = event?.clientX - rect.left - size / 2;
      const y = event?.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      ripple.addEventListener('animationend', () => {
         ripple.remove();
      });

      rippleComp.appendChild(ripple);
   };

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disableRipple) createRipple(event);
      props.onClick?.(event);
   };

   const renderChildren = () => {
      if (loading && loadingPosition === 'center') {
         return loadingIndicator ?? <CircularProgress />;
      }

      return (
         <>
            {loading && loadingPosition === 'start' && (loadingIndicator ?? <CircularProgress />)}
            {!loading || !loadingContent ? (
               <>
                  {startIcon && <span className="start-icon">{startIcon}</span>}
                  {children}
                  {endIcon && <span className="end-icon">{endIcon}</span>}
               </>
            ) : (
               loadingContent
            )}
            {loading && loadingPosition === 'end' && (loadingIndicator ?? <CircularProgress />)}
         </>
      );
   };

   return (
      <ButtonRoot
         ref={ref}
         {...remainingProps}
         className={cn(CLASS_NAME_BUTTON, className)}
         onClick={handleClick}
         disabled={disabled || loading}
         as={component as keyof JSX.IntrinsicElements}
         $styleProps={{
            ...styleProps,
            fullWidth,
            sx,
            size,
            variant,
            color,
            disabled,
         }}
      >
         {renderChildren()}

         {!disableRipple && <span ref={rippleRef} className={CLASS_NAME_RIPPLE} />}
      </ButtonRoot>
   );
});

Button.displayName = 'PXButton';

export default Button;

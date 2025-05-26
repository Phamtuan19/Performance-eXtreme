import React, { useRef } from 'react';

import { CircularProgress } from '@/components/icons';
import { getTheme } from '@/core';
import { separateProps } from '@/core/styled';
import { cn } from '@/core/utils';

import { ButtonRoot } from './button.styled';
import { ButtonProps } from './button.type';
import { CLASS_NAME_BUTTON, CLASS_NAME_RIPPLE } from './constants';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
   const theme = getTheme();

   const themeDefault = theme.components?.PXButton?.defaultProps ?? {};

   const {
      children,
      className,
      sx,
      component,
      disabled,
      loading,
      size,
      variant,
      color,
      disableRipple,
      loadingPosition = themeDefault?.loadingPosition,
      loadingContent = themeDefault?.loadingContent,
      loadingIndicator = themeDefault?.loadingIndicator ?? <CircularProgress />,
      startIcon = themeDefault?.startIcon,
      endIcon = themeDefault?.endIcon,
      fullWidth = themeDefault?.fullWidth,
      ...resProps
   } = props;

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
         return loadingIndicator;
      }

      return (
         <>
            {loading && loadingPosition === 'start' && loadingIndicator}
            {!loading || !loadingContent ? (
               <>
                  {startIcon && <span className="start-icon">{startIcon}</span>}
                  {children}
                  {endIcon && <span className="end-icon">{endIcon}</span>}
               </>
            ) : (
               loadingContent
            )}
            {loading && loadingPosition === 'end' && loadingIndicator}
         </>
      );
   };

   return (
      <ButtonRoot
         ref={ref}
         className={cn(CLASS_NAME_BUTTON, className)}
         onClick={handleClick}
         disabled={disabled || loading}
         as={component}
         $styleProps={{
            ...styleProps,
            fullWidth,
            sx,
            size,
            variant,
            color,
         }}
         {...remainingProps}
      >
         {renderChildren()}

         {!disableRipple && <span ref={rippleRef} className={CLASS_NAME_RIPPLE} />}
      </ButtonRoot>
   );
});

Button.displayName = 'PXButton';

export default Button;

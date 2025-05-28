import React from 'react';

import { CircularProgress } from '@/components/icons';
import { getTheme } from '@/core';
import { separateProps } from '@/core/styled';
import { cn } from '@/core/utils';

import { INPUT_DEFAULT_PROPS } from './constants';
import { HelperText, IconEnd, IconStart, InputContainer, InputStyle, InputWrapper } from './input.styled';
import { InputProps } from './input.type';

const CLASS_NAME = 'PXInput';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const theme = getTheme();
   const themeDefault = theme.components?.PXInput?.defaultProps ?? INPUT_DEFAULT_PROPS;

   const {
      className,
      sx,
      disabled = themeDefault.disabled,
      loading,
      size = themeDefault.size,
      variant = themeDefault.variant,
      color = themeDefault.color,
      loadingPosition = themeDefault.loadingPosition,
      loadingIndicator = themeDefault.loadingIndicator ?? <CircularProgress />,
      startIcon = themeDefault.startIcon,
      endIcon = themeDefault.endIcon,
      fullWidth = themeDefault.fullWidth,
      error = themeDefault.error,
      helperText,
      id,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);
   const isDisabled = disabled || loading;
   const inputId = id ?? `px-input-${Math.random().toString(36).slice(2, 9)}`;
   const describedBy = helperText ? `${inputId}-helper-text` : undefined;

   return (
      <InputContainer $styleProps={{ fullWidth, size }}>
         <InputWrapper
            className={cn(`${CLASS_NAME}__wrapper`, className, {
               [`${CLASS_NAME}--error`]: error,
               [`${CLASS_NAME}--disabled`]: isDisabled,
            })}
            $styleProps={{
               ...styleProps,
               sx: sx ?? {},
               variant: variant ?? 'filled',
               color: (error ? 'error' : color) ?? 'primary',
               disabled: isDisabled ?? false,
            }}
         >
            {loading
               ? loadingPosition === 'start' && (
                    <IconStart
                       className={`${CLASS_NAME}__icon ${CLASS_NAME}__icon--start ${CLASS_NAME}__icon--loading`}
                    >
                       {loadingIndicator}
                    </IconStart>
                 )
               : startIcon && (
                    <IconStart className={`${CLASS_NAME}__icon ${CLASS_NAME}__icon--start`}>{startIcon}</IconStart>
                 )}

            <InputStyle
               id={inputId}
               ref={ref}
               disabled={isDisabled}
               className={`${CLASS_NAME}__input`}
               $styleProps={{ size, variant }}
               aria-invalid={error || undefined}
               aria-describedby={describedBy}
               {...remainingProps}
            />

            {loading
               ? loadingPosition === 'end' && (
                    <IconEnd className={`${CLASS_NAME}__icon ${CLASS_NAME}__icon--end ${CLASS_NAME}__icon--loading`}>
                       {loadingIndicator}
                    </IconEnd>
                 )
               : endIcon && <IconEnd className={`${CLASS_NAME}__icon ${CLASS_NAME}__icon--end`}>{endIcon}</IconEnd>}
         </InputWrapper>

         {helperText && (
            <HelperText
               id={describedBy}
               className={cn(`${CLASS_NAME}__helper-text`, { [`${CLASS_NAME}--error`]: error })}
               $error={error}
            >
               {helperText}
            </HelperText>
         )}
      </InputContainer>
   );
});

Input.displayName = 'PXInput';

export default Input;

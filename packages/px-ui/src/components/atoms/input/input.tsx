import { merge } from 'lodash';
import React from 'react';

import { CircularProgress } from '@pui/material/components/icons';
import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import { HelperText, IconEnd, IconStart, InputContainer, InputStyle, InputWrapper } from './input.styled';
import type { InputProps, PxComponentInput } from './input.type';

export const INPUT_DEFAULT_PROPS: Required<PxComponentInput['defaultProps']> = {
   variant: 'outline',
   color: 'primary',
   size: 'medium',
   startIcon: null,
   endIcon: null,
   disabled: false,
   fullWidth: false,
   loading: false,
   loadingIndicator: <CircularProgress />,
   loadingPosition: 'end',
   error: false,
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const theme = getTheme();
   const themeDefault = theme.components?.PXInput?.defaultProps ?? INPUT_DEFAULT_PROPS;

   const {
      className,
      sx,
      disabled,
      loading,
      size,
      variant,
      color,
      loadingPosition,
      loadingIndicator,
      startIcon,
      endIcon,
      fullWidth,
      error,
      helperText,
      id,
      ...resProps
   } = merge({}, INPUT_DEFAULT_PROPS, themeDefault, props);

   const { styleProps, remainingProps } = separateProps(resProps);
   const isDisabled = disabled || loading;
   const inputId = id ?? `px-input-${Math.random().toString(36).slice(2, 9)}`;
   const describedBy = helperText ? `${inputId}-helper-text` : undefined;

   return (
      <InputContainer $styleProps={{ ...styleProps, sx, fullWidth, size }}>
         <InputWrapper
            className={cn(`px-input-wrapper`, className, {
               [`px-input-error`]: error,
               [`px-input-disabled`]: isDisabled,
            })}
            $styleProps={{
               variant,
               color: error ? 'error' : color,
               disabled: isDisabled ?? false,
            }}
         >
            {loading
               ? loadingPosition === 'start' && (
                    <IconStart className={`px-input-icon px-input-icon-start px-input-icon-loading`}>
                       {loadingIndicator}
                    </IconStart>
                 )
               : startIcon && <IconStart className={`px-input-icon px-input-icon-start`}>{startIcon}</IconStart>}

            <InputStyle
               id={inputId}
               ref={ref}
               disabled={isDisabled}
               className={`px-input-root`}
               //    $styleProps={{ size, variant }}
               aria-invalid={error || undefined}
               aria-describedby={describedBy}
               {...remainingProps}
            />

            {loading
               ? loadingPosition === 'end' && (
                    <IconEnd className={`px-input-icon px-input-icon-end px-input-icon-loading`}>
                       {loadingIndicator}
                    </IconEnd>
                 )
               : endIcon && <IconEnd className={`px-input-icon px-input-icon--end`}>{endIcon}</IconEnd>}
         </InputWrapper>

         {helperText && (
            <HelperText
               id={describedBy}
               className={cn(`px-input-helper-text`, { [`px-input-error`]: error })}
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

import { forwardRef, useRef } from 'react';

import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';

import { TEXTAREA_DEFAULT_PROPS } from './constants';
import { Wrapper, StyledTextarea } from './textarea.styled';
import type { TextareaProps } from './textarea.type';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
   const theme = getTheme();

   const defaultThemeProps = theme.components?.PXTextarea?.defaultProps ?? TEXTAREA_DEFAULT_PROPS;

   const {
      sx = {},
      autoExpand = defaultThemeProps.autoExpand ?? true,
      error = defaultThemeProps.error,
      disabled = defaultThemeProps.disabled,
      resize = defaultThemeProps.resize,
      rows,
      onInput,
      ...restProps
   } = props;

   const { styleProps, remainingProps } = separateProps(restProps);

   const internalTextareaRef = useRef<HTMLTextAreaElement | null>(null);
   const textareaRef = ref || internalTextareaRef;

   const getTextareaElement = () => {
      if (typeof textareaRef === 'function') {
         return internalTextareaRef.current;
      } else if (textareaRef && 'current' in textareaRef) {
         return textareaRef.current;
      }
      return null;
   };

   const handleAutoResize = (event: React.FormEvent<HTMLTextAreaElement>) => {
      const el = getTextareaElement();
      if (autoExpand && el) {
         el.style.height = 'auto';
         el.style.height = `${el.scrollHeight}px`;
      }

      onInput?.(event);
   };

   return (
      <Wrapper>
         <StyledTextarea
            rows={rows}
            disabled={disabled}
            ref={textareaRef}
            onInput={handleAutoResize}
            $styleProps={{ ...styleProps, sx, resize, autoExpand, error }}
            {...remainingProps}
         />
      </Wrapper>
   );
});

Textarea.displayName = 'PXTextarea';

export default Textarea;

import { merge } from 'lodash';
import React, { useEffect, useRef } from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { TextareaContainer, TextareaWrapper, TextareaStyle, TextareaHelperText } from './textarea.styled';
import type { PXComponentTextarea, TextareaProps } from './textarea.type';

export const TEXTAREA_DEFAULT_PROPS: Required<PXComponentTextarea['defaultProps']> = {
   variant: 'outline',
   color: 'primary',
   size: 'medium',
   disabled: false,
   fullWidth: false,
   error: false,
   autoResize: false,
   minRows: 3,
   maxRows: 10,
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
   const theme = getTheme();
   const themeDefault = theme.components?.PXTextarea?.defaultProps ?? {};

   const {
      className,
      sx,
      disabled,
      size,
      variant,
      color,
      fullWidth,
      error,
      helperText,
      autoResize,
      minRows,
      maxRows,
      id,
      onChange,
      ...resProps
   } = merge({}, TEXTAREA_DEFAULT_PROPS, themeDefault, props);

   const textareaRef = useRef<HTMLTextAreaElement>(null);
   const combinedRef = (ref as React.RefObject<HTMLTextAreaElement>) || textareaRef;

   const textareaId = id ?? `px-textarea-${Math.random().toString(36).slice(2, 9)}`;
   const describedBy = helperText ? `${textareaId}-helper-text` : undefined;

   const handleResize = () => {
      if (!autoResize || !combinedRef.current) return;

      const textarea = combinedRef.current;
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      const minHeight = lineHeight * minRows;
      const maxHeight = lineHeight * maxRows;

      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;

      if (scrollHeight <= maxHeight) {
         textarea.style.height = `${Math.max(scrollHeight, minHeight)}px`;
      } else {
         textarea.style.height = `${maxHeight}px`;
      }
   };

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(event);
      if (autoResize) {
         handleResize();
      }
   };

   useEffect(() => {
      if (autoResize) {
         handleResize();
      }
   }, [autoResize, minRows, maxRows]);

   return (
      <TextareaContainer $styleProps={{ sx, fullWidth, size }}>
         <TextareaWrapper
            className={cn(`px-textarea-wrapper`, className, {
               [`px-textarea-error`]: error,
               [`px-textarea-disabled`]: disabled,
            })}
            $styleProps={{
               variant,
               color: error ? 'error' : color,
               disabled: disabled ?? false,
            }}
         >
            <TextareaStyle
               id={textareaId}
               ref={combinedRef}
               disabled={disabled}
               className={`px-textarea-root`}
               $styleProps={{ size, variant }}
               aria-invalid={error || undefined}
               aria-describedby={describedBy}
               onChange={handleChange}
               rows={autoResize ? undefined : minRows}
               {...resProps}
            />
         </TextareaWrapper>

         {helperText && (
            <TextareaHelperText
               id={describedBy}
               className={cn(`px-textarea-helper-text`, { [`px-textarea-error`]: error })}
               $error={error}
            >
               {helperText}
            </TextareaHelperText>
         )}
      </TextareaContainer>
   );
});

Textarea.displayName = 'PXTextarea';

export default Textarea;

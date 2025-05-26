import React from 'react';

import { getTheme } from '@/core';
import { separateProps } from '@/core/styled';
import { cn } from '@/core/utils';

import { TYPOGRAPHY_DEFAULT_PROPS } from './constants';
import { TypographyStyled } from './typography.styled';
import { TypographyProps } from './typography.type';

const CLASS_NAME = 'PXUITypography';

const Typography = React.forwardRef<HTMLElement, TypographyProps>((props, ref) => {
   const theme = getTheme();

   const defaultProps = theme.components?.PXTypography?.defaultProps ?? TYPOGRAPHY_DEFAULT_PROPS;

   const {
      component,
      variant = defaultProps.variant,
      className,
      children,
      sx,
      underline,
      delete: deleteProp,
      italic,
      disabled,
      strong,
      color,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   return (
      <TypographyStyled
         ref={ref}
         as={component || variant}
         {...remainingProps}
         className={cn(CLASS_NAME, `${CLASS_NAME}-${variant}`, className)}
         $styleProps={{ ...styleProps, sx, variant, underline, delete: deleteProp, italic, disabled, strong, color }}
      >
         {children}
      </TypographyStyled>
   );
});

Typography.displayName = 'PXTypography';

export default Typography;

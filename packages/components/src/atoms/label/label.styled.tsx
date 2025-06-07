import styled from 'styled-components';

import type { LabelStyledProps } from './label.type';

export const LabelRoot = styled('label')<{
   $styleProps: Partial<LabelStyledProps>;
}>(({ theme, $styleProps }) => {
   const { color = 'default', size = 'medium', disabled } = $styleProps;

   const sizeMap = {
      small: { fontSize: '12px', lineHeight: 1.4 },
      medium: { fontSize: '14px', lineHeight: 1.5 },
      large: { fontSize: '16px', lineHeight: 1.6 },
   };

   const colorMap = {
      default: theme.palette.gray['700'],
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      success: theme.palette.success.main,
      error: theme.palette.error.main,
      warning: theme.palette.warning.main,
      info: theme.palette.info.main,
   };

   return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontWeight: 500,
      color: disabled ? theme.palette.gray['400'] : colorMap[color],
      cursor: disabled ? 'not-allowed' : 'default',
      userSelect: 'none',
      ...sizeMap[size],
   };
});

export const LabelRequired = styled('span')<{
   $styleProps: Partial<LabelStyledProps>;
}>(({ theme }) => ({
   color: theme.palette.error.main,
   marginLeft: '2px',
}));

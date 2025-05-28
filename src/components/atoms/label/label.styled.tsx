import styled from 'styled-components';

import { sxConfig } from '@PUI/core/styled';

import { LabelStyledProps } from './label.type';

export const LabelContainer = styled('label')<{ $styleProps: LabelStyledProps }>((props) => {
   const { theme, $styleProps } = props;

   const { disabled, required, requiredColor, ...resProps } = $styleProps;

   return {
      boxSizing: 'border-box',
      display: 'inline-block',
      marginBottom: 4,
      fontSize: '0.875rem',
      fontWeight: 500,
      color: disabled ? theme.palette.gray[400] : theme.palette.common.black,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'color 0.3s ease',

      ...(required && {
         '&::after': {
            content: '"*"',
            color: requiredColor ? requiredColor : theme.palette.error.main,
            fontSize: '0.875rem',
            fontWeight: 500,
            marginLeft: 4,
            transition: 'color 0.3s ease',
         },
      }),

      ...sxConfig(resProps),
   };
});

import type { CSSObject } from 'styled-components';
import styled from 'styled-components';

import type { DeepOptional } from '@PUI/core/helpers';
import { hexToRgba } from '@PUI/core/utils';

import type { PXComponentSelect, SelectStyleProps } from './select.type';

const DEFAULT_CSS_VARIANT_SIZE: PXComponentSelect['styleOverrides']['size'] = {
   small: {
      height: '28px',
      fontSize: '12px',
      padding: '0 8px',
   },
   medium: {
      height: '36px',
      fontSize: '1rem',
      padding: '0 12px',
   },
   large: {
      height: '48px',
      fontSize: '1rem',
      padding: '0 16px',
   },
};

export const SelectContainer = styled('div')<{
   $styleProps: Omit<SelectStyleProps, 'isValue' | 'open' | 'loading'>;
}>(({ theme, $styleProps }) => {
   const PXSelectOverrides = theme.components?.PXSelect?.styleOverrides;

   const { color, size, disabled, ...resProps } = $styleProps;

   const borderBaseColor = disabled
      ? theme.palette.disabled.borderColor
      : color === 'primary' || color !== 'error'
        ? theme.palette.disabled.borderColor
        : (theme.palette[color]?.main ?? color);

   const focusBorderColor = color === 'primary' ? theme.palette.primary.main : (theme.palette[color]?.main ?? color);

   return {
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      width: 'fit-content',
      fontWeight: 500,
      color: theme.palette.common.black,
      border: `1px solid ${borderBaseColor}`,
      borderRadius: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',

      ...(disabled
         ? {}
         : {
              '&:hover': {
                 borderColor: focusBorderColor,
              },
              '&:focus-within': {
                 borderColor: focusBorderColor,
                 boxShadow: `0 0 0 2px ${focusBorderColor}66`,
              },
           }),

      ...(PXSelectOverrides?.size ? PXSelectOverrides.size[size] : DEFAULT_CSS_VARIANT_SIZE[size]),

      ...(PXSelectOverrides?.color ? PXSelectOverrides.color[color as keyof typeof PXSelectOverrides.color] : {}),

      ...theme.sxConfig(resProps),
   };
});

export const SelectWrapper = styled('div')<{
   $styleProps: DeepOptional<Pick<SelectStyleProps, 'open' | 'disabled' | 'loading'>> & {
      hasSuffixIcon?: boolean;
   };
}>((props) => {
   const { $styleProps } = props;
   const { open, disabled, loading, hasSuffixIcon } = $styleProps;

   const arrowIcon = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'><path fill-rule='evenodd' clip-rule='evenodd' d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.8839 15.5303C12.3957 16.0185 11.6043 16.0185 11.1161 15.5303L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z' /></svg>")`;

   const loadingIcon = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' style='margin:auto; background:none; display:block;' width='16px' height='16px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'><circle cx='50' cy='50' fill='none' stroke='%239CA3AF' stroke-width='10' r='35' stroke-dasharray='164.93361431346415 56.97787143782138'><animateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50;360 50 50' keyTimes='0;1'></animateTransform></circle></svg>")`;

   return {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0.5rem 0',
      width: '100%',
      cursor: 'inherit',
      opacity: disabled ? 0.6 : 1,

      ...(!hasSuffixIcon
         ? {
              '&::after': {
                 content: '""',
                 position: 'absolute',
                 right: '0px',
                 top: '50%',
                 width: '16px',
                 height: '16px',
                 transform: loading ? 'translateY(-50%)' : `translateY(-50%) rotate(${open ? '180deg' : '0deg'})`,
                 transition: 'transform 0.3s ease-in-out',
                 backgroundImage: loading ? loadingIcon : arrowIcon,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: '16px 16px',
              },
           }
         : {}),
   };
});

export const SelectInput = styled('input')({
   position: 'absolute',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   opacity: 0,
   cursor: 'inherit',
   zIndex: 1,
   outline: 'none',
   border: 'none',
   margin: 0,
   padding: 0,
});

export const SelectItem = styled('span')<{
   $styedProps: {
      isValue?: boolean;
      hasSuffixIcon?: boolean;
   };
}>((props) => {
   const { theme, $styedProps } = props;

   const { isValue, hasSuffixIcon } = $styedProps;

   return {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      paddingRight: hasSuffixIcon ? 0 : '2rem',
      fontSize: 'inherit',
      color: isValue ? theme.palette.common.black : theme.palette.disabled.color,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
   };
});

export const SelectDropdown = styled('div')<{ $styleProps: { dropdownStyle?: CSSObject } }>((props) => {
   const { theme, $styleProps } = props;

   const { dropdownStyle } = $styleProps;

   return {
      boxSizing: 'border-box',
      backgroundColor: theme.palette.common.white,
      height: 'auto',
      maxHeight: '200px',
      overflowY: 'scroll',
      boxShadow: `0 2px 8px ${theme.palette.common.black}40`,
      borderRadius: 6,
      zIndex: 1,

      /* Ẩn scrollbar (cross-browser) */
      scrollbarWidth: 'none', // Firefox
      msOverflowStyle: 'none', // IE 10+
      '&::-webkit-scrollbar': {
         display: 'none', // Chrome, Safari
      },

      ...theme.sxConfig({ ...dropdownStyle }),
   };
});

export const SelectOptionWrapper = styled('div')({
   padding: '4px',
   display: 'flex',
   flexDirection: 'column',
   gap: 2,
});

export const SelectOptionItem = styled('div')<{ $styleProps: { selected?: boolean; isActive: boolean } }>(({
   theme,
   $styleProps,
}) => {
   const { isActive, selected } = $styleProps;

   const checkIcon = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231890ff'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7' /></svg>")`;

   return {
      position: 'relative',
      flex: 1,
      padding: '6px 12px',
      cursor: 'pointer',
      fontSize: '1rem',
      backgroundColor: isActive ? hexToRgba(theme.palette.primary.light, 0.2) : theme.palette.common.white,
      color: theme.palette.common.black,
      borderRadius: 4,

      '&:hover': {
         backgroundColor: isActive
            ? hexToRgba(theme.palette.primary.light, 0.2)
            : hexToRgba(theme.palette.gray[400], 0.2),
         color: theme.palette.common.black,
      },

      ...(selected &&
         isActive && {
            '&::after': {
               content: '""',
               position: 'absolute',
               right: '12px',
               top: '50%',
               transform: 'translateY(-50%)',
               fontSize: '16px',
               color: '#1890ff',
               width: '20px',
               height: '20px',
               backgroundImage: checkIcon,
               backgroundSize: '20px 20px',
               backgroundRepeat: 'no-repeat',
            },
         }),
   };
});

export const SelectSuffixIcon = styled('span')(() => {
   return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   };
});

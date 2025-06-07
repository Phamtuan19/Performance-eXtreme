import styled, { css } from 'styled-components';
import type { SelectStyledProps } from './select.type';

export const SelectRoot = styled('div')<{
   $styleProps: Partial<SelectStyledProps>;
}>(({ $styleProps }) => {
   const { fullWidth = false } = $styleProps;

   return {
      position: 'relative',
      display: 'inline-block',
      width: fullWidth ? '100%' : 'auto',
      minWidth: fullWidth ? '100%' : '120px',
   };
});

export const SelectControl = styled('div')<{
   $styleProps: Partial<SelectStyledProps>;
}>(({ theme, $styleProps }) => {
   const {
      variant = 'outline',
      color = 'primary',
      size = 'medium',
      disabled = false,
      error = false,
      focused = false,
      hasValue = false,
   } = $styleProps;

   const sizeMap = {
      small: {
         height: '32px',
         padding: '0 8px',
         fontSize: '14px',
      },
      medium: {
         height: '40px',
         padding: '0 12px',
         fontSize: '16px',
      },
      large: {
         height: '48px',
         padding: '0 16px',
         fontSize: '18px',
      },
   };

   const variantStyles = {
      outline: css`
         border: 1px solid ${error ? theme.palette.error.main : theme.palette.grey[300]};
         border-radius: 4px;
         background-color: ${theme.palette.background.paper};

         ${focused &&
         css`
            border-color: ${theme.palette[color].main};
            box-shadow: 0 0 0 2px ${theme.palette[color].main}25;
         `}

         &:hover:not(:disabled) {
            border-color: ${error ? theme.palette.error.main : theme.palette[color].main};
         }
      `,
      filled: css`
         border: none;
         border-bottom: 1px solid ${error ? theme.palette.error.main : theme.palette.grey[300]};
         border-radius: 4px 4px 0 0;
         background-color: ${theme.palette.grey[100]};

         ${focused &&
         css`
            border-bottom-color: ${theme.palette[color].main};
            box-shadow: 0 1px 0 0 ${theme.palette[color].main};
         `}
      `,
      standard: css`
         border: none;
         border-bottom: 1px solid ${error ? theme.palette.error.main : theme.palette.grey[300]};
         border-radius: 0;
         background-color: transparent;

         ${focused &&
         css`
            border-bottom-color: ${theme.palette[color].main};
            box-shadow: 0 1px 0 0 ${theme.palette[color].main};
         `}
      `,
   };

   return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease-in-out',
      opacity: disabled ? 0.6 : 1,
      color: hasValue ? theme.palette.text.primary : theme.palette.text.secondary,
      ...sizeMap[size],
      ...variantStyles[variant],
   };
});

export const SelectValue = styled('span')({
   flex: 1,
   textAlign: 'left',
   overflow: 'hidden',
   textOverflow: 'ellipsis',
   whiteSpace: 'nowrap',
});

export const SelectIcon = styled('div')<{
   $open: boolean;
}>(({ $open }) => ({
   marginLeft: '8px',
   transition: 'transform 0.2s ease-in-out',
   transform: $open ? 'rotate(180deg)' : 'rotate(0deg)',
   color: 'inherit',
   '& svg': {
      width: '20px',
      height: '20px',
   },
}));

export const SelectDropdown = styled('div')<{
   $open: boolean;
   $maxHeight?: number;
}>(({ theme, $open, $maxHeight = 200 }) => ({
   position: 'absolute',
   top: '100%',
   left: 0,
   right: 0,
   zIndex: 1000,
   maxHeight: $open ? `${$maxHeight}px` : '0',
   overflowY: 'auto',
   backgroundColor: theme.palette.background.paper,
   border: $open ? `1px solid ${theme.palette.grey[300]}` : 'none',
   borderRadius: '4px',
   boxShadow: $open ? theme.shadows[2] : 'none',
   transition: 'all 0.2s ease-in-out',
   opacity: $open ? 1 : 0,
   visibility: $open ? 'visible' : 'hidden',
   marginTop: '2px',
}));

export const SelectOption = styled('div')<{
   $selected: boolean;
   $disabled: boolean;
   $highlighted: boolean;
}>(({ theme, $selected, $disabled, $highlighted }) => ({
   padding: '8px 12px',
   cursor: $disabled ? 'not-allowed' : 'pointer',
   backgroundColor: $selected
      ? theme.palette.primary.main + '20'
      : $highlighted
        ? theme.palette.grey[100]
        : 'transparent',
   color: $disabled ? theme.palette.text.disabled : $selected ? theme.palette.primary.main : theme.palette.text.primary,
   opacity: $disabled ? 0.5 : 1,
   transition: 'all 0.15s ease-in-out',
   borderLeft: $selected ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',

   '&:hover:not(:disabled)': {
      backgroundColor: $selected ? theme.palette.primary.main + '30' : theme.palette.grey[100],
   },
}));

export const SelectHelperText = styled('div')<{
   $error: boolean;
}>(({ theme, $error }) => ({
   marginTop: '4px',
   fontSize: '12px',
   color: $error ? theme.palette.error.main : theme.palette.text.secondary,
}));

export const SelectLoadingOption = styled('div')(({ theme }) => ({
   padding: '8px 12px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   color: theme.palette.text.secondary,
}));

export const SelectEmptyOption = styled('div')(({ theme }) => ({
   padding: '8px 12px',
   textAlign: 'center',
   color: theme.palette.text.secondary,
   fontStyle: 'italic',
}));

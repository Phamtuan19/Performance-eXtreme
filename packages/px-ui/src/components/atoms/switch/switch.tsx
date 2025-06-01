import { merge } from 'lodash';
import React from 'react';

import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';

import {
   SwitchLabel,
   SwitchInput,
   SwitchTrack,
   SwitchThumb,
   SwitchTrackLabel,
   SwitchLoadingSpinner,
} from './switch.styled';
import type { PXComponentSwitch, SwitchProps } from './switch.type';

const SWITCH_DEFAULT_PROPS: PXComponentSwitch['defaultProps'] = {
   checkedLabel: null,
   color: 'primary',
   size: 'small',
   disabled: false,
   loading: false,
   unCheckedLabel: undefined,
};

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
   const theme = getTheme();

   const PXSwitch = theme.components?.PXSwitch?.defaultProps;

   const {
      sx,
      checked,
      defaultChecked,
      disabled,
      loading,
      color,
      size,
      checkedLabel,
      unCheckedLabel,
      onChange,
      onKeyDown,
      ...resProps
   } = merge({}, SWITCH_DEFAULT_PROPS, PXSwitch, props);

   const { styleProps, remainingProps } = separateProps(resProps);

   const isControlled = typeof checked === 'boolean';
   const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);

   const isChecked = isControlled ? checked : internalChecked;

   const isMounted = React.useRef(true);
   React.useEffect(() => {
      return () => {
         isMounted.current = false;
      };
   }, []);

   React.useEffect(() => {
      if (isControlled) {
         setInternalChecked(checked!);
      }
   }, [checked, isControlled]);

   const safeSetChecked = (val: boolean) => {
      if (!isControlled && isMounted.current) {
         setInternalChecked(val);
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || loading) return;

      const newChecked = e.target.checked;

      safeSetChecked(newChecked);

      onChange?.(newChecked, e);
   };

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (['Enter', ' '].includes(event.key)) {
         event.preventDefault();

         const newChecked = !isChecked;

         safeSetChecked(newChecked);

         onKeyDown?.(event);
      }
   };

   return (
      <SwitchLabel
         $styleProps={{
            ...styleProps,
            sx,
            checked: isChecked,
            loading,
            disabled,
         }}
      >
         <SwitchInput
            {...remainingProps}
            ref={ref}
            checked={isChecked}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            disabled={disabled || loading}
            aria-checked={isChecked}
            aria-disabled={disabled || loading}
            tabIndex={disabled || loading ? -1 : 0}
            role="switch"
            $styleProps={{ color }}
         />
         <SwitchTrack
            $styleProps={{
               checked: isChecked,
               color,
               disabled: disabled || loading,
               size,
            }}
         >
            <SwitchThumb
               $styleProps={{
                  checked: isChecked,
                  size,
                  disabled: disabled || loading,
               }}
            >
               {loading && <SwitchLoadingSpinner />}
            </SwitchThumb>
         </SwitchTrack>
         {(checkedLabel || unCheckedLabel) && (
            <SwitchTrackLabel>{isChecked ? checkedLabel : unCheckedLabel}</SwitchTrackLabel>
         )}
      </SwitchLabel>
   );
});

Switch.displayName = 'PXSwitch';

export default Switch;

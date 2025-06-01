import React from 'react';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';

import { SWITCH_DEFAULT_PROPS } from './constants';
import {
   SwitchLabel,
   SwitchInput,
   SwitchTrack,
   SwitchThumb,
   SwitchTrackLabel,
   SwitchLoadingSpinner,
} from './switch.styled';
import type { SwitchProps } from './switch.type';

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
   const theme = getTheme();

   // Lấy default props từ theme hoặc fallback
   const PXSwitch = theme.components?.PXSwitch?.defaultProps ?? SWITCH_DEFAULT_PROPS;

   // Giải cấu trúc props, ưu tiên props truyền vào hoặc default từ theme
   const {
      sx,
      checked: controlledChecked,
      defaultChecked = PXSwitch.defaultChecked,
      disabled = PXSwitch.disabled,
      loading = PXSwitch.loading,
      color = PXSwitch.color,
      size = PXSwitch.size,
      checkedLabel = PXSwitch.checkedLabel,
      unCheckedLabel = PXSwitch.unCheckedLabel,
      onChange,
      onKeyDown,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   // Internal state cho uncontrolled mode
   const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);

   // Xác định đang controlled hay uncontrolled
   const isControlled = typeof controlledChecked === 'boolean';

   // Giá trị checked cuối cùng để hiển thị
   const isChecked = isControlled ? controlledChecked! : internalChecked;

   // Xử lý sự kiện change
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || loading) return;

      const newChecked = e.target.checked;

      if (!isControlled) {
         setInternalChecked(newChecked); // Cập nhật internal state nếu uncontrolled
      }

      onChange?.(newChecked, e); // Gọi callback onChange với giá trị mới
   };

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (['Enter', ' '].includes(event.key)) {
         event.preventDefault();

         const newChecked = !isChecked;

         if (!isControlled) setInternalChecked(newChecked);
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

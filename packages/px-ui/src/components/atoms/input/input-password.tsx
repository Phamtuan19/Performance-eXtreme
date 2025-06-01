import { useState, forwardRef } from 'react';

import { EyeOff, Eye } from '@pui/material/components/icons';

import Input from './input';
import type { InputProps } from './input.type';

const InputPassword = forwardRef<HTMLInputElement, Omit<InputProps, 'type' | 'endIcon'>>((props, ref) => {
   const [showPassword, setShowPassword] = useState(false);

   const toggleShowPassword = () => setShowPassword((prev) => !prev);

   const iconToggle = showPassword ? (
      <EyeOff
         style={{ cursor: 'pointer', userSelect: 'none', outline: 'none' }}
         onClick={toggleShowPassword}
         aria-label="Ẩn mật khẩu"
         role="button"
         tabIndex={0}
         onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleShowPassword();
         }}
      />
   ) : (
      <Eye
         style={{ cursor: 'pointer', userSelect: 'none', outline: 'none' }}
         onClick={toggleShowPassword}
         aria-label="Hiện mật khẩu"
         role="button"
         tabIndex={0}
         onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleShowPassword();
         }}
      />
   );

   return <Input {...props} ref={ref} type={showPassword ? 'text' : 'password'} endIcon={iconToggle} />;
});

InputPassword.displayName = 'PXInputPassword';

export default InputPassword;

import { useState, forwardRef } from 'react';

import { EyeOff, Eye } from '@pui/material/components/icons';

import Input from './input';
import { IconButton } from './input.styled';
import type { InputPasswordProps } from './input.type';

const PasswordToggleIcon = ({
   visible,
   onToggle,
   label,
}: {
   visible: boolean;
   onToggle: () => void;
   label?: string;
}) => {
   const Icon = visible ? EyeOff : Eye;

   return (
      <IconButton
         role="button"
         aria-label={label || (visible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu')}
         tabIndex={0}
         onClick={onToggle}
         onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onToggle();
         }}
      >
         <Icon />
      </IconButton>
   );
};

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
   ({ toggleable = true, onToggleVisibility, ...props }, ref) => {
      const [showPassword, setShowPassword] = useState(false);

      const toggleShowPassword = () => {
         setShowPassword((prev) => {
            const next = !prev;
            onToggleVisibility?.(next);
            return next;
         });
      };

      const icon = toggleable ? <PasswordToggleIcon visible={showPassword} onToggle={toggleShowPassword} /> : undefined;

      return <Input {...props} ref={ref} type={showPassword ? 'text' : 'password'} endIcon={icon} />;
   },
);

InputPassword.displayName = 'PXInputPassword';

export default InputPassword;

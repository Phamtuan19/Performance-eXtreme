import React, { useState } from 'react';

import { Eye, EyeOff } from '@pui/icons';

import Input from './input';
import type { InputProps } from './input.type';

export type InputPasswordProps = Omit<InputProps, 'type' | 'endIcon'> & {
   /**
    * Icon hiển thị khi password visible
    */
   visibleIcon?: React.ReactNode;

   /**
    * Icon hiển thị khi password hidden
    */
   hiddenIcon?: React.ReactNode;
};

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>((props, ref) => {
   const { visibleIcon = <EyeOff />, hiddenIcon = <Eye />, ...resProps } = props;

   const [isVisible, setIsVisible] = useState(false);

   const toggleVisibility = () => {
      setIsVisible(!isVisible);
   };

   const endIcon = (
      <button
         type="button"
         onClick={toggleVisibility}
         style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: 0,
         }}
         tabIndex={-1}
      >
         {isVisible ? visibleIcon : hiddenIcon}
      </button>
   );

   return <Input ref={ref} type={isVisible ? 'text' : 'password'} endIcon={endIcon} {...resProps} />;
});

InputPassword.displayName = 'PXInputPassword';

export default InputPassword;

// import { rest } from 'lodash';
// import React from 'react';

// import { getTheme } from '@pui/material/core';

// import { LoaderWrapper, LoaderMessage } from './spinner.styled';
// import { SpinnerProps } from './spinner.type';

// const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
//    const theme = getTheme();
//    const PXSpinner = theme.components?.PXSpinner?.defaultProps;

//    const { fullScreen = false, color = PXSpinner?.color ?? 'primary', size = PXSpinner?.size ?? 'medium', thickness = PXSpinner?.thickness ?? 1 ...resProps } = props;

//    return (
//       <LoaderWrapper $styleProps={{ fullScreen, color, size,    thickness, }} ref={ref}>
//          <div style={{ textAlign: 'center' }}>
//             <PXSpinner  />
//             {message && <LoaderMessage>{message}</LoaderMessage>}
//          </div>
//       </LoaderWrapper>
//    );
// });

// Spinner.displayName = 'PXSpinner';

// export default Spinner;
import React from 'react';

import { getTheme } from '@pui/material/core';
import { separateProps } from '@pui/material/core/styled';
import { cn } from '@pui/material/core/utils';

import { SpinnerWrapper } from './spinner.styled';
import type { SpinnerProps } from './spinner.type';

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>((props, ref) => {
   const theme = getTheme();
   const PXSpinner = theme.components?.PXSpinner?.defaultProps;

   const {
      sx,
      className,
      fullScreen = false,
      color = PXSpinner?.color ?? 'primary',
      size = PXSpinner?.size ?? 'medium',
      thickness = PXSpinner?.thickness,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   return (
      <SpinnerWrapper
         ref={ref}
         {...remainingProps}
         className={cn('PXSpinner', className)}
         $styleProps={{ sx, ...styleProps, fullScreen, color, size, thickness }}
      />
   );
});

Spinner.displayName = 'PXSpinner';

export default Spinner;

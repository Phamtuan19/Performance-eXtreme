import { merge } from 'lodash';
import React, { useState, useRef, useEffect } from 'react';

import { getTheme } from '@pui/theme';
import { cn } from '@pui/core';

import { TooltipRoot, TooltipContent, TooltipArrow } from './tooltip.styled';
import type { PXComponentTooltip, TooltipProps } from './tooltip.type';

export const TOOLTIP_DEFAULT_PROPS: PXComponentTooltip['defaultProps'] = {
   placement: 'top',
   trigger: 'hover',
   enterDelay: 500,
   leaveDelay: 200,
   arrow: true,
};

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
   const theme = getTheme();
   const PXTooltip = theme.components?.PXTooltip?.defaultProps ?? {};

   const {
      className,
      sx,
      placement,
      trigger,
      enterDelay,
      leaveDelay,
      arrow,
      children,
      title,
      open: openProp,
      onOpenChange,
      ...resProps
   } = merge({}, TOOLTIP_DEFAULT_PROPS, PXTooltip, props);

   const [internalOpen, setInternalOpen] = useState(false);
   const open = openProp !== undefined ? openProp : internalOpen;

   const enterTimeoutRef = useRef<NodeJS.Timeout>();
   const leaveTimeoutRef = useRef<NodeJS.Timeout>();

   const handleOpenChange = (newOpen: boolean) => {
      if (openProp === undefined) {
         setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
   };

   const handleEnter = () => {
      if (leaveTimeoutRef.current) {
         clearTimeout(leaveTimeoutRef.current);
      }

      enterTimeoutRef.current = setTimeout(() => {
         handleOpenChange(true);
      }, enterDelay);
   };

   const handleLeave = () => {
      if (enterTimeoutRef.current) {
         clearTimeout(enterTimeoutRef.current);
      }

      leaveTimeoutRef.current = setTimeout(() => {
         handleOpenChange(false);
      }, leaveDelay);
   };

   const handleClick = () => {
      if (trigger === 'click') {
         handleOpenChange(!open);
      }
   };

   const handleFocus = () => {
      if (trigger === 'focus') {
         handleOpenChange(true);
      }
   };

   const handleBlur = () => {
      if (trigger === 'focus') {
         handleOpenChange(false);
      }
   };

   useEffect(() => {
      return () => {
         if (enterTimeoutRef.current) {
            clearTimeout(enterTimeoutRef.current);
         }
         if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
         }
      };
   }, []);

   if (!title) {
      return children;
   }

   const triggerProps = {
      ...(trigger === 'hover' && {
         onMouseEnter: handleEnter,
         onMouseLeave: handleLeave,
      }),
      ...(trigger === 'click' && {
         onClick: handleClick,
      }),
      ...(trigger === 'focus' && {
         onFocus: handleFocus,
         onBlur: handleBlur,
      }),
   };

   return (
      <TooltipRoot ref={ref} className={cn('px-tooltip', className)} {...resProps}>
         {React.cloneElement(children, triggerProps)}
         <TooltipContent
            className="px-tooltip-content"
            $styleProps={{ sx, placement, trigger, enterDelay, leaveDelay, arrow }}
            $visible={open}
            role="tooltip"
         >
            {title}
            {arrow && <TooltipArrow $styleProps={{ placement }} />}
         </TooltipContent>
      </TooltipRoot>
   );
});

Tooltip.displayName = 'PXTooltip';

export default Tooltip;

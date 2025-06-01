/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Placement } from '@floating-ui/dom';
import { computePosition, offset, flip, shift, arrow as arrowFloatingUI } from '@floating-ui/dom';
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { getTheme } from '@PUI/core';
import { separateProps } from '@PUI/core/styled';
import { cn } from '@PUI/core/utils';

import { Arrow, TooltipWrapper } from './tooltip.styled';
import type { TooltipProps } from './tooltip.type';

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, forwardedRef) => {
   const theme = getTheme();

   const PXTooltip = theme.components?.PXTooltip?.defaultProps;

   const {
      sx,
      children,
      title,
      placement = PXTooltip?.placement ?? 'top',
      offset: offsetValue = PXTooltip?.offset ?? 8,
      delay = PXTooltip?.delay ?? 200,
      arrow = PXTooltip?.arrow ?? true,
      color = PXTooltip?.color ?? 'default',
      open,
      style: customStyle,
      className,
      ...resProps
   } = props;

   const { styleProps, remainingProps } = separateProps(resProps);

   const [visible, setVisible] = useState(open ?? false);
   const [style, setStyle] = useState<React.CSSProperties>({});
   const targetRef = useRef<HTMLElement>(null);
   const tooltipRef = useRef<HTMLDivElement>(null);
   const arrowRef = useRef<HTMLDivElement>(null);
   const timeoutRef = useRef<number>(0);
   const [placementState, setPlacementState] = useState<Placement>(placement);

   const show = () => {
      if (open === undefined) {
         timeoutRef.current = window.setTimeout(() => setVisible(true), delay);
      }
   };

   const hide = () => {
      if (open === undefined) {
         clearTimeout(timeoutRef.current);
         setVisible(false);
      }
   };

   useEffect(() => {
      if (typeof open === 'boolean') {
         setVisible(open);
      }
   }, [open]);

   useEffect(() => {
      if (!visible || !targetRef.current || !tooltipRef.current || !arrowRef.current) return;

      computePosition(targetRef.current, tooltipRef.current, {
         placement,
         middleware: [
            offset(offsetValue),
            flip({ fallbackPlacements: ['top', 'bottom', 'left', 'right'] }),
            shift({ padding: 8 }),
            arrowFloatingUI({ element: arrowRef.current }),
         ],
      }).then(({ x, y, placement: computedPlacement, middlewareData }) => {
         setPlacementState(computedPlacement as Placement); // cập nhật state (nếu cần dùng sau)
         const { x: arrowX, y: arrowY } = middlewareData.arrow ?? {};

         setStyle({
            position: 'absolute',
            top: `${y}px`,
            left: `${x}px`,
         });

         const arrowEl = arrowRef.current;
         const [basePlacement] = computedPlacement.split('-');

         if (arrowEl) {
            Object.assign(arrowEl.style, {
               left: '',
               top: '',
               right: '',
               bottom: '',
               // Arrow positioning
               ...(arrowX != null && (basePlacement === 'top' || basePlacement === 'bottom')
                  ? { left: `${arrowX}px` }
                  : {}),
               ...(arrowY != null && (basePlacement === 'left' || basePlacement === 'right')
                  ? { top: `${arrowY}px` }
                  : {}),
               // Fixed side positioning
               ...(basePlacement === 'top' && { bottom: '-4px' }),
               ...(basePlacement === 'bottom' && { top: '-4px' }),
               ...(basePlacement === 'left' && { right: '-4px' }),
               ...(basePlacement === 'right' && { left: '-4px' }),
            });
         }
      });
   }, [visible, placement, offsetValue, open]);

   const setRefs = (node: HTMLDivElement | null) => {
      tooltipRef.current = node;
      if (typeof forwardedRef === 'function') {
         forwardedRef(node);
      } else if (forwardedRef && 'current' in forwardedRef) {
         forwardedRef.current = node;
      }
   };

   const child = React.isValidElement(children)
      ? React.cloneElement(children as React.ReactElement<any>, {
           ref: (el: HTMLElement | null) => {
              targetRef.current = el;
              if (typeof (children as any).ref === 'function') {
                 (children as any).ref(el);
              } else if ((children as any).ref && 'current' in (children as any).ref) {
                 (children as any).ref.current = el;
              }
           },
           onMouseEnter: (e: React.MouseEvent) => {
              if ((children as any).props.onMouseEnter) {
                 (children as any).props.onMouseEnter(e);
              }
              show();
           },
           onMouseLeave: (e: React.MouseEvent) => {
              if ((children as any).props.onMouseLeave) {
                 (children as any).props.onMouseLeave(e);
              }
              hide();
           },
        })
      : children;

   return (
      <>
         {child}
         {visible &&
            createPortal(
               <TooltipWrapper
                  {...remainingProps}
                  ref={setRefs}
                  data-placement={placementState}
                  className={cn('PXTooltip-wrapper', className)}
                  style={{ ...style, ...customStyle }}
                  $styleProps={{ sx, color, ...styleProps }}
               >
                  {title}
                  {arrow && <Arrow ref={arrowRef} />}
               </TooltipWrapper>,
               document.body,
            )}
      </>
   );
});

Tooltip.displayName = 'PXTooltip';

export default Tooltip;

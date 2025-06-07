import styled from 'styled-components';

import type { TooltipStyledProps } from './tooltip.type';

export const TooltipRoot = styled('div')({
   position: 'relative',
   display: 'inline-flex',
});

export const TooltipContent = styled('div')<{
   $styleProps: Partial<TooltipStyledProps>;
   $visible: boolean;
}>(({ theme, $styleProps, $visible }) => {
   const { placement = 'top' } = $styleProps;

   const positionMap = {
      top: {
         bottom: '100%',
         left: '50%',
         transform: 'translateX(-50%) translateY(-8px)',
      },
      bottom: {
         top: '100%',
         left: '50%',
         transform: 'translateX(-50%) translateY(8px)',
      },
      left: {
         right: '100%',
         top: '50%',
         transform: 'translateY(-50%) translateX(-8px)',
      },
      right: {
         left: '100%',
         top: '50%',
         transform: 'translateY(-50%) translateX(8px)',
      },
   };

   return {
      position: 'absolute',
      zIndex: theme.zIndex.tooltip,
      background: theme.palette.gray['900'],
      color: theme.palette.common.white,
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '12px',
      lineHeight: 1.4,
      fontWeight: 500,
      maxWidth: '200px',
      wordWrap: 'break-word',
      opacity: $visible ? 1 : 0,
      visibility: $visible ? 'visible' : 'hidden',
      transition: 'opacity 0.2s ease, visibility 0.2s ease',
      pointerEvents: 'none',
      ...positionMap[placement],
   };
});

export const TooltipArrow = styled('div')<{
   $styleProps: Partial<TooltipStyledProps>;
}>(({ theme, $styleProps }) => {
   const { placement = 'top' } = $styleProps;

   const arrowSize = 4;
   const arrowColor = theme.palette.gray['900'];

   const arrowMap = {
      top: {
         top: '100%',
         left: '50%',
         transform: 'translateX(-50%)',
         borderLeft: `${arrowSize}px solid transparent`,
         borderRight: `${arrowSize}px solid transparent`,
         borderTop: `${arrowSize}px solid ${arrowColor}`,
      },
      bottom: {
         bottom: '100%',
         left: '50%',
         transform: 'translateX(-50%)',
         borderLeft: `${arrowSize}px solid transparent`,
         borderRight: `${arrowSize}px solid transparent`,
         borderBottom: `${arrowSize}px solid ${arrowColor}`,
      },
      left: {
         left: '100%',
         top: '50%',
         transform: 'translateY(-50%)',
         borderTop: `${arrowSize}px solid transparent`,
         borderBottom: `${arrowSize}px solid transparent`,
         borderLeft: `${arrowSize}px solid ${arrowColor}`,
      },
      right: {
         right: '100%',
         top: '50%',
         transform: 'translateY(-50%)',
         borderTop: `${arrowSize}px solid transparent`,
         borderBottom: `${arrowSize}px solid transparent`,
         borderRight: `${arrowSize}px solid ${arrowColor}`,
      },
   };

   return {
      position: 'absolute',
      width: 0,
      height: 0,
      ...arrowMap[placement],
   };
});

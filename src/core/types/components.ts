import type { CSSObject } from 'styled-components';

import type {
   PXComponentCheckbox,
   PXComponentRadio,
   PXComponentSwitch,
   PXComponentAvatar,
   PXComponentBadge,
   PXComponentDivider,
   PXComponentTooltip,
   PXComponentSpinner,
   PXComponentSelect,
   PxComponentBox,
} from '@PUI/components/atoms';

import type { PxComponentButton, PxComponentTypography, PxComponentInput } from '../theme';

export interface PXComponentTextarea {
   defaultProps: {
      autoExpand: boolean;
      error: boolean;
      disabled: boolean;
      resize: 'none' | 'both' | 'horizontal' | 'vertical';
   };
   styleOverrides: {
      root: CSSObject;
   };
}

export type Components = {
   PXButton?: Partial<PxComponentButton>;
   PXBox?: Partial<PxComponentBox>;
   PXTypography?: Partial<PxComponentTypography>;
   PXInput?: Partial<PxComponentInput>;
   PXTextarea?: Partial<PXComponentTextarea>;
   PXCheckBox?: Partial<PXComponentCheckbox>;
   PXRadio?: Partial<PXComponentRadio>;
   PXSwitch?: Partial<PXComponentSwitch>;
   PXAvatar?: Partial<PXComponentAvatar>;
   PXBadge?: Partial<PXComponentBadge>;
   PXDivider?: Partial<PXComponentDivider>;
   PXTooltip?: Partial<PXComponentTooltip>;
   PXSpinner?: Partial<PXComponentSpinner>;
   PXSelect?: Partial<PXComponentSelect>;
};

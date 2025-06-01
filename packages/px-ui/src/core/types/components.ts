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
   PXComponentButton,
   PXComponentAvatarGroup,
   PxComponentInput,
} from '@pui/material/components/atoms';

import type { DeepOptional } from '../helpers';
import type { PxComponentTypography } from '../theme';

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

/**
 * Các thành phần UI tùy chỉnh của thư viện PX UI.
 * Mỗi thành phần có kiểu DeepOptional để:
 * - Cho phép mỗi thuộc tính trong thành phần có thể là undefined (tùy chọn).
 * - Đệ quy áp dụng optional cho các trường con (nested).
 * Ví dụ: có thể override style hoặc props của PXButton, PXInput,... một cách linh hoạt.
 */
export type Components = {
   PXButton?: DeepOptional<PXComponentButton>;

   PXBox?: DeepOptional<PxComponentBox>;

   PXTypography?: DeepOptional<PxComponentTypography>;

   PXInput?: DeepOptional<PxComponentInput>;

   PXTextarea?: DeepOptional<PXComponentTextarea>;

   PXCheckBox?: DeepOptional<PXComponentCheckbox>;

   PXRadio?: DeepOptional<PXComponentRadio>;

   PXSwitch?: DeepOptional<PXComponentSwitch>;

   PXAvatar?: DeepOptional<PXComponentAvatar>;

   PXAvatarGroup?: DeepOptional<PXComponentAvatarGroup>;

   PXBadge?: DeepOptional<PXComponentBadge>;

   PXDivider?: DeepOptional<PXComponentDivider>;

   PXTooltip?: DeepOptional<PXComponentTooltip>;

   PXSpinner?: DeepOptional<PXComponentSpinner>;

   PXSelect?: DeepOptional<PXComponentSelect>;
};

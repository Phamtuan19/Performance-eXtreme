import type { PXComponentAvatar, PXComponentAvatarGroup } from '@pui/material/components/atoms/avatar';
import type { PXComponentBadge } from '@pui/material/components/atoms/badge';
import type { PxComponentBox } from '@pui/material/components/atoms/box';
import type { PXComponentButton } from '@pui/material/components/atoms/button';
import type { PXComponentCheckbox } from '@pui/material/components/atoms/checkbox';
import type { PXComponentDivider } from '@pui/material/components/atoms/divider';
import type { PxComponentInput } from '@pui/material/components/atoms/input';
import type { PXComponentRadio } from '@pui/material/components/atoms/radio';
import type { PXComponentSelect } from '@pui/material/components/atoms/select';
import type { PXComponentSpinner } from '@pui/material/components/atoms/spinner';
import type { PXComponentSwitch } from '@pui/material/components/atoms/switch';
import type { PXComponentTextarea } from '@pui/material/components/atoms/textarea';
import type { PXComponentTooltip } from '@pui/material/components/atoms/tooltip';
import type { PXComponentTypography } from '@pui/material/components/atoms/typography';

import type { DeepOptional } from '../helpers';

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

   PXTypography?: DeepOptional<PXComponentTypography>;

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

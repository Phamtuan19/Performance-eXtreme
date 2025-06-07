import type { ThemeColor, ThemeSize } from '@pui/theme';

export interface TagProps {
   children: React.ReactNode;
   variant?: 'filled' | 'outlined' | 'soft';
   color?: ThemeColor;
   size?: ThemeSize;
   deletable?: boolean;
   icon?: React.ReactNode;
   onClick?: (event: React.MouseEvent<HTMLElement>) => void;
   onDelete?: (event: React.MouseEvent<HTMLElement>) => void;
   disabled?: boolean;
   className?: string;
   id?: string;
}

export interface TagStyledProps {
   variant: 'filled' | 'outlined' | 'soft';
   color: ThemeColor;
   size: ThemeSize;
   deletable: boolean;
   disabled: boolean;
   clickable: boolean;
}

import type { DeepOptional } from '@pui/core';

// Placeholder types for component configurations
// These will be properly typed when components are fully migrated

export interface PXComponentButton {
   defaultProps?: Record<string, unknown>;
   styleOverrides?: Record<string, unknown>;
}

export interface PXComponentTypography {
   defaultProps?: Record<string, unknown>;
   styleOverrides?: Record<string, unknown>;
}

/**
 * Component configurations for the theme system
 * Each component can have defaultProps and styleOverrides
 */
export type Components = {
   PXButton?: DeepOptional<PXComponentButton>;
   PXTypography?: DeepOptional<PXComponentTypography>;
   // Add more components as they are migrated
   [key: string]: unknown;
};

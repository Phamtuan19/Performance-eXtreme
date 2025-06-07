import type { Theme } from './types';
/**
 * Tạo một object spacing chứa unit và hàm spacing tương tự MUI.
 *
 * @param unit - Đơn vị spacing mặc định, ví dụ 8.
 * @returns Object có dạng { unit, spacing }
 */
export declare function createSpacingObject(unit: number): Theme['spacing'];

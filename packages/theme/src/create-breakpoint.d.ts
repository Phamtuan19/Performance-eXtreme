import type { Breakpoints } from './types';
export declare function createBreakpoints({ values, unit, }: {
    values?: Partial<Record<string, number>>;
    unit?: string;
}): Breakpoints;

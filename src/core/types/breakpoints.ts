export type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;

export type Breakpoints = {
   keys: BreakpointKey[];
   values: Record<string, number>;
   unit: string;
   generateBreakpoints: () => Record<string, string>;
};

export type DeepOptionalNullable<T> = {
   [K in keyof T]?: T[K] extends object ? DeepOptionalNullable<T[K]> | null | undefined : T[K] | null | undefined;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepOptional<T> = T extends Function
   ? T
   : T extends Array<infer U>
     ? Array<DeepOptional<U>>
     : T extends object
       ? { [K in keyof T]?: DeepOptional<T[K]> }
       : T;

export type DeepNonNullable<T> = {
   [K in keyof T]?: T[K] extends object ? DeepOptional<T[K]> : T[K];
};

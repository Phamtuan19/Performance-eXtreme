export type DeepOptionalNullable<T> = {
   [K in keyof T]?: T[K] extends object ? DeepOptionalNullable<T[K]> | null | undefined : T[K] | null | undefined;
};

export type DeepOptional<T> = {
   [K in keyof T]?: T[K] extends object ? DeepOptional<T[K]> | undefined : T[K] | undefined;
};

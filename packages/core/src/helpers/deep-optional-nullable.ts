export type DeepOptionalNullable<T> = {
   [K in keyof T]?: T[K] extends object ? DeepOptionalNullable<T[K]> | null | undefined : T[K] | null | undefined;
};

export type DeepOptional<T> = {
   [K in keyof T]?: T[K] extends (infer U)[]
      ? DeepOptional<U>[] | undefined
      : T[K] extends (...args: unknown[]) => unknown
        ? T[K] // giữ nguyên function type
        : T[K] extends object
          ? DeepOptional<T[K]> | undefined
          : T[K] | undefined;
};

export type DeepNonNullable<T> = {
   [K in keyof T]?: T[K] extends object ? DeepOptional<T[K]> : T[K];
};

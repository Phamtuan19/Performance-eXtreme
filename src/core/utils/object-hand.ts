/* eslint-disable @typescript-eslint/no-explicit-any */
export function isObject(value: unknown): value is Record<string, any> {
   return Object.prototype.toString.call(value) === '[object Object]';
}

export const isEmptyObject = (obj: Record<string, any>): boolean => {
   return Object.keys(obj).length === 0;
};

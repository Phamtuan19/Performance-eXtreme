export function removeNullProps<T extends object>(obj: T): Partial<T> {
   if (!obj) return {};
   return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== null) {
         acc[key as keyof T] = value;
      }
      return acc;
   }, {} as Partial<T>);
}

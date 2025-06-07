export function isCSSKey(prop: string): boolean {
   return prop in document.createElement('div').style;
}

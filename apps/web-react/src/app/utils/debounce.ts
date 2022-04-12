export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  inmediate = false
) => {
  let timeout: any = null;
  return function (this: any, ...args: any[]) {
    const later = () => {
      timeout = null;
      if (!inmediate) {
        func.apply(this, args);
      }
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (!timeout && inmediate) {
      func.apply(this, args);
    }
  };
};

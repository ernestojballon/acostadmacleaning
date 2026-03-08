/* eslint-disable no-unused-vars */
export function debounce<F extends (...args: never[]) => void>(
  func: F,
  wait: number
): (...args: Parameters<F>) => void {
  let timeoutId: number | undefined;

  return function (...args: Parameters<F>) {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func(...args), wait);
  };
}

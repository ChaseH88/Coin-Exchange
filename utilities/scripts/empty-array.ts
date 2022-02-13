/**
 * Utilitiy function to create iterable from given length
 * @param length
 * @returns
 */
export const emptyArray = (length: number) => (
  Array.from(Array(length).keys())
);

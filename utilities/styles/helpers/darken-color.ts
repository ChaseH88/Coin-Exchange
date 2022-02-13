import { darken } from 'polished';

/**
 * Uses Polished to darken a color
 * @param color
 * @param amount
 * @returns
 */
export const darkenColor = (color: string, amount: number = .1) => (
  darken(amount, color)
);

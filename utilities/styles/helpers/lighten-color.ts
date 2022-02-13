import { lighten } from 'polished';

/**
 * Uses Polished to lighten a color
 * @param color
 * @param amount
 * @returns
 */
export const lightenColor = (color: string, amount: number = .1) => (
  lighten(amount, color)
);

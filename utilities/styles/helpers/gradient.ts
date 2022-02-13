import * as polished from "polished";
import { Styles } from "polished/lib/types/style";

const LuminanceSensitivity: number = .7;

/**
 * Generates a gradient based on a given color.
 * @param color
 */
export const gradient = (color: string): Styles => {

  // 'color2' is a calculated color that is slightly darker or lighter based on luminance of the provided 'color'.
  const color2: string = polished.getLuminance(color) < LuminanceSensitivity ?
    polished.lighten(0.05, color) : polished.darken(0.05, color);

  return polished.linearGradient({
    colorStops: [`${color} 0%`, `${color2} 125%`],
    toDirection: '207deg',
    fallback: color,
  });
}

import * as polished from "polished";
import { Styles } from "polished/lib/types/style";

const LuminanceSensitivity: number = .7;

interface GradientOptions {
  color: string,
  intensity?: 1 | 2 | 3 | 4 | 5
}

/**
 * Generates a gradient based on a given color.
 * @param color
 */
export const gradient = ({
  color,
  intensity = 1
}: GradientOptions): Styles => {

  // 'color2' is a calculated color that is slightly darker or lighter based on luminance of the provided 'color'.
  const color2: string = polished.getLuminance(color) < LuminanceSensitivity ?
    polished.lighten(`.${intensity / 2}`, color) : polished.darken(`.${intensity / 2}`, color);

  return polished.linearGradient({
    colorStops: [`${color} 0%`, `${color2} 125%`],
    toDirection: '207deg',
    fallback: color,
  });
}

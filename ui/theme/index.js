import { palette } from './colors';
import radii from './radii';
import space from './space';

const themeUiColors = {
  background: 'rgba(196,196,196,0.11)',
  text: palette['gray-900'],
  primary: palette['green-500'],
};

export const colors = {
  ...palette,
  ...themeUiColors,
};

export { radii, space };

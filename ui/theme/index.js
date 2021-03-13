import * as colors from './colors';
import radii from './radii';
import space from './space';
import * as typography from './typography';

const themeUiColors = {
  background: 'rgba(196,196,196,0.11)',
  text: colors.palette['gray-900'],
  primary: colors.palette['green-500'],
};

export default {
  colors: {
    // flatten colors
    ...colors.palette,
    ...themeUiColors,
  },
  fonts: typography.fonts,
  fontWeight: typography.fontWeights,
  radii,
  space,
  // variants
  text: typography.variants,
};

export { radii, space };

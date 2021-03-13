export const fonts = {
  body: 'Open Sans, sans-serif',
  naive: 'Mali, cursive',
};

export const fontStyles = {
  normal: 'normal',
};

export const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const variants = {
  // Naive
  'naive-m-medium': {
    fontFamily: fonts.naive,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.medium,
    // lineHeight
  },
  'naive-l': {
    fontFamily: fonts.naive,
    fontSize: '18px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    // lineHeight
  },
  'naive-xl': {
    fontFamily: fonts.naive,
    fontSize: '20px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.semibold,
    // lineHeight
  },
  'naive-2xl': {
    fontFamily: fonts.naive,
    fontSize: '28px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.medium,
    // lineHeight
  },

  // TODO - discuss fonts with the design

  // Text
  // 12
  // 15
  'text-s': {
    fontFamily: fonts.body,
    fontSize: '15px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    // lineHeight
  },
  // 16
  'text-m': {
    fontFamily: fonts.body,
    fontSize: '16px',
    fontStyle: fontStyles.normal,
    fontWeight: fontWeights.normal,
    // lineHeight
  },
  // 18
  // 20
  // 22
  // 24
  // 26 ?
  // 32
  // 40
  // 48
  // 50
  // 56
};

import { Box as ThemeBox } from 'theme-ui';

export default function Box({ sx, onClick, ...rest }) {
  return <ThemeBox sx={sx} onClick={onClick ? onClick : undefined} {...rest} />;
}

import * as icons from '../assets/icons';
import Box from './Box';

const sizesMap = {
  m: '24px',
  l: '36px',
  xl: '42px',
};

export default function Icon({ color, icon, size = 'm', onClick, sx, ...rest }) {
  const IconComponent = icons[icon];
  return (
    <Box
      sx={{
        ...sx,
        color,
        flex: 'none',
        height: sizesMap[size],
        width: sizesMap[size],
      }}
      onClick={onClick}
      {...rest}
    >
      <IconComponent height="100%" viewBox="0 0 24 24" width="100%" />
    </Box>
  );
}

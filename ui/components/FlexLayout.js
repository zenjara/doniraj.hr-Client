import Box from './Box';

export default function FlexLayout({
  alignItems,
  children,
  flex,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  space = 0,
  sx = {},
  ...rest
}) {
  const marginDirection = flexDirection === 'column' ? 'mb' : 'mr';
  return (
    <Box
      sx={{
        ...sx,
        alignItems,
        display: 'flex',
        flex,
        flexDirection,
        flexGrow,
        flexShrink,
        flexWrap,
        justifyContent,
        '> :not(:last-child)': {
          [marginDirection]: space,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

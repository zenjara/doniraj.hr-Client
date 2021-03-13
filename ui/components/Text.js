import Box from './Box';

export default function Text({ as = 'span', sx = {}, variant = 'text-m', ...rest }) {
  return (
    <Box
      sx={{
        ...sx,
        variant: `text.${variant}`,
      }}
      {...rest}
    />
  );
}

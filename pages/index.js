import Head from 'next/head';

import { Box, FlexLayout, Text } from '../ui';

export default function Home() {
  return (
    <div>
      <Head>
        <title>doniraj.hr | In development</title>
        <link href="/favicon.ico" rel="icon" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mali:wght@400;500&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1>Doniraj.hr</h1>
      <Box>Hello from Box</Box>
      <hr />
      <Box as="h2">Font Mali</Box>
      <FlexLayout alignItems="center" space={4}>
        <Text variant="naive-m-medium">Hello from Mali</Text>
        <Text variant="naive-l">Hello from Mali</Text>
        <Text variant="naive-xl">Hello from Mali</Text>
        <Text variant="naive-2xl">Hello from Mali</Text>
      </FlexLayout>
      <hr />
      <Box as="h2">Font OpenSans</Box>
      <FlexLayout flexDirection="column" space={4}>
        <Text variant="text-s">Hello from OpenSans</Text>
        <Text variant="text-m">Hello from OpenSans</Text>
      </FlexLayout>
    </div>
  );
}

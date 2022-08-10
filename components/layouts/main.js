import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import ReactGA from 'react-ga'
import TagManager from 'react-gtm-module'

import Footer from '../footer'
import NavBar from '../navbar'
import VoxelBearLoader from '../voxel-bear-loader'

const tagManagerArgs = {
    gtmId: 'GT-57S8VR'
};

TagManager.initialize(tagManagerArgs)

const LazyVoxelBear = dynamic(() => import('../voxel-bear'), {
  ssr: false,
  loading: () => <VoxelBearLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Keng Hong's homepage" />
        <meta name="author" content="Keng Hong" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Keng Hong" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kenghongg" />
        <meta name="twitter:creator" content="@kenghongg" />
        <meta name="twitter:image" content="https://www.hokenghong.com/card.png" />
        <meta property="og:site_name" content="Keng Hong" />
        <meta name="og:title" content="Keng Hong" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hokenghong.com/card.png" />
        <title>Keng Hong - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelBear />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

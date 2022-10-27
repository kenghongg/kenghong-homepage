import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Container, Input, Link, List, ListItem, useClipboard } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useState } from 'react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  const [value, setValue] = useState('https://isoft.sg')
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <Layout title="iSoft Company Website">
      <Container>
        <Title>
          iSoft Company Website <Badge>2022</Badge>
        </Title>

        <BeginMeta>Website Interface Design</BeginMeta>
        <BeginMeta>Frontend Development</BeginMeta>
        <BeginMeta>Backend Development</BeginMeta>
        <BeginMeta>SWA Nominee</BeginMeta>

        <P>Website of a tech company based in Singapore that builds digital products for businesses to be innovative and future ready.</P>
        <P>
          The Website is used for company introduction and portfolio showcase. It is designed from scratch, which consists of parallax
          effects and animations. Then, the design converted to codes by myself in both frontend client side as well as backend server side.
        </P>

        <Box align="center" mt={4} mb={8}>
          <a href="https://www.swa.sg/2022/sep/isoft-apps" target="_blank">
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="blue">
              SWA Nominee
            </Button>
          </a>
        </Box>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <span>
              <Box display="inline-flex" mb={2}>
                <Input value={value} isReadOnly placeholder="" />
                <Button onClick={onCopy} ml={2}>
                  {hasCopied ? 'Copied' : 'Copy'}
                </Button>
              </Box>
            </span>
          </ListItem>
          <ListItem>
            <Meta>Workflow</Meta>
            <span>Gulp.js</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js / Express.js / MongoDB / Vanilla.js / jQuery</span>
          </ListItem>
          <ListItem>
            <Meta>Animation</Meta>
            <span>Animated On Scroll Library / LottieFiles</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/isoftcompanywebsite_eyecatch.png" alt="Website" />

        <WorkImage src="/images/works/isoftcompanywebsite_01.gif" alt="iSoft.sg" />
        <WorkImage src="/images/works/isoftcompanywebsite_02.gif" alt="iSoft.sg" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'

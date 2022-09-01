import { Badge, Box, Button, Container, Input, List, ListItem, useClipboard } from '@chakra-ui/react'
import { useState } from 'react'

import Layout from '../../components/layouts/article'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  const [value, setValue] = useState('https://www.sony-asia.com/microsite/YouAreAlpha/sg/')
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <Layout title="Sony Alpha">
      <Container>
        <Title>
          Sony Alpha <Badge>2020</Badge>
        </Title>

        <BeginMeta>Convert design to code</BeginMeta>
        <BeginMeta>Frontend Development</BeginMeta>
        <BeginMeta>Web Accessibility</BeginMeta>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <span>
              <Box display="inline-flex" mb={2}>
                <Input value={value} isReadOnly placeholder="Welcome" />
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
            <span>HTML / CSS / JS / Vanilla.js / jQuery</span>
          </ListItem>
          <ListItem>
            <Meta>Animation</Meta>
            <span>Animated On Scroll Magic</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/sonyalpha_eyecatch.png" alt="Website" />

        <WorkImage src="/images/works/sonyalpha_01.gif" alt="" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'

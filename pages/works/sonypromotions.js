import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AspectRatio, Badge, Box, Button, Container, Flex, Input, Link, List, ListItem, SimpleGrid, Text, useClipboard } from '@chakra-ui/react'
import { useState } from 'react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  const [value, setValue] = useState('https://www.sony.com.sg/microsite/promotions/')
  const { hasCopied, onCopy } = useClipboard(value)

  return (
    <Layout title="Sony Promotions">
      <Container>
        <Title>
          Sony Promotions <Badge>2019</Badge>
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
            <span>HTML / CSS / JS / Vanilla.js / jQuery / PWA</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/sonypromotions_eyecatch.png" alt="Website" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'

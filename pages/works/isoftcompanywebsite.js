import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="iSoft Company Website">
    <Container>
      <Title>
        iSoft Company Website <Badge>2022</Badge>
      </Title>

      <BeginMeta>Website Interface Design</BeginMeta>
      <BeginMeta>Frontend Development</BeginMeta>
      <BeginMeta>Backend Development</BeginMeta>

      <P>Website of a tech company based in Singapore that builds digital products for businesses to be innovative and future ready.</P>
      <P>
        The Website is used for company introduction and portfolio showcase. It is designed from scratch, which consists of
        parallax effects and animations. Then, the design converted to codes by myself in both frontend client side as well as backend server side.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://isoft.sg/" target="_blank">
              isoft.sg <ExternalLinkIcon mx="2px" />
            </Link>
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

export default Work
export { getServerSideProps } from '../../components/chakra'

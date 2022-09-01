import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AspectRatio, Badge, Container, Flex, Link, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Email Newsletter Templates">
    <Container>
      <Title>
        Email Newsletter Templates <Badge>2020</Badge>
      </Title>

      <BeginMeta>UI Design</BeginMeta>
      <BeginMeta>Frontend Development</BeginMeta>
      <BeginMeta>Web Accessibility</BeginMeta>
      <BeginMeta>Responsive Design</BeginMeta>

      <P>
        Email newsletter for companies to send informational and product-focused content via email to subscriber list that comprises
        potential and existing customers.
      </P>
      <P>
        All layouts in responsive to all devices including mobile phones, tablets, ipads, and desktop. Optional to have light / dark modes.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML / CSS</span>
        </ListItem>
        <ListItem>
          <span>
            <SimpleGrid columns={[1, 1, 2]} gap={2} mt={4}>
              <Link href="https://portfolio-kh.netlify.app/edm-2022/template-version-01/index.html" target="_blank">
                <Flex mb={2} w="100%">
                  <Meta>Preview - HaiDiLao</Meta>
                </Flex>
                <WorkImage src="/images/works/emailtemplates_01.png" alt="Email Newsletter Template" />
              </Link>
              <Link href="https://portfolio-kh.netlify.app/edm-2022/template-version-02/index.html" target="_blank">
                <Flex mb={2} w="100%">
                  <Meta>Preview - Netflix</Meta>
                </Flex>
                <WorkImage src="/images/works/emailtemplates_02.png" alt="Email Newsletter Template" />
              </Link>
              <Link href="https://portfolio-kh.netlify.app/edm-2022/template-version-03/index.html" target="_blank">
                <Flex mb={2} w="100%">
                  <Meta>Preview - Yaya Papaya</Meta>
                </Flex>
                <WorkImage src="/images/works/emailtemplates_03.png" alt="Email Newsletter Template" />
              </Link>
            </SimpleGrid>
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

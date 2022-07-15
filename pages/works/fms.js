import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AspectRatio, Badge, Box, Center, Container, Flex, Heading, Link, List, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Fleet Management System">
    <Container>
      <Title>
        Fleet Management System <Badge>2022</Badge>
      </Title>

      <BeginMeta>UI/UX Design</BeginMeta>
      <BeginMeta>Dashboard Design</BeginMeta>
      <BeginMeta>Frontend Development</BeginMeta>

      <P>A system for fleet managers to monitor fleet activities and make decisions about asset management, dispatch and routing.</P>
      <P>Adapting with Material UI design with light mode and dark mode. Dashboard designed in short and simple where user can view every detail at a glance.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Usage</Meta>
          <span>Internal use only</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js / Reactjs / Express.js / MongoDB / Typescript</span>
        </ListItem>
        <ListItem>
          <Meta>Design System</Meta>
          <span>Material UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/fms_eyecatch.png" alt="Fleet Management System" />

      <Flex gap={3} mt={6}>
        <Box>
          <Heading size="xs" mb={2}>
            Light Mode
          </Heading>
          <WorkImage src="/images/works/fms_01.png" alt="Fleet Management System" />
        </Box>
        <Box>
          <Heading size="xs" mb={2}>
            Dark Mode
          </Heading>
          <WorkImage src="/images/works/fms_02.png" alt="Fleet Management System" />
        </Box>
      </Flex>

      <WorkImage src="/images/works/fms_03.gif" alt="Fleet Maangement System" />

      <Flex gap={3}>
        <Box>
          <WorkImage src="/images/works/fms_04.png" alt="Fleet Management System" />
        </Box>
        <Box>
          <WorkImage src="/images/works/fms_05.png" alt="Fleet Management System" />
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

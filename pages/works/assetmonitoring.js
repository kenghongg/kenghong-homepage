import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Box, Container, Flex, Heading, List, ListItem, Text, UnorderedList, useColorModeValue, Link } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Asset Monitoring">
    <Container>
      <Title>
        Asset Monitoring <Badge>2022</Badge>
      </Title>

      <BeginMeta>UI/UX Design</BeginMeta>
      <BeginMeta>Frontend Development</BeginMeta>

      <P>Access reliable real time temperature reading with the solution to monitor operational environment.</P>
      <P>
        Adapting with Semantic UI design as base. The application is redesigned to improve UI/UX and focus on more user friendly for wide
        range of users.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Preview site</Meta>
          <span>
            <Link href="https://ss-iot-v02.netlify.app/" target="_blank">
              Preview
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Usage</Meta>
          <span>Internal use only</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C# / Javascript</span>
        </ListItem>
        <ListItem>
          <Meta>Animation</Meta>
          <span>Vanta.js</span>
        </ListItem>
        <ListItem>
          <Meta>Design System</Meta>
          <span>Semantic UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/assetmonitoring_eyecatch.png" alt="Asset Monitoring" />

      <Box
        borderRadius="lg"
        mt={6}
        mb={3}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Box textAlign="left">
          <Text fontSize="20px" color="red.400" fontWeight="bold">
            UI PROBLEM (Before)
          </Text>
          <UnorderedList mt={2}>
            <ListItem>Less attractive color combination and feel unsure for instruction as too many buttons on first view</ListItem>
            <ListItem>Unobvious option selection</ListItem>
            <ListItem>Outdated looking UI</ListItem>
          </UnorderedList>
        </Box>

        <Flex gap={3} mt={4}>
          <Box>
            <WorkImage src="/images/works/assetmonitoring_01.png" alt="Asset Monitoring" />
          </Box>
          <Box>
            <WorkImage src="/images/works/assetmonitoring_02.png" alt="Asset Monitoring" />
          </Box>
        </Flex>
      </Box>

      <Box
        borderRadius="lg"
        mt={8}
        mb={3}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Box textAlign="left">
          <Text fontSize="20px" color="blue.400" fontWeight="bold">
            UI SOLUTION (After)
          </Text>
          <UnorderedList mt={2}>
            <ListItem>Comfortable color combination and attractive header look</ListItem>
            <ListItem>Clear instruction and option selection</ListItem>
            <ListItem>Trendy looking UI with Semantic UI</ListItem>
          </UnorderedList>
        </Box>
        <Flex gap={3} mt={4}>
          <Box>
            <WorkImage src="/images/works/assetmonitoring_03.png" alt="Asset Monitoring" />
          </Box>
          <Box>
            <WorkImage src="/images/works/assetmonitoring_04.png" alt="Asset Monitoring" />
          </Box>
        </Flex>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

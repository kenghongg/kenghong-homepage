import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AspectRatio, Badge, Box, Container, Flex, Link, List, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Human Resource System">
    <Container>
      <Title>
        Human Resource System <Badge>2021-</Badge>
      </Title>

      <BeginMeta>Mobile Apps Interface Design</BeginMeta>
      <BeginMeta>Design System</BeginMeta>
      <BeginMeta>UI/UX Design</BeginMeta>

      <P>
        Information in Profiles, Payroll, Leave, Attendance, and Claim modules are synced to one another in real-time. Easily access,
        manage, and safeguard a central repository of all the employees' information.
      </P>
      <P>The mobile app is redesigned to improve UI/UX and focus on more user friendly for wide range of users.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>IOS / Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native / Express.js / MongoDB</span>
        </ListItem>
        <ListItem>
          <Meta>Deisgn Tools</Meta>
          <span>Adobe XD</span>
        </ListItem>
        <ListItem>
          <Meta>Design System Base</Meta>
          <span>Material UI</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hrsystem_eyecatch.png" alt="Human Resource System" />

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
            <ListItem>Sharp corners are less attractive and harder for visual processing compared to curved corners.</ListItem> 
            <ListItem>Boring icon and form format style</ListItem>
            <ListItem>Outdated looking UI</ListItem>
          </UnorderedList>
        </Box>

        <Flex gap={3} mt={4}>
          <Box>
            <WorkImage src="/images/works/hrsystem_01.png" alt="Human Resource System" />
          </Box>
          <Box>
            <WorkImage src="/images/works/hrsystem_02.png" alt="Human Resource System" />
          </Box>
          <Box>
            <WorkImage src="/images/works/hrsystem_03.png" alt="Human Resource System" />
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
            <ListItem>
              Visual processing of Curve Cornered rectangles is much easier than rectangles with Sharp Edges as they require less cognitive
              effort. Also, sharp corners emphasize a sign of danger or lack of safety
            </ListItem>
            <ListItem>Colorful and meaningful icon updated with better form format styling</ListItem>
            <ListItem>Trendy UI look with 2D illustrations</ListItem>
          </UnorderedList>
        </Box>
        <Flex gap={3} mt={4}>
          <Box>
            <WorkImage src="/images/works/hrsystem_04.png" alt="Human Resource System" />
          </Box>
          <Box>
            <WorkImage src="/images/works/hrsystem_05.png" alt="Human Resource System" />
          </Box>
          <Box>
            <WorkImage src="/images/works/hrsystem_06.png" alt="Human Resource System" />
          </Box>
        </Flex>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

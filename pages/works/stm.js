import { Badge, Box, Container, Flex, List, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="$tm - Simple Teller Machine">
    <Container>
      <Title>
        $tm - Simple Teller Machine <Badge>2022</Badge>
      </Title>

      <BeginMeta>Kiosk Interface Design</BeginMeta>
      <BeginMeta>Design System</BeginMeta>
      <BeginMeta>UI/UX Design</BeginMeta>

      <P>$tm machines are topped-up with cash from supermarkets’ sales, and users can withdraw money using their ATM cards</P>
      <P>The kiosk application screen is redesigned to improve UI/UX and focus on more user friendly for wide range of users.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Usage</Meta>
          <span>ATM Machine</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>WinForm / C#</span>
        </ListItem>
        <ListItem>
          <Meta>Deisgn Tools</Meta>
          <span>Figma</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/stm_eyecatch.png" alt="$tm - Simple Teller Machine" />

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
            <ListItem>Buttons too oversize and confused instruction</ListItem>
            <ListItem>Lack of simple icon and clear text</ListItem>
            <ListItem>Outdated looking UI</ListItem>
          </UnorderedList>
        </Box>

        <Flex gap={3} mt={4}>
          <Box>
            <WorkImage src="/images/works/stm_01.png" alt="Simple Teller Machine" />
          </Box>
          <Box>
            <WorkImage src="/images/works/stm_02.png" alt="Simple Teller Machine" />
          </Box>
          <Box>
            <WorkImage src="/images/works/stm_03.png" alt="Simple Teller Machine" />
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
            <ListItem>Proper size button in proportional scale screen</ListItem>
            <ListItem>Included simple icons and clear instructions</ListItem>
            <ListItem>Trendy and clean looking UI</ListItem>
          </UnorderedList>
        </Box>
        <Flex gap={3} mt={4}>
          <Box>
            <WorkImage src="/images/works/stm_04.png" alt="Simple Teller Machine" />
          </Box>
          <Box>
            <WorkImage src="/images/works/stm_05.png" alt="Simple Teller Machine" />
          </Box>
          <Box>
            <WorkImage src="/images/works/stm_06.png" alt="Simple Teller Machine" />
          </Box>
        </Flex>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

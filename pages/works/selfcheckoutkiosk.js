import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Box, Center, Container, Flex, Heading, Link, List, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="G2i - Self Checkout Kiosk">
    <Container>
      <Title>
        G2i - Self Checkout Kiosk <Badge>2022</Badge>
      </Title>

      <BeginMeta>UI/UX Design</BeginMeta>
      <BeginMeta>3D Illustration</BeginMeta>
      <BeginMeta>Animation</BeginMeta>

      <P>A self-checkout kiosk to assist user to purchase goods and services without the assistance of a staff member.</P>
      <P>
        G2i Kiosk is the first self-checkout kiosk in Singapore that has implemented shopping bag rollout feature. It is designed in easy
        use way for wide range of users includes customers and admin staff. It able to reduces customers’ waiting time, while lightening the
        load of cashiers. The design type is in Claymorphism that consist of 3D graphics with bright and vivid colors. Since WinForm code
        styling has limited options, most of the buttons and layer layouts is built in image format.
      </P>
      <P>
        The kiosk came with default UI and the new design is based on the default capability without over tweak it's existing core features.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Kiosk Located</Meta>
          <span>Sheng Siong outlets</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C# / WinForm</span>
        </ListItem>
        <ListItem>
          <Meta>Animation</Meta>
          <span>Lottiefiles</span>
        </ListItem>
        <ListItem>
          <Meta>Design Style</Meta>
          <span>
            <Link href="https://www.youtube.com/c/MalewiczHype" target="_blank">
              Claymorphism by Michal Malewicz <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Flow Chart</Meta>
          <span>
            <Link href="https://www.figma.com/file/L5eBbMHq7zLXA6cFmccjF7/G2i---Self-checkout-Flow-Chart" target="_blank">
              G2i - Flow Chart <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/selfcheckoutkiosk_eyecatch.png" alt="G2i - Self Checkout Kiosk" />

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
            <ListItem>Too much buttons in one page included admin staff and customer actions</ListItem>
            <ListItem>Scanned item is label in text, sometimes user is taking longer time to check what they have scanned</ListItem>
            <ListItem>Outdated looking UI</ListItem>
          </UnorderedList>
        </Box>
        <Flex gap={3} mt={4}>
          <Box>
            <WorkImage src="/images/works/selfcheckoutkiosk_01.png" alt="G2i - Self Checkout Kiosk" />
          </Box>
          <Box>
            <WorkImage src="/images/works/selfcheckoutkiosk_02.png" alt="G2i - Self Checkout Kiosk" />
          </Box>
          <Box>
            <WorkImage src="/images/works/selfcheckoutkiosk_03.png" alt="G2i - Self Checkout Kiosk" />
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
            <ListItem>Reduced buttons show in 1 page, cleaner and clearer button placement</ListItem>
            <ListItem>Scanned item will be showed in image, user able to check what they have scanned easily</ListItem>
            <ListItem>Trendy UI look with 3D illustrations and animations</ListItem>
          </UnorderedList>
        </Box>
        <Flex gap={3} mt={4}>
          <Box>
            <WorkImage src="/images/works/selfcheckoutkiosk_04.png" alt="G2i - Self Checkout Kiosk" />
          </Box>
          <Box>
            <WorkImage src="/images/works/selfcheckoutkiosk_05.png" alt="G2i - Self Checkout Kiosk" />
          </Box>
          <Box>
            <WorkImage src="/images/works/selfcheckoutkiosk_06.png" alt="G2i - Self Checkout Kiosk" />
          </Box>
        </Flex>
      </Box>

      <Heading as="h4" fontSize={16} mt={6} mb={3}>
        <Center>Media coverage</Center>
      </Heading>

      <Box>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/NWF3b7MlRNU?controls=0&amp;start=89&amp;end=114"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>

      <UnorderedList ml={4} mt={4} mb={12}>
        <ListItem>
          <span>
            <Link href="https://youtu.be/NWF3b7MlRNU&amp;start=89&amp;end=114" target="_blank">
              Sheng Siong house brand products added to CASE's Price Kaki app <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <span>
            <Link href="https://www.8world.com/singapore/sheng-shiong-case-price-kaki-1848701#top" target="_blank">
              昇菘超市将在“省钱之友”应用 提供自家品牌产品供比价 <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <span>
            <Link
              href="https://www.straitstimes.com/singapore/consumer/sheng-siong-house-brand-products-added-to-list-of-items-for-comparison-on-cases-price-kaki-app"
              target="_blank"
            >
              Sheng Siong house brand products added to list of items for comparison on Case's Price Kaki app <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, chakra, Container, Heading, Link, List, ListItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { AiTwotoneMail } from 'react-icons/ai'
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

import { BioDesc, BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      {/*
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an UI/UX Engineer based in Singapore!
      </Box>

      I'm passionate about web technology and focused on the
      user experience. I aim to create web experiences that are
      surprising, exciting and memorable on top of that.
      */}

      <Box display={{ md: 'flex' }} textAlign="center">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" fontSize={54} mb={2}>
            <span className="title-highlight">Keng</span> Hong
          </Heading>
          <p>Frontend Developer | UI/UX Designer </p>
        </Box>
        {/*
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage src="/images/profile-pic.jpg" alt="Profile image" borderRadius="full" width="100%" height="100%" />
          </Box>
        </Box>
    */}
      </Box>

      {/*<Box align="center" mt={4} mb={8}>
        <NextLink href="/works" passHref scroll={false}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
            Find out more
          </Button>
        </NextLink>
  </Box>*/}

      <Box align="center" mt={4} mb={8}>
        <NextLink href="/works" passHref scroll={false}>
          <Button className="portfolio-btn">
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            View Portfolio
          </Button>
        </NextLink>
      </Box>

      <Section delay={0.1}>
        <Box display="flex" gap="4">
          <Box mt={0} width="50px" flexShrink={0}>
            <Heading as="h3" variant="section-title" className="title-highlight" mt={0}>
              Bio
            </Heading>
          </Box>
          <Paragraph>
            Keng Hong is a full time UI/UX Engineer based in Singapore that specializing in creating interactive UI/UX and frontend
            development. He loves designing as little design as possible and make it easy to use. He believes that every designer should
            understand a bit of coding, and every developer should know what design is all about.
          </Paragraph>
        </Box>
      </Section>

      {/*
      <Section delay={0.2}>
        <Box display="flex" gap="4">
          <Box mt={0} width="50px" flexShrink={0}>
            <Heading as="h3" variant="section-title" className="title-highlight" mt={0}>
              Bio
            </Heading>
          </Box>

          <Box>
            <BioSection>
              <BioYear>2016</BioYear>
              <BioDesc>Web Developer (Internship) @ Appleseeds Creativity</BioDesc>
            </BioSection>
            <BioSection>
              <BioYear>2017</BioYear>
              <BioDesc>Completed Internet Technology Degree&apos;s Program in Asia Pacific University</BioDesc>
            </BioSection>
            <BioSection>
              <BioYear>2017 - 2021</BioYear>
              <BioDesc>Web Programmer @ Patroids Creative Works</BioDesc>
            </BioSection>
            <BioSection>
              <BioYear>2021 to present</BioYear>
              <BioDesc>Software Engineer (UI/UX) @ Sheng Siong</BioDesc>
            </BioSection>
          </Box>
        </Box>
      </Section>
  */}

      {/*
      <Section delay={0.3}>
        <Box display="flex" gap="4">
          <Box mt={0} width="50px" flexShrink={0}>
            <Heading as="h3" variant="section-title" className="title-highlight" mt={0}>
              I ♥
            </Heading>
          </Box>

          <Box>
            <Paragraph>Darts, Music, Stephen Chow's Movie, Dota 2, New Technology</Paragraph>
          </Box>
        </Box>
      </Section>
*/}

      {/*
      <Section delay={0.3}>
        <Box display="flex" gap={6}>
          <Box>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                My portfolio
              </Button>
            </NextLink>
          </Box>
          <Box>
            <NextLink href="mailto:kenghongg@outlook.com" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                kenghongg@outlook.com
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Section>

*/}

      <Section delay={0.3}>
        <Box width="130px">
          <Heading as="h3" variant="section-title" className="title-highlight">
            Get in touch
          </Heading>
        </Box>

        <Box align="left" my={4}>
          <NextLink href="mailto:kenghongg@outlook.com" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              kenghongg@outlook.com
            </Button>
          </NextLink>
        </Box>

        {/*<List>
          <ListItem>
            <Link href="https://github.com/kenghongg" target="_blank">
              <Button variant="ghost" colorScheme="blue" leftIcon={<IoLogoGithub />}>
                @kenghongg
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:kenghongg@outlook.com">
              <Button variant="ghost" colorScheme="blue" leftIcon={<AiTwotoneMail />}>
                kenghongg@outlook.com
              </Button>
            </Link>
          </ListItem>
</List>*/}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

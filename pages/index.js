import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, chakra, Container, Heading, Link, List, ListItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

import { BioSection, BioYear } from '../components/bio'
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

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Keng Hong
          </Heading>
          <p>Frontend Developer | UI/UX Designer </p>
        </Box>
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
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Keng Hong is a full time UI/UX Engineer in Singapore with a strong sense for aesthetics and interaction that passionate in
          creating interactive UI and frontend development. He is a detail-oriented professional with 5+ years of experience and a proven
          knowledge of web development, web page content, programming and UI/UX designing.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2016</BioYear>
          Web Developer (Internship) @ Appleseeds MY
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Completed the Degree&apos;s Program in Internet Technology in Asia Pacific University
        </BioSection>
        <BioSection>
          <BioYear>2017 - 2021</BioYear>
          Web Programmer @ Patroids
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Software Engineer (UI/UX) @ Sheng Siong
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Darts, Music, Stephen Chow's Movie, Dota 2, New Technology</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          GitHub
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/kenghongg" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />}>
                @kenghongg
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

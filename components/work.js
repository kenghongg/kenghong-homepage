import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge, Box, Code, Heading, Highlight, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const BeginMeta = ({ children }) => (
  <Badge colorScheme="blue" mr={2} textTransform="none" fontWeight="normal">
    {children}
  </Badge>
)

import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" loading="lazy" />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center" className="wrap-item-thumbnail">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer" className="link-thumbnail">
        <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder="blur" />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .link-thumbnail span{
        border-radius: 12px;
      }

      .wrap-item-thumbnail img{
        transition: 0.3s all;
      }

      .wrap-item-thumbnail:hover img{
        transform: scale(1.1);

      }
      
      .grid-item-thumbnail {
        border-radius: 12px;
        transition: 0.3s all;
      }

      .grid-item-thumbnail:hover{
        transform: scale(1.1);
      }
    `}
  />
)

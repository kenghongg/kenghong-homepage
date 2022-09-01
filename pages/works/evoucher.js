import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { BeginMeta, Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="eVoucher">
    <Container>
      <Title>
        eVoucher <Badge>2022</Badge>
      </Title>

      <BeginMeta>UI/UX Design</BeginMeta>
      <BeginMeta>Frontend Development</BeginMeta>

      <P>An eVoucher that consist of QR code which can be scanned on the retail outlets to receive a discount.</P>
      <P>
        The UI design is based on the physical voucher layout. Different states of the eVoucher is included such as redeemed and expired.
        Also, Rotating flower animation is done in CSS Animation. Purpose of the animation is to prevent user to use screenshot to show the
        QR code.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Preview site</Meta>
          <span>
            <Link href="https://ss-voucher-staging.netlify.app/voucher-02.html" target="_blank">
              Preview
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>SCSS / Vanilla.js / jQuery / C#</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/evoucher_eyecatch.png" alt="eVoucher" />

      <WorkImage src="/images/works/evoucher_01.gif" alt="eVoucher" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

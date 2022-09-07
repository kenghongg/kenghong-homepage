import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react'
import NextLink from 'next/link'

import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbAssetMonitoring from '../public/images/works/assetmonitoring_eyecatch.png'
import thumbEmailTemplates from '../public/images/works/emailtemplates_eyecatch.png'
import thumbEvoucher from '../public/images/works/evoucher_eyecatch.png'
import thumbFms from '../public/images/works/fms_eyecatch.png'
import thumbHRSystem from '../public/images/works/hrsystem_eyecatch.png'
import thumbIsoftCompanyWebsite from '../public/images/works/isoftcompanywebsite_eyecatch.png'
import thumbSelfCheckoutKiosk from '../public/images/works/selfcheckoutkiosk_eyecatch.png'
import thumbSonyAlpha from '../public/images/works/sonyalpha_eyecatch.png'
import thumbSonyCameraMicrophones from '../public/images/works/sonycameramicrophones_eyecatch.png'
import thumbSonyDigitalCameraZV1 from '../public/images/works/sonydigitalcamerazv1_eyecatch.png'
import thumbSonyILCE7c from '../public/images/works/sonyilce7c_eyecatch.png'
import thumbSonyPromotions from '../public/images/works/sonypromotions_eyecatch.png'
import thumbSonyVideo from '../public/images/works/sonyvideo_eyecatch.png'
import thumbStm from '../public/images/works/stm_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="hrsystem" title="Human Resource System" thumbnail={thumbHRSystem}>
            Information in Profiles, Payroll, Leave, Attendance, and Claim modules are synced to one another in real-time
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="selfcheckoutkiosk" title="G2i - Self Checkout Kiosk" thumbnail={thumbSelfCheckoutKiosk}>
            A self-checkout kiosk to assist user to purchase goods and services without the assistance of a staff member
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="isoftcompanywebsite" title="iSoft Company Website" thumbnail={thumbIsoftCompanyWebsite}>
            Website of a tech company based in Singapore that builds digital products for&nbsp;businesses
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="evoucher" title="eVoucher" thumbnail={thumbEvoucher}>
            An eVoucher that consist of QR code which can be scanned on the retail outlets to receive a discount
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="fms" title="Fleet Management System" thumbnail={thumbFms}>
            For fleet managers to monitor fleet activities and make decisions about asset management, dispatch and routing
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="assetmonitoring" title="Asset Monitoring" thumbnail={thumbAssetMonitoring}>
            Access reliable real time temperature reading with the solution to monitor operational environment
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="stm" title="$tm - Simple Teller Machine" thumbnail={thumbStm}>
            $tm machines are topped-up with cash from supermarkets’ sales, and users can withdraw money using their ATM cards
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <hr />

      <Heading as="h4" fontSize={16} mb={4} mt={6}>
        Email Templates
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="emailtemplates" title="Email Newsletter Templates" thumbnail={thumbEmailTemplates}>
            Send informational and product-focused content via email to subscriber list that comprises potential and existing customers.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <hr />

      <Heading as="h4" fontSize={16} mb={4} mt={6}>
        Convert Design to Codes
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="sonyalpha" title="Sony Alpha" thumbnail={thumbSonyAlpha}>
            Sony Microsite
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sonyilce7c" title="Sony ILCE 7C" thumbnail={thumbSonyILCE7c}>
            Sony Microsite
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sonydigitalcamerazv1" title="Sony Digital Camera ZV-1" thumbnail={thumbSonyDigitalCameraZV1}>
            Sony Microsite
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sonypromotions" title="Sony Promotions" thumbnail={thumbSonyPromotions}>
            Sony Microsite | Progressive Web Apps
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sonycameramicrophones" title="Sony Camera Microphones" thumbnail={thumbSonyCameraMicrophones}>
            Sony Microsite
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sonyvideo" title="Sony | Video with Sony" thumbnail={thumbSonyVideo}>
            Sony Microsite
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Get in touch
        </Heading>

        <Box align="left" my={4}>
          <NextLink href="mailto:kenghongg@outlook.com" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              kenghongg@outlook.com
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

import {
  Container,
  ListItem,
  Stack,
  StackProps,
  TextProps,
  Text as TextRaw,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { siteConfig } from "src/conf";

function Headline(props: TextProps) {
  return <TextRaw textAlign={"left"} fontSize={"3xl"} fontWeight={"bold"} {...props} />;
}

function TitleXL(props: TextProps) {
  return <TextRaw textAlign={"left"} fontSize={"xl"} fontWeight={"bold"} {...props} />;
}

function TitleLG(props: TextProps) {
  return <TextRaw textAlign={"left"} fontSize={"lg"} fontWeight={"bold"} {...props} />;
}

function Section(props: StackProps) {
  return <Stack spacing={3} {...props} />;
}

function Text(props: TextProps) {
  return <TextRaw {...props} />;
}

export default function PrivacyPolicyPage() {
  return (
    <Stack>
      <Header />
      <Container>
        <Stack spacing={8} my={10}>
          <Headline>Privacy Policy</Headline>

          <Text>
            This Privacy Policy describes how www.trycalmr.com (the "Site" or "we") collects, uses,
            and discloses your Personal Information when you visit or make a purchase from the Site.
          </Text>

          <Section>
            <TitleXL>Contact</TitleXL>

            <Text>
              After reviewing this policy, if you have additional questions, want more information
              about our privacy practices, or would like to make a complaint, please contact us by
              e-mail at {siteConfig.email} or by mail using the details provided below:
            </Text>

            <Text>Calmr, 110 Innovation Blvd, Wilmington, DE 19805, USA.</Text>
          </Section>

          <Section>
            <TitleXL>Collecting Personal Information</TitleXL>

            <Text>
              When you visit the Site, we collect certain information about your device, your
              interaction with the Site, and information necessary to process your purchases. We may
              also collect additional information if you contact us for customer support. In this
              Privacy Policy, we refer to any information about an identifiable individual
              (including the information below) as "Personal Information". See the list below for
              more information about what Personal Information we collect and why.
            </Text>

            <TitleLG>Device information</TitleLG>

            <UnorderedList>
              <ListItem>
                <Text>
                  Purpose of collection: to load the Site accurately for you, and to perform
                  analytics on Site usage to optimize our Site.
                </Text>
              </ListItem>

              <ListItem>
                <Text>
                  Source of collection: Collected automatically when you access our Site using
                  cookies, log files, web beacons, tags, or pixels.
                </Text>
              </ListItem>

              <ListItem>
                <Text>Disclosure for a business purpose: shared with our processor Shopify.</Text>
              </ListItem>

              <ListItem>
                <Text>
                  Personal Information collected: version of web browser, IP address, time zone,
                  cookie information, what sites or products you view, search terms, and how you
                  interact with the Site.
                </Text>
              </ListItem>

              <ListItem>
                <Text></Text>
              </ListItem>
            </UnorderedList>

            <TitleLG>Order information</TitleLG>

            <UnorderedList>
              <ListItem>
                <Text>
                  Purpose of collection: to provide products or services to you to fulfill our
                  contract, to process your payment information, arrange for shipping, and provide
                  you with invoices and/or order confirmations, communicate with you, screen our
                  orders for potential risk or fraud, and when in line with the preferences you have
                  shared with us, provide you with information or advertising relating to our
                  products or services.
                </Text>
              </ListItem>

              <ListItem>
                <Text>Source of collection: collected from you.</Text>
              </ListItem>

              <ListItem>
                <Text>Disclosure for a business purpose: shared with our processor Shopify.</Text>
              </ListItem>

              <ListItem>
                <Text>
                  Personal Information collected: name, billing address, shipping address, payment
                  information (including credit card numbers), email address, and phone number.
                </Text>
              </ListItem>
            </UnorderedList>

            <Text>
              By choosing Calmr for your purchases, you allow us to send you marketing messages,
              notifications, SMS, and other promotional communications. If you wish to unsubscribe,
              please contact our support team via the provided email address. Your privacy matters
              to us, and we appreciate your trust in Calmr.
            </Text>
          </Section>

          <Section>
            <TitleXL>Minors</TitleXL>

            <Text>
              The Site is not intended for individuals under the age of 18. We do not intentionally
              collect Personal Information from children. If you are the parent or guardian and
              believe your child has provided us with Personal Information, please contact us at the
              address above to request deletion.
            </Text>
          </Section>

          <Section>
            <TitleXL>Sharing Personal Information</TitleXL>

            <Text>
              We share your Personal Information with service providers to help us provide our
              services and fulfill our contracts with you, as described above. For example:
            </Text>
            <Text>
              We use Shopify to power our online store. You can read more about how Shopify uses
              your Personal Information here: https://www.shopify.com/legal/privacy.
            </Text>
            <Text>
              We may share your Personal Information to comply with applicable laws and regulations,
              to respond to a subpoena, search warrant or other lawful request for information we
              receive, or to otherwise protect our rights.
            </Text>
          </Section>

          <Section>
            <TitleXL>Behavioural Advertising</TitleXL>

            <Text>
              As described above, we use your Personal Information to provide you with targeted
              advertisements or marketing communications we believe may be of interest to you. For
              more information about how targeted advertising works, you can visit the Network
              Advertising Initiative's ("NAI") educational page at
              https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
            </Text>

            <Text>
              You can opt out of targeted advertising by visiting the Digital Advertising Alliance's
              opt-out portal at: https://optout.aboutads.info/.
            </Text>
          </Section>

          <Section>
            <TitleXL>Using Personal Information</TitleXL>

            <Text>
              We use your personal Information to provide our services to you, which includes:
              offering products for sale, processing payments, shipping and fulfillment of your
              order, and keeping you up to date on new products, services, and offers.
            </Text>
          </Section>

          <Section>
            <TitleXL>Lawful basis</TitleXL>

            <Text>
              Our Services may direct you to other websites and applications beyond our control. We
              encourage you to review the Privacy Policies and Terms and Conditions of these
              third-party sites. This Privacy Policy only applies to our Services.
            </Text>

            <UnorderedList>
              {[
                "Your consent;",
                "The performance of the contract between you and the Site;",
                "Compliance with our legal obligations;",
                "To protect your vital interests;",
                "To perform a task carried out in the public interest;",
                "For our legitimate interests, which do not override your fundamental rights and freedoms.",
              ].map((it, idx) => {
                return (
                  <ListItem key={idx}>
                    <Text>{it}</Text>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Section>

          <Section>
            <TitleXL>Retention</TitleXL>

            <Text>
              When you place an order through the Site, we will retain your Personal Information for
              our records unless and until you ask us to erase this information. For more
              information on your right of erasure, please see the 'Your rights' section below.
            </Text>
          </Section>

          <Section>
            <TitleXL>Automatic decision-making</TitleXL>

            <Text>
              If you are a resident of the EEA, you have the right to object to processing based
              solely on automated decision-making (which includes profiling), when that
              decision-making has a legal effect on you or otherwise significantly affects you. We
              do not engage in fully automated decision-making that has a legal or otherwise
              significant effect using customer data. Our processor Shopify uses limited automated
              decision-making to prevent fraud that does not have a legal or otherwise significant
              effect on you.
            </Text>
          </Section>

          <Section>
            <TitleXL>Your rights</TitleXL>

            <TitleLG>GDPR</TitleLG>

            <Text>
              If you are a resident of the EEA, you have the right to access the Personal
              Information we hold about you, to port it to a new service, and to ask that your
              Personal Information be corrected, updated, or erased. If you would like to exercise
              these rights, please contact us through the contact information above. Your Personal
              Information will be initially processed in Ireland and then will be transferred
              outside of Europe for storage and further processing, including to Canada and the
              United States.
            </Text>
          </Section>

          <Section>
            <TitleLG>Cookies</TitleLG>

            <Text>
              A cookie is a small amount of information that's downloaded to your computer or device
              when you visit our Site. We use a number of different cookies, including functional,
              performance, advertising, and social media or content cookies. Cookies make your
              browsing experience better by allowing the website to remember your actions and
              preferences (such as login and region selection). This means you don't have to
              re-enter this information each time you return to the site or browse from one page to
              another. Cookies also provide information on how people use the website, for instance
              whether it's their first time visiting or if they are a frequent visitor. We use
              cookies to optimize your experience on our Site and to provide our services.
            </Text>
          </Section>

          <Section>
            <TitleXL>Do Not Track</TitleXL>

            <Text>
              Please note that because there is no consistent industry understanding of how to
              respond to "Do Not Track" signals, we do not alter our data collection and usage
              practices when we detect such a signal from your browser.
            </Text>
          </Section>

          <Section>
            <TitleXL>Changes</TitleXL>

            <Text>
              We may update this Privacy Policy from time to time in order to reflect, for example,
              changes to our practices or for other operational, legal, or regulatory reasons.
            </Text>
          </Section>

          <Section>
            <TitleXL>Complaints</TitleXL>

            <Text>
              As noted above, if you would like to make a complaint, please contact us by e-mail or
              by mail using the details provided under "Contact" above. If you are not satisfied
              with our response to your complaint, you have the right to lodge your complaint with
              the relevant data protection authority. You can contact your local data protection
              authority, the Federal Trade Commission (FTC) in the United States, or the Information
              Commissioner's Office in the UK.
            </Text>
          </Section>

          <TitleXL>Last updated: July 17th, 2024</TitleXL>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
}

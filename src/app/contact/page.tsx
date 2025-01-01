"use client";

import { Container } from "@/components/Container";
import { ContactForm } from "./components/ContactForm";
import { Heading } from "@/components/Heading";
import styled, { css } from "styled-components";
import mixins from "@/theme/abstracts/mixins";

const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.tokens.mainMarginTop};
    display: grid;
    justify-content: center;
    align-items: start;

    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr 1fr;
    }

    > * {
      padding-block: ${theme.sizes.size12};
    }
  `}
`;

const Content = styled.div`
  ${({ theme }) => css`
    height: 100%;
    ${mixins.flow(theme.sizes.size12)}
    border-bottom: 1px solid ${theme.colors.light.neutral300};
    margin-bottom: ${theme.sizes.size12};
    padding-bottom: ${theme.sizes.size12};

    @media (min-width: ${theme.breakpoints.md}) {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;

      border-right: 1px solid ${theme.colors.light.neutral300};
      margin-right: ${theme.sizes.size12};
      padding-right: ${theme.sizes.size12};
    }
    > * {
      ${mixins.flow(theme.sizes.size6)}
    }
  `}
`;

/**
 * The contact page.
 * This page provides users with options to reach out to the Curio team via a contact form, email, or phone.
 *
 * @returns The contact page layout with introductory text, contact details, and a contact form.
 */
const Contact = () => {
  return (
    <Container>
      <Main>
        <Content>
          <div>
            <Heading headingLevel="h1" headingStyle="HEADING_1_LG">
              Contact us
            </Heading>
            <p>
              We&apos;d love to hear from you! You can reach us by filling out the contact form, and we&apos;ll get back
              to you as soon as possible.
            </p>
            <p>
              Alternatively, you can contact us directly via email or give us a call. We&apos;re here to assist with any
              inquiries, feedback, or support you may need!
            </p>
          </div>
          <ul>
            <li>Email: support@curiohelp.com</li>
            <li>Phone: (555) 123-4567</li>
          </ul>
        </Content>
        <ContactForm />
      </Main>
    </Container>
  );
};

export default Contact;

"use client";

import { Heading } from "@/components/common/Heading";
import { BaseLink } from "@/components/common/BaseLink";
import { StatusPageContainer } from "@/components/status/StatusPageContainer";

/**
 * The contact page.
 * This page provides users with options to reach out to the Curio team via a contact form, email, or phone.
 *
 * @returns The contact page layout with introductory text, contact details, and a contact form.
 */
const NotFoundPage = () => {
  return (
    <>
      <title>Page Not Found - Curio</title>
      <meta
        name="description"
        content="Oops! The page you are looking for does not exist. Explore Curio for amazing products instead."
      />

      <StatusPageContainer>
        <Heading headingLevel="h1" headingStyle="HEADING_1_LG">
          Oops! Page Not Found
        </Heading>
        <p>
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist or has been moved. It seems like
          you&apos;ve taken a wrong turn somewhere.
        </p>
        <BaseLink href="/">Return to home</BaseLink>
      </StatusPageContainer>
    </>
  );
};

export default NotFoundPage;

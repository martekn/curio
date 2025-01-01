"use client";

import { Heading } from "@/components/Heading";
import { StatusPageContainer } from "@/components/StatusPageContainer";
import Link from "next/link";

/**
 * The contact page.
 * This page provides users with options to reach out to the Curio team via a contact form, email, or phone.
 *
 * @returns The contact page layout with introductory text, contact details, and a contact form.
 */
const NotFoundPage = () => {
  return (
    <StatusPageContainer>
      <Heading headingLevel="h1" headingStyle="HEADING_1_LG">
        Oops! Page Not Found
      </Heading>
      <p>
        We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist or has been moved. It seems like
        you&apos;ve taken a wrong turn somewhere.
      </p>
      <Link href="/">Return to home</Link>
    </StatusPageContainer>
  );
};

export default NotFoundPage;

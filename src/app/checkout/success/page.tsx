"use client";

import { Heading } from "@/components/Heading";
import { StatusPageContainer } from "@/components/StatusPageContainer";

/**
 * The checkout success page.
 * This page is displayed after a user successfully completes a purchase.
 *
 * @returns The checkout success page layout, including a heading, order confirmation message, and additional details.
 */
const CheckoutSuccess = () => {
  return (
    <StatusPageContainer>
      <Heading headingLevel="h1" headingStyle="HEADING_1_LG">
        Thank You for Your Order!
      </Heading>
      <p>
        Your order has been successfully processed, and we&apos;ll begin preparing it for shipping right away.
        We&apos;re excited to get your items to you as soon as possible.
      </p>
    </StatusPageContainer>
  );
};

export default CheckoutSuccess;

"use client";

import { Button } from "@/components/common/Button";
import { Heading } from "@/components/common/Heading";
import { StatusPageContainer } from "@/components/status/StatusPageContainer";

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
      <Button variant="primary" href="/">
        Continue shopping
      </Button>
    </StatusPageContainer>
  );
};

export default CheckoutSuccess;

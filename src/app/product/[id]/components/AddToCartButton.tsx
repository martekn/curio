import { addToCartAtom } from "@/atoms/cartAtom";
import { Button } from "@/components/Button";
import { Product } from "@/types";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";

type buttonStates = "idle" | "loading" | "success";

/**
 * A button component that allows users to add a product to the cart.
 *
 * @param product - The product to be added to the cart.
 * @returns The rendered Add to Cart button.
 */
export const AddToCartButton = ({ product }: { product: Product }) => {
  const addToCart = useSetAtom(addToCartAtom);

  const [buttonState, setButtonState] = useState<buttonStates>("idle");

  const handleAddToCart = async () => {
    setButtonState("loading");
    await new Promise((resolve) => setTimeout(resolve, 250));
    addToCart(product);
    setButtonState("success");
  };

  useEffect(() => {
    if (buttonState === "success") {
      const timeout = setTimeout(() => {
        setButtonState("idle");
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [buttonState]);

  return (
    <Button
      variant="primary"
      onClick={handleAddToCart}
      isLoading={buttonState === "loading"}
      isSuccess={buttonState === "success"}
    >
      {buttonState === "idle" && "Add to Cart"}
      {buttonState === "loading" && "Adding..."}
      {buttonState === "success" && "Added to cart"}
    </Button>
  );
};

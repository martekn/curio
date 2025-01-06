import { motion } from "framer-motion";

/**
 * A container for skeleton components, animating the opacity for a pulsing effect.
 *
 * @param children - The child elements wrapped inside the skeleton container.
 *
 * @returns  A div containing animated skeleton components.
 */
export const SkeletonContainer = ({ children, ...props }: { children: React.ReactNode }) => {
  return (
    <div {...props}>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

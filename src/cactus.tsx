import { Box } from "@chakra-ui/react";
import { forwardRef } from "react";
import { moveLeftAnimation } from "./move-left-animation";

export const Cactus = forwardRef<HTMLDivElement>((props, ref) => (
  <Box
    ref={ref}
    h="60px"
    w="20px"
    bg="green.200"
    position="absolute"
    bottom="0"
    right={0}
    {...moveLeftAnimation}
  />
));

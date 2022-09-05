import { BoxProps } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
const moveLeftKeyframes = keyframes`
  from {
    right: 0px;
  }

  to {
    right: 590px;
  }
`;

export const moveLeftAnimation: BoxProps = {
  animation: `${moveLeftKeyframes} 1s linear infinite`,
};

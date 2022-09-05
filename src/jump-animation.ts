import { BoxProps } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const jumpKeyframes = keyframes`
  from {
    bottom: 0px;
  }

  to {
    bottom: 110px;
  }
`;

export const jumpAnimation: BoxProps = {
  animation: `${jumpKeyframes} 0.2s alternate 2 ease-out`,
};

import { Box } from "@chakra-ui/react";
import {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { jumpAnimation } from "./jump-animation";

export const Player = forwardRef<HTMLDivElement>((props, ref) => {
  const [isJumping, setIsJumping] = useState(false);

  const handleKeydown = useCallback(
    ({ key }: KeyboardEvent) => {
      if (isJumping || key !== " ") return;
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 400);
    },
    [isJumping]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  const jump = useMemo(() => (isJumping ? jumpAnimation : {}), [isJumping]);

  return (
    <Box
      ref={ref}
      h="30px"
      w="30px"
      bg="white"
      position="absolute"
      bottom={0}
      left={2}
      {...jump}
    />
  );
});

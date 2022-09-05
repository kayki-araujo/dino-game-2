import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Cactus } from "./cactus";
import { isColliding } from "./is-colliding";
import { Player } from "./player";

export const App = () => {
  const player = useRef<HTMLDivElement>(null);
  const cactus = useRef<HTMLDivElement>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!(player.current && cactus.current)) return;
      if (!isColliding(player.current, cactus.current)) return;
      setIsGameOver(true);
      clearInterval(interval);
    }, 10);
  }, []);

  useEffect(() => {
    console.log({ isGameOver });
  }, [isGameOver]);

  return (
    <Center minH="100vh" bg="blackAlpha.200">
      {/* Container */}
      <Center
        h="200px"
        w="600px"
        bg="gray.600"
        position="relative"
        shadow="2xl"
      >
        {/* Dino */}
        <Player ref={player} />
        {isGameOver ? (
          <Text fontSize="7xl" textColor="white">
            Otario
          </Text>
        ) : (
          <Cactus ref={cactus} />
        )}
      </Center>
    </Center>
  );
};

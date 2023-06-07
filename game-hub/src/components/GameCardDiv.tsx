import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardDiv = ({ children }: Props) => {
  return (
    <Box width="275px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardDiv;

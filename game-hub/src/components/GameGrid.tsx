import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardDiv from "./GameCardDiv";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardDiv key={skeleton}>
            <GameCardSkeleton />
          </GameCardDiv>
        ))}
      {data.map((game) => (
        <GameCardDiv key={game.id}>
          <GameCard game={game} />
        </GameCardDiv>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

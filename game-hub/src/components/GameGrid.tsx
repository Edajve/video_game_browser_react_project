import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardDiv from "./GameCardDiv";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null
}

const GameGrid = ({selectedGenre,selectedPlatform }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
        >
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
    </>
  );
};

export default GameGrid;

import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp"

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const backGroundImage = game.background_image ? getCroppedImageUrl(game.background_image) : noImage
  return (
    <Card borderRadius={10} overflow="hidden" width="275px">
      <Image src={backGroundImage} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

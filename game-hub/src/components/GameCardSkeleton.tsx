import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
``;

const GameCardSkeleton = () => {
  return (
    <Card width="275px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

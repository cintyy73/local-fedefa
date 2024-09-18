import { Box, Skeleton } from "@chakra-ui/react";

const MapSkeleton = () => {
  return (
    <Box maxW={1200} width="100%" h="250px" mb={4} borderRadius="20px">
      <Skeleton height="100%" width="100%" borderRadius="20px" />
    </Box>
  );
};

export default MapSkeleton;

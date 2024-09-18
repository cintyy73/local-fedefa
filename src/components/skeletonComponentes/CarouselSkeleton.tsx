// CarouselSkeleton.tsx
import { Box, Skeleton } from "@chakra-ui/react";

const CarouselSkeleton = () => {
  return (
    <Box
      marginTop={{ base: "4rem", md: "1rem" }}
      height="250px"
      width="100%"
      mb={4}
      borderRadius="20px"
    >
      <Skeleton height="100%" width="100%" borderRadius="20px" />
    </Box>
  );
};

export default CarouselSkeleton;

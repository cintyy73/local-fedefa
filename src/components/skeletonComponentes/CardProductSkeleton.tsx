import { Box, Button, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const CardProductSkeleton = () => {
  return (
    <Box
      maxW='1200px'
      boxShadow='lg'
      width='100%'
      borderTopRadius='25px'
      marginBottom={4}
      p={4}
      border="1px solid #e2e8f0"
    >
      {/* Skeleton para la imagen */}
      <Skeleton height='220px' borderTopRadius='25px' mb={4} />

      <Stack mt='3' spacing='3'>
        {/* Skeleton para el título */}
        <Skeleton height='20px' width='50%' />
        {/* Skeleton para la descripción */}
        <SkeletonText mt='4' noOfLines={6} spacing='4' />
      </Stack>

      <Box display='flex' justifyContent='space-between' alignItems='center' mt={4}>
        {/* Skeleton para el primer botón */}
        <Skeleton height='40px' width='120px' borderRadius='md' startColor='none' endColor='none'>
          <Button variant='ghost' fontSize={18} isDisabled />
        </Skeleton>
        {/* Skeleton para el segundo botón */}
        <Skeleton height='40px' width='120px' borderRadius='md' startColor='gray.200' endColor='gray.300'>
          <Button variant='solid' fontSize={18} padding={2} isDisabled>
            {/* Sin texto para simular el botón sin texto */}
          </Button>
        </Skeleton>
      </Box>
    </Box>
  );
};

export default CardProductSkeleton;

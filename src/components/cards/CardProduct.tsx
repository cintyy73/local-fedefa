import {
  Button,
  ButtonGroup,
  Card as ChakraCard,
  CardBody,
  Heading,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { Product } from "@/types";

import CardProductSkeleton from "../skeletonComponentes/CardProductSkeleton";

const image1 = "/cardsImages/ensalada-pollo-palta.jpg";

const CardProduct = ({
  data,
  isLoading,
}: {
  data: Product;
  isLoading: boolean;
}) => {
  const { photo_path, title, short_description, entity, id } = data;

  return (
    <ChakraCard
      maxW="1200px"
      boxShadow="lg"
      width="100%"
      borderTopRadius="25px"
      gap="3px"
      marginBottom={4}
    >
      {isLoading ? (
        <CardProductSkeleton />
      ) : (
        <>
          <Image
            src={image1}
            alt={photo_path}
            borderTopRadius="25px"
            width="100%"
            height="220px"
            objectFit="cover"
          />
          <CardBody maxW="xl">
            <Stack mt="3" spacing="3">
              <Heading fontSize={20}>{title}</Heading>
              <Text
                fontSize={16}
                dangerouslySetInnerHTML={{ __html: short_description }}
              />
            </Stack>
          </CardBody>
          <ButtonGroup
            marginBottom={4}
            marginInlineStart={6}
            marginInlineEnd={6}
            display="flex"
            justifyContent="space-between"
          >
            <ChakraLink
              href={entity.web_profile}
              target="_blank"
              fontSize={18}
              color="#027bb5"
              _hover={{ textDecoration: "underline" }}
              flex="1"
              overflow="hidden"
              whiteSpace="normal"
              textOverflow="ellipsis"
              display="block"
              maxWidth="calc(100% - 100px)"
            >
              {entity.fantasy_name}
            </ChakraLink>
            <Button
              variant="solid"
              fontSize={18}
              padding={2}
              as={Link}
              to={`/detail/${id}`}
            >
              Más Info
            </Button>
          </ButtonGroup>
        </>
      )}
    </ChakraCard>
  );
};

export default CardProduct;

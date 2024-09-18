import {
  VStack,
  Text,
  Heading,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Badge,
  HStack,
  Box,
} from "@chakra-ui/react";
import { FaLocationDot, FaLink } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { Product } from "../types";
import SocialLinks from "./SocialLinks";

function CardDetail({ productDetail }: { productDetail: Product }) {
  // Funcion que busca solo los perfiles
  const getSocialLinks = () => {
    // Verifica que entity y productDetail existan
    const entity = productDetail?.entity;

    // Si entity no existe o es null, retornar null o lanzar un error
    if (!entity) {
      return null;
    }

    return {
      facebook_profile: entity.facebook_profile,
      twitter_profile: entity.twitter_profile,
      instagram_profile: entity.instagram_profile,
      linkedin_profile: entity.linkedin_profile,
      web_profile: entity.web_profile,
    };
  };

  const socialLinks = getSocialLinks();

  return (
    <VStack spacing={6} minH="100vh">
      <Card w="100%" p={1}>
        <CardBody>
          <Heading as="h3" size="lg" color="#027bb4">
            {productDetail?.title}
          </Heading>
        </CardBody>
      </Card>
      <Card w="100%" p={1}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4" mb={4}>
            <Heading size="md" color="#027bb4">
              Sobre Nosotros
            </Heading>
            <Box>
              {productDetail?.entity?.about_us ? (
                <Text pt="2" fontSize="md">
                  {productDetail.entity.about_us}
                </Text>
              ) : (
                <Text
                  pt="2"
                  fontSize="md"
                  dangerouslySetInnerHTML={{
                    __html: productDetail?.description,
                  }}
                ></Text>
              )}
            </Box>
          </Stack>

          <Badge color="#027bb4" fontSize="1em">
            {productDetail?.product_type}
          </Badge>
        </CardBody>
      </Card>
      <Card w="100%" p={1}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <HStack fontSize="md" justifyContent="space-between">
              <Heading size="sm" color="#027bb4">
                {productDetail?.entity.bussiness_name}
              </Heading>
              <SocialLinks socialLinks={socialLinks} />
            </HStack>

            <VStack alignItems="start" spacing="0">
              <HStack fontSize="md">
                <FaLocationDot />
                <Text>{productDetail?.entity.address}</Text>
              </HStack>

              <HStack fontSize="md">
                <LuHeartHandshake />
                <Text>{productDetail?.entity.type.name}</Text>
              </HStack>
            </VStack>
          </Stack>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default CardDetail;

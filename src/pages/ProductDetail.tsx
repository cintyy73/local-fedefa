import { VStack, Container, Button } from "@chakra-ui/react";
import { IoArrowBackSharp } from "react-icons/io5";
import Map from "../components/Map";
import { Link, useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import { useState, useEffect } from "react";

import { Product } from "../types";
import { getProductById } from "../services/product.service";

export const ProductDetail = () => {
  const { idProduct } = useParams<{ idProduct: string }>();

  const [productDetail, setProductDetail] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(idProduct);
        setProductDetail(data.data);
      } catch (err) {
        alert("Error fetching product details");
      }
    };

    fetchProduct();
  }, [idProduct]);

  // Muestra mensaje de carga en tanto esté pensando
  if (!productDetail) {
    return <div>Cargando...</div>;
  }

  // Funcion que extrae solo latitud y longitud
  const getEntityLocation = () => {
    // Verificar que productDetail y entity existan
    const entity = productDetail?.entity;

    // Si entity no existe o es null, retornar null o lanzar un error
    if (!entity) {
      return null;
    }

    // Desestructurar latitud y longitud del producto
    const { location_lat, location_lng } = entity;
    return { location_lat, location_lng };
  };

  const location = getEntityLocation();

  return (
    <Container maxW={1200} my={5}>
      <VStack spacing={6} minH="100vh">
        <Button
          leftIcon={<IoArrowBackSharp />}
          colorScheme="black"
          variant="link"
          alignSelf="start"
          as={Link}
          to={"/"}
        >
          Volver
        </Button>

        {location ? (
          <Map lat={location.location_lat} lng={location.location_lng} />
        ) : (
          <div>No se pudo cargar la ubicación del mapa</div>
        )}

        <CardDetail productDetail={productDetail} />
      </VStack>
    </Container>
  );
};

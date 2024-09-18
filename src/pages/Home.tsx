import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";

import CardProduct from "../components/cards/CardProduct";
import Carousel from "../components/carousel/Carousel";
import Map from "../components/Map";
import CardProductSkeleton from "../components/skeletonComponentes/CardProductSkeleton";
import { getData } from "../services/product.service";
import theme from "../themes/CustomTheme";
import { Product } from "../types";
import { Response } from "../types";

export const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Response<Product[]> = await getData();
        setProducts(response.data);
        /*         console.log(response.data); */
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Container maxW="1200px" p={4}>
        <Carousel isLoading={loading} />
        <Map />
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {Array.from({ length: 10 }).map((_, index) => (
              <CardProductSkeleton key={index} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <Container maxW="1200px" p={4}>
      <Carousel isLoading={false} />
      <Map />
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {products.length === 0 ? (
            Array.from({ length: 10 }).map((_, index) => (
              <CardProductSkeleton key={index} />
            ))
          ) : (
            products.map((product: Product) => (
              <ChakraProvider theme={theme} key={product.id}>
                <CardProduct data={product} isLoading={false} />
              </ChakraProvider>
            ))
          )}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};


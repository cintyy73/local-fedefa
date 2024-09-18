import { Flex, Stack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Flex flexDirection="column" minH="100vh">
        <Header />
        <Stack flex="1" alignItems={"center"} width="100%">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:idProduct" element={<ProductDetail />} />
          </Routes>
        </Stack>
        <Footer />
      </Flex>
    </>
  );
}

export default App;

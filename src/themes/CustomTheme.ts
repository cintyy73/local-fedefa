// theme/index.js o theme.js (según cómo tengas configurado tu proyecto)

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        ghost: {
          bg: "transparent",
          _hover: {
            bg: "blue.100",
            color: "blue.600",
          },
        },
        solid: {
          bg: "#027bb5",
          color: "white",
          _hover: {
            bg: "#66ee68",
            color: "#033951",
          },
        },
      },
      defaultProps: {
        size: "lg",
      },
    },
  },
});

export default theme;

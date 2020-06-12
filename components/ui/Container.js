import React from "react";
import {
  Box,
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/core";

import theme from "../../theme";

export default function Container({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <ColorModeProvider>
        <Box minHeight="100vh" padding="12px">
          {children}
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

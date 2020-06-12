import React from "react";
import { theme as chakraTheme } from "@chakra-ui/core";

const breakpoints = ["40em", "52em", "64em"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    ...chakraTheme.fontSizes,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  breakpoints,
  icons: {
    ...chakraTheme.icons,
  },
};

export default theme;

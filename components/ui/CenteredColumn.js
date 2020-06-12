import React from "react";
import { Flex } from "@chakra-ui/core";

export default function CenteredColumn(props) {
  return (
    <Flex
      width="100%"
      maxWidth="660px"
      direction="column"
      alignItems="left"
      margin="auto"
      {...props}
    />
  );
}

import Head from "next/head";
import { useState, useEffect } from "react";
import {
  Heading,
  Text,
  Box,
  Link,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorMode,
} from "@chakra-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import countapi from "countapi-js";

import Container from "../components/ui/Container";
import CenteredColumn from "../components/ui/CenteredColumn";

import Form from "../components/Form";
import Letter from "../components/Letter";

export default function Home() {
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  const handleChange = (event) => setName(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalName(name);
    return false;
  };

  let body = `Hey there. My name is ${finalName} and I love the work you're doing!`;

  return (
    <div className="container">
      <Container>
        <CenteredColumn>
          <>
            <Form
              name={name}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            {finalName && (
              <Letter
                key="letter"
                emails={["david@example.com", "david2@example.com"]}
                subject="A Fun Email Subject 2"
                body={body}
              />
            )}
          </>
        </CenteredColumn>
      </Container>
    </div>
  );
}

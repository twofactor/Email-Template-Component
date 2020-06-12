import {
  Textarea,
  Box,
  Button,
  Flex,
  Link,
  Text,
  Input,
  useClipboard,
  useToast,
} from "@chakra-ui/core";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Letter({ emails, subject, body }) {
  //initialize emails for gmail/mailto link
  const emailsComma = emails.join(", ");
  const emailsSemiColon = emails.join(";");

  //hooks
  const [emailAddresses, setEmailAddresses] = useState(emailsComma);
  const [subjectLine, setSubjectLine] = useState(subject);
  const [letter, setLetter] = useState(body);

  //update body when changed
  useEffect(() => {
    setLetter(body);
  }, [body]);

  //helper functions for making email link
  const buildGmailLink = (email, body, subject) =>
    `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

  const buildMailTo = (email, body, subject) =>
    `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

  //handle toasts
  const toast = useToast();

  //handle copy and paste
  const copyEmails = useClipboard(emailAddresses);
  const handleCopyEmails = (e) => {
    copyEmails.onCopy();
    toast({
      title: "Email Addresses copied to clipboard",
      status: "info",
      duration: 1500,
      isClosable: false,
    });
  };

  const copySubject = useClipboard(subject);
  const handleCopySubject = (e) => {
    copySubject.onCopy();
    toast({
      title: "Subject copied to clipboard",
      status: "info",
      duration: 1500,
      isClosable: false,
    });
  };

  const copyLetter = useClipboard(letter);
  const handleCopyLetter = (e) => {
    copyLetter.onCopy();
    toast({
      title: "Letter copied to clipboard",
      status: "info",
      duration: 1500,
      isClosable: false,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.2, y: 300 }}
    >
      <Box
        borderRadius="12px"
        padding="12px"
        pb={["12px", "12px", "2px", "2px"]}
        backgroundColor="gray.100"
      >
        <Flex
          borderRadius="12px"
          backgroundColor="white"
          width="100%"
          flexDirection={["column", "column", "row", "row"]}
          mb="12px"
        >
          <Text fontWeight="bold" padding="8px" paddingLeft="16px">
            To:
          </Text>
          <Textarea
            paddingLeft={["12px", "12px", "2px", "2px"]}
            borderWidth="0px"
            resize="none"
            minHeight={["100px", "80px", "80px", "80px"]}
            borderRadius="12px"
            value={emailAddresses}
          ></Textarea>
          <Button
            size="xs"
            variantColor="gray"
            fontWeight="bold"
            onClick={handleCopyEmails}
            margin="8px"
            pl="12px"
            pr="12px"
          >
            Copy Emails
          </Button>
        </Flex>
        <Flex
          backgroundColor="white"
          width="100%"
          flexDirection={["column", "column", "row", "row"]}
          borderRadius="12px"
          mb="12px"
        >
          <Text fontWeight="bold" padding="8px" paddingLeft="16px">
            Subject:
          </Text>
          <Textarea
            paddingLeft={["12px", "12px", "2px", "2px"]}
            borderWidth="0px"
            resize="none"
            minHeight={["80px", "80px", "62px", "62px"]}
            borderRadius="12px"
            value={subjectLine}
          ></Textarea>
          <Button
            size="xs"
            variantColor="gray"
            fontWeight="bold"
            margin="8px"
            pl="16px"
            pr="16px"
            onClick={handleCopySubject}
          >
            Copy Subject
          </Button>
        </Flex>
        <Flex
          borderRadius="12px"
          backgroundColor="white"
          width="100%"
          flexDirection={["column", "column", "row", "row"]}
          mb="12px"
        >
          <Textarea
            value={letter}
            resize="none"
            borderWidth="0px"
            borderRadius="12px"
            minHeight={["240px", "200px", "160px", "140px"]}
          />
          <Button
            size="xs"
            variantColor="gray"
            fontWeight="bold"
            margin="8px"
            pl="16px"
            pr="16px"
            onClick={handleCopyLetter}
          >
            Copy Letter
          </Button>
        </Flex>
        <Flex
          width="100%"
          pr={["0px", "0px", "8px", "8px"]}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Box width="100%">
            <Button
              as="a"
              fontWeight="bold"
              variantColor="red"
              borderRadius="12px"
              width="100%"
              mr={["0px", "0px", "8px", "8px"]}
              mb="8px"
              target="_blank"
              href={buildGmailLink(emailsSemiColon, letter, subjectLine)}
            >
              Send With Gmail
            </Button>
          </Box>
          <Box width="100%">
            <motion.div>
              <Button
                as="a"
                fontWeight="bold"
                variantColor="blue"
                borderRadius="12px"
                width="100%"
                target="_blank"
                href={buildMailTo(emailsComma, letter, subjectLine)}
                ml={["0px", "0px", "8px", "8px"]}
              >
                Send With Mail App
              </Button>
            </motion.div>
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
}

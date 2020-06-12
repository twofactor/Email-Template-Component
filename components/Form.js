import {
  Input,
  Text,
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";

export default function Form({ name, handleChange, handleSubmit }) {
  return (
    <>
      <Text fontWeight="bold" mb="12px">
        Enter your full name here to get started:
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <Flex flexDirection={["column", "column", "row", "row"]} mb="12px">
            <Input
              value={name}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onBlur={handleSubmit}
              placeholder="Type your full name here"
              mr={["0px", "0px", "8px", "8px"]}
              mb={["8px", "8px", "0px", "0px"]}
            />
            <Button
              fontWeight="bold"
              variantColor="blue"
              onClick={handleSubmit}
            >
              Let's Go
            </Button>
          </Flex>
        </FormControl>
      </form>
    </>
  );
}

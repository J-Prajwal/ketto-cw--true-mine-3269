import { IconButton, Input, Stack, MdPhone, Box, Text } from "@chakra-ui/react";
// import { BiEnvelope } from "react-icons/bi";
import React from "react";

const NewFundRaiser = () => {
  return (
    <Box bg="#3d3d3d" w={"100%"} h={"641px"}>
      <Box
        w="500px"
        p="15px"
        paddingTop={"30px"}
        border={"2px solid green"}
        m={"0px 20px 0px 530px"}
        bg="white"
        borderRadius="15px"
      >
        <Text
          fontSize="16px"
          color="black"
          fontWeight="bold"
          fontFamily="Helvetica"
        >
          Start your fund Raiser
        </Text>{" "}
        <hr />
        <br />
        <Box borderRadius="25px" backgroundColor="grey" padding={"10px"}>
          {" "}
          <Text>Purpose of raising funds </Text>{" "}
        </Box>
        <br />
        <Stack spacing={3} alignItems="center">
          <Input variant="flushed" placeholder="Name" />
          <br />
          <Input variant="flushed" placeholder="Emil Address" />
          <br />
          <Input variant="flushed" placeholder="Create a Password" />
          <br />
          <Input variant="flushed" placeholder="Mobile" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <box display="flex">
            <Text
              display="inline"
              fontSize="14px"
              color="#454545"
              fontFamily="sans-serif"
            >
              Already have an account?
            </Text>{" "}
            <Text
              display="inline"
              fontSize="14px"
              color="teal.500"
              fontFamily="sans-serif"
            >
              Login
            </Text>
          </box>
        </Stack>
      </Box>
    </Box>
  );
};

export default NewFundRaiser;

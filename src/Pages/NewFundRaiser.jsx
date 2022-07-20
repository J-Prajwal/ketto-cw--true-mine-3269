import { IconButton, Input, Stack, MdPhone, Box } from "@chakra-ui/react";
import { BiEnvelope } from "react-icons/bi";
import React from "react";

const NewFundRaiser = () => {
  return (
    <div>
      <Stack spacing={3} alignItems="center">
        <Input variant="flushed" placeholder="Name" width={"30%"} />
        <Input variant="flushed" placeholder="Emil Address" width={"30%"} />
        <Input
          variant="flushed"
          placeholder="Create a Password"
          width={"30%"}
        />

        <Input variant="flushed" placeholder="Mobile" width="30%" />
        <BiEnvelope />
      </Stack>
    </div>
  );
};

export default NewFundRaiser;

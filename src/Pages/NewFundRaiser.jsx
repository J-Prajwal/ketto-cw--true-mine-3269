import {
  IconButton,
  Input,
  Stack,
  MdPhone,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Flex,
  Select,
} from "@chakra-ui/react";
import { ChevronDownIcon, PhoneIcon, ViewOffIcon } from "@chakra-ui/icons";

import { BiEnvelope } from "react-icons/bi";
import React, { useState } from "react";

const NewFundRaiser = () => {
  const [menu, setMenu] = useState("English");
  return (
    <Box bg="#3d3d3d" w={"100%"} h={"741px"}>
      <br />
      {/* <Select onChange={(e) => setMenu(e.target.value)}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
        <option value="English">English</option>
      </Select> */}
      <Menu bg="white" marginLeft="530px">
        <MenuButton
          outline={"none"}
          border={""}
          bg={"white"}
          as={Button}
          rightIcon={<ChevronDownIcon />}
          // rightIcon={<BiEnvelope />}
        >
          {menu}
        </MenuButton>
        <MenuList
          onChange={(e) => {
            setMenu(e.target.value);
          }}
          mt={"-10"}
          borderRadius={"15px"}
          width={"200px"}
        >
          <MenuItem value={"English"} borderRadius={"15px 15px 0px 0px"}>
            English
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              setMenu(e.target.value);
            }}
            value={"Hindi"}
          >
            Hindi
          </MenuItem>
          <MenuItem value={"Tamil"}>Tamil</MenuItem>
          <MenuItem value={"Bengali"} borderRadius={"0px 0px 15px 15px"}>
            Bengali
          </MenuItem>
        </MenuList>
      </Menu>
      <br />
      <Box
        w="500px"
        p="15px"
        paddingTop={"30px"}
        border={"2px solid green"}
        m={"0px 20px 0px 530px"}
        bg="white"
        borderRadius="10px 10px 0px 0px"
      >
        <Text
          fontSize="16px"
          color="black"
          fontWeight="bold"
          fontFamily="Helvetica"
          textAlign={"center"}
        >
          Start your fund Raiser
        </Text>{" "}
        <hr />
        <br />
        <Box
          m="auto"
          borderRadius="25px"
          backgroundColor="whitesmoke"
          padding={"0px"}
          display="flex"
          w="90%"
          justifyContent={"space-around"}
        >
          {" "}
          <Text ml={"35px"} lineHeight={"45px"}>
            Purpose of raising funds{" "}
          </Text>{" "}
          <Menu ml="80px">
            <MenuButton
              outline={"none"}
              border={"none"}
              bg={"transparent"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              // rightIcon={<BiEnvelope />}
            >
              Medical Treatment
            </MenuButton>
            <MenuList mt={"-10"} borderRadius={"15px"} width={"200px"}>
              <MenuItem borderRadius={"15px 15px 0px 0px"}>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem borderRadius={"0px 0px 15px 15px"}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <br />
        <Stack spacing={3} alignItems="center">
          <Flex w="100%">
            <Input variant="flushed" placeholder="Name" />
            <BiEnvelope />
          </Flex>

          <br />
          <Flex w="100%">
            <Input variant="flushed" placeholder="Emil Address" />
            <BiEnvelope />
          </Flex>
          <br />
          <Flex w="100%">
            <Input variant="flushed" placeholder="Create a Password" />
            <ViewOffIcon />
          </Flex>

          <br />
          <Flex w="100%">
            <Input variant="flushed" placeholder="Mobile" />
            <PhoneIcon />
          </Flex>
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
      <Box
        ml={"531px"}
        bgColor={"rgb(1,191,189)"}
        borderRadius={"0px 0px 10px 10px"}
        h="55px"
        w="499px"
        fontFamily={"sans-serif"}
      >
        Next{" "}
      </Box>
    </Box>
  );
};

export default NewFundRaiser;

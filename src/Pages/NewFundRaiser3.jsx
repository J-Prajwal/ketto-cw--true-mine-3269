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
  Container,
  Image,
} from "@chakra-ui/react";
import { navigate } from "react-dom";
import {
  ChevronDownIcon,
  PhoneIcon,
  SearchIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";

import { BiEnvelope } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import React, { useState } from "react";
import greymark from "../images/greymark.png";

const NewFundRaiser3 = () => {
  const [menu, setMenu] = useState("English");

  const handleSubmit = () => {
    console.log("Yes clicked");
  };
  return (
    <Box bg="#3d3d3d" w={"100%"} h={"741px"}>
      <br />
      <Container ml="518px">
        <Menu bg="white">
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
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"English"}
              borderRadius={"15px 15px 0px 0px"}
            >
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
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"Tamil"}
            >
              Tamil
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"Bengali"}
              borderRadius={"0px 0px 15px 15px"}
            >
              Bengali
            </MenuItem>
          </MenuList>
        </Menu>
      </Container>
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
          Tell us about tha patient
        </Text>{" "}
        <hr />
        <br />
        <br />
        <Stack spacing={3} alignItems="center">
          <Flex w="90%">
            <Input variant="flushed" placeholder="Patient's full name" />
            <Image w={"20px"} h={"20px"} bg="grey" src={greymark}></Image>
          </Flex>

          <br />
          <Flex w="90%">
            <Input variant="flushed" placeholder="Patient's age" />
            <ChevronDownIcon />
          </Flex>
          <br />
          <Flex w="90%">
            <Input variant="flushed" placeholder="Ailment/Medical Condition" />
            <SearchIcon color={"#24c7cd"} />
          </Flex>
          <br />
          <Flex w="90%">
            <Input variant="flushed" placeholder="Hospital status" />
            <ChevronDownIcon />
          </Flex>
          <br />
          <Flex w="90%">
            <Input variant="flushed" placeholder="Hospital" />
            <SearchIcon color={"#24c7cd"} />
          </Flex>
          <br />
          <Flex w="90%">
            <Input variant="flushed" placeholder="Enter Your City" />
          </Flex>
          <br />
          <br />

          <br />
          <br />
        </Stack>
      </Box>
      <Box
        ml={"531px"}
        bgColor={"rgb(1,191,189)"}
        borderRadius={"0px 0px 10px 10px"}
        h="55px"
        w="499px"
        fontFamily={"sans-serif"}
        textAlign={"center"}
        lineHeight={"55px"}
        color={"white"}
        fontSize={"16px"}
        fontWeight={"bold"}
        cursor={"pointer"}
        onClick={() => handleSubmit()}
      >
        Save and continue{" "}
      </Box>
    </Box>
  );
};

export default NewFundRaiser3;

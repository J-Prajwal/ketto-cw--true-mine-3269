import { CheckIcon, ChevronDownIcon, PhoneIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewFundRaiser = () => {
  const [language, setLanguage] = useState("English");
  const [formType, setFormType] = useState("Medical Treatment");
  const [userData, setUserData] = useState([{}]);

  const formHandler = (value, name) => {
    setUserData((values) => ({ ...values, [name]: value }));
  };
  console.log(userData);
  return (
    <Box bgColor={"gray"}>
      <Container mt={"5"} mb={"5"}>
        <Menu bgColor={"gray"}>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {language}
          </MenuButton>
          <MenuList mt={"-10"}>
            <MenuItem
              onChange={(e) => setLanguage(e.target.value)}
              value="Hindi"
            >
              Hindi
            </MenuItem>
            <MenuItem
              onChange={(e) => setLanguage(e.target.value)}
              value="English"
            >
              English
            </MenuItem>
            <MenuItem
              onChange={(e) => setLanguage(e.target.value)}
              value="Tamil"
            >
              Tamil
            </MenuItem>
            <MenuItem
              onChange={(e) => setLanguage(e.target.value)}
              value="Kannada"
            >
              Kannada
            </MenuItem>
          </MenuList>
        </Menu>
      </Container>
      <Box
        as={Flex}
        bgColor={"white"}
        justifyContent={"center"}
        flexDirection={"column"}
        borderRadius={"xl"}
        width={"36%"}
        m={"auto"}
      >
        <Box p={3}>
          <Heading size={"sm"} textAlign={"center"}>
            Start your fundraiser
          </Heading>
        </Box>
        <Divider />
        <Box
          as={Flex}
          flexDirection={"row"}
          w={"90%"}
          bgColor={"gray.100"}
          margin={"auto"}
          mt={"3"}
          borderRadius={"xl"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text size={"xs"}>Purpose of raising funds</Text>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant={"flushed"}
              size={"sm"}
            >
              {formType}
            </MenuButton>
            <MenuList mt={"-10"} width={"3"}>
              <MenuItem
                _hover={{ color: "#01bfbd" }}
                value={"Medical Treatment"}
              >
                Medical Treatment
              </MenuItem>
              <MenuItem _hover={{ color: "#01bfbd" }} value={"NGO / Charity"}>
                NGO / Charity
              </MenuItem>
              <MenuItem _hover={{ color: "#01bfbd" }} value={"Other Cause"}>
                Other Cause
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <br />
        <Stack spacing={3} alignItems="center">
          <Flex w="90%">
            <Input variant="flushed" placeholder="Name" />
            <BsFillPersonFill />
          </Flex>

          <br />
          <Flex w="90%">
            <Input variant="flushed" placeholder="Emil Address" />
            <BiEnvelope />
          </Flex>
          <br />
          <Flex w="90%">
            <Input variant="flushed" placeholder="Create a Password" />
            <ViewOffIcon />
          </Flex>

          <br />
          <Flex w="90%">
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
              color="teal"
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
        textAlign={"center"}
        lineHeight={"55px"}
        cursor={"pointer"}
        // onClick={() => handleSubmit()}
      >
        Next{" "}
      </Box>
    </Box>
  );
};

export default NewFundRaiser;

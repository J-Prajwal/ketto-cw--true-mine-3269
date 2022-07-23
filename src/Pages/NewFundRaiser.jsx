import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
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
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
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
        <Box
          as={Flex}
          flexDirection={"column"}
          gap={"5"}
          w={"90%"}
          margin={"auto"}
          mt={"5"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Name"
              name="raisedBy"
              onChange={(e) => formHandler(e.target.value, e.target.name)}
            />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Email Address"
              name={"email"}
              onChange={(e) => formHandler(e.target.value, e.target.name)}
            />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
          <InputGroup>
            <Input
              variant={"flushed"}
              type={"password"}
              placeholder="Create a password"
              name={"password"}
              onChange={(e) => formHandler(e.target.value, e.target.name)}
            />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              children={
                <Text fontSize={"xs"}>
                  +91
                  <ChevronDownIcon />
                </Text>
              }
            />
            <Divider orientation="landscape"></Divider>
            <Input
              variant={"flushed"}
              placeholder="Mobile"
              name={"mobile"}
              onChange={(e) => formHandler(e.target.value, e.target.name)}
            />
            <InputRightElement children={<CheckIcon color="green.500" />} />
          </InputGroup>
        </Box>
        <Box mt={"40"}>
          <Text textAlign={"center"} fontSize={"sm"}>
            Already have an account? <Link to={"#"}>Login</Link>{" "}
          </Text>
        </Box>
        <Divider></Divider>
        <Box>
          <Button
            colorScheme={"none"}
            borderRadius={"0px 0px 10px 10px"}
            bgColor={"#01bfbd"}
            w={"100%"}
            color={"white"}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewFundRaiser;

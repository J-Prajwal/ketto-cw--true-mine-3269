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
  Img,
  Textarea,
  Portal,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
// import { navigate } from "react-dom";
import { ChevronDownIcon, PhoneIcon, ViewOffIcon } from "@chakra-ui/icons";
import plus from "../images/plus.jpg";
import qmark from "../images/qmark.png";

import { BiEnvelope } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useState } from "react";

const NewFundRaiser2 = () => {
  const [menu, setMenu] = useState("English");

  const handleSubmit = () => {
    console.log();
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
          lineHeight="46px"
        >
          Tell Us more about your fund Raiser
        </Text>{" "}
        <hr />
        <Flex justifyContent={"center"} mt="10px">
          <Image w="20px" h="20px" src={plus}></Image>
          <Text fontSize={"13px"}>
            Raising funds for <strong>Medical Treatment</strong> purpose
          </Text>
        </Flex>
        <br />
        <Stack spacing={3} alignItems="center">
          <Flex w="90%">
            <Input
              variant="flushed"
              placeholder="How much do you want to raise"
            />
            <Image w="30px" h="30px" src={qmark}></Image>
          </Flex>

          <br />

          <br />

          <br />

          <br />

          <Box>
            <Menu preventOverflow={true}>
              <MenuButton px={"4"} py={"2"} as={Button} colorScheme="pink">
                Profile
              </MenuButton>
              <MenuList preventOverflow={true}>
                <MenuGroup title="Parent">
                  <MenuItem>Father</MenuItem>
                  <MenuItem>Mother</MenuItem>
                  <MenuItem>Grand Father</MenuItem>
                  <MenuItem>Grand Mother</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Spouse">
                  <MenuItem>Husband</MenuItem>
                  <MenuItem>Wife</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Child">
                  <MenuItem>Son</MenuItem>
                  <MenuItem>Daughter</MenuItem>
                  <MenuItem>Twins</MenuItem>
                  <MenuItem>Grandson</MenuItem>
                  <MenuItem>Granddaughter</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Sibling">
                  <MenuItem>Brother</MenuItem>
                  <MenuItem>Sister</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Others">
                  <MenuItem>Friend</MenuItem>
                  <MenuItem>Friend's Family</MenuItem>
                  <MenuItem>Cousin</MenuItem>
                  <MenuItem>Uncle</MenuItem>
                  <MenuItem>Aunt</MenuItem>
                  <MenuItem>Nephew</MenuItem>
                  <MenuItem>Niece</MenuItem>
                  <MenuItem>Colleague</MenuItem>
                  <MenuItem>Relative</MenuItem>
                  <MenuItem>Legal Ward</MenuItem>
                  <MenuItem>Other</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
          <br />
          <hr />
          <Text fontSize="12px" color="#b4ada6" fontStyle={"italic"}>
            You can easily make changes to your fundraiser at any time
          </Text>
          <Box bg="#bfefee" fontSize="14px" w="420px">
            <Text ml="20px">
              Ketto's zero platform fee policy will ensure more funds for you.
            </Text>
          </Box>
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
        fontWeight="bold"
        color={"white"}
        cursor={"pointer"}
        onClick={() => handleSubmit()}
      >
        Save and continue{" "}
      </Box>
    </Box>
  );
};

export default NewFundRaiser2;

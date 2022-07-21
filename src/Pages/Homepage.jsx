import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Grid,
  Center,
  Image,
  Container,
  Stack,
  HStack,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import CardSlider from "../Components/CardSlider";

const Homepage = () => {
  return (
    <div>
      {/* Banner starts here */}
      <Flex width={"100%"}>
        <Box
          height={["30rem", "30rem", "30rem"]}
          width={["100%", "100%", "100%"]}
          display="flex"
          flexDirection={["column", "column", "row"]}
          justifyContent={["center", "center", "center"]}
          bgImg="https://kettocdn.gumlet.io/media/banner/0/71/image/626a109be777492340e46d013c3cad0857a5da3a.png?w=1366&dpr=1.0"
          bgRepeat={"no-repeat"}
          bgSize={["contain", "contain", "cover"]}
        >
          <Box width={"50%"} height={["0%", "0%", "100%"]}></Box>
          <Box
            width={["90%", "70%", "50%"]}
            bg={"transparent"}
            display="flex"
            flexDirection={["column", "column", "row"]}
            justifyContent={["center", "flex-end", ""]}
            alignItems={["baseline", "baseline", "center"]}
          >
            <Box height={["", "50%", "75%"]} mt={["10", "", ""]}>
              <Heading color="blackAlpha.700" size={["md", "md", "lg"]}>
                Need Funds to Pay For a Medical Emergency or Social Cause?
              </Heading>
              <Flex
                justifyContent="left"
                gap={["10px", "5px", "20px"]}
                mt={["4", "4", "8"]}
              >
                <Box>
                  <Heading
                    fontWeight={"bold"}
                    color={"teal.500"}
                    size={["md", "md", "lg"]}
                  >
                    0%
                  </Heading>
                  <Heading
                    fontWeight={"bold"}
                    color={"blackAlpha.600"}
                    size={["sm", "sm", "md"]}
                  >
                    PLATFORM FEE
                  </Heading>
                </Box>
                <Box>
                  <Heading
                    fontWeight={"bold"}
                    color={"teal.500"}
                    size={["md", "md", "lg"]}
                  >
                    55 Lakh+
                  </Heading>
                  <Heading
                    fontWeight={"bold"}
                    color={"blackAlpha.600"}
                    size={["sm", "sm", "md"]}
                  >
                    DONORS
                  </Heading>
                </Box>
                <Box>
                  <Heading
                    fontWeight={"bold"}
                    color={"teal.500"}
                    size={["md", "md", "lg"]}
                  >
                    2 Lakh+
                  </Heading>
                  <Heading
                    fontWeight={"bold"}
                    color={"blackAlpha.600"}
                    size={["sm", "sm", "md"]}
                  >
                    FUNDRAISERS
                  </Heading>
                </Box>
              </Flex>
              <Box mt={["0", "0", "8"]}>
                <Text
                  color={"teal.600"}
                  fontWeight={"medium"}
                  fontSize={["small", "large", "xl"]}
                >
                  Ketto’s{" "}
                  <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                    0
                  </span>
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    % Platform fees
                  </span>{" "}
                  ensures maximum funds for you
                </Text>

                <Button
                  colorScheme={"teal"}
                  size={["md", "md", "lg"]}
                  p={["1", "3", "7"]}
                  shadow="5px 5px #CAE1E0"
                  mt={["5", "", ""]}
                  ml={["4rem", "0rem", "0rem"]}
                >
                  Start a Fundraiser for FREE
                </Button>
              </Box>

              <Button
                bg={"transparent"}
                colorScheme={"none"}
                color={"teal.600"}
                p="0"
                mt={"2"}
                ml={["4rem", "0rem", "0rem"]}
              >
                नि: शुल्क फंडरेजर शुरू करें{" "}
                <ChevronRightIcon fontSize={"2xl"} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* Banner ends here */}

      {/* Mid section start here */}
      <Flex justifyContent={"center"} mt={["0", "0", "-10"]}>
        <Box
          // style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}
          border={"1px solid gray"}
          boxShadow={"1px black"}
          bgColor={"white"}
          display={"flex"}
          justifyContent={"space-around"}
          gap={"10px"}
          width={"50%"}
          borderRadius={"15px"}
        >
          <Box display={"flex"} alignItems="center">
            <Button
              bgColor={"#204b6b"}
              color={"white"}
              rightIcon={<ChevronRightIcon fontSize={"2xl"} />}
              size="lg"
              ml={"5"}
            >
              Donate{" "}
            </Button>
          </Box>
          <Box display={"flex"} alignItems="center">
            <Box p={2}>
              <Heading textTransform={"capitalize"} size={"sm"} color="#204b6b">
                start monthly donation to save lives
              </Heading>
              <Text fontSize={"xs"}>
                With your support, countless children will receive health care
                and a happy life. Start your monthly donation today
              </Text>
            </Box>
          </Box>
          <Box width={"50%"}>
            <Image
              src="https://kettocdn.gumlet.io/media/banner/0/92/image/81d7a1a7626397c32f6c1fb83bfdf476ccd734af.png?w=720&dpr=1.0"
              borderRadius={"0px 15px 15px 0px"}
              objectFit="fill"
            ></Image>
          </Box>
        </Box>
      </Flex>
      {/* Mid section ends here */}
      <Container textAlign={"center"} mt={"10"}>
        <Heading>Trending Fundraisers</Heading>
        <Text>View the fundraiser that are most active right now</Text>
      </Container>
      {/* slider component */}
      <CardSlider />
      <Flex justifyContent="space-between" mt={"7"}>
        <Box width={"77%"}>
          {" "}
          <Text color={"gray"} fontSize={"sm"} textAlign={"center"}>
            Note: Some fundraisers are not eligible for any tax deduction such
            as 80G, 501(c), etc.
          </Text>{" "}
        </Box>
        <Box width={"23%"}>
          {" "}
          <Heading size={"sm"} color={"teal.600"}>
            View Mores <ArrowForwardIcon />{" "}
          </Heading>{" "}
        </Box>
      </Flex>
      {/* slider component */}
      {/* Mid section ends here */}
      <Container maxWidth={"100%"} mt={"10"}>
        <Heading textAlign={"center"}>
          Start a Fundraiser in three simple steps
        </Heading>
      </Container>
      <Flex gap="6" width={"70%"} margin={"auto"} mt={"10"}>
        <Box w={"15%"} mt={"10"}>
          <Image
            // border={"1px solid red"}
            width={"100%"}
            src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?w=100&dpr=1.0"
          ></Image>
        </Box>
        <Box
          w={"100%"}
          h={"700px"}
          mt={"10"}
          display="flex"
          flexDirection={"column"}
          // justifyContent={"space-between"}
        >
          <Box>
            <Heading fontWeight={"medium"} size={"md"} color={"teal.500"}>
              Start your fundraiser
            </Heading>
            <br />
            <Text fontSize={"md"}>
              It’ll take only 2 minutes. Just tell us a few details about you
              and the ones you are raising funds for.
            </Text>
          </Box>
          <Box mt={"20"}>
            <Heading fontWeight={"medium"} size={"md"} color={"teal.500"}>
              Share your fundraiser
            </Heading>
            <br />
            <Text fontSize={"md"}>
              All you need to do is share the fundraiser with your friends and
              family. In no time, support will start pouring in.
            </Text>
            <Text fontSize={"xs"} color="gray">
              Share your fundraiser directly from dashboard on social media.
            </Text>
          </Box>
          <Box mt={"20"}>
            <Heading fontWeight={"medium"} size={"md"} color={"teal.500"}>
              Withdraw Funds
            </Heading>
            <br />
            <Text fontSize={"md"}>
              The funds raised can be withdrawn without any hassle directly to
              your bank account.
            </Text>
            <Text fontSize={"xs"} color={"gray"}>
              It takes only 5 minutes to withdraw funds on ketto.
            </Text>
          </Box>
        </Box>
        <Spacer></Spacer>
        <Spacer></Spacer>
        <Spacer></Spacer>
        <Box w={"80%"} bg={"transparent"}>
          <video loop muted autoPlay controls="">
            <source
              src="https://www.ketto.org/assets/videos/screen_recording.webm"
              type="video/webm"
            ></source>
            <source
              src="https://www.ketto.org/assets/videos/screen_recording.mp4"
              type="video/mp4"
            ></source>
          </video>
        </Box>
      </Flex>
      <Center>
        <Stack direction={"row"}>
          <ButtonGroup gap={"4"}>
            <Button
              fontWeight={"bold"}
              height={"50px"}
              width={"300px"}
              colorScheme={"teal"}
              variant={"solid"}
            >
              START A FUNDRAISER FOR FREE
            </Button>
            <Button
              fontWeight={"bold"}
              height={"50px"}
              width={"300px"}
              border={"2px"}
              colorScheme={"teal"}
              variant={"outline"}
            >
              TALK TO US
            </Button>
          </ButtonGroup>
        </Stack>
      </Center>
      <Flex justifyContent={"space-around"} width={"93%"} m={"auto"} mt={"10"}>
        <Box display={"flex"} alignItems={"center"}>
          <Text>
            Have any questions for us? Chat with our team on Facebook or
            WhatsApp now.
          </Text>
        </Box>
        <Box>
          <ButtonGroup gap={"6"} size={"lg"}>
            <Button borderRadius={"30px"} colorScheme={"facebook"} leftIcon={<FaFacebook />}>
              CHAT WITH US
            </Button>
            <Button borderRadius={"30px"} colorScheme={"whatsapp"} leftIcon={<FaWhatsapp />}>
              CHAT WITH US
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </div>
  );
};

export default Homepage;

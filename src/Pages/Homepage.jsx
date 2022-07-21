import { ChevronRightIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import React from "react";
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
      <CardSlider />  
    </div>
  );
};

export default Homepage;

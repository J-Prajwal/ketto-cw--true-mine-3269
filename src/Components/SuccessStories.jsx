import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./successStories.styles.css";
import { Navigation } from "swiper";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const SuccessStories = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Flex
            border={"1px solid red"}
            boxShadow={"xl"}
            width={"90%"}
            justifyContent={"space-between"}
          >
            <Box width={"40%"} border={"1px solid red"}>
              {" "}
              <Image src="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0"></Image>{" "}
            </Box>
            <Box width={"55%"} border={"1px solid red"}>
              <Heading>You are the reason Suraj gets to live his dream</Heading>
              <Text>
                “Our son’s cancer had relapsed after 2.5 years of chemotherapy &
                we knew we couldn’t afford his life-saving treatment. But thanks
                to your donations & prayers, he underwent successful treatment &
                is recovering well. May God bless you all for saving his life!”
                -Dhanasar (Father)
              </Text>
              <Text>Read More</Text>
              <Container display={"flex"} alignItems={"center"} gap={"2"}>
                <Text size={"sm"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            border={"1px solid red"}
            boxShadow={"xl"}
            width={"90%"}
            justifyContent={"space-between"}
          >
            <Box width={"40%"} border={"1px solid red"}>
              {" "}
              <Image src="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0"></Image>{" "}
            </Box>
            <Box width={"55%"} border={"1px solid red"}>
              <Heading>Heroes like you helped my son win his battle.</Heading>
              <Text>
                “May Allah bless you all! Thanks to your generous donations,
                Afzal underwent a successful BMT to treat thalassemia major. We
                are eternally grateful to you all for gifting our little bundle
                of joy a second chance at life!” -Reshma (Mother)
              </Text>
              <Text>Read More</Text>
              <Container display={"flex"} alignItems={"center"} gap={"2"}>
                <Text size={"sm"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            border={"1px solid red"}
            boxShadow={"xl"}
            width={"90%"}
            justifyContent={"space-between"}
          >
            <Box width={"40%"} border={"1px solid red"}>
              {" "}
              <Image src="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0"></Image>{" "}
            </Box>
            <Box width={"55%"} border={"1px solid red"}>
              <Heading>My daughter finally gets to enjoy her childhood</Heading>
              <Text>
                "My daughter was suffering from Budd Chiari syndrome with a
                recurrent gastrointestinal bleed and needed an urgent liver
                transplant to survive, but sadly we couldn't afford it. However,
                your donations gave her a new lease on life! She underwent a
                successful liver transplant and is now enjoying her childhood.
                Words cannot express how grateful I am to you angels!" -
                Prajakta (Mother)
              </Text>
              <Text>Read More</Text>
              <Container display={"flex"} alignItems={"center"} gap={"2"}>
                <Text size={"sm"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            border={"1px solid red"}
            boxShadow={"xl"}
            width={"90%"}
            justifyContent={"space-between"}
          >
            <Box width={"40%"} border={"1px solid red"}>
              {" "}
              <Image src="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0"></Image>{" "}
            </Box>
            <Box width={"55%"} border={"1px solid red"}>
              <Heading>You are the reason Suraj gets to live his dream</Heading>
              <Text>
                “Our son’s cancer had relapsed after 2.5 years of chemotherapy &
                we knew we couldn’t afford his life-saving treatment. But thanks
                to your donations & prayers, he underwent successful treatment &
                is recovering well. May God bless you all for saving his life!”
                -Dhanasar (Father)
              </Text>
              <Text>Read More</Text>
              <Container display={"flex"} alignItems={"center"} gap={"2"}>
                <Text size={"sm"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            border={"1px solid red"}
            boxShadow={"xl"}
            width={"90%"}
            justifyContent={"space-between"}
          >
            <Box width={"40%"} border={"1px solid red"}>
              {" "}
              <Image src="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.0"></Image>{" "}
            </Box>
            <Box width={"55%"} border={"1px solid red"}>
              <Heading>You are the reason Suraj gets to live his dream</Heading>
              <Text>
                “Our son’s cancer had relapsed after 2.5 years of chemotherapy &
                we knew we couldn’t afford his life-saving treatment. But thanks
                to your donations & prayers, he underwent successful treatment &
                is recovering well. May God bless you all for saving his life!”
                -Dhanasar (Father)
              </Text>
              <Text>Read More</Text>
              <Container display={"flex"} alignItems={"center"} gap={"2"}>
                <Text size={"sm"}>
                  Subscribe to read such inspiring stories
                </Text>
                <Button
                  borderRadius={"20px"}
                  size={"sm"}
                  colorScheme={"whatsapp"}
                  variant={"outline"}
                  leftIcon={<FaWhatsapp />}
                >
                  Subscribe
                </Button>
              </Container>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SuccessStories;

import { Divider, Flex, Heading, Image, Img, Text } from "@chakra-ui/react"
import React from "react"
import { Button } from "@chakra-ui/react"
import { PiTarget } from "react-icons/pi"
import { AiOutlineSchedule } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { SET_TEST_ACTION } from "../../store/actions/testAction"
import { HomeStyle } from "./HomeStyle"
import { CiLocationArrow1 } from "react-icons/ci";

const Home = () => {
  const state = useSelector((state) => state.test)
  console.log({ state })
  return (
    <Flex flexDirection={"column"}>
      <Flex
        w={"100%"}
        h={"100vh"}
        flexDirection={"column"}
        alignItems={"center"}
        position={"relative"}
      >
        <Image
          src="./assets/mapwithlocation.webp"
          position={"absolute"}
          w={"55%"}
          bottom={0}
          right={0}
        />
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          w={"100%"}
          h={"100%"}
          maxW={"1400px"}
          px={"10%"}
          py={"100px"}
          gap={6}
          zIndex={1}
        >
          <Heading
            as={"h1"}
            fontSize={"xxx-large"}
            pr={"350px"}
            letterSpacing={"-1.5px"}
          >
            Dipolog's Premier Solution for All Your Booking Needs!
            {/* I think it is successful */}
          </Heading>
          <Divider
            w={"10%"}
            h={"5px"}
            borderRadius={"100px"}
            bgColor={"gray.300"}
            colorScheme="blue"
          />
          <Text fontSize={"large"} pr={"300px"}>
            Efficiently manage operations across multiple industries using our
            intuitive booking system, optimizing processes and enhancing
            productivity seamlessly.
          </Text>
          <Flex gap={4}>
            <Button
              variant={"outline"}
              borderColor={"green.300"}
              borderWidth={"1px"}
              borderStyle={"solid"}
              color={"green.300"}
              _hover={{ bgColor: "green.300", color: "white" }}
              leftIcon={<PiTarget size={24} />}
              px={10}
              py={8}
            >
              Work With Us
            </Button>
            <Button
              colorScheme="twitter"
              color={"white"}
              leftIcon={<AiOutlineSchedule size={24} />}
              px={10}
              py={8}
            >
              Our Services
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* <Flex w={"100%"} flexDirection={"column"} alignItems={"center"} bgColor={'gray.100'}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          maxW={"1400px"}
          px={"10%"}
          py={"100px"}
          gap={6}
          textAlign={"center"}
        >
          <Heading
            as={"h1"}
            fontSize={"xxx-large"}
            px={"125px"}
            letterSpacing={"-1.5px"}
            textTransform={"capitalize"}
          >
            Are you a business owner seeking a hassle-free way to manage your
            bookings and appointments?
          </Heading>
          <Divider
            w={"10%"}
            h={"5px"}
            borderRadius={"100px"}
            bgColor={"gray.300"}
            colorScheme="blue"
          />
          <Text fontSize={"large"} px={"150px"}>
            Look no further! Our cutting-edge platform offers you the tools to
            effortlessly organize your schedules, delight your customers, and
            drive your business forward.
          </Text>
        </Flex>
      </Flex> */}

      <Flex
        w={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        bgColor={"blue.50"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          w={"100%"}
          maxW={"1400px"}
          px={"10%"}
          py={"100px"}
          gap={12}
          textAlign={"center"}
        >
          <Text
            fontSize={"large"}
            px={"150px"}
            fontWeight={"bold"}
            // color={"white"}
          >
            Are You A Business Owner Seeking A Hassle-Free Way To Manage Your
            Bookings And Appointments?
          </Text>
          <Text fontSize={"large"} px={"150px"}>
            Look no further! Our cutting-edge platform offers you the tools to
            effortlessly organize your schedules, delight your customers, and
            drive your business forward.
          </Text>
          <Heading
            as={"h1"}
            fontSize={"xxx-large"}
            px={"125px"}
            letterSpacing={"-1.5px"}
            textTransform={"capitalize"}
            // color={"white"}
          >
            What We Offer
          </Heading>
          <Flex gap={6}>
            <Flex sx={HomeStyle.whatWeOffer.column}>
              <Img
                src="./assets/effortless-booking-management.webp"
                sx={HomeStyle.whatWeOffer.image}
              />

              <Text sx={HomeStyle.whatWeOffer.title}>
                Effortless Booking Management
              </Text>
              <Text>
                Simplify your booking process with our user-friendly interface.
                Easily schedule, modify, and track appointments in one
                centralized location.
              </Text>
            </Flex>

            <Flex flexDirection={"column"} sx={HomeStyle.whatWeOffer.column}>
              <Img
                src="./assets/customizable-solutions.webp"
                sx={HomeStyle.whatWeOffer.image}
              />
              <Text sx={HomeStyle.whatWeOffer.title}>
                Customizable Solutions
              </Text>
              <Text>
                Tailor the system to fit your business needs. Customize
                settings, availability, and services to align perfectly with
                your operations.
              </Text>
            </Flex>

            <Flex flexDirection={"column"} sx={HomeStyle.whatWeOffer.column}>
              <Img
                src="./assets/seamless-user-experience.webp"
                sx={HomeStyle.whatWeOffer.image}
              />
              <Text sx={HomeStyle.whatWeOffer.title}>
                Seamless User Experience
              </Text>
              <Text>
                Engage your clients with a seamless booking experience. Our
                platform ensures a smooth interaction for both you and your
                customers.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        bgColor={"white"}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"flex"}
          justifyContent={"center"}
          w={"100%"}
          maxW={"1400px"}
          px={"10%"}
          py={"100px"}
          gap={24}
          textAlign={"center"}
        >
          <Heading
            as={"h1"}
            fontSize={"xxx-large"}
            px={"125px"}
            letterSpacing={"-1.5px"}
            textTransform={"capitalize"}
          >
            Why Choose Us
          </Heading>
          <Flex gap={12}>
            <Flex sx={HomeStyle.whyChooseUs.column}>
              <Text sx={HomeStyle.whyChooseUs.title}>Expert Development</Text>
              <Text sx={HomeStyle.whyChooseUs.desc}>
                Built by React JS developers with a passion for creating robust
                and elegant solutions, our platform leverages cutting-edge
                technology to meet your booking needs.
              </Text>
            </Flex>

            <Flex flexDirection={"column"} sx={HomeStyle.whyChooseUs.column}>
              <Img
                src="./assets/ExpertDevelopment.png"
                sx={HomeStyle.whyChooseUs.image}
              />
            </Flex>
          </Flex>
          <Flex gap={12}>
            <Flex flexDirection={"column"} sx={HomeStyle.whyChooseUs.column}>
              <Img
                src="./assets/SecurityAndReliability.png"
                sx={HomeStyle.whyChooseUs.image}
              />
            </Flex>

            <Flex sx={HomeStyle.whyChooseUs.column}>
              <Text sx={HomeStyle.whyChooseUs.title}>
                Security & Reliability
              </Text>
              <Text sx={HomeStyle.whyChooseUs.desc}>
                Rest easy knowing that your data is secure. We prioritize the
                safety and confidentiality of your business information.
              </Text>
            </Flex>
          </Flex>
          <Flex gap={12}>
            <Flex sx={HomeStyle.whyChooseUs.column}>
              <Text sx={HomeStyle.whyChooseUs.title}>Scalability</Text>
              <Text sx={HomeStyle.whyChooseUs.desc}>
                Grow your business without worrying about system limitations.
                Our platform scales with your needs, accommodating your
                expanding client base.
              </Text>
            </Flex>

            <Flex flexDirection={"column"} sx={HomeStyle.whyChooseUs.column}>
              <Img
                src="./assets/Scalability.png"
                sx={HomeStyle.whyChooseUs.image}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        bgColor={"blue.50"}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          maxW={"1400px"}
          px={"10%"}
          py={"100px"}
          gap={6}
          textAlign={"center"}
        >
          <Heading
            as={"h1"}
            fontSize={"xxx-large"}
            px={"125px"}
            letterSpacing={"-1.5px"}
            textTransform={"capitalize"}
          >
            Get Started Today
          </Heading>
          <Text>Sign up now for a free trial and discover how our platform can revolutionize your booking management. Take control of your schedules, empower your business, and deliver an exceptional experience to your clients.</Text>
          <Text>Ready to elevate your booking game? Let's get started!</Text>
          <Button
              colorScheme="twitter"
              color={"white"}
              leftIcon={<CiLocationArrow1 size={24} />}
              px={10}
              py={8}
            >
              Sign Up Now
            </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home

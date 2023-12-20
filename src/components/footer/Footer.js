import { Button, Flex, Img, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Flex w={"100%"} bgColor={"white"}>
      <Flex
        w={"100%"}
        // flexDirection={"column"}
        alignItems={'center'}
        justifyContent={"space-around"}
        py={6}
        gap={2}
      >
        <Text>©{year} Dipolog Booking Hub. All rights reserved.</Text>
        <Img src="./assets/DipologBookingHub1.webp" maxW={"300px"} />
        <Text>Privacy Policy | Terms of Service | Contact Us</Text>
      </Flex>
    </Flex>
  )
}

export default Footer

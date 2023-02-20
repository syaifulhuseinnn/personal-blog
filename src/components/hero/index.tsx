import React from "react";
import { Box, Text, Image, Heading } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box as="article" position="relative">
      <Image
        src="https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
        height={{
          base: 200,
          "mobile-m": 250,
          "mobile-l": 250,
          tablet: 400,
          laptop: 500,
          "laptop-l": 600,
        }}
        width={{ base: "100%" }}
        objectFit="cover"
      />
      <Box
        bgColor="white"
        p={{ base: 12 }}
        px={{ "laptop-l": "32px" }}
        py={{ "laptop-l": 24 }}
        position="absolute"
        bottom={{ base: 12, tablet: 16 }}
        left={{ base: 12, tablet: 16 }}
        width={{
          base: "fit-content",
          // "mobile-m": 288,
          // "mobile-l": 338,
          tablet: "60%",
          "laptop-l": "50%",
        }}
        maxWidth={{
          base: 248,
          "mobile-m": 303,
          "mobile-l": 353,
          tablet: "60%",
          "laptop-l": "50%",
        }}
        // minWidth={{
        //   base: 233,
        //   "mobile-m": 288,
        //   "mobile-l": 338,
        //   tablet: "60%",
        //   "laptop-l": "45%",
        // }}
        // maxWidth={{
        //   base: 233,
        //   "mobile-m": 288,
        //   "mobile-l": 338,
        //   tablet: "60%",
        //   "laptop-l": "45%",
        // }}
      >
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize={{
            base: 12,
            "mobile-m": 14,
            "mobile-l": 16,
            tablet: 20,
            laptop: 26,
            "laptop-l": 30,
          }}
          color={{ base: "purple.200" }}
          noOfLines={{ base: 2, tablet: 3, laptop: 3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum
          eaque quidem aspernatur sed unde ab est debitis accusamus quod!
        </Heading>
        <Text
          fontSize={{
            base: 10,
            "mobile-m": 12,
            "mobile-l": 14,
            tablet: 16,
            laptop: 20,
          }}
          fontWeight="medium"
          mt={{ base: 6, "laptop-l": 14 }}
          mb={{ "laptop-l": 14 }}
          // mb={{ base: "2" }}
          noOfLines={{ base: 2, tablet: 3, laptop: 3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor
          laboriosam adipisci nostrum voluptates dolore praesentium eum vero
          dolorem sunt ullam aliquid impedit qui totam, ducimus sequi obcaecati
          porro perferendis labore excepturi, error quae, recusandae maiores
          explicabo. Excepturi minus in ipsam deserunt, voluptates quam
          veritatis magnam voluptatibus at ut! Veritatis?
        </Text>
        <Text
          as="small"
          color="grey.200"
          fontWeight="normal"
          fontSize={{ base: 10, "mobile-l": 12, tablet: 14, laptop: 16 }}
        >
          syaifulhusein . Oct 23, 2023
        </Text>
      </Box>
    </Box>
  );
}

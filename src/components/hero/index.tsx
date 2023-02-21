import React from "react";
import { Box, Text, Image, Heading } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box as="article" position="relative">
      <Image
        src="https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
        height={{
          base: 280,
          "mobile-m": 320,
          "mobile-l": 350,
          tablet: 500,
          laptop: 580,
          "laptop-l": 600,
        }}
        width={{ base: "100%" }}
        objectFit="cover"
      />
      <Box
        bgColor="white"
        px={{ base: 12, tablet: 22, "laptop-l": "32px" }}
        py={{ base: 12, tablet: 18, "laptop-l": 24 }}
        position="absolute"
        bottom={{ base: 12, tablet: 16 }}
        left={{ base: 12, tablet: 16 }}
        width={{
          base: "calc(100% - 24px)",
          tablet: "calc(100% - 40%)",
          "laptop-l": "calc(100% - 49%)",
        }}
      >
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize={{
            base: 12,
            "mobile-m": 16,
            "mobile-l": 20,
            tablet: 22,
            laptop: 26,
            "laptop-l": 30,
          }}
          color={{ base: "purple.200" }}
          noOfLines={{ base: 5, tablet: 3, laptop: 3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum
          eaque quidem aspernatur sed unde ab est debitis accusamus quod!
        </Heading>
        <Text
          fontSize={{
            base: 10,
            "mobile-m": 14,
            "mobile-l": 16,
            tablet: 18,
            laptop: 20,
          }}
          fontWeight="medium"
          my={{ base: 6, laptop: 12, "laptop-l": 14 }}
          noOfLines={{ base: 2, tablet: 4, laptop: 4 }}
          display={{ base: "none", tablet: "-webkit-box" }}
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
          fontSize={{
            base: 10,
            "mobile-m": 12,
            "mobile-l": 14,
            tablet: 16,
            laptop: 18,
          }}
        >
          syaifulhusein . Oct 23, 2023
        </Text>
      </Box>
    </Box>
  );
}

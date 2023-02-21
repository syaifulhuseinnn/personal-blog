import React from "react";
import { GridItem, Image, Box, Heading, Text, Button } from "@chakra-ui/react";

type BlogItemProps = {
  imageSrc: string;
  title: string;
  headline: string;
  author: string;
  id: number;
};

function sliceHeadline(headline: string) {
  return headline.substring(0, 291);
}

export default function BlogItem({
  imageSrc,
  title,
  headline,
  author,
  id,
}: BlogItemProps) {
  return (
    <GridItem
      as="article"
      width="100%"
      display={{ base: "flex" }}
      flexDirection={{ base: "row", tablet: "column" }}
      gap={{ base: 10, tablet: 18, "laptop-l": 24 }}
      key={id}
      position={{ tablet: "relative" }}
    >
      <Image
        src={imageSrc}
        alt="img"
        height={{ base: 116, tablet: 280, laptop: 300, "laptop-l": 380 }}
        width={{ base: "102px", tablet: "100%" }}
        objectFit="cover"
      />

      {/* Only showed when screen size higher than 768px */}
      <Box
        bgColor={{ tablet: "white" }}
        display={{ base: "none", tablet: "block" }}
        position={{ tablet: "absolute" }}
        // top={{ tablet: 110, laptop: 200, "laptop-l": 245 }}
        bottom={{ tablet: 143, laptop: 163, "laptop-l": 193 }}
        left={{ tablet: 16 }}
        py={{ tablet: 12, laptop: 16, "laptop-l": "20px" }}
        px={{ tablet: 12, laptop: "20px", "laptop-l": 24 }}
        width={{
          tablet: "calc(100% - 32px)",
          laptop: "calc(100% - 15%)",
          "laptop-l": "calc(100% - 170px)",
        }}
      >
        <Heading
          fontWeight="bold"
          fontSize={20}
          color="purple.200"
          noOfLines={{ base: 2, laptop: 3 }}
          mb={{ base: 10, laptop: 14 }}
        >
          {title}
        </Heading>
        <Text
          as="small"
          color="grey.200"
          fontWeight="normal"
          fontSize={{ base: 14, laptop: 16 }}
        >
          {author} . Oct 23, 2022
        </Text>
      </Box>

      <Text
        fontWeight="medium"
        fontSize={{ base: 12, laptop: 16, "laptop-l": 20 }}
        noOfLines={{ base: 3 }}
        display={{ base: "none", tablet: "-webkit-box" }}
        flexGrow={{ tablet: 4 }}
      >
        {headline}
      </Text>
      <Button
        maxWidth="fit-content"
        display={{ base: "none", tablet: "block" }}
        variant="outline"
        borderColor="blue.b400"
        color="blue.b400"
        _hover={{
          bgColor: "blue.500",
          color: "white",
          borderColor: "blue.500",
        }}
      >
        Read more
      </Button>

      {/* END */}

      {/* This line showed when screen size lower than 768px */}
      <Box
        display={{ tablet: "none" }}
        flexDirection={{ tablet: "column" }}
        gap={{ tablet: 12 }}
      >
        <Heading
          fontWeight="bold"
          fontSize={{ base: 12, "mobile-m": 16 }}
          color="purple.200"
          noOfLines={{ base: 5 }}
        >
          {title}
        </Heading>
        <Text
          fontWeight="medium"
          fontSize={12}
          noOfLines={{ base: 3 }}
          display={{ base: "none", tablet: "-webkit-box" }}
        >
          {headline}
        </Text>
        <Text as="small" color="grey.200" fontWeight="normal" fontSize={10}>
          {author} . Nov 21, 2011
        </Text>
      </Box>
      {/* END */}
    </GridItem>
  );
}

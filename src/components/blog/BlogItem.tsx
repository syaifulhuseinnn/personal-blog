import React from "react";
import { GridItem, Image, Box, Heading, Text, Button } from "@chakra-ui/react";

type BlogItemProps = {
  imageSrc: string;
  title: string;
  headline: string;
  author: string;
  key?: any;
};

function sliceHeadline(headline: string) {
  return headline.substring(0, 291);
}

export default function BlogItem({
  imageSrc,
  title,
  headline,
  author,
  key,
}: BlogItemProps) {
  return (
    <GridItem
      as="article"
      width="100%"
      display={{ base: "flex" }}
      flexDirection={{ base: "row", tablet: "column" }}
      gap={{ base: 10, tablet: 18, "laptop-l": 24 }}
      key={key}
      position={{ tablet: "relative" }}
    >
      <Image
        src={imageSrc}
        alt="img"
        height={{ base: 116, tablet: 210, laptop: 300, "laptop-l": 380 }}
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
        p={{ tablet: 12 }}
        width={{ tablet: 314, laptop: 390 }}
      >
        <Heading
          fontWeight="bold"
          fontSize={20}
          color="purple.200"
          noOfLines={{ base: 2, laptop: 3 }}
        >
          {title}
        </Heading>
        <Text
          as="small"
          color="grey.200"
          fontWeight="normal"
          fontSize={{ base: 10, "laptop-l": 12 }}
        >
          {author} . Oct 23, 2022
        </Text>
      </Box>

      <Text
        fontWeight="medium"
        fontSize={{ base: 12, laptop: 16, "laptop-l": 20 }}
        noOfLines={{ base: 3 }}
        display={{ base: "none", tablet: "-webkit-box" }}
        flexGrow={{ laptop: 4 }}
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
          fontSize={16}
          color="purple.200"
          noOfLines={{ base: 2 }}
        >
          {title}
        </Heading>
        <Text fontWeight="medium" fontSize={12} noOfLines={{ base: 3 }}>
          {headline}
        </Text>
        <Text as="small" color="grey.200" fontWeight="normal" fontSize={10}>
          {author}
        </Text>
      </Box>
      {/* END */}
    </GridItem>
  );
}

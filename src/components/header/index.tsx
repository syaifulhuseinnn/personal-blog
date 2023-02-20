import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Text,
  Link,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  return (
    <Box as="header" position="relative">
      <Box
        as="nav"
        display={{ base: "none", laptop: "flex" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input
            placeholder="Search blog"
            width="320px"
            borderColor="navy.n800"
            paddingLeft="40px"
            fontWeight="medium"
            fontSize={16}
            _placeholder={{ fontWeight: "medium", fontSize: "16px" }}
            _hover={{ borderColor: "navy.n800" }}
            _focusVisible={{
              borderColor: "blue.b400",
              boxShadow: "0 0 0 1px #3231e7",
            }}
          />
        </InputGroup>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={96}
        >
          <Link
            color="navy.n800"
            fontSize={16}
            fontWeight="bold"
            _hover={{ textDecoration: "none", color: "blue.b400" }}
          >
            Home
          </Link>
          <Link
            color="navy.n800"
            fontSize={16}
            fontWeight="bold"
            _hover={{ textDecoration: "none", color: "blue.b400" }}
          >
            About
          </Link>
          <Button
            bgColor="blue.b400"
            color="white"
            _hover={{
              bgColor: "blue.500",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Heading
        as="h1"
        textAlign="center"
        fontSize={{
          base: 14,
          "mobile-s": 14,
          "mobile-m": 18,
          "mobile-l": 20,
          tablet: 30,
          laptop: 42,
          "laptop-l": "72px",
        }}
        my={{ laptop: "40px", "laptop-l": "80px" }}
        mb={{ base: 28 }}
        color="navy.n800"
        fontWeight="extrabold"
      >
        <Text
          as="span"
          fontFamily="body"
          fontSize={{
            base: 8,
            "mobile-s": 10,
            "mobile-m": 12,
            "mobile-l": "18",
            tablet: 14,
            laptop: "22",
            "laptop-l": "20",
          }}
          fontWeight="normal"
        >
          The blog of
        </Text>
        <br />
        SYAIFULHUSEIN
      </Heading>
      <Icon
        as={HiMenu}
        boxSize={{
          base: "4",
          "mobile-s": "6",
          "mobile-m": "7",
          "mobile-l": "8",
          tablet: "10",
        }}
        position="absolute"
        top={1}
        right={0}
        display={{ laptop: "none" }}
      />
    </Box>
  );
}

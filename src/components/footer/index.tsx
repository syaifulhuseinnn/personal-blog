import React from "react";
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import {
  SiNextdotjs,
  SiChakraui,
  SiFirebase,
  SiTypescript,
  SiStrapi,
  SiAlgolia,
  SiDisqus,
} from "react-icons/si";
import { GiQuillInk } from "react-icons/gi";
export default function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      flexDirection={{ base: "column", tablet: "row" }}
      justifyContent={{ tablet: "space-between" }}
      gap={{ base: "32px" }}
      py={{ base: 24, tablet: "32px" }}
      px={{ base: 24, tablet: "32px", laptop: "80px" }}
      bgColor="#040748"
    >
      <Text
        fontWeight={{ base: "extrabold" }}
        color="white"
        fontFamily="heading"
        fontSize={{ base: 12, tablet: 14, laptop: 16 }}
        textTransform="lowercase"
      >
        SYAIFULHUSEIN.com
      </Text>
      <Box>
        <Text fontWeight={{ base: "bold" }} color="white" mb={16}>
          Contact
        </Text>
        <UnorderedList marginInlineStart={0}>
          <ListItem
            color="white"
            fontWeight={{ base: "medium" }}
            listStyleType="none"
          >
            <ListIcon as={FaEnvelope} />
            syaifulhuseinnn@gmail.com
          </ListItem>
          <ListItem
            color="white"
            fontWeight={{ base: "medium" }}
            listStyleType="none"
          >
            <ListIcon as={FaLinkedin} />
            syaifulhuseinnn
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <Text fontWeight={{ base: "bold" }} color="white" mb={16}>
          Built with
        </Text>
        <UnorderedList marginInlineStart={0}>
          <Box
            display="flex"
            gap={{ base: "40px", tablet: "10px", laptop: "60px" }}
          >
            <Box>
              <ListItem
                listStyleType="none"
                fontWeight={{ base: "medium" }}
                color="white"
              >
                <ListIcon as={SiNextdotjs} />
                Next.js
              </ListItem>
              <ListItem
                listStyleType="none"
                fontWeight={{ base: "medium" }}
                color="white"
              >
                <ListIcon as={SiChakraui} />
                Chakra UI
              </ListItem>
              <ListItem
                listStyleType="none"
                fontWeight={{ base: "medium" }}
                color="white"
              >
                <ListIcon as={SiFirebase} />
                Firebase
              </ListItem>
              <ListItem
                listStyleType="none"
                fontWeight={{ base: "medium" }}
                color="white"
              >
                <ListIcon as={SiTypescript} />
                TypeScript
              </ListItem>
            </Box>
            <Box>
              <ListItem
                listStyleType="none"
                fontWeight={{ base: "medium" }}
                color="white"
              >
                <ListIcon as={GiQuillInk} />
                Quill.js
              </ListItem>
              <ListItem
                listStyleType="none"
                fontWeight={{ base: "medium" }}
                color="white"
              >
                <ListIcon as={SiStrapi} />
                Strapi
              </ListItem>
              <ListItem
                listStyleType="none"
                fontWeight={{ base: "medium" }}
                color="white"
              >
                <ListIcon as={SiAlgolia} />
                Algolia
              </ListItem>
              <ListItem
                listStyleType="none"
                fontWeight={{ base: "medium" }}
                color="white"
              >
                <ListIcon as={SiDisqus} />
                Disqus
              </ListItem>
            </Box>
          </Box>
        </UnorderedList>
      </Box>
    </Box>
  );
}

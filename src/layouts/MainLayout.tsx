import React from "react";
import { Container } from "@chakra-ui/react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Container
      maxWidth={{ "laptop-l": "container.xl" }}
      p={{ base: 24 }}
      px={{ "laptop-l": 0 }}
    >
      {children}
    </Container>
  );
}

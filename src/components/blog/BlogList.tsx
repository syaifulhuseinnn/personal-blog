import React from "react";
import BlogItem from "./BlogItem";
import { Grid } from "@chakra-ui/react";

type BlogListProps = {
  blogs: any[];
};

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <Grid
      as="section"
      gridTemplateColumns={{ base: "repeat(1, 1fr)", tablet: "repeat(2, 1fr)" }}
      gridTemplateRows={{ base: "repeat(1, 1fr)" }}
      gap={{ base: 16, tablet: 28, "laptop-l": "64px" }}
      my={{ base: 16, tablet: 28, "laptop-l": "64px" }}
    >
      {blogs.map((blog, index) => (
        <BlogItem
          imageSrc={blog.banner_image}
          title={blog.title}
          headline={blog.body}
          author={blog.author}
          id={blog.id}
          key={blog.id}
        />
      ))}
    </Grid>
  );
}

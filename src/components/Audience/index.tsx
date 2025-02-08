import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Audience = () => {
  return (
    <Flex
      id="audience"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
        mb={10}
      >
        We recommend TraitPath for
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
        w={{
          base: "auto",
          xl: "full",
        }}
      >
        {Cards.map((card) => (
          <Card key={card.title} color={card.color}>
            {card.title}
          </Card>
        ))}
      </Grid>
      <Heading
        fontSize={{
          base: 16,
          md: 24,
          lg: 32,
        }}
        textAlign={"center"}
        mt={10}
      >
        and many others.
      </Heading>
    </Flex>
  );
};

interface CardProps {
  color: string;
  children: ReactNode;
}

const Card = ({ color, children }: CardProps) => {
  return (
    <Flex
      align={"center"}
      bg={`${color}25`}
      px={8}
      py={5}
      rounded={"lg"}
      transition={"all .25s ease"}
      _hover={{
        boxShadow: `0px 5px 50px 2px ${color}25`,
        transform: "translateY(-5px)",
      }}
    >
      <Box
        mr={4}
        w={2}
        h={2}
        bg={color}
        rounded={"full"}
        outline={"5px solid white"}
      />
      <Text
        color={color}
        fontSize={{
          base: 12,
          md: 14,
          lg: 16,
        }}
        fontWeight={600}
      >
        {children}
      </Text>
    </Flex>
  );
};

const Cards = [
  {
    title: "Counselors",
    color: "#E6990B",
  },
  {
    title: "Educators",
    color: "#A431C7",
  },
  {
    title: "Career Coaches",
    color: "#42C9B2",
  },
  {
    title: "Therapists",
    color: "#348FDA",
  },
  {
    title: "Students",
    color: "#41B668",
  },
  {
    title: "Team Leaders",
    color: "#DA4D8F",
  },
];

export default Audience;

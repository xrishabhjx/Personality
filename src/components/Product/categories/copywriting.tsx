import { Grid } from "@chakra-ui/react";
import React from "react";
import { ProductCard } from "../card";
import { LuLayers, LuPenLine, LuText } from "react-icons/lu";

const Copywriting = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      w={"100%"}
      mt={6}
      gap={6}
      px={6}
    >
      <ProductCard icon={LuText} title={"Headline Optimizer"}>
        The AI can help users understand their compatibility with potential partners by analyzing personality traits and offering personalized advice on communication styles and relationship dynamics.
      </ProductCard>

      <ProductCard icon={LuPenLine} title={"Copy Editing Assistant"}>
        Users can leverage the AI to receive actionable insights into their strengths and areas of growth, helping them set more effective and tailored personal development goals.
      </ProductCard>

      <ProductCard icon={LuLayers} title={"Ad Copy Generator"}>
        Aspiring leaders can use the AI to assess their leadership style, identify key traits that influence team dynamics, and receive a roadmap for improving their leadership abilities.
      </ProductCard>
    </Grid>
  );
};

export default Copywriting;

import React, { useMemo } from "react";
import { Section, useSectionScroll } from "../scrollScreen";
import { useTransform, motion } from "framer-motion";
import styled from "styled-components";

const SectionContainer = styled.div`
  height: 100vh;
  width: 100vh;
`;
const Section1 = () => {
  const { sectionScroll } = useSectionScroll();
  const y = useMemo(() => sectionScroll / 100 + 1, [sectionScroll]);
  return (
    <Section bg={"#133091"}>
      <motion.div animate={{ scale: y }}>
        <h3 style={{ color: "white" }}>
          Unlock the doors to endless possibilities
        </h3>
        <h1 style={{ color: "white" }}>Welcome to the gateway!</h1>
      </motion.div>
    </Section>
  );
};

const Section2 = () => {
  const { sectionScroll } = useSectionScroll();
  const y = useMemo(() => (-1 * sectionScroll) / 10, [sectionScroll]);

  return (
    <Section bg={"#0e86b4"}>
      <motion.div animate={{ y }}>
        <h1 style={{ color: "white" }}>The Freelancing Club</h1>
      </motion.div>
    </Section>
  );
};

const Home = () => {
  return [
    <SectionContainer>
      <Section1 />
    </SectionContainer>,
    <SectionContainer>
      <Section2 />
      Hello
    </SectionContainer>,
  ];
};
export default Home;

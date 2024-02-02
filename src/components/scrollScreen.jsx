import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: ${(p) => p.bg};
`;

const ScrollBar = styled.div`
  position: fixed;
  height: 100vh;
  width: 0.6rem;
  top: 0;
  right: 20px;

  & > div {
    width: 100%;
    height: 100%;
    position: relative;

    .scrolled {
      background-color: blue;
      height: 100%;
    }

    background-color: #585873;
  }
  padding: 15vh 0;

  @media only screen and (max-width: 766px) {
    left: 0.9375rem;
    width: 0.375rem;
    padding: 23vh 0;
  }
`;

const ScreenContext = React.createContext({});

export const useSectionScroll = () => {
  return useContext(ScreenContext);
};
const ScrollScreen = ({ children, scrollBarColors }) => {
  const [sectionNumber, setSectionNumber] = useState(0);

  const [sectionScroll, setSectionScroll] = useState(0);

  useEffect(() => {
    document.onscroll = () => {
      let c = parseInt(window.scrollY / window.innerHeight);
      setSectionNumber(c);

      let sectionScroll = window.scrollY - c * window.innerHeight;
      setSectionScroll(sectionScroll);
    };
  }, []);

  const getUnscrolled = () => {
    if (window.innerHeight < 766)
      return (
        (1 - sectionScroll / window.innerHeight) * 0.54 * window.innerHeight
      );

    return (1 - sectionScroll / window.innerHeight) * 0.7 * window.innerHeight;
  };

  const color = scrollBarColors[sectionNumber] || scrollBarColors[0];

  return (
    <div>
      <ScreenContext.Provider value={{ sectionNumber, sectionScroll }}>
        {children.map((item, index) => {
          return (
            <motion.div
              animate={{ opacity: sectionNumber === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.div>
          );
        })}
      </ScreenContext.Provider>

      <ScrollBar>
        <motion.div
          style={{ backgroundColor: color.track }}
          animate={{ paddingBottom: getUnscrolled() }}
          transition={{ duration: 0.1 }}
        >
          <div className="scrolled" style={{ backgroundColor: color.scroll }} />
          <div className="unscrolled" />
        </motion.div>
      </ScrollBar>
    </div>
  );
};

export default ScrollScreen;

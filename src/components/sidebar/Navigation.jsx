import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map(({ name }, i) => (
      <MenuItem i={i} key={i} name={name} />
    ))}
  </motion.ul>
);

const itemIds = [
  { name: "Home" },
  { name: "Events" },
  { name: "Committee" },
  { name: "Contact Us" },
];

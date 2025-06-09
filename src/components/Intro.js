import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// AnimatedText component for word-by-word animation
const AnimatedText = ({ text, trigger }) => {
  const words = text.split(" ");

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Intro = () => {
 const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) setStartAnimation(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        backgroundColor: "#0f0f0f",
        color: "#fff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 11%",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Left Box */}
      <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            lineHeight: "1.3",
            marginBottom: "1.5rem",
          }}
        >
          <AnimatedText
            text="Hi, I’m Eshant, a front-end developer based in Haryana, India."
            trigger={startAnimation}
          />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            fontSize: "1.1rem",
            color: "#bbbbbb",
            lineHeight: "1.6",
          }}
        >
          I’ve been building responsive UIs and learning React professionally for about a year now. My focus has been on creating sleek interfaces, writing clean code, and growing my frontend expertise every day.
        </motion.p>
      </div>

      {/* Right Box */}
      <motion.div
        style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", alignItems: "center"
         }}
        initial={{ opacity: 0, x: 50 }}
        animate={startAnimation ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          What I'm confident in:
        </h2>
        <ul
          style={{
            fontSize: "1rem",
            color: "#cccccc",
            lineHeight: "1.8",
            paddingLeft: "1rem",
          }}
        >
          <li>React architecture and reusable components</li>
          <li>State management with Redux Toolkit & Context API</li>
          <li>Tailwind CSS & Material UI for sleek designs</li>
          <li>API integration using RTK Query, Axios, fetch</li>
          <li>Deployment experience with Vercel & GitHub Actions</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Intro;

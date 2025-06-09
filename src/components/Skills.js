import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const skillList = [
  "React", "Angular", "Next.js", "JavaScript", "TypeScript",
  "Node.js", "Express", "MongoDB", "AWS", "Docker", "Git"
];

const generateRandom = (min, max) => Math.random() * (max - min) + min;

const Skills = () => {
   const [ref, inView] = useInView({
    threshold: 0.7, 
    triggerOnce: true
  });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) setStartAnimation(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: "80vh",
        backgroundColor: "#121212",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "end",
        gap: "2rem",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
        //  marginTop: "8vh",
      }}
    > <h2
      style={{
        position: "absolute",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        color: "#ffffff",
        fontSize: "2.5rem",
        fontWeight: "800",
        letterSpacing: "2px",
        textShadow: "0 2px 6px rgba(255, 255, 255, 0.2)",
        margin: 0,
        zIndex: 1,
      }}
    >
      SKILLS
    </h2>
      {skillList.map((skill, index) => {
        const randomRotate = generateRandom(-360, 360);
        const randomX = generateRandom(-40, 40); // Simulate side bounce
        const stiffness = generateRandom(300, 700);
        const damping = generateRandom(10, 25);
        const mass = generateRandom(1.5, 2.5);
        const delay = generateRandom(0, 0.1); // Optional tiny jitter

        return (
          <motion.div
            key={skill}
            initial={{ y: "-100vh", opacity: 0, rotate: randomRotate }}
            animate={
              startAnimation
                ? { y: 0, opacity: 1, rotate: 0, x: randomX }
                : {}
            }
            transition={{
              type: "spring",
              stiffness,
              damping,
              mass,
              delay,
            }}
            style={{
              backgroundColor: "#1f1f1f",
              color: "#fff",
               padding: "0.8rem 1.5rem",
              borderRadius: "12px",
              fontWeight: "bold",
              border: "2px solid #fff",
              fontSize: "1rem",
              minWidth: "100px",
              textAlign: "center",
              boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.1)",
              userSelect: "none",
            }}
          >
            {skill}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Skills;

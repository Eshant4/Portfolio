import { motion, useScroll, animate, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import Pc from "../assets/images/future.webp"

const ScrollAnimateSection = () => {
  const ref = useRef(null);

  // Scroll background animation for TEXT ONLY
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0% 100%", "0% 0%"]);

  // Mouse tracking
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  // Smooth movement
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  // Spotlight background
  const spotlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.45), transparent 8%), 
     linear-gradient(to top, rgb(54, 54, 54) 50%, black 50%)`
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseX.set(x);
    mouseY.set(y);
  };
  const floatX = useMotionValue(0);
  const floatY = useMotionValue(0);

  useEffect(() => {
    let animationX;
    let animationY;

    const animateFloat = () => {
      const randomX = Math.random() * 30 - 15; // ±15px
      const randomY = Math.random() * 30 - 15;

      animationX = animate(floatX, randomX, {
        duration: 3,
        ease: "easeInOut",
      });

      animationY = animate(floatY, randomY, {
        duration: 3,
        ease: "easeInOut",
      });
    };

    // Animate initially and then every 3s
    animateFloat();
    const interval = setInterval(animateFloat, 3000);

    return () => {
      clearInterval(interval);
      animationX?.stop();
      animationY?.stop();
    };
  }, []);
  return (
    <div style={{ height: "100vh", backgroundColor: "#000000" }}>
      <div
        ref={ref}
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem",
        }}
      >
        <motion.div
          onMouseMove={handleMouseMove}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "80%",
            minHeight: "70vh",
            // padding: "2rem",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: spotlight,
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        > {/* Floating PC image */}
          <motion.img
            src={Pc}
            alt="PC"
            style={{
              x: floatX,
              y: floatY,
              position: "absolute",
              width: "380px",
              opacity: 0.6,
              pointerEvents: "none",
            }}
          />
          <motion.h1
            style={{
              fontSize: "8cqw",
              fontWeight: "900",
              backgroundImage:
                "linear-gradient(to top, #fdd6d5 50%, white 50%)",
              backgroundSize: "100% 200%",
              backgroundPosition,
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              margin: 0,
              zIndex: 999
            }}
          >
            ESHANT JANGRA
          </motion.h1>
          <div
            style={{
              position: "absolute",
              bottom: "1.5rem",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2rem",
              zIndex: 2,
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: "1.1rem",
              }}
            >
              Developer
            </span>

            <button
              style={{
                padding: "0.6rem 1.2rem",
                border: "1px solid white",
                borderRadius: "30px",
                background: "transparent",
                color: "white",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Get in touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollAnimateSection;

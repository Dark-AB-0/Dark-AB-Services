import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, className = "", as: Component = "div", ...rest }) {
  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

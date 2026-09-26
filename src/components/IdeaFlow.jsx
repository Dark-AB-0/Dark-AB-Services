import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import "./IdeaFlow.css";

const nodes = [
  { label: "Idea", icon: Lightbulb },
  { label: "Design", icon: PenTool },
  { label: "Code", icon: Code2 },
  { label: "Solution", icon: Rocket },
];

export default function IdeaFlow() {
  return (
    <div className="idea-flow" role="img" aria-label="Flujo: Idea, Design, Code, Solution">
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <div className="idea-flow-row" key={node.label}>
            <motion.div
              className="idea-flow-node"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: "easeOut" }}
            >
              <span className="idea-flow-icon">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="idea-flow-label">{node.label}</span>
            </motion.div>

            {i < nodes.length - 1 && (
              <motion.span
                className="idea-flow-line"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.4, delay: 0.15 * i + 0.25, ease: "easeOut" }}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

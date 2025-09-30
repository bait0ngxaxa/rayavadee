import { motion } from "framer-motion";

interface QuestionTextProps {
  text: string;
}

export const QuestionText = ({ text }: QuestionTextProps) => {
  return (
    <motion.p
      className="text-lg font-semibold mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.p>
  );
};

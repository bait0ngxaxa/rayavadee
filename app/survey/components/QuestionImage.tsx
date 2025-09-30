import { motion } from "framer-motion";

interface QuestionImageProps {
  src: string;
  alt: string;
  questionIndex: number;
}

export const QuestionImage = ({
  src,
  alt,
  questionIndex,
}: QuestionImageProps) => {
  return (
    <motion.img
      key={questionIndex}
      src={src}
      alt={alt}
      className="w-32 h-32 md:w-40 md:h-40 mb-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
  );
};

import { motion } from "framer-motion";

interface MoodImageProps {
  src: string;
  alt: string;
}

export const MoodImage = ({ src, alt }: MoodImageProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-40 h-40 mb-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    />
  );
};

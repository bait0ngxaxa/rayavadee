import { motion } from "framer-motion";

interface MoodDescriptionProps {
  text: string;
  description: string;
  color: string;
  isLoading: boolean;
}

export const MoodDescription = ({
  text,
  description,
  color,
  isLoading,
}: MoodDescriptionProps) => {
  return (
    <motion.p
      className={`text-2xl font-[THSarabun] font-medium ${color} dark:text-white`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {isLoading ? "กำลังโหลด..." : text}
      <br />
      {!isLoading && description}
    </motion.p>
  );
};

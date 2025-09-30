import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QuestionOption } from "../constants";

interface AnswerOptionsProps {
  options: QuestionOption[];
  selectedAnswer: number;
  onAnswer: (value: number) => void;
}

export const AnswerOptions = ({
  options,
  selectedAnswer,
  onAnswer,
}: AnswerOptionsProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {options.map((option) => (
        <motion.div
          key={option.value}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="w-full"
        >
          <Button
            variant={selectedAnswer === option.value ? "default" : "outline"}
            onClick={() => onAnswer(option.value)}
            className="w-full py-3 text-base md:text-lg dark:text-white"
          >
            {option.label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

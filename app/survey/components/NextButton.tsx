import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface NextButtonProps {
  isLastQuestion: boolean;
  isPending: boolean;
  onClick: () => void;
}

export const NextButton = ({
  isLastQuestion,
  isPending,
  onClick,
}: NextButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full mt-6"
    >
      <Button
        disabled={isPending}
        size="lg"
        className="w-full capitalize py-3 text-base justify-center md:text-lg"
        style={{ backgroundColor: "#88b5d9" }}
        onClick={onClick}
      >
        {isPending ? (
          <>
            <RefreshCw className="animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <p>{isLastQuestion ? "ส่งผลลัพธ์" : "ไปต่อ"}</p>
        )}
      </Button>
    </motion.div>
  );
};

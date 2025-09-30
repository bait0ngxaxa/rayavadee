"use client";

import { motion } from "framer-motion";
import { useSurveyResult } from "./hooks/useSurveyResult";
import {
  MoodImage,
  MoodDescription,
  RetakeButton,
  Disclaimer,
} from "./components";
import { useTitle } from "@/hooks/useTitle";


const ResultPage = () => {
  useTitle("Result");
  const { totalScore, mood, loading } = useSurveyResult();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-center text-lg text-gray-700 dark:text-gray-300">
          กำลังโหลดผลลัพธ์...
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-lg mx-auto text-center p-6 flex flex-col items-center">
      <motion.h1
        className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ผลลัพธ์ของคุณ
      </motion.h1>

      <MoodImage src={mood.image} alt="Mood Status" />

      <MoodDescription
        text={mood.text}
        description={mood.describe}
        color={mood.color}
        isLoading={totalScore === null}
      />

      <RetakeButton />
      
      <Disclaimer />
    </section>
  );
};

export default ResultPage;

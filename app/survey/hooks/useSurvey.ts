import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createSurveyAction } from "@/actions/actions";
import { SURVEY_QUESTIONS } from "../constants";

export const useSurvey = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(SURVEY_QUESTIONS.length).fill(-1)
  );
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    const checkUserProfile = async () => {
      try {
        const response = await fetch("/api/getUserProfile");
        const data = await response.json();

        if (!data.hasProfile) {
          router.push("/profile/create");
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการตรวจสอบผู้ใช้:", error);
        router.push("/");
      }
    };

    checkUserProfile();
    setCurrentQuestion(0);
    setAnswers(Array(SURVEY_QUESTIONS.length).fill(-1));
  }, [router]);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
  };

  const handleNext = async () => {
    if (answers[currentQuestion] === -1) {
      alert("กรุณาเลือกคำตอบก่อนกดไปต่อ");
      return;
    }

    if (currentQuestion < SURVEY_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      startTransition(async () => {
        await createSurveyAction(answers);
        router.push("/result");
      });
    }
  };

  const isLastQuestion = currentQuestion === SURVEY_QUESTIONS.length - 1;
  const currentAnswer = answers[currentQuestion];

  return {
    currentQuestion,
    answers,
    pending,
    handleAnswer,
    handleNext,
    isLastQuestion,
    currentAnswer,
  };
};

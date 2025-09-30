"use client";

import { useSurvey } from "./hooks/useSurvey";
import { SURVEY_QUESTIONS } from "./constants";
import {
  QuestionImage,
  QuestionText,
  AnswerOptions,
  NextButton,
} from "./components";
import { useTitle } from "@/hooks/useTitle";

const SurveyPage = () => {
  useTitle("Survey");
  const {
    currentQuestion,
    currentAnswer,
    pending,
    handleAnswer,
    handleNext,
    isLastQuestion,
  } = useSurvey();

  const question = SURVEY_QUESTIONS[currentQuestion];

  return (
    <section className="max-w-md mx-auto min-h-screen flex flex-col items-center text-center p-6">
      <QuestionImage
        src={question.image}
        alt="Mood Status"
        questionIndex={currentQuestion}
      />

      <QuestionText text={question.text} />

      <AnswerOptions
        options={question.options}
        selectedAnswer={currentAnswer}
        onAnswer={handleAnswer}
      />

      <NextButton
        isLastQuestion={isLastQuestion}
        isPending={pending}
        onClick={handleNext}
      />
    </section>
  );
};

export default SurveyPage;

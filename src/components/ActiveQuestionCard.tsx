import React from "react";
import { SingleQuestion } from "../pages";

type ActiveQuestionCard = {
  question: SingleQuestion | null;
  topic: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  completeQuestion: (question: SingleQuestion, topic: string) => void;
};

export const ActiveQuestionCard: React.FC<ActiveQuestionCard> = (props) => {
  const { question, topic, setActive, completeQuestion } = props;
  const { name, value, isComplete } = question || {};

  const handleBack = () => {
    setActive(false);
  };

  const handleComplete = () => {
    completeQuestion(question!, topic);
    setActive(false);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <button onClick={handleBack} className="flex justify-start">
        BACK
      </button>
      <button onClick={handleComplete}>COMPLETE</button>
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-shadow-md text-center text-[70px] font-bold tracking-wider">
          {name?.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

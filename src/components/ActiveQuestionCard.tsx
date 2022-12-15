import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { SingleQuestion } from "../pages/play";

type ActiveQuestionCard = {
  question: SingleQuestion | null;
  topic: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  completeQuestion: (question: SingleQuestion, topic: string) => void;
};

const audioDD = new Audio("/sounds/daily-double.mp3");
const buttonClass =
  "flex justify-start rounded-lg border bg-gray-700 px-4 py-2";

export const ActiveQuestionCard: React.FC<ActiveQuestionCard> = (props) => {
  const { question, topic, setActive, completeQuestion } = props;
  const { name, value, isComplete, isDailyDouble } = question || {};
  const [isDaily, setIsDaily] = useState<boolean>(isDailyDouble ?? false);

  const handleBack = () => {
    setActive(false);
  };

  const handleComplete = () => {
    completeQuestion(question!, topic);
    setActive(false);
  };

  useEffect(() => {
    if (isDaily) {
      audioDD.play();
    }
  }, [isDaily]);

  return (
    <div className="flex h-full w-full flex-col">
      {isDaily && (
        <div className="" onClick={() => setIsDaily(false)}>
          <Image src="/DailyDouble.jpg" alt="daily double pic" fill />
        </div>
      )}

      {!isDaily && (
        <>
          <div className="absolute flex space-x-2 p-2">
            <button onClick={handleBack} className={buttonClass}>
              Back
            </button>
            <button onClick={handleComplete} className={buttonClass}>
              Complete
            </button>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-shadow-md text-center text-[70px] font-bold tracking-wider">
              {name?.toUpperCase()}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

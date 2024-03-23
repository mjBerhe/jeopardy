import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { SingleQuestion } from "../pages/play";

type ActiveQuestionCard = {
  question: SingleQuestion | null;
  topic: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  completeQuestion: (question: SingleQuestion, topic: string) => void;
};

const buttonClass =
  "flex justify-start rounded-lg border bg-gray-700 px-4 py-2";

export const ActiveQuestionCard: React.FC<ActiveQuestionCard> = (props) => {
  const { question, topic, setActive, completeQuestion } = props;
  const { name, value, isComplete, isDailyDouble, isGTG, isGame } =
    question || {};
  const [isDaily, setIsDaily] = useState<boolean>(isDailyDouble ?? false);

  const handleBack = () => {
    setActive(false);
  };

  const handleComplete = () => {
    completeQuestion(question!, topic);
    setActive(false);
  };

  const audio: HTMLAudioElement = new Audio("/sounds/daily-double.mp3");

  useEffect(() => {
    if (isDaily && audio) {
      audio.play();
    }
  }, [isDaily]);

  return (
    <div className="flex h-full w-full flex-col">
      {isDaily ? (
        <div className="" onClick={() => setIsDaily(false)}>
          <Image src="/DailyDouble.jpg" alt="daily double pic" fill />
        </div>
      ) : isGTG ? (
        <div>GUESS THE GUESS!</div>
      ) : isGame ? (
        <div>GAME TIME!</div>
      ) : (
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
            <span className="text-shadow-md whitespace-pre-line text-center text-[70px] font-bold tracking-wider">
              {name?.toUpperCase()}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

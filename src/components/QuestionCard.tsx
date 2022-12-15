import React from "react";
import classNames from "classnames";
import type { SingleQuestion } from "../pages/play";

type QuestionCard = SingleQuestion & {
  topic: string;
  className?: string;
  setActive: (question: SingleQuestion, topic: string) => void;
};

export const QuestionCard: React.FC<QuestionCard> = (props) => {
  const {
    name,
    value,
    topic,
    isComplete,
    isDailyDouble,
    className,
    setActive,
  } = props;

  const handleActive = () => {
    setActive(
      {
        name: name,
        value: value,
        isComplete: isComplete,
        isDailyDouble: isDailyDouble,
      },
      topic
    );
  };

  return (
    <>
      {isComplete && (
        <div className="text-shadow-md flex h-full cursor-pointer items-center justify-center border-2 border-black text-[50px] font-bold text-[#d69f4c]"></div>
      )}
      {!isComplete && (
        <div
          onClick={handleActive}
          className={classNames(
            className,
            "text-shadow-md flex h-full cursor-pointer items-center justify-center border-2 border-black text-[70px] font-bold text-[#d69f4c]"
          )}
        >
          {value}
        </div>
      )}
    </>
  );
};

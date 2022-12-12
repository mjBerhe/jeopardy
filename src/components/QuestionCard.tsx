import React from "react";
import classNames from "classnames";
import type { SingleQuestion } from "../pages";

type QuestionCard = {
  name: string;
  value?: string;
  topic: string;
  className?: string;
  setActive: (question: SingleQuestion, topic: string) => void;
  isComplete?: boolean;
};

export const QuestionCard: React.FC<QuestionCard> = (props) => {
  const { name, value, topic, isComplete, className, setActive } = props;

  const handleActive = () => {
    setActive({ name: name, value: value }, topic);
  };

  return (
    <>
      {isComplete && (
        <div className="text-shadow-md flex cursor-pointer items-center justify-center border-2 border-black text-[50px] font-bold text-[#d69f4c]"></div>
      )}
      {!isComplete && (
        <div
          onClick={handleActive}
          className={classNames(
            className,
            "text-shadow-md flex cursor-pointer items-center justify-center border-2 border-black text-[50px] font-bold text-[#d69f4c]"
          )}
        >
          {value}
        </div>
      )}
    </>
  );
};

import React from "react";
import classNames from "classnames";

type CategoryCard = {
  title: string;
  index?: number;
  className?: string;
};

export const CategoryCard: React.FC<CategoryCard> = (props) => {
  const { title, index, className } = props;
  return (
    <div
      className={classNames(
        className,
        "text-shadow flex h-full min-h-[135px] items-center justify-center border-4 border-t-0 border-black px-6 text-center text-[35px] font-bold",
        index === 0 && "border-l-2",
        index === 5 && "border-r-2"
      )}
    >
      {title}
    </div>
  );
};

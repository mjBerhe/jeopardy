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
        "text-shadow flex min-h-[100px] items-center justify-center border-4 border-t-0 border-black px-2 text-center text-[30px] font-bold",
        index === 0 && "border-l-2",
        index === 5 && "border-r-2"
      )}
    >
      {title}
    </div>
  );
};

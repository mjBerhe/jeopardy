import React from "react";
import classNames from "classnames";

type CategoryCard = {
  title: string;
  className?: string;
};

export const CategoryCard: React.FC<CategoryCard> = (props) => {
  const { title, className } = props;
  return (
    <div
      className={classNames(
        className,
        "text-shadow flex min-h-[100px] items-center justify-center border text-[30px] font-bold"
      )}
    >
      {title}
    </div>
  );
};

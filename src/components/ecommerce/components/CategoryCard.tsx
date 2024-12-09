import * as React from "react";
import { CategoryCardProps } from "../types";

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  label,
  height = "500px",
}) => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div
        className="flex overflow-hidden relative flex-col px-px w-full"
        style={{ minHeight: height }}
      >
        <img
          loading="lazy"
          src={image}
          className="object-cover absolute inset-0 size-full"
          alt={`${label} category`}
        />
        <div
          className="flex overflow-hidden relative flex-col items-start px-8 pt-96 pb-7"
          style={{ minHeight: height }}
        >
          <img
            loading="lazy"
            src={image}
            className="object-cover absolute inset-0 size-full"
            alt=""
          />
          <div className="overflow-hidden relative px-16 py-3 bg-white max-md:px-5">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

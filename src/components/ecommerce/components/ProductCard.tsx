import * as React from "react";
import { ProductCardProps } from "../types";

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  department,
  price,
  colors,
}) => {
  return (
    <div className="flex flex-col items-center w-[238px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white w-[239px]">
        <div className="flex overflow-hidden flex-col w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfc9318671fb7b2d2b03c1e419408e1bdbcc0fc4efac0f8b3062394a099f917f?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5"
            className="object-contain w-full aspect-[0.56]"
            alt={`${title} product image`}
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
          <h3 className="text-base font-bold tracking-normal text-center text-slate-800">
            {title}
          </h3>
          <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
            {department}
          </div>
          <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
            <div className="text-stone-300 w-[52px]">{price.original}</div>
            <div className="text-teal-700 w-[45px]">{price.discounted}</div>
          </div>
          <div className="flex gap-1.5 items-center mt-2.5">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-${color} fill-${color}`}
                role="button"
                aria-label={`Select ${color} color`}
                tabIndex={0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

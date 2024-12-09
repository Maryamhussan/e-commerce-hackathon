import * as React from "react";
import { FeaturedPostProps } from "../types";

export const FeaturedPost: React.FC<FeaturedPostProps> = ({
  image,
  isNew,
  tags,
  title,
  description,
  date,
  comments,
}) => {
  return (
    <div className="flex flex-col items-center min-w-[240px] w-[328px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
        <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
          <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
            <img
              loading="lazy"
              src={image}
              className="object-cover absolute inset-0 size-full"
              alt={title}
            />
            {isNew && (
              <div className="overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5">
                NEW
              </div>
            )}
          </div>
        </div>
        <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
          <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? "self-stretch my-auto text-blue-300"
                    : "self-stretch my-auto"
                }
              >
                {tag}
              </div>
            ))}
          </div>
          <h3 className="mt-2.5 text-xl leading-8 text-slate-800">{title}</h3>
          <p className="mt-2.5 text-sm leading-5">{description}</p>
          <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5590297589ae98b059c6c4e42748a7930c6e386c76ee0a5c9fae71032eac79d2?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt=""
              />
              <div className="self-stretch my-auto">{date}</div>
            </div>
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89734c827bf72727b80101f6b931f285216928bcad29abe5be51e23e7823d993?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
                alt=""
              />
              <div className="self-stretch my-auto">{comments} comments</div>
            </div>
          </div>
          <button className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6">
            <span className="self-stretch my-auto">Learn More</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fada3bd05bb4dd0460ecd7a805c40147c8349c3de7607f96c83d0e930f345d4a?placeholderIfAbsent=true&apiKey=9b01f9d37b0d4c44b273d9df28be27d5"
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

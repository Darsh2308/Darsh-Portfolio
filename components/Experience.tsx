import React from "react";
import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={((card.id * 3333) % 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-start p-3 py-6 md:p-5 lg:p-10 gap-4">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={128}
                height={128}
                className="lg:w-24 md:w-20 w-16 shrink-0"
              />
              <div className="lg:ms-3 flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <span className="text-sm text-purple font-semibold whitespace-nowrap">
                    {card.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#C1C2D3]">
                  <span className="font-semibold text-white">{card.company}</span>
                  <span>·</span>
                  <span>{card.location}</span>
                </div>
                <p className="text-start text-white-100 mt-1 font-semibold leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

import { CharacterCardProps } from "@/types/character";
import Image from "next/image";
import React from "react";

const CharacterCard: React.FC<CharacterCardProps> = ({
  image,
  name,
  personal,
}) => {
  return (
    <div className="rounded-md bg-darkSecondary">
      <div className="h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={50}
          className="h-full w-full rounded-t-md object-cover object-center"
        />
      </div>
      <div className="px-4 py-2">
        <h2 className="title-font mt-5 text-lg font-medium text-white">
          {name}
        </h2>
        {personal && (
          <p className="mt-2 text-xs leading-relaxed text-white md:text-sm">
            {personal.clan}
          </p>
        )}

        <a className="mt-3 inline-flex cursor-pointer items-center text-primary underline">
          Read More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
export default CharacterCard;

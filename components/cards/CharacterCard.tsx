import { CharacterCardProps } from "@/types/character";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const CharacterCard: React.FC<CharacterCardProps> = ({ image, name, id }) => {
  return (
    <div className="group rounded-md bg-darkSecondary">
      <div className="h-64 overflow-hidden transition-all group-hover:rotate-3 group-hover:scale-105">
        <Image
          src={image}
          alt={name}
          width={500}
          height={50}
          className="h-full w-full rounded-md object-cover object-center"
        />
      </div>
      <div className="px-4 py-2">
        <Link
          href={`${name}/${id}`}
          className="title-font mt-5 cursor-pointer text-lg font-medium text-primary underline"
        >
          {name}
        </Link>
      </div>
    </div>
  );
};
export default CharacterCard;

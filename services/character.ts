import { Character } from "@/types/character";

export const getAllCharacters = async (): Promise<Character> => {
  const response = await fetch(`${process.env.CHARACTERS}`);
  const data: Character = await response.json();
  return data;
};

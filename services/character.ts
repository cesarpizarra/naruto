import axios from "axios";
import { Character } from "@/types/character";
import { API_URL } from "@/api";

export const getAllCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get(`${API_URL}/characters`);
    return response.data["characters"];
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch characters");
  }
};

export const getAllAkatsuki = async (): Promise<Character[]> => {
  try {
    const response = await axios.get(`${API_URL}/akatsuki`);
    return response.data["akatsuki"];
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch akatsuki");
  }
};

export const getAllKara = async (): Promise<Character[]> => {
  try {
    const response = await axios.get(`${API_URL}/kara`);
    return response.data["kara"];
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch kara");
  }
};

import axios from "axios";
import { Tailed } from "@/types/tailed";
import { API_URL } from "@/api";
export const getAllTailed = async (): Promise<Tailed[]> => {
  try {
    const response = await axios.get(`${API_URL}/tailed-beasts`);
    return response.data["tailed-beasts"];
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch tailed beasts");
  }
};

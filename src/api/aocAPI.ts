import axios from "axios";
import { config } from "../config";

const API_BASE = config.apiBaseUrl;

export const fetchPuzzle = async (year: string, day: string): Promise<any> => {
  const res = await axios.get(`${API_BASE}/puzzle/fetch`, {
    params: { year, day },
  });
  return res.data;
};

export const explainPuzzle = async (puzzleText: string): Promise<any> => {
  const res = await axios.post(`${API_BASE}/puzzle/explain`, {
    puzzle: puzzleText,
  });
  return res.data;
};

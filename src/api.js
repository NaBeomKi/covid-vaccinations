import axios from "axios";
import "dotenv/config";

const ALL_CITY = 18;
const TODAY = `${new Date().toISOString().slice(0, 10)} 00:00:00`;

const api = axios.create({
  baseURL: "https://api.odcloud.kr/api",
  params: {
    serviceKey: process.env.REACT_APP_API_KEY,
  },
});

export const vaccineApi = {
  todayStat: () =>
    api.get("/15077756/v1/vaccine-stat", {
      params: { perPage: ALL_CITY, "cond[baseDate::EQ]": TODAY },
    }),
};

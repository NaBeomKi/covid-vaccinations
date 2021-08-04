import axios from "axios";
import "dotenv/config";

const api = axios.create({
  baseURL: "https://api.odcloud.kr/api",
  params: {
    serviceKey: process.env.REACT_APP_API_KEY,
  },
});

export const vaccineApi = {
  stat: (sido, date) =>
    api.get("/15077756/v1/vaccine-stat", {
      params: {
        perPage: 99999,
        "cond[sido::EQ]": sido,
        "cond[baseDate::GTE]": date,
      },
    }),
};

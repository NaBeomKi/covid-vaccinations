import { useEffect, useState } from "react";

const useStatistics = (dataList) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const formatData = {
      labels: dataList.map((item) => item.baseDate.slice(0, 10)),
      datasets: [
        {
          label: "1차 접종",
          data: dataList.map((item) => item.totalFirstCnt),
          borderColor: "#00cec9",
          backgroundColor: "#00cec9",
        },
        {
          label: "2차 접종",
          data: dataList.map((item) => item.totalSecondCnt),
          borderColor: "#6c5ce7",
          backgroundColor: "#6c5ce7",
        },
      ],
    };

    setData(formatData);
  }, [dataList]);

  return data;
};

export default useStatistics;

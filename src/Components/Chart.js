import React from "react";
import { Line } from "react-chartjs-2";
import { ko } from "date-fns/locale";
import "chartjs-adapter-date-fns";
import Section from "./Section";
import useStatistics from "../hooks/useStatistics";

const Chart = ({ loading, data }) => {
  const chartData = useStatistics(data);

  return (
    <Section>
      {loading ? (
        <p>📡 Loading</p>
      ) : (
        <Line
          data={chartData}
          options={{
            interaction: {
              intersect: false,
              mode: "index",
            },
            scales: {
              y: {
                beginAtZero: true,
              },
              x: {
                adapters: {
                  date: {
                    locale: ko,
                  },
                },
                type: "time",
                time: {
                  stepSize: 30,
                  unit: "day",
                  displayFormats: {
                    day: "yyyy-MM-dd",
                  },
                },
                grid: {
                  display: false,
                },
                ticks: {
                  major: {
                    enabled: true,
                  },
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: "전체 접종 누적 통계",
                align: "start",
                padding: 15,
                font: {
                  size: 20,
                },
              },
              legend: {
                labels: {
                  usePointStyle: true,
                },
              },
              tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ccc",
                borderWidth: 1,
                titleColor: "#999",
                titleFont: {
                  size: 15,
                },
                titleMarginBottom: 10,
                bodyColor: "#666",
                bodyFont: {
                  size: 15,
                },
                padding: 10,
              },
            },
          }}
        />
      )}
    </Section>
  );
};

export default Chart;

import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Section from "./Section";

const Chart = ({ loading, data }) => {
  return (
    <Section>
      {loading ? (
        <p>📡 Loading</p>
      ) : (
        <Line
          data={{
            datasets: [
              {
                label: "Bar Dataset",
                data: [10, 20, 30, 40],
                // this dataset is drawn below
                order: 2,
              },
              {
                label: "Line Dataset",
                data: [10, 10, 10, 10],
                // this dataset is drawn on top
                order: 1,
              },
            ],
            labels: ["January", "February", "March", "April"],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      )}
    </Section>
  );
};

export default Chart;

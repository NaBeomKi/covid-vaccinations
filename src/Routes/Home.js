import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { vaccineApi } from "../api";
import Chart from "../Components/Chart";
import Select from "../Components/Select";
import TodayStatistics from "../Components/TodayStatistics";
import { SIDO } from "../constants";

const Container = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
`;

const Home = () => {
  const [stat, setStat] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStat = async () => {
    try {
      const {
        data: { data },
      } = await vaccineApi.stat("전국");
      setStat(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStat();
  }, []);

  return (
    <Container>
      <Title>💉Covid-19 Vaccinations📈</Title>
      <Select list={SIDO} />
      <TodayStatistics loading={loading} today={stat[stat.length - 1]} />
      <Chart loading={loading} data={stat} />
    </Container>
  );
};

export default Home;

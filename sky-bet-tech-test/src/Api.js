import axios from "axios";

const BASE_URL = "http://localhost:8888";

export const getLiveGames = async () => {
  const { data } = await axios.get(`${BASE_URL}/football/live`);
  return data;
};

export const getEventMarkets = async eventId => {
  const { data } = await axios.get(`${BASE_URL}/sportsbook/event/${eventId}`);
  return data;
};

export const getMarketOdds = async marketId => {
  const { data } = await axios.get(`${BASE_URL}/sportsbook/market/${marketId}`);
  return data;
};

export const getOutcome = async outcomeId => {
  const { data } = await axios.get(
    `${BASE_URL}/sportsbook/outcome/${outcomeId}`
  );
  return data;
};

const BASE_URL = "https://api.bitpin.org";
const API_V1 = BASE_URL + "/v1/";
const API_V2 = BASE_URL + "/v2/";

const endpoints = {
  markets: API_V1 + "mkt/markets/",
  activeOrders: (id: string) => API_V2 + `mth/actives/${id}/`,
  matches: (id: string) => API_V1 + `mth/matches/${id}/`,
};

export default endpoints;

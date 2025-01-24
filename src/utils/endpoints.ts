const endpoints = {
  markets: "mkt/markets/",
  marketActives: (id: string) => `${id}/?type=sell`,
};

export default endpoints;

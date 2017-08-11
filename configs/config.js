const Configs = {
  checkApiInterval: (60 * 1000),
  optionsMatch: {
    method: 'GET',
    url: 'https://www.teamplay.com.br/partidas/json/',
    headers:
    {
      'cache-control': 'no-cache',
    },
  },
};

module.exports = Configs;

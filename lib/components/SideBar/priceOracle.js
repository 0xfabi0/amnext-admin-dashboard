import axios from "axios";

const API_URL =
  "https://api.nomics.com/v1/currencies/ticker?key=ba483c1d92c9d4b20b135d9a0bedd219a27212af&ids=BNB,USDT,CAKE";

const AMC_ADDRESS = "0x852E3A65d0cD8561eDc0927012412D60AAAa9a4C";

export const DEFAULT_ORACLE = {
  BNB: 0,
  USDT: 0,
  CAKE: 0,
  AMC: 0,
};

export const fetchPrice = (setPriceOracle) => {
  const requestOne = axios.get(API_URL);
  const requestTwo = axios.get(
    `https://api.pancakeswap.info/api/v2/tokens/${AMC_ADDRESS}`
  );
  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        let oracle = {};
        let data = responses[0].data;
        data.forEach((d) => {
          oracle[d.id] = parseFloat(d.price);
        });
        oracle["AMC"] = parseFloat(responses[1].data.data.price);
        setPriceOracle(oracle);
        // use/access the results
      })
    )
    .catch((errors) => {
      setPriceOracle(DEFAULT_ORACLE);
    });
};

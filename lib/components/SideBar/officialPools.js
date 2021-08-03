import icon1 from "../../../assets/images/pools/icon1.svg";
import icon2 from "../../../assets/images/pools/icon2.svg";
import icon3 from "../../../assets/images/pools/icon3.svg";
import icon4 from "../../../assets/images/pools/icon4.svg";

export const poolNames = {
  '0x5f7ab65486f593e4679369ef453cfbbc686a46e4': 'AMC',
  '0x6192ffb5ccdf8ab82ee1d7cd9015c47e8e26ae4d': 'CAKE',
  '0xd0eeaa18e7b703cffd1e403294605028e5443b36': 'BNB',
  '0xd2abaa242faeb0e3b82a767df18c7b709e4844ee': 'USDT',
  '0x7790cb49b173285921ba6bba53f48ade7f619f07': 'AMC',
  '0x27626623cec5b4e3d46ceed9caee63631c395167': 'CAKE',
  '0xbccd4a3c8df54c887e5742fba5dc2a6f0c701f59': 'BNB',
  '0xfe0431fcab3244b5c2d906868cda4dc85d99899a': 'USDT',
}

export const poolData = {
  AMC : {
    name: "AMC Pool",
    period: "Daily",
    icon: icon1,
  },
  BNB : {
    name: "BNB Pool",
    period: "Weekly",
    icon: icon2,
  },
  CAKE : {
    name: "CAKE Pool",
    period: "Daily",
    icon: icon3,
  },
  USDT : {
    name: "USDT Pool",
    period: "Weekly",
    icon: icon4,
  },
}

export const pools = {
  56: {
    AMC : '0x5f7ab65486f593e4679369ef453cfbbc686a46e4',
    CAKE : '0x6192ffb5ccdf8ab82ee1d7cd9015c47e8e26ae4d',
    BNB : '0xd0eeaa18e7b703cffd1e403294605028e5443b36',
    USDT : '0xd2abaa242faeb0e3b82a767df18c7b709e4844ee',
  },
  97: {
    AMC : '0x7790cb49b173285921ba6bba53f48ade7f619f07',
    CAKE : '0x27626623cec5b4e3d46ceed9caee63631c395167',
    BNB : '0xbccd4a3c8df54c887e5742fba5dc2a6f0c701f59',
    USDT : '0xfe0431fcab3244b5c2d906868cda4dc85d99899a',
  }
}

export const chainName = {
  56: 'bsc',
  97: 'bsc-testnet',
}

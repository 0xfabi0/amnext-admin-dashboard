import React, { useRef, useState, useEffect, Fragment } from "react";
import NavLink from "../NavLink";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { fetchPrice, DEFAULT_ORACLE } from "./priceOracle";

import {useWalletNetwork} from "../../hooks/useWalletNetwork";
import {pools, chainName} from "./officialPools";

// Images
import giftImg from "../../../assets/images/sidebar/gift.svg";
import exchangeImg from "../../../assets/images/sidebar/exchange.svg";
import flagImg from "../../../assets/images/sidebar/flag.svg";
import binbridgeImg from "../../../assets/images/sidebar/binbridge.svg";
import chartImg from "../../../assets/images/sidebar/chart.svg";

import docsImg from "../../../assets/images/sidebar/social/docs.svg";
import twitterImg from "../../../assets/images/sidebar/social/twitter.svg";
import telegramImg from "../../../assets/images/sidebar/social/telegram.svg";
import coinmarketcapImg from "../../../assets/images/sidebar/social/coinmarketcap.svg";
import coingeckoImg from "../../../assets/images/sidebar/social/coingecko.svg";
import sidebarBottomLogo from "../../../assets/images/sidebar/sidebar-bottom-logo.svg";
import sidebarBottomLogoMobile from "../../../assets/images/sidebar/sidebar-bottom-logo-mobile.svg";
import audits from "../../../assets/images/sidebar/audits.svg";

const displayData = (data) => {
  // Convert to 0 if NaN value
  data = data || "0";
  if (parseFloat(data) === 0) return data;

  const temp = data.toString();
  const dd = temp.match(/^-?\d+(?:\.\d{0,4})?/)[0];

  return parseFloat(dd).toString();
};

function SideBar({toggleClick}) {
  const { walletChainId } = useWalletNetwork()
  const chainId = 97 === walletChainId ? 97: 56
  const language = ["EN"];

  const [isSmall, setIsSmall] = useState(false);
  const [priceOracle, setPriceOracle] = useState(DEFAULT_ORACLE);

  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.classList.contains('sidebarToggle')) {
      toggleClick(true);
    }
  }

  useEffect(() => {
    fetchPrice(setPriceOracle);
  }, []);

  useEffect(() => {
    setIsSmall(window.innerWidth < 1200)
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);
  return (
    <Fragment>
      <div ref={sidebarRef} className="sidebar left">
        <div className="sidebar-upper">
          <ul id="sidebar-menu-items" className="list-sidebar bg-defoult">
            <li>
              <a target='_blank' href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x852E3A65d0cD8561eDc0927012412D60AAAa9a4C">
                <img src={exchangeImg} alt="" />
                <span className="nav-label">Swap AMC</span>
              </a>
            </li>
            <li>
              <a
                to="#"
                data-toggle="collapse"
                data-target="#products"
                className="collapsed active justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <img src={giftImg} alt="" />
                  <span className="nav-label">No-Loss Lottery</span>
                  <span className="fa fa-chevron-up pull-right" />
                </div>
                <span className="eranAmcbtn"> Earn AMC</span>
              </a>

              <ul
                className="sub-menu collapse"
                id="products"
                data-parent="#sidebar-menu-items"
              >
                <li>
                  <NavLink exact={true} href="/"><a>Prize Pools</a></NavLink>
                </li>
                <li>
                  <NavLink href={'/pools/' + chainName[chainId] + '/'+ pools[chainId]['AMC'] + '/home'}><a>AMC Pool</a></NavLink>
                </li>
                <li>
                  <NavLink href={'/pools/' + chainName[chainId] + '/'+ pools[chainId]['CAKE'] + '/home'}><a>CAKE Pool</a></NavLink>
                </li>
                <li>
                  <NavLink href={'/pools/' + chainName[chainId] + '/'+ pools[chainId]['BNB'] + '/home'}><a>BNB Pool</a></NavLink>
                </li>
                <li>
                  <NavLink href={'/pools/' + chainName[chainId] + '/'+ pools[chainId]['USDT'] + '/home'}><a>USDT Pool</a></NavLink>
                </li>
              </ul>
            </li>

            <li>
              <a
                to="#"
                data-toggle="collapse"
                data-target="#" // TODO, #products1"
                className="collapsed active justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <img src={flagImg} alt="" />
                  <span className="nav-label text-secondary">Lifetime Tickets</span>
                  {/* <span className="fa fa-chevron-up pull-right" /> */}
                </div>
                <span className="soonBg"> Soon</span>
              </a>
              <ul
                className="sub-menu collapse"
                id="products1"
                data-parent="#sidebar-menu-items"
              >
                <li className="active">
                  <a to="/">Home</a>
                </li>
                <li>
                  <a to="/dashboard">My Accounts</a>
                </li>
                <li>
                  <a to="/referralpartners">Referral Partners</a>
                </li>
                <li>
                  <a to="/Statistics"> Statistics </a>
                </li>
              </ul>
            </li>

            <li>
              <a target='_blank' href="https://app.amnext.io">
                <img src={chartImg} alt="" />
                <span className="nav-label">AMC Machine</span>
              </a>
            </li>
            <li>
              <a target='_blank' href="https://www.binance.org/en/bridge">
                <img src={binbridgeImg} alt="" />
                <span className="nav-label">Binance Bridge</span>
              </a>
            </li>
            <li>
              <a
                to="#"
                data-toggle="collapse"
                data-target="#audits"
                className="collapsed active"
              >
                <img src={audits} alt="" />
                <span className="nav-label">Audits</span>
                <span className="fa fa-chevron-up pull-right" />
              </a>
              <ul
                className="sub-menu collapse"
                id="audits"
                data-parent="#sidebar-menu-items"
              >
                <li>
                  <a target="_blank" href="https://solidity.finance/audits/Amnext-Lottery/" rel="noreferrer">
                    Solidity Finance
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="sidebar-bottom">
          <div className="row">
            {isSmall ? (
              <img
                src={sidebarBottomLogoMobile}
                className="img-fluid logo"
                alt=""
              />
            ) : (
              <img src={sidebarBottomLogo} className="img-fluid logo" alt="" />
            )}
            <div className="rate">${displayData(priceOracle["AMC"])}</div>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                EN
              </DropdownToggle>
              <DropdownMenu right>
                {language.map((el) => (
                  <DropdownItem key={el}>{el}</DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <div className="social-media-div">
            <a href="https://docs.amnext.io/" target="_blank">
              <img src={docsImg} className="mr-2" alt="" />
            </a>
            <a href="https://t.me/amnext_official" target="_blank">
              <img src={telegramImg} className="mr-2" alt="" />
            </a>
            <a href="https://twitter.com/OfficialAmnext" target="_blank">
              <img src={twitterImg} className="mr-2" alt="" />
            </a>
            <a href="https://coinmarketcap.com/currencies/amnext/" target="_blank">
              <img src={coinmarketcapImg} className="mr-2" alt="" />
            </a>
            <a href="https://coingecko.com/en/coins/amnext" target="_blank">
              <img src={coingeckoImg} className="mr-2" alt="" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SideBar;

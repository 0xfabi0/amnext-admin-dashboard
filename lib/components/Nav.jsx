import React from 'react'
import Link from 'next/link'

import { ConnectWalletButton } from 'lib/components/ConnectWalletButton'
import { WalletInfo } from 'lib/components/WalletInfo'
import { useWalletNetwork } from 'lib/hooks/useWalletNetwork'

import PoolLogo from 'assets/images/amnext-logo.svg'
import PoolPLogo from 'assets/images/amnext-logo-mobile.svg'
import hamburgerExpanded from "assets/images/sidebar/hamburger_expanded.svg";
import hamburgerCollapsed from "assets/images/sidebar/hamburger_collapsed.svg";

export const Nav = (props) => {
  const { walletConnected } = useWalletNetwork()

  return (
    <>
      <div className='nav-and-footer-container'>
        <nav className='lg:px-0 nav-min-height flex items-center h-full justify-between flex-wrap'>
          <div className='w-2/5 lg:w-1/5 justify-start h-full flex items-center truncate'>
            {props.sideMenu ? (
              <img
                src={hamburgerExpanded}
                className="menu-return sidebarToggle"
                alt=""
                onClick={e => props.toggleClick(true)}
              />
            ) : (
              <img
                src={hamburgerCollapsed}
                className="menu-return sidebarToggle"
                alt=""
                onClick={e => props.toggleClick(false)}
              />
            )}
            <Link href='/' as='/'>
              <a title={'Back to home'} className='flex items-center border-0'>
                <img
                  alt={`PoolTogether Logo`}
                  src={PoolLogo}
                  className='mr-auto lg:m-0 w-44 hidden sm:block'
                />
                <div className="version hidden sm:block">v1.0</div>
                <img
                  alt={`PoolTogether P Logo`}
                  src={PoolPLogo}
                  className='mr-auto lg:m-0 w-8 block sm:hidden'
                />
              </a>
            </Link>
          </div>

          <div className='w-1/5 lg:w-3/5 flex justify-center h-full text-center lg:text-right'>
            &nbsp;
          </div>

          <div className='w-2/5 lg:w-1/5 flex justify-end h-full items-center text-right'>
            <div className='mt-0 sm:mt-0 text-xxs sm:text-xs tracking-wide text-right spinner-hidden'>
              {walletConnected ? <WalletInfo {...props} /> : <ConnectWalletButton size='sm' />}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

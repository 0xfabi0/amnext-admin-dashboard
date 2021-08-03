import React, { useEffect } from 'react'
import NavLink from "./NavLink";
import {usePrizePoolContracts} from "../hooks/usePrizePoolContracts";
import {poolData, poolNames} from "./SideBar/officialPools";

export function PoolHeader() {
  const { data: prizePoolContracts } = usePrizePoolContracts()
  const poolName = poolNames[prizePoolContracts.prizePool.address];
  const pool = poolData[poolName];

  if (!pool) return '';

  return (
    <div className="pool_header mb-4 py-3 px-3 sm:py-6 sm:px-12 mb-4">
      <h1>
        <img src={pool.icon} /> {pool?.name ?? ""}{" "}
        <span className="daily_breadcum">
                          {" "}
          {pool?.period ?? ""}
                        </span>
      </h1>
      <div className="bredcum_valus">
        <ul>
          <li><NavLink href="/"><a className='text-highlight-3'>Prize Pools</a></NavLink></li>
          <li> ></li>
          <li> {pool?.name ?? ""}</li>
        </ul>
      </div>
    </div>
  )
}

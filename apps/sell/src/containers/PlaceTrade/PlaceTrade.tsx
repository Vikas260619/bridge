import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PTStepper from './PTStepper/PTStepper';

import './PlaceTrade.scss';

import { useGetCompanyQuery } from '@bridgeup/data-access/hooks/company/company.hooks';

const PlaceTrade: React.FunctionComponent = () => {
  const [userName, setUserName] = useState('');
  const [isTradingFinished, setIsTradingFinished] = useState(false);
  const [tradeId, setTradeId] = useState<number | null>(null);
  const [tradeStatus, setTradeStatus] = useState<string | null>('');

  const { data: companyData, loading: companyDataLoading } = useGetCompanyQuery(
    {
      fetchPolicy: 'no-cache',
    }
  );

  useEffect(() => {
    if (
      companyData &&
      companyData.company.length &&
      companyData.company[0].deals.length &&
      companyData.company[0].deals[0].bids[0].price
    ) {
      setUserName(companyData.company[0].name);
      const localDealData = companyData.company[0].deals[0];
      setTradeId(localDealData.trades[0]?.id);
      setTradeStatus(localDealData.trades[0]?.status || null);
      if (['PAUSED', 'CLOSED'].includes(localDealData.status || '')) {
        setIsTradingFinished(true);
      }
    }
  }, [companyData]);

  return (
    <div className="place-trade-container">
      <div className="pb-3 mb-5 bg-black">
        <PTStepper tradeId={tradeId} tradeStatus={tradeStatus} />
      </div>
      <div className="px-4 pt-1 pb-1 flex flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default PlaceTrade;

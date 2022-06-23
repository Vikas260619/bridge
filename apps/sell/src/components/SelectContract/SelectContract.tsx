import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './SelectContract.scss';
import SCBody from './SCBody/SCBody';
import { SCConfirmationDialog } from '../../components/SelectContract/SCConfirmationDialog/SCConfirmationDialog';

//  queries, mutations

import { Order_By } from '@bridgeup/data-access';
import {
  useGetCustomersLazyQuery,
  useInitiateTradeMutation,
  useEditTradeContractsMutation,
} from '@bridgeup/data-access/hooks/company/place-trade.hooks';
import { useGetCompanyQuery } from '@bridgeup/data-access/hooks/company/company.hooks';

// models
import { Customer } from '../../models/customer';
import { TRADE_LIFE_CYCLE, where } from '../../utils/constants';

interface SelectContractProps {
  // yet to complete
}

const SelectContract: React.FC<SelectContractProps> = () => {
  const navigate = useNavigate();

  const [filterTypeContracts, setFilterTypeContracts] = useState<any[]>();
  const [cpContracts, setCpContracts] = useState<any[]>();
  const [ssci, setSsci] = useState<number[]>([]); // stored selected contract ids
  const [cpsci, setCpsci] = useState<number[]>([]); // current page selected contract ids
  const [sessionSci, setSessionSci] = useState<number[]>([]);
  const [idOfferAmtPair, setIdOfferAmtPair] = useState<any>({});
  const [sortModel, setSortModel] = useState<any[]>([]);

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [totalNoOfContracts, setTotalNoOfContracts] = useState<number>(0);
  const [totalNoOfFilteredTypeContracts, setTotalNoOfFilteredTypeContracts] =
    useState<number>(0);
  const [filterTypeValue, setFilterTypeValue] = useState<number>(1);
  const [paginationCount, setPaginationCount] = useState<number>(0);

  const [userName, setUserName] = useState<string>('');
  const [sliderValue, setSlideValue] = useState<number>(0);
  const [availableARR, setAvailableARR] = useState<string>('');
  const [minTradeValue, setMinTradeValue] = useState<number>(0);
  const [remainTradableValue, setRemainTradableValue] = useState<string>('');
  const [totalOfferAmt, setTotalOfferAmt] = useState<number>(0);
  const [dealId, setDealId] = useState<number | null>(null);
  const [tradeId, setTradeId] = useState<number | null>(null);
  const [dealClosure, setDealClosure] = useState<string | null>(null);
  const [bidPrice, setBidPrice] = useState<number | null>(null);
  const [noCustomersFound, setNoCustomersFound] = useState(false);
  const [isExceeded, setIsExceeded] = useState(false);

  const [placeTradeBtnDisable, setPlaceTradeBtnDisable] =
    useState<boolean>(false);
  const [isTradeInitiated, setIsTradeInitiated] = useState(false);
  const [isTradingFinished, setIsTradingFinished] = useState<boolean>(false);
  const [userTradeSub, setUserTradeSub] = useState<number[] | null>(null);
  const [selectedCustomersValue, setSelectedCustomersValue] = useState<any>();

  const [minRevenueValue, setMinRevenueValue] = useState<number>(0);
  const [maxRevenueValue, setMaxRevenueValue] = useState<number>(0);
  const [paymentCycle, setPaymentCycle] = useState<any>([]);

  const { data: companyData, loading: companyDataLoading } = useGetCompanyQuery(
    {
      fetchPolicy: 'no-cache',
    }
  );
  const [
    getCustomersQuery,
    { data: customersData, loading: customersDataLoading },
  ] = useGetCustomersLazyQuery({
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
  });

  const [initiateTradeMutation, { loading: initiateTradeResponseLoading }] =
    useInitiateTradeMutation();
  const [editTradeContracts, { loading: editTradeContractsLoading }] =
    useEditTradeContractsMutation();

  useEffect(() => {
    if (
      companyData &&
      companyData.company[0].deals.length &&
      companyData.company[0].deals[0].bids[0].price
    ) {
      const localData = companyData.company[0];
      const localDealData = companyData.company[0].deals[0];
      const statusIndex = TRADE_LIFE_CYCLE.findIndex(
        (s) => s === localDealData.trades[0]?.status
      );
      const isInReview = ['APA_IN_REVIEW', 'MANDATE_IN_REVIEW'].includes(
        localDealData.trades[0]?.status
      );

      setDealId(localDealData.id);
      setUserName(localData.name);
      setDealClosure(localDealData.deal_expiry);
      setAvailableARR(localDealData.company_score.arr);
      setRemainTradableValue(localData.remaining_tradable_value);
      setBidPrice(localDealData.bids[0].price);
      setTradeId(localDealData.trades[0]?.id);
      setMinTradeValue(localData.min_tradable_value || 3000000);
      setIsTradeInitiated(
        [
          'CONTRACT_SELECTED',
          'MANDATE_REGISTERED',
          'MANDATE_SIGNED',
          'APA_COMPANY_SIGNED',
          'APA_GENERATED',
          'APA_IN_REVIEW',
          'MANDATE_IN_REVIEW',
          'APA_INVESTOR_SIGNED',
          'PAYOUT_DISBURSED',
          'APA_IN_REVIEW',
        ].includes(localDealData.trades[0]?.status || '')
      );
      setSelectedCustomersValue(
        localDealData.trades[0]?.selected_customers_value
      );

      if (statusIndex > 0 || isInReview) {
        setTotalOfferAmt(localDealData.trades[0]?.payout_value);
        setSlideValue(
          (localDealData.trades[0]?.payout_value * 100) /
            Number(localData.remaining_tradable_value)
        );
      }

      if (statusIndex > 1 || isInReview) {
        setIsTradingFinished(true);
        setPlaceTradeBtnDisable(true);
      }
      if (!localDealData.trades[0]?.status) {
        setPlaceTradeBtnDisable(true);
      }

      fetchNewData(
        50,
        0,
        fetchSortModel(sortModel),
        localDealData.bids[0].price,
        { _nin: [] },
        statusIndex > 0 || isInReview,
        localDealData.trades[0]?.id
      );
    }
  }, [companyData]);

  useEffect(() => {
    if (filterTypeContracts && filterTypeContracts.length) {
      setPaginationCount(
        totalNoOfFilteredTypeContracts % 50 === 0
          ? Math.trunc(totalNoOfFilteredTypeContracts / 50)
          : Math.trunc(totalNoOfFilteredTypeContracts / 50) + 1
      );
    } else if (filterTypeContracts && filterTypeContracts.length === 0) {
      setPaginationCount(0);
    }
    setCpContracts(
      filterTypeContracts && filterTypeContracts.length
        ? filterTypeContracts
        : []
    );
    if (filterTypeContracts) {
      setNoCustomersFound(!filterTypeContracts.length);
    }
  }, [filterTypeContracts]);

  useEffect(() => {
    if (customersData && customersData.subscription) {
      setFilterTypeContracts(customersData.subscription);

      const alreadySC = customersData.subscription
        .filter((con) => ssci.includes(con.id))
        .map((con) => con.id);
      setCpsci(alreadySC);
    }

    if (
      customersData &&
      customersData?.subscription_aggregate?.aggregate?.count
    ) {
      const count = customersData?.subscription_aggregate.aggregate?.count;

      if (!totalNoOfContracts) setTotalNoOfContracts(count);
      setTotalNoOfFilteredTypeContracts(count);
    }
  }, [customersData]);

  useEffect(() => {
    if (cpContracts && cpContracts.length) {
      let pair: any = Object.assign({}, idOfferAmtPair);
      cpContracts.forEach((con: any) => {
        pair[con.id] = con.bid_amount;
      });
      setIdOfferAmtPair(pair);

      if (isTradeInitiated && userTradeSub) {
        const currentSelectedIds = [...cpContracts]
          .filter((contract: Customer) => {
            return contract.id && userTradeSub.includes(contract.id);
          })
          .map((con) => con.id);

        setCpsci(currentSelectedIds);
        setSsci(userTradeSub);
      }
    }
  }, [cpContracts]);

  useEffect(() => {
    if (customersData?.trade_subscription) {
      const subIds = customersData?.trade_subscription.map(
        (sub) => sub.subscription_id
      );
      setUserTradeSub(subIds);
    }
  }, [customersData?.trade_subscription]);

  const fetchSortModel = (model: any[]) => {
    const labelAsc = Order_By.Asc;
    const labelDesc = Order_By.Desc;
    const orderBy: any = {};

    model.forEach((sortModel: { field: string; sort: string }) => {
      if (sortModel.field === 'customer_name') {
        orderBy['customer_name'] =
          sortModel.sort === 'asc' ? labelAsc : labelDesc;
      } else {
        orderBy['amount_per_month'] =
          sortModel.sort === 'asc' ? labelAsc : labelDesc;
      }
    });
    // default sort by id.
    orderBy['id'] = labelDesc;
    return orderBy;
  };

  const fetchNewData = (
    limit: number,
    offset: number,
    order_by: any,
    bid_price: number,
    idCondition: any,
    withTradeSubscriptions?: boolean,
    currentTradeId?: number,
    structurizedFilter?: any[],
    minRevenue?: number,
    maxRevenue?: number
  ) => {
    const minR = minRevenue != null ? minRevenue : minRevenueValue;
    const maxR = maxRevenue != null ? maxRevenue : maxRevenueValue;
    const pc = structurizedFilter ? structurizedFilter : paymentCycle;
    const apm = {
      _gte: minR,
      _lte: maxR,
    };

    const a: any = {};
    if (pc && pc.length) {
      a['_or'] = pc;
    }

    where['id'] = idCondition;
    if (minR || maxR) {
      a['amount_per_month'] = apm;
    }
    if (pc || minR || maxR) {
      where['_and'] = a;
    }

    getCustomersQuery({
      variables: {
        where1: where,
        where2: where,
        limit,
        offset,
        order_by,
        bid_price,
        withTradeSubscriptions: withTradeSubscriptions ? true : false,
        whereTradeSub: {
          trade_id: {
            _eq: currentTradeId,
          },
        },
      },
    });
  };

  const handleRealFilter = (
    filterValue: any[],
    minRevenue: number,
    maxRevenue: number
  ) => {
    setCpContracts([]);
    setPaymentCycle(filterValue);
    setMinRevenueValue(minRevenue);
    setMaxRevenueValue(maxRevenue);

    setCurrentPageNumber(1);
    setTotalNoOfFilteredTypeContracts(0);

    const allContracts = [...ssci, ...cpsci];
    fetchNewData(
      50,
      0,
      fetchSortModel(sortModel),
      bidPrice ? bidPrice : 0,
      filterTypeValue === 1
        ? { _nin: [] }
        : filterTypeValue === 2
        ? { _in: allContracts }
        : { _nin: allContracts },
      undefined,
      undefined,
      filterValue,
      minRevenue,
      maxRevenue
    );
  };

  const handleFilterTypeValue = (value: number) => {
    if (customersData && customersData.subscription && cpContracts) {
      const newlySCI = [...cpContracts]
        .filter((con) => cpsci.includes(con.id))
        .map((con) => con.id);
      const UnSCI = [...cpContracts]
        .filter((con) => !cpsci.includes(con.id))
        .map((con) => con.id);

      const temporarySSCI = [...ssci];

      newlySCI.forEach((ci) => {
        if (!temporarySSCI.includes(ci)) {
          temporarySSCI.push(ci);
        }
      });
      UnSCI.forEach((ci) => {
        const indexOfUnSelectedContract = temporarySSCI.indexOf(ci);
        if (indexOfUnSelectedContract > -1) {
          temporarySSCI.splice(indexOfUnSelectedContract, 1);
        }
      });

      setSsci(temporarySSCI);
      setSessionSci(temporarySSCI);
      setFilterTypeValue(value);
      if (value === 1) {
        setTotalNoOfFilteredTypeContracts(totalNoOfContracts);
        setCpContracts([]);

        fetchNewData(
          50,
          0,
          fetchSortModel(sortModel),
          bidPrice ? bidPrice : 0,
          { _nin: [] }
        );
      } else if (value === 2) {
        setTotalNoOfFilteredTypeContracts(temporarySSCI.length);
        setCpContracts([]);

        fetchNewData(
          50,
          0,
          fetchSortModel(sortModel),
          bidPrice ? bidPrice : 0,
          { _in: temporarySSCI }
        );
      } else if (value === 3) {
        setTotalNoOfFilteredTypeContracts(
          totalNoOfContracts - temporarySSCI.length
        );
        setCpContracts([]);

        fetchNewData(
          50,
          0,
          fetchSortModel(sortModel),
          bidPrice ? bidPrice : 0,
          { _nin: temporarySSCI }
        );
      }

      setCurrentPageNumber(1);
    }
  };

  const handlePageChange = (newPageNum: number) => {
    if (cpContracts && filterTypeContracts) {
      const newlySCI = [...cpContracts]
        .filter((con) => cpsci.includes(con.id))
        .map((con) => con.id);
      const UnSCI = [...cpContracts]
        .filter((con) => !cpsci.includes(con.id))
        .map((con) => con.id);

      const temporarySSCI = [...ssci];
      newlySCI.forEach((ci) => {
        if (!temporarySSCI.includes(ci)) {
          temporarySSCI.push(ci);
        }
      });
      UnSCI.forEach((ci) => {
        const indexOfUnSelectedContract = temporarySSCI.indexOf(ci);
        if (indexOfUnSelectedContract > -1) {
          temporarySSCI.splice(indexOfUnSelectedContract, 1);
        }
      });

      setSsci([...temporarySSCI]);
      // filterTypeValue
      fetchNewData(
        50,
        50 * (newPageNum - 1),
        fetchSortModel(sortModel),
        bidPrice ? bidPrice : 0,
        filterTypeValue === 1
          ? { _nin: [] }
          : filterTypeValue === 2
          ? { _in: sessionSci }
          : { _nin: sessionSci }
      );

      setCpContracts([]);
      setCurrentPageNumber(newPageNum);
    }
  };

  const handleSelectionModelChange = (model: number[]) => {
    if (cpContracts && cpContracts.length && !isTradingFinished) {
      const UnSCI = [...cpContracts]
        .filter((con) => !model.includes(con.id))
        .map((con) => con.id);

      const temporarySSCI = [...ssci];

      UnSCI.forEach((ci) => {
        const indexOfUnSelectedContract = temporarySSCI.indexOf(ci);
        if (indexOfUnSelectedContract > -1) {
          temporarySSCI.splice(indexOfUnSelectedContract, 1);
        }
      });
      let pair: any = Object.assign({}, idOfferAmtPair);
      cpContracts.forEach((con: any) => {
        pair[con.id] = con.bid_amount;
      });

      const selOfferAmount = [...cpsci].reduce((acc, id) => {
        return (acc += pair[id]);
      }, 0);
      let newOfferAmount = totalOfferAmt ? totalOfferAmt - selOfferAmount : 0;

      const newOff = [...model];

      newOff.forEach((id) => {
        newOfferAmount += pair[id];
      });

      setCpsci(model);
      setSsci(temporarySSCI);
      setUserTradeSub([...temporarySSCI, ...model]);
      setIsExceeded(Number(newOfferAmount) > Number(remainTradableValue));
      setSlideValue((newOfferAmount * 100) / Number(remainTradableValue));
      setTotalOfferAmt(newOfferAmount);
      setPlaceTradeBtnDisable(newOfferAmount < minTradeValue ? true : false);
    } else if (cpContracts && isTradingFinished && userTradeSub) {
      const currentSelectedIds = [...cpContracts]
        .filter((contract: Customer) => {
          return contract.id && userTradeSub.includes(contract.id);
        })
        .map((con) => con.id);

      setCpsci(currentSelectedIds);
    }
  };

  const handleSortModelChange = (model: any[]) => {
    if (cpContracts) {
      const newlySCI = [...cpContracts]
        .filter((con) => cpsci.includes(con.id))
        .map((con) => con.id);
      const UnSCI = [...cpContracts]
        .filter((con) => !cpsci.includes(con.id))
        .map((con) => con.id);

      const temporarySSCI = [...ssci];
      newlySCI.forEach((ci) => {
        if (!temporarySSCI.includes(ci)) {
          temporarySSCI.push(ci);
        }
      });
      UnSCI.forEach((ci) => {
        const indexOfUnSelectedContract = temporarySSCI.indexOf(ci);
        if (indexOfUnSelectedContract > -1) {
          temporarySSCI.splice(indexOfUnSelectedContract, 1);
        }
      });
      setSsci([...temporarySSCI]);

      setSortModel(model);
      const labelAsc = Order_By.Asc;
      const labelDesc = Order_By.Desc;
      const orderBy: any = {};
      model.forEach((sortModel: { field: string; sort: string }) => {
        if (sortModel.field === 'bid_amount') {
          orderBy['amount_per_month'] =
            sortModel.sort === 'asc' ? labelAsc : labelDesc;
        } else {
          orderBy[sortModel.field] =
            sortModel.sort === 'asc' ? labelAsc : labelDesc;
        }
      });

      fetchNewData(
        50,
        50 * (currentPageNumber - 1),
        fetchSortModel(model),
        bidPrice ? bidPrice : 0,
        filterTypeValue === 1
          ? { _nin: [] }
          : filterTypeValue === 2
          ? { _in: [...temporarySSCI] }
          : { _nin: [...temporarySSCI] }
      );

      setCpContracts([]);
    }
  };

  const getTheSelectedContractsLength = () => {
    const finalSelectedContracts: any[] = [];
    const tempContracts = [...ssci, ...cpsci];
    tempContracts.forEach((ci) => {
      if (!finalSelectedContracts.includes(ci)) {
        finalSelectedContracts.push(ci);
      }
    });
    return finalSelectedContracts.length;
  };

  const handleInitiateTrade = () => {
    if (dealId) {
      if (!isTradeInitiated) {
        initiateTradeMutation({
          variables: {
            args: {
              deal_id: dealId,
              subscription_ids: [...ssci, ...cpsci],
            },
          },
        }).then((res) => {
          if (res?.data) {
            localStorage.setItem(
              'selected-contracts',
              JSON.stringify([...ssci, ...cpsci])
            );
            navigate(`/trade/mandate-generate/${res?.data?.initiateTrade?.id}`);
          }
        });
      } else if (tradeId) {
        editTradeContracts({
          variables: {
            args: {
              trade_id: tradeId,
              subscription_ids: [...ssci, ...cpsci],
            },
          },
        }).then((res) => {
          if (res?.data) {
            localStorage.setItem(
              'selected-contracts',
              JSON.stringify([...ssci, ...cpsci])
            );
            navigate(`/trade/mandate-generate/${tradeId}`);
          }
        });
      }
    }
  };

  const handleClearSelection = () => {
    setCurrentPageNumber(1);
    setCpsci([]);
    setSsci([]);
    setUserTradeSub([]);
    setSessionSci([]);
    setIdOfferAmtPair({});
    setSortModel([]);
    setTotalNoOfFilteredTypeContracts(0);
    setFilterTypeValue(1);
    setPaginationCount(0);
    setSlideValue(0);
    setTotalOfferAmt(0);
    setPlaceTradeBtnDisable(true);
    fetchNewData(50, 0, fetchSortModel(sortModel), bidPrice ? bidPrice : 0, {
      _nin: [],
    });
  };

  return (
    <div className="w-full pl-8 pr-8 pt-1 pb-1 select-contract-container">
      <div className="w-full h-full">
        <SCBody
          cpsci={cpsci}
          userName={userName}
          sliderValue={
            isTradingFinished
              ? (selectedCustomersValue * 100) / Number(remainTradableValue)
              : sliderValue
          }
          availableARR={availableARR}
          offerAmount={bidPrice || 0}
          totalOfferAmt={totalOfferAmt}
          cpContracts={cpContracts || []}
          dealClosure={dealClosure || ''}
          filterTypeValue={filterTypeValue}
          paginationCount={paginationCount}
          noCustomersFound={noCustomersFound}
          isTradingFinished={isTradingFinished}
          currentPageNumber={currentPageNumber}
          totalNoOfContracts={totalNoOfContracts || 0}
          totalNoOfFilteredTypeContracts={totalNoOfFilteredTypeContracts}
          remainTradableValue={remainTradableValue}
          dataLoading={customersDataLoading || companyDataLoading}
          minTradeValue={minTradeValue}
          initiateTradeResponseLoading={
            initiateTradeResponseLoading || editTradeContractsLoading
          }
          handlePageChange={handlePageChange}
          handleInitiateTrade={handleInitiateTrade}
          handleClearSelection={handleClearSelection}
          handleRealFilter={handleRealFilter}
          handleFilterTypeValue={handleFilterTypeValue}
          handleSortModelChange={handleSortModelChange}
          handleSelectionModelChange={handleSelectionModelChange}
          totalNoOfSelectedContracts={getTheSelectedContractsLength()}
          clearSelectionBtnDisable={getTheSelectedContractsLength() < 1}
          placeTradeBtnDisable={placeTradeBtnDisable || isTradingFinished}
        />

        {isExceeded && (
          <SCConfirmationDialog
            isDeletePopup={false}
            isConfirmationPopupOpen={false}
            isExceeded={isExceeded}
            initiateTradeResponseLoading={initiateTradeResponseLoading}
            setClearAll={() => null}
            setIsConfirmationPopupOpen={() => setIsExceeded(false)}
            handleClearSelection={handleInitiateTrade}
          />
        )}
      </div>
    </div>
  );
};

export default SelectContract;

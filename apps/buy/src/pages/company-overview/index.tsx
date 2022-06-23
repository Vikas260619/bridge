import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Details from './Details';
import BridgeUpScore from './BridgeupScore';
import BidCard from './BidCard';
import TradingFactor from './TradingFactor';
import { LoadingButton } from '@mui/lab';
import Arpa from '../../assets/icons/arpa-icon.svg';
import Capital from '../../assets/icons/capital-icon.svg';
import CashFlow from '../../assets/icons/cash-flow-icon.svg';
import Churn from '../../assets/icons/churn-icon.svg';
import Equity from '../../assets/icons/equity-icon.svg';
import GrossMargin from '../../assets/icons/gross-margin-icon.svg';
import Ltv from '../../assets/icons/ltv-icon.svg';
import Mrr from '../../assets/icons/mrr-icon.svg';
import Rr from '../../assets/icons/rr-icon.svg';
import Runway from '../../assets/icons/runway-icon.svg';
import NetProfit from '../../assets/icons/net-profit-icon.svg';

import { useGetCompanyDetailsLazyQuery } from '@bridgeup/data-access/hooks/investor/company-detail.hooks';
import { useGenerateFileDownloadUrlLazyQuery } from '@bridgeup/data-access/hooks/investor/generate-file-registry-download-url.hooks';
import { useGetBidDataByDealLazyQuery } from '@bridgeup/data-access/hooks/investor/bid-data-by-deal.hooks';
import { usePlaceBidMutation } from '@bridgeup/data-access/hooks/investor/place-bid.hooks';
import { useSnackbar } from 'notistack';
import { PlaceBidErrorMessages } from '../../utils/constants';
import './index.scss';
import { MenuContext } from '../../context/menu/MenuContext';
import { Alert, Button, CircularProgress, Tooltip } from '@mui/material';
import { currencyFormat, IdPrefixFormat } from '@bridgeup/common/formatter';
import { ApolloError } from '@apollo/client';

export default function CompanyOverview() {
  const params = useParams();

  const [dealId, setDealId] = useState<number | null>(null);
  const [companyId, setCompanyId] = useState<number | null>(null);
  const [value, setValue] = React.useState('one');
  const [tradingFactors, setTradingFactors] = useState<any>({});
  const [details, setDetails] = useState<any>({});
  const [bupScore, setBupScore] = useState<any>({});
  const [bidDetails, setBidDetails] = useState<any>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [placeBidErr, setPlaceBidErr] = useState<string>('');

  const [
    getCompanyDetails,
    { data: comDetailsData, loading: comDetailsLoading },
  ] = useGetCompanyDetailsLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const [
    generateFileDownloadUrl,
    { data: fileDownloadData, loading: fileDownloadLoading },
  ] = useGenerateFileDownloadUrlLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const [placeBidMutation, { loading: placeBidMutationLoading }] =
    usePlaceBidMutation({});

  const [getBidDetail, { data: placeBidCardData, loading: bidDetailLoading }] =
    useGetBidDataByDealLazyQuery({
      fetchPolicy: 'no-cache',
    });
  const menuContext = useContext(MenuContext);
  useEffect(() => {
    menuContext.updateIndex(1);
  }, []);

  useEffect(() => {
    if (params && params.dealId && params.companyId) {
      const id = Number(params.dealId);
      setDealId(id);
      setCompanyId(Number(params.companyId));
      getCompanyDetails({
        variables: {
          dealId: id,
        },
      });
    }
  }, [params]);

  useEffect(() => {
    if (
      comDetailsData &&
      comDetailsData.deal.length > 0 &&
      comDetailsData.deal[0].company &&
      comDetailsData.deal[0].company_score
    ) {
      const deal = comDetailsData.deal[0];
      const company = comDetailsData.deal[0].company;
      const companyScore = comDetailsData.deal[0].company_score;
      let vintage = -1;
      const currentDate = dayjs(new Date());
      const inCorporationDate = dayjs(company.incorporation_date);
      if (inCorporationDate.isValid()) {
        vintage = Math.ceil(currentDate.diff(inCorporationDate, 'month', true));
      }

      setDetails({
        description: company?.description,
        type: company?.ref_company_type?.name,
        arr: companyScore?.arr,
        vintage: vintage,
        totalFunding: company?.total_funding,
        totalCustomers: company?.total_customers,
        customers: company?.marquee_customers,
        investors: company?.marquee_investors,
      });

      setBupScore({
        rating: companyScore?.rating,
        updatedAt: companyScore?.updated_at,
        financials: companyScore?.financials_score,
        businessGrowth: companyScore?.business_growth_score,
        capitalEfficiency: companyScore?.capital_efficiency_score,
        customerValue: companyScore?.customer_value_score,
        compliance: companyScore?.compliance_score,
      });

      const bids = deal.bids_aggregate.nodes.map((item) => {
        return {
          id: item.id,
          price: item.price as number,
          created_at: item.created_at as Date,
          your_bid: item.your_bid || false,
        };
      });

      setBidDetails({
        dealId: dealId,
        bidClosure: deal.bid_closure,
        status: deal.status,
        maxTradeValue: deal.company.remaining_tradable_value,
        totalBids: deal.bids_aggregate.aggregate?.count,
        bids: bids,
        liveBid:
          deal.highest_bid && deal.highest_bid.length > 0
            ? deal.highest_bid[0].price
            : deal.company_score.min_bid_price,
        highestBid: deal.highest_bid,
        yourBids: deal.your_bids || [],
        winner:
          deal.status === 'AVAILABLE' &&
          deal.highest_bid &&
          deal.highest_bid.length > 0 &&
          deal.highest_bid[0].your_bid,
        maxRecommendedBid: companyScore?.max_recommended_bid,
        minRecommendedBid: companyScore?.min_recommended_bid,
      });

      setTradingFactors({
        arpa: companyScore?.arpa,
        churn: companyScore?.churn,
        grossMargin: companyScore?.gross_margin,
        dtoe_ratio: companyScore?.dtoe_ratio,
        netProfit: companyScore?.net_profit,
        netCashFlow: companyScore?.net_cash_flow,
        ltvCac: companyScore?.ltv_cac,
        revenueRetention: companyScore?.revenue_retention,
        mrrGrowth: companyScore?.mrr_growth,
        runway: companyScore?.estimated_runway,
        capitalEfficiency: companyScore?.capital_efficiency_score,
      });
    }
  }, [comDetailsData]);

  useEffect(() => {
    if (placeBidCardData) {
      const deal = placeBidCardData.deal_by_pk;

      if (deal) {
        const bids = deal.bids_aggregate.nodes.map((item) => {
          return {
            id: item.id,
            price: item.price as number,
            created_at: item.created_at as Date,
            your_bid: item.your_bid || false,
          };
        });

        const placeBidCardObj = {
          totalBids: deal.bids_aggregate.aggregate?.count,
          bids: bids,
          liveBid: deal.highest_bid ? deal.highest_bid[0].price : 0,
          highestBid: deal.highest_bid,
          yourBids: deal.your_bids || [],
          winner:
            deal.status === 'AVAILABLE' &&
            deal.highest_bid &&
            deal.highest_bid.length > 0 &&
            deal.highest_bid[0].your_bid,
        };

        setBidDetails({ ...bidDetails, ...placeBidCardObj });
      }
    }
  }, [placeBidCardData]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const downloadReport = () => {
    if (comDetailsData?.deal[0].company_score.report_file_id) {
      const fileId = comDetailsData?.deal[0].company_score.report_file_id;
      generateFileDownloadUrl({
        variables: {
          fileId: fileId,
        },
      });
    }
  };

  const handlePlaceBid = async (bidPrice: number) => {
    try {
      await placeBidMutation({
        variables: {
          args: {
            deal_id: dealId as number,
            price: bidPrice,
          },
        },
      });

      await getBidDetail({
        variables: {
          dealId: dealId as number,
        },
      });

      enqueueSnackbar('Bid placed successfully', {
        content: (
          <Alert
            severity="success"
            color="info"
            elevation={0}
            square={true}
            variant="filled"
          >
            <Typography variant="body2">
              Your bid for <b>{IdPrefixFormat(companyId as number)}</b> is
              confirmed at <b>{currencyFormat(bidPrice)}</b>
            </Typography>
          </Alert>
        ),
      });
    } catch (error) {
      if (error instanceof ApolloError) {
        const errorCode = error.graphQLErrors[0].extensions.code;
        const msg = PlaceBidErrorMessages[errorCode] || 'something went wrong';
        setPlaceBidErr(msg);
      } else {
        setPlaceBidErr('something went wrong');
      }
    }
  };

  useEffect(() => {
    const downloadUrl =
      fileDownloadData?.generateFileRegistryDownloadURL?.download_url;

    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      if (link && link.parentNode) {
        link.parentNode.removeChild(link);
      }
    }
  }, [fileDownloadData]);

  const Tab1 = () => {
    return (
      dealId &&
      companyId && (
        <Grid container mt={0} spacing={5}>
          <Grid container item xs={12} sm={8}>
            <Grid
              item
              xs={12}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Typography variant="h3" component="div" gutterBottom>
                Company Details
              </Typography>
              {comDetailsData?.deal[0].company_score.report_file_id && (
                <Tooltip
                  title="Get additional information about the company’s profile, metrics and financials by clicking the download button"
                  placement="bottom"
                >
                  <LoadingButton
                    variant="primaryOutlined"
                    size="small"
                    startIcon={<FileDownloadOutlinedIcon />}
                    onClick={downloadReport}
                    loading={fileDownloadLoading}
                    disabled={fileDownloadLoading}
                  >
                    Download
                  </LoadingButton>
                </Tooltip>
              )}
            </Grid>
            <Grid item xs={12}>
              {comDetailsData && comDetailsData?.deal && (
                <Details
                  dealId={dealId}
                  companyId={companyId}
                  details={details}
                />
              )}
            </Grid>
            <Grid container item xs={12} mt={5}>
              <Typography variant="h3" component="div" gutterBottom>
                BridgeUp Score
              </Typography>
              <BridgeUpScore
                dealId={dealId}
                companyId={companyId}
                bupScore={bupScore}
              />
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={4}>
            <Grid item xs={12}>
              <Typography variant="h3" component="div" gutterBottom>
                Place a Bid
              </Typography>
              {bidDetails && (
                <BidCard
                  dealId={dealId}
                  companyId={companyId}
                  bid={bidDetails}
                  handlePlaceBid={handlePlaceBid}
                  placeBidLoading={placeBidMutationLoading || bidDetailLoading}
                  placeBidErr={placeBidErr}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      )
    );
  };

  const Tab2 = () => {
    const renderTradingFactor = () => {
      return (
        tradingFactors && (
          <Grid container item spacing={2}>
            {[
              {
                imgSrc: Arpa,
                title: 'ARPA',
                value: tradingFactors?.arpa || '--',
                info: 'Average Revenue per Account (ARPA) measures the mean annual revenue earned per customer by the Company.',
              },
              {
                imgSrc: Churn,
                title: 'Churn',
                value: tradingFactors?.churn || '--',
                info: 'Churn is the percentage of customers lost by the Company. Lower the churn, the better.',
              },
              {
                imgSrc: Runway,
                title: 'Runway',
                value: tradingFactors?.runway || '--',
                info: "Number of months' worth of cash flow available with the Company before it may run of cash",
              },
              {
                imgSrc: GrossMargin,
                title: 'Gross Margin',
                value: tradingFactors?.grossMargin || '--',
                info: 'Total revenue minus cost of goods sold (COGS). Higher the gross margin, the better.',
              },
              {
                imgSrc: Capital,
                title: 'Capital Efficiency',
                value: tradingFactors?.capitalEfficiency || '--',
                info: 'Capital Efficiency measures the amount of revenue generated per rupee of capital invested in the Company. Higher the better.',
              },
              {
                imgSrc: Equity,
                title: 'Debt to Equity Ratio',
                value: tradingFactors?.dtoe_ratio || '--',
                info: 'It is a measure of indebtedness of the Company. A low D/E ratio indicates a strong capital structure.',
              },
              {
                imgSrc: NetProfit,
                title: 'Net Profit',
                value: tradingFactors?.netProfit || '--',
                info: 'The net profit or loss reported by the Company',
              },
              {
                imgSrc: CashFlow,
                title: 'Net Cash Flow',
                value: tradingFactors?.netCashFlow || '--',
                info: 'Net Cash Flow is the difference between the cash coming into a business and the cash going out of a business during a specific period of time',
              },
              {
                imgSrc: Ltv,
                title: 'LTV:CAC',
                value: tradingFactors?.ltvCac || '--',
                info: 'Estimated life-time value of customers. Higher the better.',
              },
              {
                imgSrc: Rr,
                title: 'Revenue Retention',
                value: tradingFactors?.revenueRetention || '--',
                info: 'Net Revenue retained by the Company considering additions, upgrades and churn.',
              },
              {
                imgSrc: Mrr,
                title: 'MRR Growth',
                value: tradingFactors?.mrrGrowth || '--',
                info: 'The month-on-month growth in MRR. The growth is driven by the addition of new customers and increased revenue per customer',
              },
            ].map((factor) => {
              return (
                <TradingFactor
                  imgSrc={factor.imgSrc}
                  title={factor.title}
                  value={factor.value}
                  info={factor.info}
                />
              );
            })}
          </Grid>
        )
      );
    };

    return (
      <Grid container mt={2} spacing={3}>
        <Grid container item xs={12}>
          <Typography variant="h3" component="div" gutterBottom>
            Trading Factors
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Box style={{ backgroundColor: '#0d1421' }} padding={2.5}>
            {renderTradingFactor()}
          </Box>
        </Grid>
      </Grid>
    );
  };

  if (comDetailsLoading) {
    return (
      <Box
        display={'flex'}
        flexGrow={1}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="company overview"
        >
          <Tab value="one" label="Company Overview" />
          <Tab value="two" label="Trading Factors" />
        </Tabs>
      </Grid>

      {value === 'one' ? Tab1() : null}
      {value === 'two' ? Tab2() : null}
    </Grid>
  );
}

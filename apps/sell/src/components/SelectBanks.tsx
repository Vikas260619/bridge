import {
  Button,
  Grid,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useGetBankListQuery } from '@bridgeup/data-access/hooks/company/list-bank.hooks';
import { useState, useEffect } from 'react';
import { BankType } from '../types/AccountSetup';
import CustomDropDown from '../components/CustomDropDown/CustomDropDown';
import CustomButton from './CustomButton/CustomButton';
import { SUCCESS_STATUSES } from '../utils/constants';
import { empty } from '@apollo/client';

interface Props {
  open: boolean;
  handleClose: any;
  onBankSelected: Function;
  accTypes: any;
  accTypesObj: any;
  selectedBank: any;
  selectedSecondaryBankArray: BankType[];
  selectedSecondaryBankAccTypes: any;
  secBankDetails: any;
  priBankDetails: any;
}
export const SelectBank = (props: Props) => {
  const { loading, error, data: bankList } = useGetBankListQuery();

  const {
    open,
    handleClose,
    onBankSelected,
    accTypes,
    accTypesObj,
    selectedBank,
    selectedSecondaryBankArray,
    selectedSecondaryBankAccTypes,
    secBankDetails,
    priBankDetails,
  } = props;
  const [banks, setBanks] = useState<any>([]);
  const [bank, setBank] = useState<BankType | undefined>();
  const [secondaryBankArray, setSecondaryBankArray] = useState<any>();
  const [localSecBankDetails, setLocalSecBankDetails] = useState<any>([]);
  const [localSecBankAccTypes, setLocalSecBankAccTypes] = useState<any>([]);

  useEffect(() => {
    if (bankList && bankList.ref_bank.length) {
      const data: any = [...bankList.ref_bank];
      data.sort((a: any, b: any) => {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
      setBanks(data);
    }
  }, [bankList]);

  useEffect(() => {
    if (selectedBank) {
      setBank(selectedBank);
    }
  }, [selectedBank]);

  useEffect(() => {
    if (secBankDetails) {
      setLocalSecBankDetails(secBankDetails);
    }
  }, [secBankDetails]);

  useEffect(() => {
    if (selectedSecondaryBankArray && selectedSecondaryBankArray.length) {
      setSecondaryBankArray(selectedSecondaryBankArray);
    } else {
      setSecondaryBankArray([null]);
    }
  }, [selectedSecondaryBankArray]);

  useEffect(() => {
    if (selectedSecondaryBankAccTypes && selectedSecondaryBankAccTypes.length) {
      setLocalSecBankAccTypes(selectedSecondaryBankAccTypes);
    } else {
      setLocalSecBankAccTypes([null]);
    }
  }, [selectedSecondaryBankAccTypes]);

  const handleBank = (e: any, value: BankType | null) => {
    var selectedBank: BankType | undefined;
    if (value) {
      selectedBank = banks.find((item: BankType) => item.name === value.name);
    }
    setBank(selectedBank);
  };

  const handleSecondaryBank = (
    e: any,
    value: BankType | null,
    index: number
  ) => {
    const temp = [...secondaryBankArray];
    const tempDetails = [...localSecBankDetails];
    temp.splice(index, 1, value);
    tempDetails.splice(index, 1, null);

    setSecondaryBankArray(temp);
    setLocalSecBankDetails(tempDetails);
  };

  const handleSecondaryBankAccType = (
    e: any,
    value: { id: string; name: string } | null,
    index: number
  ) => {
    const temp = [...localSecBankAccTypes];
    temp.splice(index, 1, value ? value.id : null);
    setLocalSecBankAccTypes(temp);
  };

  const isAccountTypeSelected = () => {
    const banks = [...secondaryBankArray];
    const accTypes = [...localSecBankAccTypes];

    return (
      !banks.some((bank, index) => {
        if (bank && !accTypes[index]) {
          return true;
        }
      }) &&
      !accTypes.some((accType, index) => {
        if (accType && !banks[index]) {
          return true;
        }
      })
    );
  };

  const renderValue = (typeName: string) => {
    return (
      accTypes.find(
        (type: { id: string; name: string }) => type.id == typeName
      ) || null
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={'sm'}
      fullWidth
      className="backdrop-filter backdrop-blur select-bank-popover-dialog"
      PaperProps={{
        className: 'bg-color-secondary',
      }}
    >
      <DialogTitle className="pt-8 pr-6 pl-6 pb-0">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Grid item sm={8} xs={12}>
            <div className="text-24 text-bold">Select your Bank Account</div>
          </Grid>
          <Grid item sm={4} xs={12}>
            <CloseOutlinedIcon
              onClick={handleClose}
              style={{ float: 'right', cursor: 'pointer' }}
            ></CloseOutlinedIcon>
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent className="p-0 mr-6 ml-6 mb-8 p-3">
        <div className="mt-2 text-14 text-regular text-color-3">
          This helps us understand your company's cash flow and transaction
          history.
        </div>

        <div className="mt-4">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
          >
            <Grid item sm={5} xs={12}>
              <p style={{ fontWeight: 500 }} className="text-18">
                Primary Account
              </p>
            </Grid>
            <Grid item sm={7} xs={12}>
              <FormControl fullWidth variant="filled" className="input-fields">
                <CustomDropDown
                  id="auto-complete"
                  options={banks}
                  value={bank}
                  disabled={
                    priBankDetails &&
                    SUCCESS_STATUSES.hasOwnProperty(priBankDetails.status)
                  }
                  onChange={handleBank}
                  rootClass="select-bank-dropdown"
                  variant="filled"
                  label="Select your bank account *"
                  getOptionLabel={(option: any) => option.name}
                  loading={loading}
                />
              </FormControl>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={0}
              className="mt-2"
            >
              <Grid item sm={7} xs={12}>
                <FormControl
                  fullWidth
                  variant="filled"
                  className="input-fields"
                >
                  <CustomDropDown
                    id="auto-complete"
                    options={[
                      {
                        id: 'CURRENT',
                        name: 'CURRENT',
                      },
                    ]}
                    defaultValue={{
                      id: 'CURRENT',
                      name: 'CURRENT',
                    }}
                    value={{
                      id: 'CURRENT',
                      name: 'CURRENT',
                    }}
                    disableClearable={true}
                    onChange={() => null}
                    rootClass="select-bank-dropdown"
                    variant="filled"
                    label="Select your Bank Account type *"
                    getOptionLabel={(option: any) => option.name}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div
          className="divider"
          style={{
            height: '20px',
            width: '100%',
            borderBottom: '1px dashed #2D477B',
          }}
        ></div>

        <div className="add-secondary-bank-main-div">
          <div>
            <div
              className="mt-6 text-18"
              style={{
                fontWeight: 500,
              }}
            >
              Do you want to integrate a secondary account?
            </div>

            {secondaryBankArray &&
              secondaryBankArray.length &&
              secondaryBankArray.map((bank: any, index: number) => {
                return (
                  <div className="mt-4 mb-6">
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0}
                    >
                      <Grid item sm={5} xs={12}>
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '27px',
                          }}
                        >
                          Secondary Account {index ? `- ${index + 1}` : ''}
                        </p>
                      </Grid>
                      <Grid item sm={7} xs={12}>
                        <FormControl
                          fullWidth
                          variant="filled"
                          className="input-fields"
                        >
                          <CustomDropDown
                            id="auto-complete"
                            options={banks}
                            value={bank || null}
                            disabled={
                              localSecBankDetails[index] &&
                              SUCCESS_STATUSES.hasOwnProperty(
                                localSecBankDetails[index].status
                              )
                            }
                            onChange={(e: any, value: BankType | null) =>
                              handleSecondaryBank(e, value, index)
                            }
                            rootClass="select-bank-dropdown"
                            variant="filled"
                            label="Select your bank account"
                            getOptionLabel={(option: any) => option.name}
                            loading={loading}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={0}
                        className="mt-2"
                      >
                        <Grid item sm={7} xs={12}>
                          <FormControl
                            fullWidth
                            variant="filled"
                            className="input-fields"
                          >
                            <CustomDropDown
                              id="auto-complete"
                              options={accTypes}
                              value={
                                localSecBankAccTypes &&
                                localSecBankAccTypes.length > index &&
                                localSecBankAccTypes[index] &&
                                renderValue(localSecBankAccTypes[index])
                              }
                              onChange={(e: any, value: any | null) =>
                                handleSecondaryBankAccType(e, value, index)
                              }
                              rootClass="select-bank-dropdown"
                              variant="filled"
                              label="Select your Bank Account type *"
                              getOptionLabel={(option: any) => option.name}
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="add-another-bank p-1 mb-10 text-14">
          {secondaryBankArray &&
            !secondaryBankArray.some(
              (e: any) => e === null || e === empty || e === undefined
            ) &&
            secondaryBankArray.length < 4 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setSecondaryBankArray([...secondaryBankArray, null]);
                  setLocalSecBankDetails([...localSecBankDetails, null]);
                  setLocalSecBankAccTypes([...localSecBankAccTypes, null]);
                }}
              >
                <span style={{ fontSize: '30px' }} className="pr-2">
                  +
                </span>
                ADD ANOTHER ACCOUNT
              </div>
            )}
        </div>
        <div className="btn-holders mt-4 flex justify-end">
          <CustomButton
            onClick={handleClose}
            fullWidth={true}
            buttonClassName={'secondary-button'}
            variant="outlined"
            style={{ maxWidth: '150px' }}
          >
            CANCEL
          </CustomButton>
          <CustomButton
            onClick={() =>
              onBankSelected(
                bank,
                secondaryBankArray,
                localSecBankDetails,
                localSecBankAccTypes
              )
            }
            fullWidth={true}
            style={{ maxWidth: '150px', marginLeft: '40px' }}
            buttonClassName={'primary-button'}
            disabled={!bank || !isAccountTypeSelected()}
            variant="contained"
          >
            CONFIRM
          </CustomButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

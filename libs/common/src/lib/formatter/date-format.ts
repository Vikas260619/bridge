import dayjs from 'dayjs';

export const dateFormat = (date: Date | number, strFormat = 'MMM DD, YYYY') => {
  return dayjs(date).format(strFormat);
};

import dayjs from "dayjs";
import 'dayjs/locale/ru';
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);
dayjs.extend(customParseFormat);
dayjs.locale('ru');

export const formatDate = (dateString: string, format: string = 'DD.MM.YYYY') => {
  const date = dayjs(dateString, format);

  if (date.isToday()) {
    return 'Сегодня';
  } else if (date.isTomorrow()) {
    return 'Завтра';
  } else {
    return date.format('D MMM');
  }
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price);
};

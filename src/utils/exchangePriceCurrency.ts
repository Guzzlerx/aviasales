import { CURRENCY_RATE } from "../constants/currency";
import { CurrencyType } from "../routes/TicketsListPage/type";

export const exchangePriceCurrency = (
  price: number,
  currency: CurrencyType
): number => {
  return Number((price / CURRENCY_RATE[currency]).toFixed(2));
};

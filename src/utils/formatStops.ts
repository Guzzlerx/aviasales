import { DOUBLE_DIGIT_REGEX } from "../constants/regex/double-digit";

export const formatStops = (count: number | string): string => {
  const countAsString = count.toString();
  const lastNumber = parseInt(countAsString[countAsString.length - 1]);
  const isSpecialDigit = countAsString.match(DOUBLE_DIGIT_REGEX);

  if (lastNumber === 0 || lastNumber > 4 || isSpecialDigit) {
    return count === 0 ? "без пересадок" : count + " пересадок";
  } else if (lastNumber === 1) {
    return count + " пересадка";
  } else {
    return count + " пересадки";
  }
};

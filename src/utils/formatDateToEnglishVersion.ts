export const formatDateToEnglishVersion = (date: string): string => {
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const englishDate = month + "." + day + "." + date.slice(-2);

  return englishDate;
};

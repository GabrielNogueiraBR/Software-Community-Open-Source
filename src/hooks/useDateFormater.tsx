export const useDateFormater = () => {
  const dateFormater = (
    date: string | number | Date,
    locales: string | string[] = "pt-BR"
  ) =>
    new Intl.DateTimeFormat(locales, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));

  return { dateFormater };
};

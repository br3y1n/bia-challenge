const formatNumber = (number: number): string =>
  number.toLocaleString("es", { style: "decimal", useGrouping: true });

export { formatNumber };

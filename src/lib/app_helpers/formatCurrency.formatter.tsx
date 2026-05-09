const formatCurrency = function (value: number) {
  return value.toLocaleString("es", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
};

export default formatCurrency;

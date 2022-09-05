const currency = function (number) {
  return new Intl.NumberFormat("es-ES", {
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(number);
};

export { currency };

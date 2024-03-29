const formatCurrency = number => {
	const value = number / 100;
	const formatedValue = new Intl.NumberFormat('es-MX', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(value);

	return formatedValue;
};

export default formatCurrency;

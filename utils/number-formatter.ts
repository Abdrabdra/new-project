export const priceFormatter = new Intl.NumberFormat('us-US', {
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency: 'KZT',
});

export const percentFormatter = new Intl.NumberFormat('us-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    signDisplay: "always",
});

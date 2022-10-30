const NUMBER_FORMAT = new Intl.NumberFormat("en-NG", {
    currency: "NGN",
    style: "currency",
});

export const convertToNaira = (amount: number) => {
    return NUMBER_FORMAT.format(amount);
};

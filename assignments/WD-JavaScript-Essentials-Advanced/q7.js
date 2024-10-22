// WAP to convert years into days and days into years?

const YTD = (year) => {
    return year / 365;
}

const DTY = (days) => {
    return days * 365;
}

console.log(YTD(10));

console.log(DTY(365));
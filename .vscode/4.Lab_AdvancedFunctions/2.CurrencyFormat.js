function reduceFuncParams(currencyFormatter) {
    // let separator = ",";
    // let symbol = "$";
    // let symbolFirst = true;
    return dollarFormatter = value => currencyFormatter(",", "$", true, value);
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let reduce = reduceFuncParams(currencyFormatter);
console.log(reduce(500));
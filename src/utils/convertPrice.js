const convertPrice = number => {
  let result = parseFloat(number).toFixed(2) + "";
  result = result.replace(".", ",");
  return result;
};

export default convertPrice;

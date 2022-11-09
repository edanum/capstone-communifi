export function getDataSumByMonth(data, month) {
  if (month < 10) {
    month = `0${month}`;
  }
  month = month.toString();

  const dataByMonth = data
    .filter((e) => e.dateOfSubmit.split(".")[1] === month) // GET MONTH
    .map((e) => e.amount) // GET AMOUNT ONLY
    .reduce((a, b) => a + b, 0); // REDUCE AMOUNTS TO SUM

  return dataByMonth;
}

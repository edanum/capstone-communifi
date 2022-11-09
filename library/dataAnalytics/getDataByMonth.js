export function getDataByMonth(data, month) {
  if (month < 10) {
    month = `0${month}`;
  }
  month = month.toString();

  const dataSumByMonth = data
    .filter((e) => e.dateOfSubmit.split(".")[1] === month) // GET MONTH
    .map((e) => e.amount); // GET AMOUNT ONLY

  return dataSumByMonth;
}

export default function (lastPrice, price) {
  return !lastPrice || lastPrice === price
    ? "equal"
    : price > lastPrice
    ? "more"
    : "less";
}

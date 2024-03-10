import classes from "./table.module.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className={classes.tbody}>
        {props.data.map((yearlyData) => (
          <tr key={yearlyData.year}>
            <td>{yearlyData.year}</td>
            <td>{formatter.format(yearlyData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearlyData.yearlyInterest)}</td>
            <td>
              {formatter.format(
                yearlyData.savingsEndOfYear -
                  props.initialInvestment -
                  yearlyData.yearlyContribution * yearlyData.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment +
                  yearlyData.yearlyContribution * yearlyData.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;

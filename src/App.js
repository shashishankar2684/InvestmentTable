import Form from "./components/form/form";
import Header from "./components/header/header";
import Table from "./components/table/table";
import { useState } from "react";

function App() {
  const [form, setForm] = useState(null);

  const calculateHandler = (form) => {
    setForm(form);
  };

  const yearlyData = [];

  if (form) {
    let currentSavings = form["current-savings"];
    const yearlyContribution = form["yearly-contribution"];
    const expectedReturn = form["expected-return"] / 100;
    const duration = form["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {!form && <p style={{ textAlign: "center" }}>Please enter your data</p>}
      {form && (
        <Table data={yearlyData} initialInvestment={form["current-savings"]} />
      )}
    </div>
  );
}

export default App;

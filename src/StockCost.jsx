import React from "react";

function StockCost({stockName, price, mainMenu, goBack }) {
  return (
    <div>
      <ul className="stock-list">
        <li className="stock-list-title"> Stock Price of {stockName} is {price}. Please select option.</li>
        <li>
          <a onClick={() => mainMenu()}>Main menu</a>
        </li>
        <li>
          <a onClick={() => goBack()}>Go Back</a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default StockCost;

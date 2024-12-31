import React, { useState } from "react";
import dataStock from "./stock-mock-data";
import StockCost from "./StockCost";
import ShowStockList from "./ShowStockList";
import useGetStockList from "./useGetStockList";

function StockList() {
  const [stockCode, setStockCode] = useState([]);
  const [prevSelection, setPrevSelection] = useState([]);
  const [finalSelection, setFinalSelection] = useState(null);
  const { getStocklist } = useGetStockList();

  const listingStocks = (code) => {
    setStockCode([...stockCode, code]);
    const selectedExchange = dataStock.find(
      (exchange) => exchange.code === code
    );
    // const selectedExchange = getStocklist(code)
    const tempPrevSel = [...prevSelection];
    tempPrevSel.push(selectedExchange);

    setPrevSelection(tempPrevSel);
  };
  const goBack = () => {
    setFinalSelection(null);
  };
  const mainMenu = () => {
    setStockCode([]);
    setPrevSelection([]);
    setFinalSelection(null);
  };
  const getStocksOrPrice = (code, stockinfo) => {
    const res = getStocklist(code, stockinfo);
    console.log("result is:", res);
    if (res?.success) {
      if (res?.hasMoreStocks) {
        setStockCode([...stockCode, code]);
        const tempPrevSel = [...prevSelection];
        tempPrevSel.push(res?.data);
        setPrevSelection(tempPrevSel);
      } else {
        setFinalSelection(res?.data);
      }
    } else {
        //
    }
  };

  return (
    <>
      <div className="stock-list-container">
        <ul className="stock-list">
          <li className="stock-list-title"> Please select a stock </li>

          {dataStock.map((stockInfo) => {
            return (
              <li key={stockInfo.code}>
                <a
                  href="javascript:void(0)"
                  onClick={() => listingStocks(stockInfo.code)}
                >
                  {stockInfo.stockExchange}
                </a>
              </li>
            );
          })}
        </ul>
        {stockCode.length > 0 && (
          <ShowStockList
            stockCodes={stockCode}
            prevSelection={prevSelection}
            getStocksOrPrice={getStocksOrPrice}
          />
        )}
      </div>
      {finalSelection && (
        <StockCost
          stockName={finalSelection?.stockName}
          price={finalSelection?.price}
          goBack={goBack}
          mainMenu={mainMenu}
        />
      )}
      {/* <StockCost stockName={finalSelection.topStocks[0].stockName} price={finalSelection.topStocks[0].price} goBack={goBack} mainMenu={mainMenu} /> */}
    </>
  );
}

export default StockList;

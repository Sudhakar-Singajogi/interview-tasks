import React from "react";
import useGetStockList from "./useGetStockList";
function ShowStockList({ stockCodes, prevSelection, getStocksOrPrice }) {
  const {getStocklist} = useGetStockList()
    const handleClick = (code, stockinfo) => {
      getStocksOrPrice(code, stockinfo)
    }
  return (
    <div>
      {stockCodes.map((stockCode, index) => {
        return (
          <>
            <li key={`sel-${stockCode}`} className="selected-stock-code">
              <a href="javascript:void(0)"> {stockCode} </a>
            </li>
            <div>
              <ul className="stock-list">
                <li className="stock-list-title"> Please select a stock.</li>
                {prevSelection[index]?.topStocks.map((stockInfo) => { 
                    return (<li key={stockInfo.code}>
                      <a href="javascript:void(0)" onClick={()=> handleClick(stockInfo.code, stockInfo)}>{stockInfo.stockName}</a>
                    </li>)
                })}
              </ul>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ShowStockList;

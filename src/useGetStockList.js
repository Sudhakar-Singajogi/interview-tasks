const useGetStockList = () => {

    const getStocklist = (stockCode, dataStock) => {
        console.log('dataStock:', dataStock)
        
        // const selectedExchange = dataStock.find((exchange) => exchange.code === stockCode);
         
        if(dataStock) {
            if("topStocks" in dataStock ) { 
                return {
                    success:true,
                    hasMoreStocks:true,
                    data:dataStock
                }

            } else {
                return {
                    success:true,
                    hasMoreStocks:false,
                    data:dataStock
                }
            }

        } else { return {
            success:false
        } }
    }

    return {getStocklist};
}

export default useGetStockList;
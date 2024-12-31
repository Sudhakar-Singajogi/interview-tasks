import "./App.css";
import StockList from "./StockList";

function App() {
  return (
    <>
      <div className="stock-container">
        <div>
          <h1>LESG Stock</h1>
        </div>
        <div className="stock-content">
          <p>Hello! welcome to LSEG. I'm here to help you</p>

          <StockList />
        </div>
      </div>
    </>
  );
}

export default App;

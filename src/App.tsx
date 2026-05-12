import { WalletProvider } from "./context/WalletContext";
import { Header } from "./components/Header";
import { DepositWithdraw } from "./components/DepositWithdraw";
import { PoolList } from "./components/PoolList";
import "./App.css";

function App() {
  return (
    <WalletProvider>
      <div className="app">
        <Header />
        <main className="main" id="main-content">
          <DepositWithdraw />
          <PoolList />
        </main>
      </div>
    </WalletProvider>
  );
}

export default App;

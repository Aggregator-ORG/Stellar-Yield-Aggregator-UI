import { useWallet } from "../context/WalletContext";

export function Header() {
  const { publicKey, connected, connect, disconnect } = useWallet();

  return (
    <header className="header">
      <span className="header-title">Stellar Yield Aggregator</span>
      <div className="header-wallet">
        {connected ? (
          <>
            <span className="wallet-address">
              {publicKey!.slice(0, 6)}…{publicKey!.slice(-4)}
            </span>
            <button className="btn btn-outline" onClick={disconnect}>
              Disconnect
            </button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={connect}>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}

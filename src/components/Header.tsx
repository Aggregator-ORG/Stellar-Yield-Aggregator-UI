/**
 * App header with wallet connect button.
 *
 * TODO: wire useWallet() once WalletContext::connect is implemented.
 */
export function Header() {
  return (
    <header className="header">
      <span className="header-title">Stellar Yield Aggregator</span>
      <div className="header-wallet">
        {/* TODO: render connect/disconnect button using useWallet() */}
        <button className="btn btn-primary" disabled>
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

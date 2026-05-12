/**
 * App header with wallet connect/disconnect button.
 *
 * TODO:
 * 1. Import `useWallet` from `../context/WalletContext`
 * 2. Destructure `{ publicKey, connected, connect, disconnect }` from `useWallet()`
 * 3. If `connected`, show a truncated public key (first 6 + last 4 chars) and a
 *    "Disconnect" button that calls `disconnect()`
 * 4. If not connected, show a "Connect Wallet" button that calls `connect()`
 */
export function Header() {
  return (
    <header className="header">
      <span className="header-title">Stellar Yield Aggregator</span>
      <div className="header-wallet">
        {/* TODO: replace with dynamic connect/disconnect button — see above */}
        <button className="btn btn-primary" disabled>
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

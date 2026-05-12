/**
 * Deposit and withdraw panel.
 *
 * TODO:
 * 1. Import `useWallet` from `../context/WalletContext`
 * 2. Import `useBalance`, `useDeposit`, `useWithdraw` from `../hooks/useContracts`
 * 3. If wallet is not connected, show a "Connect your wallet" message
 * 4. Show the user's current share balance from `useBalance(publicKey)`
 * 5. Render a tab switcher: "Deposit" | "Withdraw"
 * 6. Deposit tab: number input (USDC amount) + submit button that calls
 *    `deposit(BigInt(amount * 1_000_000))` (USDC has 7 decimal places on Stellar)
 * 7. Withdraw tab: number input (shares to burn) + submit button that calls
 *    `withdraw(BigInt(shares))`
 * 8. Disable the submit button while `depositing` or `withdrawing` is true
 */
export function DepositWithdraw() {
  return (
    <div className="card">
      <h2>Deposit / Withdraw</h2>
      <p className="muted">
        {/* TODO: replace with the full deposit/withdraw form — see above */}
        Implement wallet connection and contract hooks to enable this panel.
      </p>
    </div>
  );
}

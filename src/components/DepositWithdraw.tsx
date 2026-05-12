import { useState } from "react";
import { useWallet } from "../context/WalletContext";
import { useBalance, useDeposit, useWithdraw } from "../hooks/useContracts";

/**
 * Deposit and withdraw panel.
 *
 * TODO: wire up useDeposit/useWithdraw once contract hooks are implemented.
 */
export function DepositWithdraw() {
  const { publicKey, connected } = useWallet();
  const { balance } = useBalance(publicKey);
  const { deposit, loading: depositing } = useDeposit();
  const { withdraw, loading: withdrawing } = useWithdraw();

  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState<"deposit" | "withdraw">("deposit");

  if (!connected) {
    return (
      <div className="card">
        <p className="muted">Connect your wallet to deposit or withdraw.</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = BigInt(Math.floor(parseFloat(amount) * 1_000_000));
    if (mode === "deposit") await deposit(value);
    else await withdraw(value);
    setAmount("");
  }

  return (
    <div className="card">
      <div className="balance-row">
        <span>Your shares</span>
        <span className="balance-value">
          {balance !== null ? balance.toString() : "—"}
        </span>
      </div>

      <div className="tab-row">
        <button
          className={`tab ${mode === "deposit" ? "active" : ""}`}
          onClick={() => setMode("deposit")}
        >
          Deposit
        </button>
        <button
          className={`tab ${mode === "withdraw" ? "active" : ""}`}
          onClick={() => setMode("withdraw")}
        >
          Withdraw
        </button>
      </div>

      <form onSubmit={handleSubmit} className="deposit-form">
        <input
          type="number"
          min="0"
          step="0.000001"
          placeholder={mode === "deposit" ? "USDC amount" : "Shares to burn"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount-input"
          required
          aria-label={mode === "deposit" ? "USDC amount to deposit" : "Shares to withdraw"}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={depositing || withdrawing}
        >
          {depositing || withdrawing
            ? "Submitting…"
            : mode === "deposit"
              ? "Deposit"
              : "Withdraw"}
        </button>
      </form>
    </div>
  );
}

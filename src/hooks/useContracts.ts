/**
 * Hooks for interacting with the Vault and Aggregator contracts.
 *
 * All contract calls go through the Soroban RPC endpoint configured in
 * VITE_SOROBAN_RPC_URL. Transactions are signed via Freighter.
 *
 * TODO: implement useDeposit, useWithdraw, useBalance, usePools
 * using @stellar/stellar-sdk SorobanRpc and Contract classes.
 */

import { useState } from "react";

const RPC_URL =
  import.meta.env.VITE_SOROBAN_RPC_URL ??
  "https://soroban-testnet.stellar.org";
const VAULT_ID = import.meta.env.VITE_VAULT_CONTRACT_ID ?? "";
const AGGREGATOR_ID = import.meta.env.VITE_AGGREGATOR_CONTRACT_ID ?? "";

export { RPC_URL, VAULT_ID, AGGREGATOR_ID };

/** Returns the user's vault share balance. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useBalance(_publicKey: string | null) {
  // TODO: call vault.balance(publicKey) via SorobanRpc
  return { balance: null as bigint | null, loading: false };
}

/** Returns all registered pools with their APYs. */
export function usePools() {
  // TODO: call aggregator.get_pools() via SorobanRpc
  return {
    pools: [] as Array<{ address: string; apy_bps: number }>,
    loading: false,
  };
}

/** Submits a deposit transaction. */
export function useDeposit() {
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function deposit(_amount: bigint) {
    setLoading(true);
    try {
      // TODO: build and submit vault.deposit(publicKey, amount) transaction
      throw new Error("deposit not yet implemented");
    } finally {
      setLoading(false);
    }
  }

  return { deposit, loading };
}

/** Submits a withdraw transaction. */
export function useWithdraw() {
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function withdraw(_shares: bigint) {
    setLoading(true);
    try {
      // TODO: build and submit vault.withdraw(publicKey, shares) transaction
      throw new Error("withdraw not yet implemented");
    } finally {
      setLoading(false);
    }
  }

  return { withdraw, loading };
}

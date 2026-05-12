/**
 * Contract interaction hooks.
 *
 * TODO (useBalance): call vault.balance(publicKey) via SorobanRpc.Server
 * TODO (usePools): call aggregator.get_pools() via SorobanRpc.Server
 * TODO (useDeposit): build, simulate, sign, and submit vault.deposit transaction
 * TODO (useWithdraw): build, simulate, sign, and submit vault.withdraw transaction
 *
 * Reference:
 *   https://stellar.github.io/js-stellar-sdk/
 *   Contract address env vars: VITE_VAULT_CONTRACT_ID, VITE_AGGREGATOR_CONTRACT_ID
 */

export const RPC_URL =
  import.meta.env.VITE_SOROBAN_RPC_URL ?? "https://soroban-testnet.stellar.org";
export const VAULT_ID = import.meta.env.VITE_VAULT_CONTRACT_ID ?? "";
export const AGGREGATOR_ID = import.meta.env.VITE_AGGREGATOR_CONTRACT_ID ?? "";

export function useBalance(_publicKey: string | null) { // eslint-disable-line @typescript-eslint/no-unused-vars
  // TODO: query vault contract for share balance
  return { balance: null as bigint | null, loading: false };
}

export function usePools() {
  // TODO: query aggregator contract for registered pools
  return { pools: [] as Array<{ address: string; apy_bps: number }>, loading: false };
}

export function useDeposit() {
  // TODO: build and submit vault.deposit transaction via Freighter
  return { deposit: async (_amount: bigint) => { throw new Error("not implemented"); }, loading: false }; // eslint-disable-line @typescript-eslint/no-unused-vars
}

export function useWithdraw() {
  // TODO: build and submit vault.withdraw transaction via Freighter
  return { withdraw: async (_shares: bigint) => { throw new Error("not implemented"); }, loading: false }; // eslint-disable-line @typescript-eslint/no-unused-vars
}

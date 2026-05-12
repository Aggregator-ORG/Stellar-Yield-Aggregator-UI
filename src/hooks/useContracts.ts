/**
 * Contract interaction hooks.
 *
 * All hooks use @stellar/stellar-sdk to talk to the Soroban RPC endpoint.
 * Contract addresses are read from Vite env vars (see .env.example).
 *
 * Reference:
 *   https://stellar.github.io/js-stellar-sdk/classes/SorobanRpc.Server.html
 *   https://stellar.github.io/js-stellar-sdk/classes/Contract.html
 */

export const RPC_URL =
  import.meta.env.VITE_SOROBAN_RPC_URL ?? "https://soroban-testnet.stellar.org";
export const VAULT_ID = import.meta.env.VITE_VAULT_CONTRACT_ID ?? "";
export const AGGREGATOR_ID = import.meta.env.VITE_AGGREGATOR_CONTRACT_ID ?? "";

/**
 * Returns the user's vault share balance.
 *
 * TODO:
 * 1. Create a `SorobanRpc.Server` instance with `RPC_URL`
 * 2. Build a read-only call: `new Contract(VAULT_ID).call("balance", nativeToScVal(publicKey, { type: "address" }))`
 * 3. Use `server.simulateTransaction(tx)` to execute the read
 * 4. Decode the result with `scValToNative(result.result.retval)` → return as `bigint`
 * 5. Return `{ balance, loading }` — set loading=true while the request is in flight
 */
export function useBalance(_publicKey: string | null) { // eslint-disable-line @typescript-eslint/no-unused-vars
  return { balance: null as bigint | null, loading: false };
}

/**
 * Returns all registered liquidity pools with their APY estimates.
 *
 * TODO:
 * 1. Create a `SorobanRpc.Server` instance with `RPC_URL`
 * 2. Build a read-only call: `new Contract(AGGREGATOR_ID).call("get_pools")`
 * 3. Use `server.simulateTransaction(tx)` to execute the read
 * 4. Decode the result: `scValToNative(result.result.retval)` returns an array of
 *    `{ address: string, apy_bps: number }` objects matching the `PoolInfo` struct
 * 5. Return `{ pools, loading }`
 */
export function usePools() {
  return { pools: [] as Array<{ address: string; apy_bps: number }>, loading: false };
}

/**
 * Submits a deposit transaction to the vault contract.
 *
 * TODO:
 * 1. Get the user's public key from `useWallet()`
 * 2. Load the user's account with `server.getAccount(publicKey)`
 * 3. Build the transaction:
 *    ```
 *    new TransactionBuilder(account, { fee, networkPassphrase })
 *      .addOperation(new Contract(VAULT_ID).call(
 *        "deposit",
 *        nativeToScVal(publicKey, { type: "address" }),
 *        nativeToScVal(amount, { type: "i128" })
 *      ))
 *      .setTimeout(30)
 *      .build()
 *    ```
 * 4. Simulate with `server.simulateTransaction(tx)` and apply the footprint
 * 5. Sign with `useWallet().signTx(tx.toXDR())`
 * 6. Submit with `server.sendTransaction(signedTx)` and poll `server.getTransaction(hash)`
 */
export function useDeposit() {
  return { deposit: async (_amount: bigint) => { throw new Error("not implemented"); }, loading: false }; // eslint-disable-line @typescript-eslint/no-unused-vars
}

/**
 * Submits a withdraw transaction to the vault contract.
 *
 * TODO:
 * 1. Get the user's public key from `useWallet()`
 * 2. Load the user's account with `server.getAccount(publicKey)`
 * 3. Build the transaction:
 *    ```
 *    new TransactionBuilder(account, { fee, networkPassphrase })
 *      .addOperation(new Contract(VAULT_ID).call(
 *        "withdraw",
 *        nativeToScVal(publicKey, { type: "address" }),
 *        nativeToScVal(shares, { type: "i128" })
 *      ))
 *      .setTimeout(30)
 *      .build()
 *    ```
 * 4. Simulate, sign via Freighter, submit, and poll — same pattern as useDeposit
 */
export function useWithdraw() {
  return { withdraw: async (_shares: bigint) => { throw new Error("not implemented"); }, loading: false }; // eslint-disable-line @typescript-eslint/no-unused-vars
}

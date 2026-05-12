/**
 * Wallet context — manages Freighter wallet connection state.
 *
 * Uses @stellar/freighter-api to connect to the Freighter browser extension.
 * Reference: https://docs.freighter.app/docs/guide/usingFreighterWebApp
 */
import { createContext, useContext, useState, type ReactNode } from "react";

export interface WalletState {
  publicKey: string | null;
  connected: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  signTx: (xdr: string) => Promise<string>;
}

export const WalletContext = createContext<WalletState | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [publicKey] = useState<string | null>(null);

  /**
   * TODO:
   * 1. Import `isConnected` and `getPublicKey` from `@stellar/freighter-api`
   * 2. Call `await isConnected()` — if false, alert the user to install Freighter
   * 3. Call `await getPublicKey()` to retrieve the active account's public key
   * 4. Set it with `_setPublicKey(key)` (rename to `setPublicKey` when implementing)
   */
  async function connect(): Promise<void> {
    throw new Error("WalletProvider::connect not implemented");
  }

  /**
   * TODO:
   * 1. Call `setPublicKey(null)` to clear the connected account
   */
  function disconnect(): void {
    throw new Error("WalletProvider::disconnect not implemented");
  }

  /**
   * TODO:
   * 1. Import `signTransaction` from `@stellar/freighter-api`
   * 2. Call `await signTransaction(xdr, { network: "TESTNET" })`
   * 3. Return the signed XDR string
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function signTx(_xdr: string): Promise<string> {
    throw new Error("WalletProvider::signTx not implemented");
  }

  return (
    <WalletContext.Provider
      value={{ publicKey, connected: !!publicKey, connect, disconnect, signTx }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used inside WalletProvider");
  return ctx;
}

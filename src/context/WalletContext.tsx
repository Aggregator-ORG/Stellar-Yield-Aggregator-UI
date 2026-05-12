/**
 * Wallet context — manages Freighter wallet connection state.
 *
 * TODO: implement connect() using @stellar/freighter-api isConnected + getPublicKey
 * TODO: implement signTx() using @stellar/freighter-api signTransaction
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

  // TODO: implement connect — call isConnected(), then getPublicKey()
  async function connect(): Promise<void> {
    todo("WalletProvider::connect");
  }

  // TODO: implement disconnect — clear publicKey state
  function disconnect(): void {
    todo("WalletProvider::disconnect");
  }

  // TODO: implement signTx — call signTransaction(xdr, { network: "TESTNET" })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function signTx(_xdr: string): Promise<string> {
    return todo("WalletProvider::signTx");
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

function todo(msg: string): never {
  throw new Error(`Not implemented: ${msg}`);
}

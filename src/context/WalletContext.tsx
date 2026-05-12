import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  isConnected,
  getPublicKey,
  signTransaction,
} from "@stellar/freighter-api";

export interface WalletState {
  publicKey: string | null;
  connected: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  signTx: (xdr: string) => Promise<string>;
}

export const WalletContext = createContext<WalletState | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const connect = useCallback(async () => {
    const connected = await isConnected();
    if (!connected) {
      alert("Freighter wallet not found. Install it from freighter.app");
      return;
    }
    const key = await getPublicKey();
    setPublicKey(key);
  }, []);

  const disconnect = useCallback(() => setPublicKey(null), []);

  const signTx = useCallback(async (xdr: string) => {
    const result = await signTransaction(xdr, { network: "TESTNET" });
    return result;
  }, []);

  return (
    <WalletContext.Provider
      value={{ publicKey, connected: !!publicKey, connect, disconnect, signTx }}
    >
      {children}
    </WalletContext.Provider>
  );
}

// Keep a re-export here for convenience
export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used inside WalletProvider");
  return ctx;
}

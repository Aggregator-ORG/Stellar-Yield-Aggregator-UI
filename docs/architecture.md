# Architecture

## Overview

A static React/TypeScript single-page application that lets users interact with the Stellar Yield Aggregator smart contracts directly from the browser. No backend required — all contract calls go through the Soroban RPC endpoint.

## Component Tree

```
App
├── WalletProvider          ← Freighter wallet state (context)
│   ├── Header              ← Connect/disconnect button, public key display
│   └── main
│       ├── DepositWithdraw ← Deposit USDC / withdraw shares
│       └── PoolList        ← Registered pools + APY display
```

## Data Flow

```
User clicks "Connect Wallet"
        │
        ▼
WalletProvider (Freighter API)
  isConnected() → getPublicKey()
        │  publicKey
        ▼
useBalance(publicKey)          useDeposit() / useWithdraw()
        │                               │
        ▼                               ▼
SorobanRpc.Server              TransactionBuilder
  simulateTransaction()          + Contract.call()
  → scValToNative()              + simulateTransaction()
  → share balance                + signTransaction() via Freighter
                                 + sendTransaction()
```

## Key Files

| File | Responsibility |
|------|---------------|
| `src/context/WalletContext.tsx` | Freighter connection state — `connect`, `disconnect`, `signTx` |
| `src/hooks/useContracts.ts` | All contract reads and writes — `useBalance`, `usePools`, `useDeposit`, `useWithdraw` |
| `src/components/Header.tsx` | Wallet connect/disconnect UI |
| `src/components/DepositWithdraw.tsx` | Deposit and withdraw form |
| `src/components/PoolList.tsx` | Pool registry table |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SOROBAN_RPC_URL` | Soroban RPC endpoint (default: testnet) |
| `VITE_NETWORK_PASSPHRASE` | Network passphrase |
| `VITE_VAULT_CONTRACT_ID` | Deployed vault contract address |
| `VITE_AGGREGATOR_CONTRACT_ID` | Deployed aggregator contract address |

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `@stellar/stellar-sdk` | Soroban RPC, TransactionBuilder, Contract, XDR encoding |
| `@stellar/freighter-api` | Browser wallet — connect, sign transactions |
| `vite` + `react` + `typescript` | Build tooling and UI framework |

## Implementation Status

| Feature | Status |
|---------|--------|
| App shell + routing | ✅ |
| Wallet context structure | ✅ skeleton |
| `connect` / `disconnect` | 🔲 issue #1 |
| `useBalance` | 🔲 issue #2 |
| `usePools` | 🔲 issue #3 |
| `useDeposit` | 🔲 issue #4 |
| `useWithdraw` | 🔲 issue #5 |

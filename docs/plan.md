# Build Plan

Ordered from most foundational to least critical.

---

## Phase 1 — Wallet Connection ✅ Skeleton
*Nothing works until the wallet is connected.*

| # | Task | Status |
|---|------|--------|
| 1.1 | App shell, component structure, CI | ✅ |
| 1.2 | `WalletProvider::connect` via Freighter | 🔲 issue #1 |
| 1.3 | `WalletProvider::disconnect` | 🔲 issue #1 |
| 1.4 | Header renders connected public key | 🔲 issue #1 |

---

## Phase 2 — Read Contract State
*Display live data from the contracts.*

| # | Task | Status |
|---|------|--------|
| 2.1 | `useBalance` — vault share balance | 🔲 issue #2 |
| 2.2 | `usePools` — aggregator pool registry + APYs | 🔲 issue #3 |

---

## Phase 3 — Write Transactions
*Users can deposit and withdraw.*

| # | Task | Status |
|---|------|--------|
| 3.1 | `useDeposit` — build, sign, submit deposit tx | 🔲 issue #4 |
| 3.2 | `useWithdraw` — build, sign, submit withdraw tx | 🔲 issue #5 |
| 3.3 | Transaction status feedback (pending / success / failed) | 🔲 |

---

## Phase 4 — Polish
*Production-ready UX.*

| # | Task | Notes |
|---|------|-------|
| 4.1 | GitHub Pages deploy workflow | Auto-deploy on push to main |
| 4.2 | Loading skeletons while data fetches | Replace "not implemented" placeholders |
| 4.3 | Error handling — show user-friendly messages on tx failure | |
| 4.4 | Mainnet / testnet network switcher | Read from env, allow override |

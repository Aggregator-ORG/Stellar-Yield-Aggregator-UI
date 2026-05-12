# Stellar Yield Aggregator — UI

Browser dashboard for the [Stellar Yield Aggregator](https://github.com/Aggregator-ORG/Stellar-Yield-Aggregator) protocol.

Connect your Freighter wallet, deposit USDC, and track your yield across Stellar liquidity pools.

## Status

🚧 **Early development.** Wallet connection and UI shell are working. Contract hooks are scaffolded — contributions welcome.

## Quick Start

```bash
cp .env.example .env   # add your contract IDs
npm install
npm run dev
```

Open `http://localhost:5173`.

## Project Structure

```
src/
  App.tsx                      # Root layout
  context/WalletContext.tsx    # Freighter wallet state
  hooks/useContracts.ts        # Contract interaction hooks (TODO)
  components/
    Header.tsx                 # Wallet connect / disconnect
    DepositWithdraw.tsx        # Deposit and withdraw panel
    PoolList.tsx               # Registered pools + APYs
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Issues are labeled by complexity.

## License

MIT

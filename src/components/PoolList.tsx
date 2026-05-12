/**
 * Displays registered liquidity pools and their APY estimates.
 *
 * TODO:
 * 1. Import `usePools` from `../hooks/useContracts`
 * 2. Destructure `{ pools, loading }` from `usePools()`
 * 3. While `loading` is true, show a loading spinner or "Loading pools…" text
 * 4. If `pools` is empty, show "No pools registered yet."
 * 5. Otherwise render a table with columns:
 *    - Pool Address (truncated: first 8 + last 4 chars, monospace font)
 *    - APY: convert `apy_bps` to percentage — `(apy_bps / 100).toFixed(2) + "%"`
 * 6. Highlight the row with the highest APY (this is the currently active pool)
 */
export function PoolList() {
  return (
    <div className="card">
      <h2>Liquidity Pools</h2>
      <p className="muted">
        {/* TODO: replace with pool table — see above */}
        Implement usePools() in hooks/useContracts.ts to display pools here.
      </p>
    </div>
  );
}

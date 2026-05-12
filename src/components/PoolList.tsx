import { usePools } from "../hooks/useContracts";

/**
 * Displays registered liquidity pools and their APYs.
 *
 * TODO: wire up usePools() once contract hooks are implemented.
 */
export function PoolList() {
  const { pools, loading } = usePools();

  if (loading) return <p className="muted">Loading pools…</p>;

  if (pools.length === 0) {
    return (
      <div className="card">
        <h2>Liquidity Pools</h2>
        <p className="muted">No pools registered yet.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Liquidity Pools</h2>
      <table className="pool-table">
        <thead>
          <tr>
            <th>Pool Address</th>
            <th>APY</th>
          </tr>
        </thead>
        <tbody>
          {pools.map((p) => (
            <tr key={p.address}>
              <td className="mono">
                {p.address.slice(0, 8)}…{p.address.slice(-4)}
              </td>
              <td>{(p.apy_bps / 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

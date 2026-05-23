import './index.css';
import { useAggregations } from './hooks/useAggregations';
import StatCard from './components/StatCard';
import ActiveStatusChart from './components/ActiveStatusChart';
import MaritalStatusChart from './components/MaritalStatusChart';
import UsersTable from './components/UsersTable';

function App() {
  const { data, loading, error } = useAggregations();

  const avgAge = data.avgAge?.AggregationResult?.[0]?.AverageAge?.toFixed(1) ?? '—';
  const engineerCount = data.engineers?.AggregationResult?.[0]?.['number of Engineers'] ?? '—';
  const totalUsers = data.users?.length ?? '—';
  const activeCount = data.activeStatus?.AggregationResult?.find((d) => d._id === true)?.count ?? '—';
  const activePercent = totalUsers !== '—' && activeCount !== '—'
    ? `${Math.round((activeCount / totalUsers) * 100)}%`
    : '60%';

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', height: '100vh', background: '#04040a' }}>

      {/* ── Header ── */}
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 28px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg,#8b5cf6,#ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13, color: '#fff', boxShadow: '0 0 16px rgba(139,92,246,0.5)' }}>A</div>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 15, letterSpacing: '-0.3px' }}>AggregationPipeline</span>
          <span style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 99, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Dashboard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ color: '#334155', fontSize: 12, fontFamily: 'monospace' }}>mongodb://localhost</span>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px rgba(52,211,153,0.8)' }} />
        </div>
      </header>

      {/* ── Main grid ── */}
      <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1.6fr', gap: 16, padding: 16, overflow: 'hidden' }}>

        {loading && (
          <div style={{ gridColumn: '1/-1', gridRow: '1/-1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="w-10 h-10 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
          </div>
        )}

        {error && (
          <div style={{ gridColumn: '1/-1', gridRow: '1/-1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.08)', borderRadius: 16, padding: '24px 32px', color: '#f87171', fontSize: 14 }}>
              Backend not reachable — make sure the server is running on port 8999.
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Row 1 — stat cards */}
            <div style={{ gridColumn: 1, gridRow: 1 }}>
              <StatCard title="Total Users" value={totalUsers} subtitle="documents in collection" icon="USR" color="violet" trend="100%" />
            </div>
            <div style={{ gridColumn: 2, gridRow: 1 }}>
              <StatCard title="Average Age" value={avgAge} subtitle="mean across all users" icon="AGE" color="cyan" trend="55%" />
            </div>
            <div style={{ gridColumn: 3, gridRow: 1 }}>
              <StatCard title="Active Users" value={activeCount} subtitle="currently active" icon="ACT" color="emerald" trend={activePercent} />
            </div>
            <div style={{ gridColumn: 4, gridRow: 1 }}>
              <StatCard title="Engineers" value={engineerCount} subtitle="matched profession" icon="ENG" color="pink" trend="10%" />
            </div>

            {/* Row 2 — charts */}
            <div style={{ gridColumn: '1 / 3', gridRow: 2 }}>
              <ActiveStatusChart data={data.activeStatus} />
            </div>
            <div style={{ gridColumn: '3 / 5', gridRow: 2 }}>
              <MaritalStatusChart data={data.maritalStatus} />
            </div>

            {/* Row 3 — table */}
            <div style={{ gridColumn: '1 / -1', gridRow: 3, overflow: 'hidden' }}>
              <UsersTable users={data.users} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

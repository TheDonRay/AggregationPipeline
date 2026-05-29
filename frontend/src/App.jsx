import './index.css';
import { useAggregations } from './hooks/useAggregations';
import StatCard from './components/StatCard';
import ActiveStatusChart from './components/ActiveStatusChart';
import MaritalStatusChart from './components/MaritalStatusChart';
import UsersTable from './components/UsersTable';

function App() {
  const { data, loading, error } = useAggregations();

  const avgAge      = data.avgAge?.AggregationResult?.[0]?.AverageAge?.toFixed(1) ?? '—';
  const engineerCount = data.engineers?.AggregationResult?.[0]?.['number of Engineers'] ?? '—';
  const totalUsers  = data.users?.length ?? '—';
  const activeCount = data.activeStatus?.AggregationResult?.find((d) => d._id === true)?.count ?? '—';
  const activePercent =
    totalUsers !== '—' && activeCount !== '—'
      ? Math.round((activeCount / totalUsers) * 100)
      : 60;

  if (loading) {
    return (
      <div className="loading-screen">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div className="spinner" />
          <p style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-3)', fontFamily: "'IBM Plex Mono', monospace" }}>
            Initializing
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <div className="card" style={{ padding: '28px 36px', textAlign: 'center', maxWidth: 400 }}>
          <div style={{ fontSize: 28, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em', color: 'var(--steel)', marginBottom: 10 }}>
            Connection Failed
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-3)', fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.6 }}>
            Backend not reachable — ensure the server is running on port 8999.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* ── Header ── */}
      <header className="dashboard-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="header-logo-mark">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" fill="var(--steel)" opacity="0.9" />
              <rect x="8" y="1" width="5" height="5" rx="1" fill="var(--steel)" opacity="0.5" />
              <rect x="1" y="8" width="5" height="5" rx="1" fill="var(--steel)" opacity="0.5" />
              <rect x="8" y="8" width="5" height="5" rx="1" fill="var(--steel)" opacity="0.25" />
            </svg>
          </div>
          <div className="header-divider" />
          <span style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-1)' }}>
            Aggregation Pipeline
          </span>
          <span style={{ display: 'none', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: 'var(--text-3)', background: 'var(--s3)', border: '1px solid var(--rim-2)', padding: '2px 8px', borderRadius: 4, letterSpacing: '0.05em' }}
            className="sm-show"
          >
            Analytics
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: 'var(--text-3)', display: 'none' }}
            className="md-show"
          >
            mongodb://localhost:27017
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div className="conn-dot" />
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--steel)', fontFamily: "'Barlow Semi Condensed', sans-serif" }}>
              Live
            </span>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="dashboard-main">
        {/* Stats */}
        <div className="stats-grid">
          <div className="anim-1">
            <StatCard title="Total Users"   value={totalUsers}    subtitle="documents in collection" icon="USR" trend={78} />
          </div>
          <div className="anim-2">
            <StatCard title="Average Age"   value={avgAge}        subtitle="mean across all users"   icon="AGE" unit="yrs" trend={52} />
          </div>
          <div className="anim-3">
            <StatCard title="Active Users"  value={activeCount}   subtitle="currently active"        icon="ACT" trend={activePercent} />
          </div>
          <div className="anim-4">
            <StatCard title="Engineers"     value={engineerCount} subtitle="matched profession"       icon="ENG" trend={34} />
          </div>
        </div>

        {/* Charts */}
        <div className="charts-grid">
          <div className="anim-5">
            <ActiveStatusChart data={data.activeStatus} />
          </div>
          <div className="anim-6">
            <MaritalStatusChart data={data.maritalStatus} />
          </div>
        </div>

        {/* Table */}
        <div className="table-section anim-7">
          <UsersTable users={data.users} />
        </div>
      </main>
    </div>
  );
}

export default App;

const COLUMNS = ['Name', 'Email', 'Age', 'Profession', 'Status', 'Marital'];

const UsersTable = ({ users }) => (
  <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
    {/* Table header bar */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid var(--rim-1)', flexShrink: 0 }}>
      <span className="chart-label">User Directory</span>
      <span style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 10,
        color: 'var(--steel)',
        background: 'var(--s3)',
        border: '1px solid var(--rim-2)',
        padding: '3px 10px',
        borderRadius: 99,
        letterSpacing: '0.06em',
      }}>
        {users?.length ?? 0} records
      </span>
    </div>

    {/* Scrollable body */}
    <div style={{ flex: 1, overflowY: 'auto', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
        <thead style={{ position: 'sticky', top: 0, zIndex: 10, background: 'var(--s0)' }}>
          <tr className="table-header-row" style={{ borderBottom: '1px solid var(--rim-1)' }}>
            {COLUMNS.map((h) => <th key={h}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {users?.map((u, i) => (
            <tr key={i} className="table-row">
              {/* Name */}
              <td style={{ paddingLeft: 18, paddingRight: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: 'var(--s3)',
                    border: '1px solid var(--rim-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 600,
                    color: 'var(--steel)',
                    flexShrink: 0,
                    fontFamily: "'Barlow Semi Condensed', sans-serif",
                    letterSpacing: '0.05em',
                  }}>
                    {u.name?.charAt(0).toUpperCase() ?? '?'}
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: 13, whiteSpace: 'nowrap' }}>{u.name}</span>
                </div>
              </td>

              {/* Email */}
              <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'var(--text-3)', paddingLeft: 18, paddingRight: 18 }}>
                {u.email}
              </td>

              {/* Age */}
              <td style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: 'var(--text-2)', paddingLeft: 18, paddingRight: 18 }}>
                {u.age}
              </td>

              {/* Profession */}
              <td style={{ fontSize: 12, color: 'var(--text-2)', paddingLeft: 18, paddingRight: 18 }}>{u.profession}</td>

              {/* Status badge */}
              <td style={{ paddingLeft: 18, paddingRight: 18 }}>
                <span className={u.isActive ? 'badge-active' : 'badge-inactive'}>
                  <span className={u.isActive ? 'dot-active' : 'dot-inactive'} />
                  {u.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>

              {/* Marital */}
              <td style={{ fontSize: 12, color: 'var(--text-3)', textTransform: 'capitalize', paddingLeft: 18, paddingRight: 18 }}>
                {u.maritalStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UsersTable;

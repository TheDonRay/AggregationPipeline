const ICONS = {
  USR: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="4.5" r="2.5" fill="var(--steel)" opacity="0.9" />
      <path d="M1.5 12c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5" stroke="var(--steel)" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  AGE: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="var(--steel)" strokeWidth="1.3" opacity="0.6" />
      <path d="M7 4v3.5l2 1.5" stroke="var(--steel)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  ),
  ACT: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <polyline points="1,9 4,5 6,8 9,3 13,7" stroke="var(--steel)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </svg>
  ),
  ENG: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="2" fill="var(--steel)" opacity="0.9" />
      <path d="M7 1v2M7 11v2M1 7h2M11 7h2M2.93 2.93l1.41 1.41M9.66 9.66l1.41 1.41M2.93 11.07l1.41-1.41M9.66 4.34l1.41-1.41" stroke="var(--steel)" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
};

const StatCard = ({ title, value, subtitle, icon, unit, trend = 60 }) => (
  <div className="card" style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
    {/* Top row */}
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
      <span className="stat-label">{title}</span>
      <div className="stat-icon">{ICONS[icon]}</div>
    </div>

    {/* Value */}
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
      <span className="stat-value">{value}</span>
      {unit && (
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.05em', paddingBottom: 4 }}>
          {unit}
        </span>
      )}
    </div>

    {/* Bottom */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="stat-sub">{subtitle}</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: 'var(--steel)', letterSpacing: '0.05em' }}>
          {trend}%
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${trend}%` }} />
      </div>
    </div>
  </div>
);

export default StatCard;

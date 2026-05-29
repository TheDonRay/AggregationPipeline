import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

/* Two-tone grey palette: bright steel vs deep charcoal */
const COLORS = ['#aebece', '#1e2430'];
const LABELS = ['Active', 'Inactive'];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: 2, fontSize: 12 }}>{payload[0].name}</p>
      <p style={{ color: 'var(--text-2)', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}>{payload[0].value} users</p>
    </div>
  );
};

const ActiveStatusChart = ({ data }) => {
  const chartData = data?.AggregationResult?.map((d, i) => ({
    name: d._id ? 'Active' : 'Inactive',
    value: d.count,
  })) ?? [];

  const total = chartData.reduce((s, d) => s + d.value, 0);

  return (
    <div className="card" style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 220 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span className="chart-label">Active vs Inactive</span>
        <span className="chart-count">{total} total</span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16, minHeight: 0 }}>
        {/* Donut */}
        <div style={{ width: '48%', height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={78}
                dataKey="value"
                paddingAngle={4}
                strokeWidth={0}
              >
                {chartData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {chartData.map((d, i) => (
            <div key={i}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: COLORS[i], display: 'block', flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: 'var(--text-2)', fontWeight: 500 }}>{d.name}</span>
                </div>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: 'var(--text-1)', fontWeight: 500 }}>{d.value}</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: total ? `${(d.value / total) * 100}%` : '0%',
                    background: i === 0
                      ? 'linear-gradient(90deg, var(--steel-lo), var(--steel-hi))'
                      : 'linear-gradient(90deg, var(--s3), var(--s5))',
                  }}
                />
              </div>
            </div>
          ))}

          {/* Percentage label */}
          {total > 0 && chartData[0] && (
            <div style={{ marginTop: 4, paddingTop: 12, borderTop: '1px solid var(--rim-1)' }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: 'var(--steel-hi)', letterSpacing: '0.03em', lineHeight: 1 }}>
                {Math.round((chartData[0].value / total) * 100)}
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: 'var(--text-3)', marginLeft: 2 }}>%</span>
              </span>
              <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 2 }}>
                Active rate
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveStatusChart;

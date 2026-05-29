import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

/* 4-step grey scale from bright to deep */
const COLORS = ['#b4c0ce', '#7a8898', '#46525e', '#222c38'];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p style={{ fontWeight: 600, color: 'var(--text-1)', marginBottom: 2, fontSize: 12 }}>{label}</p>
      <p style={{ color: 'var(--text-2)', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11 }}>{payload[0].value} users</p>
    </div>
  );
};

const MaritalStatusChart = ({ data }) => {
  const chartData = data?.AggregationResult?.map((d) => ({
    name: d._id.charAt(0).toUpperCase() + d._id.slice(1),
    count: d.count,
  })) ?? [];

  return (
    <div className="card" style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', height: '100%', minHeight: 220 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span className="chart-label">Marital Status</span>
        <span className="chart-count">{chartData.length} groups</span>
      </div>

      {/* Chart */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={chartData} barSize={32} barGap={6} margin={{ top: 4, right: 4, left: -18, bottom: 0 }}>
            <XAxis
              dataKey="name"
              tick={{ fill: 'var(--text-3)', fontSize: 11, fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 500, letterSpacing: '0.04em' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: 'var(--text-3)', fontSize: 10, fontFamily: "'IBM Plex Mono', monospace" }}
              axisLine={false}
              tickLine={false}
              width={28}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255,255,255,0.02)', radius: 6 }}
            />
            <Bar dataKey="count" radius={[6, 6, 2, 2]}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom legend dots */}
      <div style={{ display: 'flex', gap: 14, marginTop: 10, flexWrap: 'wrap' }}>
        {chartData.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: COLORS[i % COLORS.length], display: 'block', flexShrink: 0 }} />
            <span style={{ fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.06em' }}>{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaritalStatusChart;

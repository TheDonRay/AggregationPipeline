import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#8b5cf6', '#6366f1', '#ec4899'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#0d0d1a] border border-white/10 rounded-xl px-4 py-3 text-sm shadow-xl">
        <p className="font-semibold text-white">{label}</p>
        <p className="text-slate-400">{payload[0].value} users</p>
      </div>
    );
  }
  return null;
};

const MaritalStatusChart = ({ data }) => {
  const chartData = data?.AggregationResult?.map((d) => ({
    name: d._id.charAt(0).toUpperCase() + d._id.slice(1),
    count: d.count,
  })) ?? [];

  return (
    <div className="rounded-2xl border border-pink-500/20 bg-white/[0.03] glow-pink p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-400">Marital Status</p>
        <span className="text-xs text-slate-500 font-mono">{chartData.length} groups</span>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} barSize={40} barGap={8}>
            <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} width={24} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)', radius: 6 }} />
            <Bar dataKey="count" radius={[8, 8, 0, 0]}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MaritalStatusChart;

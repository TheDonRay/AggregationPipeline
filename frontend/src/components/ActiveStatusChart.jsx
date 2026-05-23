import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#8b5cf6', '#ec4899'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#0d0d1a] border border-white/10 rounded-xl px-4 py-3 text-sm shadow-xl">
        <p className="font-semibold text-white">{payload[0].name}</p>
        <p className="text-slate-400">{payload[0].value} users</p>
      </div>
    );
  }
  return null;
};

const ActiveStatusChart = ({ data }) => {
  const chartData = data?.AggregationResult?.map((d) => ({
    name: d._id ? 'Active' : 'Inactive',
    value: d.count,
  })) ?? [];

  const total = chartData.reduce((s, d) => s + d.value, 0);

  return (
    <div className="rounded-2xl border border-violet-500/20 bg-white/[0.03] glow-violet p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">Active vs Inactive</p>
        <span className="text-xs text-slate-500 font-mono">{total} total</span>
      </div>
      <div className="flex-1 flex items-center gap-6">
        <ResponsiveContainer width="55%" height={200}>
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={6} strokeWidth={0}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col gap-4 flex-1">
          {chartData.map((d, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: COLORS[i] }} />
                  <span className="text-sm text-slate-300">{d.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{d.value}</span>
              </div>
              <div className="h-1 w-full rounded-full bg-white/5">
                <div className="h-full rounded-full transition-all" style={{ width: `${(d.value / total) * 100}%`, background: COLORS[i] }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveStatusChart;

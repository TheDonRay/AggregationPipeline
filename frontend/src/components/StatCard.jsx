const themes = {
  violet: {
    border: 'border-violet-500/30',
    glow: 'glow-violet',
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
    bar: 'bg-violet-500',
    text: 'text-violet-400',
    badge: 'bg-violet-500/10 text-violet-300',
  },
  pink: {
    border: 'border-pink-500/30',
    glow: 'glow-pink',
    gradient: 'from-pink-500/20 via-pink-500/5 to-transparent',
    bar: 'bg-pink-500',
    text: 'text-pink-400',
    badge: 'bg-pink-500/10 text-pink-300',
  },
  cyan: {
    border: 'border-cyan-500/30',
    glow: 'glow-cyan',
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    bar: 'bg-cyan-500',
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/10 text-cyan-300',
  },
  emerald: {
    border: 'border-emerald-500/30',
    glow: 'glow-emerald',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    bar: 'bg-emerald-500',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/10 text-emerald-300',
  },
};

const StatCard = ({ title, value, subtitle, icon, color = 'violet', trend }) => {
  const t = themes[color];
  return (
    <div className={`relative overflow-hidden rounded-2xl border ${t.border} bg-white/[0.03] ${t.glow} p-5 flex flex-col justify-between h-full`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} pointer-events-none`} />
      <div className="relative flex items-start justify-between mb-4">
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.text}`}>{title}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${t.badge}`}>{icon}</span>
      </div>
      <div className="relative">
        <p className="text-5xl font-black text-white tabular-nums leading-none">{value}</p>
        <p className="mt-2 text-xs text-slate-500">{subtitle}</p>
      </div>
      <div className={`relative mt-4 h-0.5 w-full rounded-full bg-white/5`}>
        <div className={`h-full rounded-full ${t.bar}`} style={{ width: trend ?? '60%' }} />
      </div>
    </div>
  );
};

export default StatCard;

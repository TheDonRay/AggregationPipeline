const UsersTable = ({ users }) => (
  <div className="rounded-2xl border border-cyan-500/20 bg-white/[0.03] glow-cyan flex flex-col h-full overflow-hidden">
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">User Directory</p>
      <span className="text-xs font-mono bg-cyan-500/10 text-cyan-300 px-2.5 py-1 rounded-full">{users?.length ?? 0} records</span>
    </div>
    <div className="overflow-y-auto flex-1">
      <table className="w-full text-sm">
        <thead className="sticky top-0 bg-[#06060f] z-10">
          <tr className="border-b border-white/5">
            {['Name', 'Email', 'Age', 'Profession', 'Status', 'Marital'].map((h) => (
              <th key={h} className="px-6 py-3 text-left text-[10px] font-bold text-slate-600 uppercase tracking-[0.15em]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users?.map((u, i) => (
            <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors group">
              <td className="px-6 py-3 font-semibold text-white group-hover:text-violet-300 transition-colors">{u.name}</td>
              <td className="px-6 py-3 text-slate-500 font-mono text-xs">{u.email}</td>
              <td className="px-6 py-3 text-slate-400 font-mono">{u.age}</td>
              <td className="px-6 py-3 text-slate-400">{u.profession}</td>
              <td className="px-6 py-3">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${u.isActive ? 'bg-violet-500/15 text-violet-300 border border-violet-500/20' : 'bg-white/5 text-slate-500 border border-white/5'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${u.isActive ? 'bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]' : 'bg-slate-600'}`} />
                  {u.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="px-6 py-3 text-slate-400 capitalize">{u.maritalStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UsersTable;

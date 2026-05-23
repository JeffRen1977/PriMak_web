const modules = [
  { id: "MOD-01", name: "Deal Flow", status: "ACTIVE", load: 78 },
  { id: "MOD-02", name: "Portfolio Intel", status: "ACTIVE", load: 62 },
  { id: "MOD-03", name: "Compliance", status: "ACTIVE", load: 45 },
  { id: "MOD-04", name: "Distribution", status: "STANDBY", load: 12 },
];

const bars = [40, 65, 55, 80, 72, 90, 68, 85, 78, 92, 88, 95];

export default function CockpitDashboard() {
  return (
    <aside className="cockpit-panel w-full overflow-hidden shadow-md" aria-label="System dashboard preview">
      <header className="cockpit-panel-label flex items-center justify-between">
        <span>PriMarkA OS · Command View</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="signal-dot inline-block h-1.5 w-1.5 rounded-full bg-signal" />
          ONLINE
        </span>
      </header>

      <section className="space-y-4 p-4 font-mono text-[11px] lg:p-5">
        <ul className="grid grid-cols-2 gap-3">
          <Metric label="Private Markets" value="$14T+" sub="Total addressable" />
          <Metric label="Latency" value="12ms" sub="Orchestration layer" />
          <Metric label="Modules" value="04" sub="Core systems active" />
          <Metric label="Coverage" value="360°" sub="Portfolio visibility" />
        </ul>

        <figure className="cockpit-inset p-3">
          <figcaption className="mb-2 text-[10px] uppercase tracking-widest text-slate-500">
            Market Activity Index
          </figcaption>
          <div className="flex h-16 items-end gap-1" role="img" aria-label="Activity chart">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-teal-600 to-cyan-500"
                style={{ height: `${h}%`, opacity: 0.35 + (i / bars.length) * 0.55 }}
              />
            ))}
          </div>
        </figure>

        <section className="space-y-1.5">
          <p className="text-[10px] uppercase tracking-widest text-slate-500">Active Modules</p>
          {modules.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between cockpit-inset px-3 py-2"
            >
              <span className="flex items-center gap-3">
                <span className="text-teal-600/70">{m.id}</span>
                <span className="text-slate-700">{m.name}</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="hidden h-1 w-16 overflow-hidden bg-slate-200 sm:inline-block">
                  <span
                    className="block h-full bg-gradient-to-r from-cyan-500 to-teal-500"
                    style={{ width: `${m.load}%` }}
                  />
                </span>
                <span className={m.status === "ACTIVE" ? "text-signal" : "text-slate-400"}>
                  {m.status}
                </span>
              </span>
            </div>
          ))}
        </section>

        <footer className="flex items-center justify-between border-t border-slate-200 pt-3 text-[10px] text-slate-500">
          <span>SYS::PRIVATE_CAPITAL_OS</span>
          <span>v2.4.1 · ENCRYPTED</span>
        </footer>
      </section>
    </aside>
  );
}

function Metric({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <li className="cockpit-inset p-3">
      <p className="text-[10px] uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-teal-700">{value}</p>
      <p className="text-[10px] text-slate-500">{sub}</p>
    </li>
  );
}

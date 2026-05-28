const modules = [
  { id: "MOD-01", name: "Onboarding & KYC", status: "ACTIVE", load: 78 },
  { id: "MOD-02", name: "Portfolio Intel", status: "ACTIVE", load: 62 },
  { id: "MOD-03", name: "Compliance Engine", status: "ACTIVE", load: 45 },
  { id: "MOD-04", name: "Settlement Rail", status: "STANDBY", load: 12 },
];

const bars = [40, 65, 55, 80, 72, 90, 68, 85, 78, 92, 88, 95];

export default function CockpitDashboard() {
  return (
    <aside className="cockpit-panel w-full overflow-hidden" aria-label="System dashboard preview">
      <header className="cockpit-panel-label flex items-center justify-between">
        <span>PriMarkA OS · Command View</span>
        <span className="flex items-center gap-2 text-velocity-teal">
          <span className="signal-dot inline-block h-1.5 w-1.5 rounded-full bg-velocity-teal" />
          ONLINE
        </span>
      </header>

      <section className="space-y-4 p-4 font-mono text-[11px] lg:p-5">
        <ul className="grid grid-cols-2 gap-3">
          <Metric label="Private Capital" value="$14T+" sub="Global AUM addressable" />
          <Metric label="Latency" value="12ms" sub="Orchestration layer" alert />
          <Metric label="Modules" value="04" sub="Core systems active" />
          <Metric label="Coverage" value="360°" sub="Lifecycle visibility" />
        </ul>

        <figure className="cockpit-inset p-3">
          <figcaption className="mb-2 text-[10px] uppercase tracking-widest text-institutional-silver/50">
            Capital Flow Index
          </figcaption>
          <div className="flex h-16 items-end gap-1" role="img" aria-label="Activity chart">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-velocity-teal/60 to-velocity-teal"
                style={{ height: `${h}%`, opacity: 0.3 + (i / bars.length) * 0.6 }}
              />
            ))}
          </div>
        </figure>

        <section className="space-y-1.5">
          <p className="text-[10px] uppercase tracking-widest text-institutional-silver/50">
            Active Modules
          </p>
          {modules.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between cockpit-inset px-3 py-2"
            >
              <span className="flex items-center gap-3">
                <span className="text-velocity-teal/60">{m.id}</span>
                <span className="text-institutional-silver">{m.name}</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="hidden h-1 w-16 overflow-hidden bg-deep-space sm:inline-block">
                  <span
                    className="block h-full bg-velocity-teal"
                    style={{ width: `${m.load}%` }}
                  />
                </span>
                <span className={m.status === "ACTIVE" ? "text-velocity-teal" : "text-institutional-silver/40"}>
                  {m.status}
                </span>
              </span>
            </div>
          ))}
        </section>

        <footer className="flex items-center justify-between border-t border-velocity-teal/10 pt-3 text-[10px] text-institutional-silver/40">
          <span>SYS::PRIVATE_CAPITAL_OS</span>
          <span>v2.4.1 · ENCRYPTED</span>
        </footer>
      </section>
    </aside>
  );
}

function Metric({
  label,
  value,
  sub,
  alert,
}: {
  label: string;
  value: string;
  sub: string;
  alert?: boolean;
}) {
  return (
    <li className="cockpit-inset p-3">
      <p className="text-[10px] uppercase tracking-wider text-institutional-silver/50">{label}</p>
      <p className={`mt-1 text-lg font-semibold ${alert ? "metric-alert" : "text-velocity-teal"}`}>
        {value}
      </p>
      <p className="text-[10px] text-institutional-silver/40">{sub}</p>
    </li>
  );
}

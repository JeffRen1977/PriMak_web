export default function CockpitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-os-bg" />
      <div className="cockpit-grid-bg absolute inset-0" />
      <div className="cockpit-scanline absolute inset-0 opacity-40" />
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />
      <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-teal-400/[0.05] blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/15 to-transparent" />
    </div>
  );
}

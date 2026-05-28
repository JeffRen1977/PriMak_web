export default function CockpitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-deep-space" />
      <div className="cockpit-grid-bg absolute inset-0" />
      <div className="absolute -right-1/4 -top-1/4 h-[700px] w-[700px] rounded-full bg-velocity-teal/[0.06] blur-[140px]" />
      <div className="absolute -bottom-1/3 -left-1/4 h-[500px] w-[500px] rounded-full bg-sovereign-navy/80 blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-velocity-teal/20 to-transparent" />
    </div>
  );
}

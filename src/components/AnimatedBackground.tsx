function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Moving grid */}
      <div className="civic-grid absolute inset-0" />

      {/* Soft radial glows */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-emerald-200/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />

      {/* Floating "city nodes" */}
      <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-blue-500/70" style={{ animation: 'float-node 6s ease-in-out infinite' }} />
      <div className="absolute left-[78%] top-[30%] h-2.5 w-2.5 rounded-full bg-emerald-500/70" style={{ animation: 'float-node 7s ease-in-out infinite 1s' }} />
      <div className="absolute left-[40%] top-[68%] h-3 w-3 rounded-full bg-sky-500/60" style={{ animation: 'float-node 8s ease-in-out infinite 0.5s' }} />
      <div className="absolute left-[88%] top-[70%] h-2 w-2 rounded-full bg-blue-400/60" style={{ animation: 'float-node 5.5s ease-in-out infinite 1.5s' }} />
      <div className="absolute left-[25%] top-[45%] h-2 w-2 rounded-full bg-emerald-400/60" style={{ animation: 'float-node 9s ease-in-out infinite 2s' }} />

      {/* Pulse markers (like civic report pins) */}
      <div className="pulse-ring absolute left-[15%] top-[55%] h-3 w-3 rounded-full bg-blue-500" />
      <div className="pulse-ring absolute left-[70%] top-[40%] h-3 w-3 rounded-full bg-emerald-500" style={{ animationDelay: '1.2s' }} />
    </div>
  );
}

export default AnimatedBackground;

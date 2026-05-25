export default function ClientPortalHome() {
  return (
    <main className="min-h-screen p-6 md:p-12 flex flex-col justify-between max-w-7xl mx-auto">
      {/* Top Navigation Frame */}
      <header className="border-b border-industrial-grey/20 pb-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-sage" />
          <span className="font-bold tracking-wider text-sm uppercase">IKKE & CO. // SYSTEM-01</span>
        </div>
        <nav className="text-xs uppercase tracking-widest text-industrial-grey font-semibold space-x-6">
          <span className="hover:text-industrial-black cursor-pointer transition-colors">BOUTIQUE</span>
          <span className="hover:text-industrial-black cursor-pointer transition-colors">CLINIC</span>
          <span className="hover:text-industrial-black cursor-pointer transition-colors">PORTAL_LOG</span>
        </nav>
      </header>

      {/* Main Structural Hero Layout */}
      <section className="my-16 md:my-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <h1 className="text-industrial-black">
            UNIFIED <br />
            PET ECOSYSTEM.
          </h1>
          <p className="max-w-md text-sm text-industrial-grey leading-relaxed font-sans">
            A precise, premium network architecture supporting high-end retail procurement, clinical health automation, and advanced patient lifecycle records.
          </p>
        </div>

        {/* Tactical Metric Block */}
        <div className="lg:col-span-4 border border-industrial-black p-6 bg-industrial-black text-cream space-y-4">
          <div className="text-xs font-mono text-sage tracking-widest uppercase">// CORE METRIC</div>
          <div className="text-3xl font-bold font-mono tracking-tight">STATUS: ONLINE</div>
          <p className="text-xs text-cream/70 leading-normal font-sans">
            Connected cleanly to master datastore database instances. Relational schema models initialized successfully.
          </p>
        </div>
      </section>

      {/* Bottom Structural Grid Footer */}
      <footer className="border-t border-industrial-grey/20 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] text-industrial-grey uppercase tracking-widest font-mono">
        <div>
          <span className="block text-industrial-black font-bold">FRAMEWORK</span>
          NEXT.JS 16 // REACT 19
        </div>
        <div>
          <span className="block text-industrial-black font-bold">STYLING ARCHITECTURE</span>
          TAILWIND CSS V4.0
        </div>
        <div>
          <span className="block text-industrial-black font-bold">DATABASE ACCESS LAYER</span>
          PRISMA ORM v7+ / SUPABASE
        </div>
        <div className="text-right flex flex-col justify-end items-end">
          <span className="w-2 h-2 bg-sage animate-pulse mb-1" />
          SYS_MNGMNT: ONLINE
        </div>
      </footer>
    </main>
  );
}
import React from 'react';
import { getProductCatalog } from './actions/inventory';

export default async function ClientPortalHome() {
  const catalogResponse = await getProductCatalog();
  const products = catalogResponse?.success && catalogResponse.data ? catalogResponse.data : [];

  return (
    <main className="min-h-screen p-6 md:p-12 flex flex-col justify-between max-w-7xl mx-auto">
      {/* Structural System Header */}
      <header className="border-b border-industrial-grey/20 pb-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-sage" />
          <span className="font-bold tracking-wider text-sm uppercase">IKKE & CO. // CORE-SYS</span>
        </div>
        <nav className="text-xs uppercase tracking-widest text-industrial-grey font-semibold space-x-6">
          <span className="hover:text-industrial-black text-industrial-black border-b-2 border-industrial-black pb-1 cursor-pointer transition-all">BOUTIQUE</span>
          <span className="hover:text-industrial-black cursor-pointer transition-colors">CLINIC</span>
          <span className="hover:text-industrial-black cursor-pointer transition-colors">PORTAL_LOG</span>
        </nav>
      </header>

      {/* Main Structural Hero Layout */}
      <section className="my-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <h1 className="text-industrial-black">
            UNIFIED <br />
            PET ECOSYSTEM.
          </h1>
          <p className="max-w-md text-sm text-industrial-grey leading-relaxed font-sans">
            A precise, premium network architecture supporting high-end retail procurement, clinical health automation, and advanced patient lifecycle records.
          </p>
        </div>

        {/* Live System Operational Monitoring Card */}
        <div className="lg:col-span-4 border border-industrial-black p-6 bg-industrial-black text-cream space-y-4">
          <div className="text-xs font-mono text-sage tracking-widest uppercase">// INFRASTRUCTURE_METRIC</div>
          <div className="text-2xl font-bold font-mono tracking-tight">STATUS: ACTIVE</div>
          <p className="text-xs text-cream/70 leading-normal font-sans">
            Connected cleanly to master datastore database instances. Relational Prisma 7 schema models initialized successfully.
          </p>
        </div>
      </section>

      {/* Dynamic Inventory Procurement Layer */}
      <section className="my-12 space-y-6">
        <div className="flex justify-between items-end border-b border-industrial-black pb-2">
          <h2 className="text-xl font-mono tracking-tight">// ACTIVE_PRODUCT_CATALOG.SYS</h2>
          <span className="text-xs font-mono text-industrial-grey">SHOWING {products.length} ENTITIES</span>
        </div>

        {catalogResponse?.success === false && (
          <div className="border border-red-500/30 bg-red-500/10 p-4 text-xs font-mono text-red-700">
            [ERROR_SIG]: {catalogResponse.error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <div 
              key={product.id} 
              className="border border-industrial-grey/30 p-6 flex flex-col justify-between bg-white hover:border-industrial-black transition-all group"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start text-[10px] font-mono tracking-widest text-industrial-grey">
                  <span>SKU: {product.sku}</span>
                  <span className={`px-2 py-0.5 border ${product.stock > 15 ? 'border-sage text-sage' : 'border-amber-600 text-amber-600'}`}>
                    QTY: {product.stock}
                  </span>
                </div>
                <h3 className="font-bold text-sm tracking-tight text-industrial-black group-hover:text-sage transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-industrial-grey leading-relaxed font-sans line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-industrial-grey/15 flex justify-between items-center">
                <span className="font-mono font-bold text-base text-industrial-black">
                  ${Number(product.price).toFixed(2)}
                </span>
                <button className="bg-industrial-black text-cream hover:bg-sage text-xs font-mono px-4 py-2 uppercase tracking-wider transition-colors">
                  SELECT_ITEM
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industrial Grid Footer */}
      <footer className="border-t border-industrial-grey/20 pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] text-industrial-grey uppercase tracking-widest font-mono">
        <div>
          <span className="block text-industrial-black font-bold">FRAMEWORK BASE</span>
          NEXT.JS 16 // REACT 19
        </div>
        <div>
          <span className="block text-industrial-black font-bold">STYLING ENGINE</span>
          TAILWIND CSS V4.0
        </div>
        <div>
          <span className="block text-industrial-black font-bold">DATA CAPTURE LAYER</span>
          PRISMA v7 // SUPABASE
        </div>
        <div className="text-right flex flex-col justify-end items-end">
          <span className="w-2 h-2 bg-sage animate-pulse mb-1" />
          SYS_MNGMNT: ONLINE
        </div>
      </footer>
    </main>
  );
}
'use server';

import { prisma } from '@ikke/database';

/**
 * Fetches the active product catalog directly from our shared database workspace.
 * If the database is empty, it returns a hardcoded baseline layout matching our system aesthetics.
 */
export async function getProductCatalog() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
      take: 6,
    });

    if (products.length > 0) {
      return { success: true, data: products };
    }

    // Fallback baseline data if your Supabase tables haven't been seeded yet
    return {
      success: true,
      data: [
        { id: '1', sku: 'IKKE-001', name: 'TACTICAL PATIENT HARNESS // V1', description: 'Industrial grade multi-point restraint system built for clinical veterinary processing.', price: 189.00, stock: 12 },
        { id: '2', sku: 'IKKE-002', name: 'ORGANIC AMINO KIBBLE BASE', description: 'Zero-filler macro dietary fuel optimized for high-performance service animals.', price: 64.50, stock: 45 },
        { id: '3', sku: 'IKKE-003', name: 'MONOCHROME CLINICAL BOWL // MATTE', description: 'Heavyweight reinforced ceramic containment vessel featuring a non-slip weighted silicone base.', price: 32.00, stock: 18 }
      ],
    };
  } catch (error) {
    console.error('Failed to resolve data catalog matrix:', error);
    return { success: false, error: 'Database pipeline connection timeout.' };
  }
}
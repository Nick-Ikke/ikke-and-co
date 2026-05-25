import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IKKE & Co. — Client Portal',
  description: 'Premium Pet Ecosystem Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="industrial-grid min-h-screen selection:bg-sage selection:text-cream">
        {children}
      </body>
    </html>
  );
}
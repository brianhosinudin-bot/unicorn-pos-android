import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unicorn POS',
  description: 'AI Business OS for Indonesian UMKM',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

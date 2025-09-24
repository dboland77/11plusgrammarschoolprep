// app/layout.tsx
import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-slate-50 flex items-center justify-center'>
        <Suspense fallback={<div>Loading ...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}

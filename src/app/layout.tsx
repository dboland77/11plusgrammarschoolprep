// app/layout.tsx
import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className=''>
        <Suspense fallback={<div>Loading ...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}

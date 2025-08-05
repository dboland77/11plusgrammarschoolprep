// app/page.tsx
'use client';
import { toPacks } from '@/lib/chunkWordBank';
import { fullBank } from '@/lib/wordBank';
import PackMenu from '@/components/PackMenu';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const packs = toPacks(fullBank, 25);

  return (
    <PackMenu packs={packs} onPick={(id) => router.push(`/flash?pack=${id}`)} />
  );
}

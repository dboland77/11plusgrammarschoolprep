// app/page.tsx
'use client';
import { toPacks } from '@/lib/chunkWordBank';
import { fullBank } from '@/lib/wordBank';
import PackMenu from '@/components/PackMenu';
import { Searchbar } from '@/components/SearchPack';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

export default function Home() {
  const router = useRouter();
  const packs = toPacks(fullBank, 25);

  return (
    <Fragment>
      <Searchbar/>
    <PackMenu packs={packs} onPick={(id) => router.push(`/flash?pack=${id}`)} />
    </Fragment>
  );
}

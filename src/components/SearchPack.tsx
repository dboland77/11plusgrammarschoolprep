'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { toPacks } from '@/lib/chunkWordBank';
import { fullBank } from '@/lib/wordBank';

const packs = toPacks(fullBank, 25);
const MIN_ID = packs[0]?.id ?? 1;
const MAX_ID = packs[packs.length - 1]?.id ?? MIN_ID;

function Search() {
  const params = useSearchParams();
  const router = useRouter();

  const packParam = params.get('pack');
  const parsed = Number.isInteger(Number(packParam))
    ? parseInt(packParam!, 10)
    : MIN_ID;
  const safePackId = Math.min(Math.max(parsed, MIN_ID), MAX_ID);

  // Normalise URL if missing/invalid/out of range
  useEffect(() => {
    if (packParam === null || String(safePackId) !== packParam) {
      const next = new URLSearchParams(params);
      next.set('pack', String(safePackId));
      router.replace(`?${next.toString()}`, { scroll: false });
    }
  }, [packParam, safePackId, params, router]);

  return <input placeholder='Search...' />;
}

export function Searchbar() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  );
}

'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import WordFlashCard from '@/components/WordFlashCard';
import { toPacks } from '@/lib/chunkWordBank';
import { fullBank } from '@/lib/wordBank';
import { Suspense } from 'react';

export default function FlashClient() {
  const router = useRouter();
  const packs = toPacks(fullBank, 25);
  const searchParams = useSearchParams();

  const selectedPack = Number(searchParams.get('pack')) || 0;

  const pack = packs[selectedPack] || { id: 0, words: [''] };

  return (
    <>
      <button
        className=''
        onClick={() => router.push('/')}
      >
        ⬅︎ All Packs
      </button>
      <Suspense>
        <WordFlashCard
          key={pack.id} // reset internal index when pack changes
          initialWords={pack.words}
        />
      </Suspense>
    </>
  );
}

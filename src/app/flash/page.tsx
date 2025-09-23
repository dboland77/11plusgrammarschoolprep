'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import WordFlashCard from '@/components/WordFlashCard';
import { toPacks } from '@/lib/chunkWordBank';
import { fullBank } from '@/lib/wordBank';

export default function FlashClient() {
  const router = useRouter();
  const packs = toPacks(fullBank, 25);
  const searchParams = useSearchParams();

  const selectedPack = Number(searchParams.get('pack')) || 0;

  const pack = packs[selectedPack] || { id: 0, words: [''] };

  return (
    <>
      <button
        className='text-sm text-blue-600 underline'
        onClick={() => router.push('/')}
      >
        ⬅︎ All Packs
      </button>

      <WordFlashCard
        key={pack.id} // reset internal index when pack changes
        initialWords={pack.words}
      />
    </>
  );
}

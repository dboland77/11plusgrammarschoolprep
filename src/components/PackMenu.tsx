'use client';

import { Button } from '@/components/Button';
import { useState } from 'react';
import clsx from 'clsx';

interface WordEntry {
  word: string;
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

interface Pack {
  id: number;
  words: WordEntry[];
}

interface Props {
  packs: Pack[];
  onPick: (id: number) => void;
  current?: number; // optional – highlight the pack already in play
}

export default function PackMenu({ packs, onPick, current }: Props) {
  return (
    <div className='mx-auto max-w-3xl p-6 space-y-6'>
      <h1 className='text-center text-3xl font-bold'>Choose a Pack</h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {packs.map((pack) => (
          <Button
            key={pack.id}
            variant='outline'
            className={clsx(
              'h-20 flex flex-col items-center justify-center rounded-2xl shadow-sm',
              current === pack.id && 'border-2 border-blue-600'
            )}
            onClick={() => onPick(pack.id)}
          >
            <span className='text-xl font-semibold'>{pack.id}</span>
            <span className='text-xs text-gray-500'>
              {pack.words.length} words
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}

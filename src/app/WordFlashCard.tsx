/*
  A simple flash‑card component for Next.js (App Router)
  ------------------------------------------------------
  • Expects a named export `fullBank` (array of {word, definition, synonyms, antonyms})
    from a helper file such as "wordBank.ts" in the same project.
  • Shows one entry at a time with Next / Previous navigation.
  • Uses Tailwind for layout and shadcn/ui <Button> for controls.
*/

'use client';

import { useState } from 'react';
import { fullBank } from '../lib/word_bank'; // adjust the path if your list lives elsewhere

interface WordEntry {
  word: string;
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

export default function WordFlashCard() {
  const [index, setIndex] = useState(0);
  const total = fullBank.length;
  const card: WordEntry = fullBank[index];

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className='mx-auto max-w-md p-6 space-y-6 rounded-2xl shadow-lg bg-white'>
      {/* Word */}
      <h1 className='text-3xl font-bold text-center text-black'>{card.word}</h1>

      {/* Definition */}
      <p className='text-lg text-gray-700 text-center'>{card.definition}</p>

      {/* Synonyms & Antonyms */}
      <div className='grid grid-cols-2 gap-4 text-sm text-black'>
        <div>
          <h2 className='font-semibold mb-1 text-black'>Synonyms</h2>
          <ul className='list-disc list-inside space-y-0.5'>
            {card.synonyms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='font-semibold mb-1'>Antonyms</h2>
          <ul className='list-disc list-inside space-y-0.5'>
            {card.antonyms.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className='flex justify-between items-center pt-4 text-black'>
        <button onClick={prev} disabled={index === 0}>
          Previous
        </button>
        <span className='text-sm text-gray-500'>
          {index + 1} / {total}
        </span>
        <button onClick={next} disabled={index === total - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

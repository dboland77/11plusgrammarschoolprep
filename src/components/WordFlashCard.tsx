"use client";

import { useState } from "react";
import { fullBank } from "@/lib/wordBank";
import { toPacks } from "@/lib/chunkWordBank";

interface Props {
  initialWords: WordEntry[];
}

export const wordPacks = toPacks(fullBank, 25);

interface WordEntry {
  word: string;
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

export default function WordFlashCard({ initialWords }: Props) {
  const total = initialWords.length;
  const [index, setIndex] = useState(0);
  const card = initialWords[index];

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="">
      {/* Word */}
      <h1 className="">{card.word}</h1>

      {/* Definition */}
      <p className="">{card.definition}</p>

      {/* Synonyms & Antonyms */}
      <div className="">
        <div>
          <h2 className="">Synonyms</h2>
          <ul className="">
            {card.synonyms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="">Antonyms</h2>
          <ul className="">
            {card.antonyms.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="">
        <button onClick={prev} disabled={index === 0}>
          Previous
        </button>
        <span className="">
          {index + 1} / {total}
        </span>
        <button onClick={next} disabled={index === total - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

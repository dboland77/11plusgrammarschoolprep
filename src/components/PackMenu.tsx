'use client';

import { Button } from '../components/Button';

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
  return <div>hello</div>;
}

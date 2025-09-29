'use client';

import { Button } from '@/components/Button';
import clsx from 'clsx';
import styles from '@/styles/wordpacks.module.css';

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
  current?: number;
}

export default function PackMenu({ packs }: Props) {
  return (
    <div className=''>
      <h1 className=''>Choose a Pack or Packs</h1>

      <div className={styles.flexcontainer}>
        {packs.map((pack) => (
          <Button key={pack.id}></Button>
        ))}
      </div>
    </div>
  );
}

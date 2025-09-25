"use client";

import { Button } from "@/components/Button";
import clsx from "clsx";

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

export default function PackMenu({ packs, onPick, current }: Props) {
  return (
    <div className="">
      <h1 className="">Choose a Pack</h1>

      <div className="">
        {packs.map((pack) => (
          <Button
            key={pack.id}
            variant="outline"
            className={clsx("", current === pack.id && "")}
            onClick={() => onPick(pack.id)}
          >
            <span className="">{pack.id}</span>
            <span className="">{pack.words.length} words</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

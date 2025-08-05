// lib/chunkWordBank.ts
export interface WordEntry {
  word: string;
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

export function toPacks(bank: WordEntry[], size = 25) {
  const packs = [];
  for (let i = 0; i < bank.length; i += size) {
    packs.push({ id: packs.length + 1, words: bank.slice(i, i + size) });
  }
  return packs;
}

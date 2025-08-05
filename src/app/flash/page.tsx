// app/flash/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { toPacks } from "@/lib/chunkWordBank";
import { fullBank } from "@/lib/wordBank";
import WordFlashCard from "@/components/WordFlashCard";
import PackMenu from "@/components/PackMenu"; // optional hamburger/back link

const packs = toPacks(fullBank, 25);

export default function FlashPage() {
  const router = useRouter();
  const params = useSearchParams();
  const packId = parseInt(params.get("pack") ?? "1", 10);
  const pack = packs.find((p) => p.id === packId) ?? packs[0];

  // fallback if someone enters an invalid id
  if (!pack) router.replace("/");

  return (
    <div className="space-y-8">
      {/* tiny back-to-packs button */}
      <button
        className="text-sm text-blue-600 underline"
        onClick={() => router.push("/")}
      >
        ⬅︎ All Packs
      </button>

      <WordFlashCard /* from the canvas */
        key={pack.id}           // reset internal index when pack changes
        initialWords={pack.words}
      />
    </div>
  );
}

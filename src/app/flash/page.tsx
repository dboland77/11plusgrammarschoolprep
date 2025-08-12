
'use client'
import { useRouter } from "next/navigation";

// import WordFlashCard from "@/components/WordFlashCard";
import { Searchbar } from "@/components/SearchPack";

export default function FlashClient() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <button
        className="text-sm text-blue-600 underline"
        onClick={() => router.push("/")}
      >
        ⬅︎ All Packs
      </button>
      <Searchbar/>

      {/* <WordFlashCard
        key={pack.id}        // reset internal index when pack changes
        initialWords={pack.words}
      /> */}
    </div>
  );
}

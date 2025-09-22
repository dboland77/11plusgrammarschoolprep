
'use client'
import { useRouter } from "next/navigation";

// import WordFlashCard from "@/components/WordFlashCard";
import { Searchbar } from "@/components/SearchPack";
import {Checkbox} from '@/components/Checkbox';

export default function FlashClient() {
  const router = useRouter();
  const cuisines = ['Italian', 'Japanese', 'Chinese',
       'Indian', 'Thai', 'French', 'American', 'Korean', 
       'Greek', 'Spanish', 'Turkish']

  return (
    <>
      <Checkbox
      buttonLabel="sdfdsf"
      checked
      />    
   
      <button
        className="text-sm text-blue-600 underline"
        onClick={() => router.push("/")}
        >
        ⬅︎ All Packs
      </button>

      {/* <WordFlashCard
        key={pack.id}        // reset internal index when pack changes
        initialWords={pack.words}
        /> */}
        </>
  );
}

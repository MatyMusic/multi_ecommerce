// import Image from "next/image";

import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="p-5">

        <div className="w-100 flex justify-end">

          <ThemeToggle />

        </div>


        <h1 className="font-bold text-blue-500 font-barlow">welcomes</h1>
        <Button variant='destructive'>לחץ כאן</Button>

      </div>
    </>

  );
}

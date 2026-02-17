
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AvatarImage } from "@radix-ui/react-avatar";
import { Menu, Scissors } from "lucide-react";

export default function Home() {
  return (
    
    <div className="lg:w-screen w-[100%] h-screen bg-black overflow-hidden">
      <nav className="bg-zinc-900 p-4 flex justify-between items-center">

      <div className=" w-44 h-7">
        <div className="flex items-center font-bold">
        <Scissors className="text-purple-700" />
        <h3 className="text-purple-700 text-2xl">SHOP</h3>
        <h3 className="text-white text-2xl">BARBER</h3>
        </div>
      </div>

      <Sheet>
        <SheetTrigger><Menu className="text-white border p-1 rounded-sm" /></SheetTrigger>
        <SheetContent className="bg-zinc-900">
          <SheetHeader>
            <SheetTitle className="text-white">Are you absolutely sure?</SheetTitle>
            <SheetDescription className="text-white">
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </nav>

    </div>

  );
}

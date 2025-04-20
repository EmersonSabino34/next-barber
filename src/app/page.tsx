
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
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="lg:w-screen w-[100%] h-screen bg-black overflow-hidden">
      <nav className="bg-zinc-900 p-7 flex justify-between items-center">

      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/168974048?v=4" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <h1 className="text-slate-700 font-semibold lg:text-xl text-md">Emerson Sabino developer</h1>

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

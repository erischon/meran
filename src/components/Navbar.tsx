import { UserButton } from "@clerk/nextjs";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import MobileSidebar from "@/components/MobileSidebar";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />

      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

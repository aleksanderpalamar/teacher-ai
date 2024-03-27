import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

interface Props {
  className?: string;
}

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/assets/mascot.svg" width={40} height={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-emerald-500 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="Home"
          href="/learn"
          iconSrc="/assets/learn.svg"
        />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/assets/leaderboard.svg"
        />
        <SidebarItem
          label="shop"
          href="/shop"
          iconSrc="/assets/shop.svg"
        />
        <SidebarItem
          label="quests"
          href="/quests"
          iconSrc="/assets/quests.svg"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="w-6 h-6 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
        <footer
          className="flex justify-center items-center gap-x-2 text-center text-sm text-muted-foreground mt-2"
        >
          <p className="text-xs text-muted-foreground">
            Developed by&nbsp;
            <Link
              href="https://aleksanderpalamar.dev"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:underline"
            >
              Palamar.Dev
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            copyright © 2024 - Lingo All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

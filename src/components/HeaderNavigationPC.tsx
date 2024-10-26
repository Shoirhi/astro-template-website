import { IoIosArrowDown } from "react-icons/io";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { buttonVariants } from "@/components/ui/button";

import { cn, isCurrentPath } from "@/lib/utils";

import type { Navigation } from "@/types";

export default ({ navigation, currentPath }: { navigation: Navigation, currentPath: string }) => {
  return (
    <div className="hidden lg:flex gap-x-2">
      {navigation.map((item, index) => item.child ?
        <HoverCard key={index} openDelay={100} closeDelay={100}>
          <HoverCardTrigger className={NavigationItemBase({ currentPath: currentPath, targetPath: item.path })}>
            {item.title}<IoIosArrowDown className="w-3 h-3 group-data-[state=open]:rotate-180 duration-150" />
          </HoverCardTrigger>
          <HoverCardContent className="grid grid-cols-1 gap-y-1">
            {item.child.map((child, index) => (
              <a key={index} className={NavigationItemBase({ currentPath: currentPath, targetPath: child.path, match: true })} href={child.path}>{child.title}</a>
            ))}
          </HoverCardContent>
        </HoverCard>
        :
        <a key={index} className={NavigationItemBase({ currentPath: currentPath, targetPath: item.path })} href={item.path}>{item.title}</a>
      )}
    </div>
  )

}

function NavigationItemBase({
  currentPath,
  targetPath,
  match = false,
}: {
  currentPath: string;
  targetPath: string;
  match?: boolean;
}) {
  return cn(buttonVariants({ variant: "ghost" }), "group px-3 justify-between", isCurrentPath(currentPath, targetPath, match) && "font-bold")
}
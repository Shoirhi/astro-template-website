import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";

import { buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

import { cn, isCurrentPath } from "@/lib/utils";

import type { Navigation } from "@/types";

export default ({ navigation, currentPath }: { navigation: Navigation, currentPath: string }) => {
  return (
    <Sheet>
      <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon" })}>
        <HiOutlineMenuAlt3 className='w-5 h-5' />
        <p className='sr-only'>サイドバーを開く</p>
      </SheetTrigger>
      <SheetContent className="grid grid-rows-[auto_1fr]">
        <SheetHeader>
          <div className="flex justify-end items-center">
            <SheetClose className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <IoMdClose className='w-5 h-5' />
              <p className='sr-only'>サイドバーを閉じる</p>
            </SheetClose>
          </div>
          <SheetTitle className="sr-only">サイドバー</SheetTitle>
          <SheetDescription className="sr-only">
            サイドバーを表示します。
          </SheetDescription>
        </SheetHeader>
        <ScrollArea>
          <div className="grid grid-cols-1 gap-y-2">
            {navigation.map((item, index) => item.child ?
              <Collapsible key={item.title} className="group" defaultOpen={isCurrentPath(currentPath, item.path)}>
                <CollapsibleTrigger className={NavigationItemBase({ currentPath: currentPath, targetPath: item.path })}>
                  {item.title}<IoIosArrowForward className="w-3 h-3 group-data-[state=open]:rotate-90 duration-150" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 data-[open]:">
                  <div className="grid grid-cols-1 gap-y-1 border-l py-1 px-3">
                    {item.child.map((child, index) => (
                      <a key={index} className={NavigationItemBase({ currentPath: currentPath, targetPath: child.path, match: true })} href={child.path}>{child.title}</a>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
              :
              <a key={index} className={NavigationItemBase({ currentPath: currentPath, targetPath: item.path })} href={item.path}>{item.title}</a>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
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
  return cn(buttonVariants({ variant: "ghost" }), "px-3 w-full justify-between", isCurrentPath(currentPath, targetPath, match) && "bg-secondary text-secondary-foreground font-bold")
}

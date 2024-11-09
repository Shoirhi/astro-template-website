import { cn } from "@/lib/utils";
import type { ReactNode } from 'react';

export default ({
  href,
  title,
  external = false,
  className,
  children,
}: {
  href: string;
  title?: string;
  external?: boolean;
  className?: string;
  children?: ReactNode;
}) => {
  const newTitle = external && title ? `${title} (external link)` : title;

  return (
    <a
      className={cn(
        "w-fit opacity-80 transition duration-150 hover:opacity-100 hover:underline",
        className
      )}
      href={href}
      title={newTitle}
      target={external ? "_blank" : "_self"}
      aria-label={newTitle}
    >{children}</a>
  )
}

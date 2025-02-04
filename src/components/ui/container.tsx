import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type Props = {
  className?: string;
  as?: ElementType;
  children: ReactNode;
};
export default function Container({
  children,
  className,
  as: Component = "div",
}: Props) {
  return (
    <Component
      className={cn(
        "max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 mx-auto",
        className
      )}
    >
      {children}
    </Component>
  );
}

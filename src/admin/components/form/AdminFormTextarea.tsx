import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const AdminFormTextarea = function ({
  children,
  className,
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none",
        className,
      )}
      {...props}
    >
      {children}
    </textarea>
  );
};

export default AdminFormTextarea;

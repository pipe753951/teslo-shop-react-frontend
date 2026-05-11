import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const AdminFormInput = function ({
  className,
  ...props
}: Omit<ComponentProps<"input">, "children">) {
  return (
    <input
      className={cn(
        "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
        className,
      )}
      {...props}
    />
  );
};

export default AdminFormInput;

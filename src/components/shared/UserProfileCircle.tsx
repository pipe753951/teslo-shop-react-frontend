import type React from "react";

import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"div"> {
  usernameInitials: string;
}

const UserProfileCircle = function ({
  usernameInitials,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "size-10 bg-linear-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white font-semibold",
        className,
      )}
      {...props}
    >
      {usernameInitials}
    </div>
  );
};

export default UserProfileCircle;

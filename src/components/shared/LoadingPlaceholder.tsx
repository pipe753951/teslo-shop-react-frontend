import { Loader2 } from "lucide-react";

const LoadingPlaceholder = function () {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader2 className="size-12 animate-spin" />
    </div>
  );
};

export default LoadingPlaceholder;

import { Link } from "react-router";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  subtitle?: string;
}

const TesloShopLogo = function ({ className, subtitle = "Shop" }: Props) {
  return (
    <>
      <Link
        to="/"
        className={cn(
          "flex font-montserrat-alternates gap-3 items-center whitespace-nowrap",
          className,
        )}
      >
        <span className="text-2xl font-bold m-0  whitespace-nowrap">Teslo</span>
        <div className="w-1 h-7 bg-foreground rounded-full"></div>
        <span className="text-muted-foreground font-normal m-0 whitespace-nowrap">
          {subtitle}
        </span>
      </Link>
    </>
  );
};

export default TesloShopLogo;

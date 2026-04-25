import { useEffect } from "react";
import { useSearchParams } from "react-router";

type PriceFilter = "any" | "0-50" | "50-100" | "100-200" | "200-greater";
const ValidPriceFilter: PriceFilter[] = [
  "any",
  "0-50",
  "50-100",
  "100-200",
  "200-greater",
];

const useProductFilterQuery = function () {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const evaluatingCurrentProductPageParam = searchParams.get("filter");
    if (
      (ValidPriceFilter as string[]).includes(
        evaluatingCurrentProductPageParam,
      ) ||
      !evaluatingCurrentProductPageParam
    ) {
      return;
    }

    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set("filter", "any");
      return newSearchParams;
    });
  }, [searchParams, setSearchParams]);

  const priceFilterQueryParam = searchParams.get("filter");

  const currentPriceFilter: PriceFilter = (
    ValidPriceFilter as string[]
  ).includes(priceFilterQueryParam)
    ? (priceFilterQueryParam as PriceFilter)
    : "any";

  const setCurrentPriceFilter = (priceFilter: PriceFilter) => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set("filter", priceFilter);
      return newSearchParams;
    });
  };

  return [currentPriceFilter, setCurrentPriceFilter] as const;
};

export default useProductFilterQuery;

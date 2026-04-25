import { useEffect } from "react";
import { useSearchParams } from "react-router";

const usePageNumber = function () {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const evaluatingCurrentPageParam = parseInt(searchParams.get("page"));
    if (!isNaN(evaluatingCurrentPageParam)) return;

    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set("page", "1");
      return newSearchParams;
    });
  }, [searchParams, setSearchParams]);

  const currentPage = parseInt(searchParams.get("page"));

  const setCurrentPage = (page: number) => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set("page", page.toString());
      return newSearchParams;
    });
  };

  return [currentPage, setCurrentPage] as const;
};

export default usePageNumber;

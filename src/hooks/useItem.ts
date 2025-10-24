import useSWR from "swr";
import { fetchApi } from "../app/lib/api";

interface UseProductsParams {
  search?: string;
}

export function useItem({ search }: UseProductsParams = {}) {
  const endpoint = search ? `/products?id=${search}` : null;

  // Solo hacer petición si hay término de búsqueda
  const { data, error, isLoading, mutate } = useSWR(
    search && search.trim() ? endpoint : null,
    fetchApi,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    item: data,
    isLoading,
    isError: !!error,
    mutate,
  };
}

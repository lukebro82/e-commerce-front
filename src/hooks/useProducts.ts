import useSWR from "swr";
import { fetchApi } from "../lib/api";

interface UseProductsParams {
  limit?: number;
  offset?: number;
  search?: string;
}

export function useProducts({
  limit = 10,
  offset = 0,
  search,
}: UseProductsParams = {}) {
  const searchParam = search ? `&search=${encodeURIComponent(search)}` : "";
  const endpoint = `/search?limit=${limit}&offset=${offset}${searchParam}`;

  // Solo hacer petición si hay término de búsqueda
  const { data, error, isLoading, mutate } = useSWR(
    search && search.trim() ? endpoint : null,
    fetchApi
  );

  return {
    products: data?.results || [],
    total: data?.pagination?.total || 0, // Cambiar de data.total a data.pagination.total
    isLoading,
    isError: !!error,
    mutate,
  };
}

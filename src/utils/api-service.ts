import {
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://api.bitpin.org";
const API_VERSION = "v1";

const bitpinAxios = axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

const useCustomQueryGET = <TQueryFnData = unknown, TError = Error>(
  url: string,
  options?: Omit<UseQueryOptions<TQueryFnData, TError>, "queryFn" | "queryKey"> & {
    queryParams?: Record<string, unknown>;
    headers?: Record<string, string | number | boolean>;
  }
): UseSuspenseQueryResult<TQueryFnData, TError> => {
  const { queryParams, headers, ...otherOptions } = options || {};

  return useSuspenseQuery({
    queryKey: [url, queryParams],
    queryFn: async () => {
      const response = await bitpinAxios.get<TQueryFnData>(url, {
        headers,
        params: queryParams,
      });
      return response.data as TQueryFnData;
    },
    ...otherOptions,
  });
};

export { useCustomQueryGET };

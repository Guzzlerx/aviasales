import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/baseUrl";
import { IUseFetchReturn } from "./type";

export const useFetch = <T>(url: string): IUseFetchReturn<T> => {
  const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + url);

        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }

        const responseData = await response.json();

        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setIsLoading(false);
        }
      }
    }

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

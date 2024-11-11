import { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://swapi.dev/api';

export type Character = {
  name: string;
  gender: string;
  birth_year: string;
  url: string;
};

type Options = { text?: string; page?: number };

export default function useSearch({ text, page }: Options) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Character[]>([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters(text, page)
      .then(res => {
        setData(res.results);
        setCount(res.count);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setData([]);
        setCount(0);
      })
      .finally(() => setIsLoading(false));
  }, [text, page]);

  return { data, count, isLoading, error, isError: !!error };
}

async function fetchCharacters(text?: string, page?: number) {
  const url = new URL(`${API_ENDPOINT}/people`);
  if (text) url.searchParams.set('search', text);
  if (page) url.searchParams.set('page', page.toString());

  const res = await fetch(url.toString());
  if (!res.ok) {
    const data = await res.json();
    throw new Error(`${res.status} - ${data.detail}`);
  }
  return res.json();
}

import { useEffect, useState } from 'react';
import { getCache, setCache } from '../utils/cache';

const API_ENDPOINT = 'https://swapi.dev/api';
const PAGE_LIMIT = 10;

export type Character = {
  name: string;
  gender: string;
  birth_year: string;
  url: string;
};

type Options = { text?: string; page?: number };

export default function useSearch({ text, page }: Options) {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Character[]>([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters(text, page)
      .then(res => {
        setResults(res.results);
        setCount(res.count);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setResults([]);
        setCount(0);
      })
      .finally(() => setIsLoading(false));
  }, [text, page]);

  return {
    results,
    count,
    limit: PAGE_LIMIT,
    isLoading,
    error,
    isError: !!error,
  };
}

async function fetchCharacters(text?: string, page?: number) {
  const url = new URL(`${API_ENDPOINT}/people`);
  if (text) url.searchParams.set('search', text);
  if (page) url.searchParams.set('page', page.toString());

  const uri = url.toString();
  const cache = getCache(uri);
  if (cache) return cache;

  const res = await fetch(uri);
  if (!res.ok) {
    const data = await res.json();
    throw new Error(`${res.status} - ${data.detail}`);
  }
  const data = await res.json();

  setCache(uri, data);
  return data;
}

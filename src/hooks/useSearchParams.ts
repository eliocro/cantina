import { useEffect, useState } from 'react';

type Params = { text: string; page: number };

export default function useSearchParams() {
  const [params, setParams] = useState<Params>(getParams);

  useEffect(() => {
    const onPop = (evt: PopStateEvent) => setParams(evt.state);
    addEventListener('popstate', onPop);
    return () => removeEventListener('popstate', onPop);
  }, []);

  const push = (state: Params) => {
    const next = `${window.location.pathname}${buildQuery(state)}`;
    window.history.pushState(state, '', next);
    setParams(state);
  };

  const { text, page } = params;
  return {
    text,
    page,
    setText: (val: string) => push({ text: val, page: 1 }),
    setPage: (val: number) => push({ text, page: val }),
  };
}

function getParams(): Params {
  const params = new URLSearchParams(window.location.search.substring(1));
  return {
    text: params.get('text') || '',
    page: parseInt(params.get('page') || '') || 1,
  };
}

function buildQuery({ text, page }: Params) {
  const params = new URLSearchParams();
  if (text) params.set('text', text);
  if (page !== 1) params.set('page', page.toString());
  const query = params.toString();
  return query ? `?${query}` : '';
}

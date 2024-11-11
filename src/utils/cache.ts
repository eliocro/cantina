const CACHE: Record<string, any> = {};

export const setCache = (url: string, data: any) => {
  // TODO: set timestamp
  CACHE[url] = data;
};

export const getCache = (url: string) => {
  // TODO: check timestamp
  return CACHE[url] ?? null;
};

const LIMIT = 10;

type Props = { count: number; page: number; setPage: (val: number) => void };

export default function Pagination({ count, page, setPage }: Props) {
  if (!count) return null;

  const total = Math.ceil(count / LIMIT);
  const pages = Array.from(new Array(total)).map((_, i) => i + 1);

  return (
    <nav>
      <ul>
        {pages.map(p => (
          <li key={p}>
            {p === page ? (
              <span>{p}</span>
            ) : (
              <button onClick={() => setPage(p)}>{p}</button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

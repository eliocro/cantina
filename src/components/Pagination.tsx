import styled from 'styled-components';

type Props = {
  count: number;
  limit: number;
  page: number;
  setPage: (val: number) => void;
};

export default function Pagination({ count, limit, page, setPage }: Props) {
  if (!count) return null;

  const total = Math.ceil(count / (limit || 1));
  const pages = Array.from(new Array(total)).map((_, i) => i + 1);

  return (
    <StyledNav>
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
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  margin-top: 2rem;

  ul {
    display: flex;
    gap: 0.25rem;

    margin: 0;
    padding: 0;
    list-style: none;
  }

  span,
  button {
    display: block;
    padding: 0.5rem;
    border: 1px solid var(--fg);

    font-size: 1rem;
    line-height: 1;
  }
  span {
    color: var(--bg);
    background-color: var(--fg);
  }
  button {
    cursor: pointer;
    background-color: transparent;

    &:hover {
      color: var(--bg);
      background-color: var(--fg);
    }
  }
`;

import styled from 'styled-components';
import { Character } from '../hooks/useSearch';

type Props = { items: Character[] };

export default function CharacterTable({ items }: Props) {
  if (!items?.length) return null;

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth Year</th>
        </tr>
      </thead>
      <tbody>
        {items.map(char => (
          <tr key={char.url}>
            <td>{char.name}</td>
            <td>{char.gender}</td>
            <td>{char.birth_year}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 2rem 0;

  tr {
    margin: 1px 0;
    border-bottom: 1px solid var(--color-border);
  }

  th, td {
    padding: 0.25rem 0.5rem;
    text-align: left;
  }
`;

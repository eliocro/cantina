import { Character } from '../hooks/useSearch';

type Props = { items: Character[] };

export default function CharacterTable({ items }: Props) {
  if (!items?.length) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {items.map(char => (
          <tr key={char.url}>
            <td>{char.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

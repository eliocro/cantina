import { FormEventHandler, useId, useState } from 'react';

type Props = { onSubmit: (val: string) => void };

export default function SearchField({ onSubmit }: Props) {
  const id = useId();
  const [value, setValue] = useState('');

  const onFormSubmit: FormEventHandler<HTMLFormElement> = evt => {
    evt.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor={id}>Search</label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

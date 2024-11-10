import { FormEventHandler, useEffect, useId, useState } from 'react';

type Props = {
  initial: string;
  onSubmit: (val: string) => void;
};

export default function SearchField({ initial, onSubmit }: Props) {
  const id = useId();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (initial !== value) setValue(initial);
  }, [initial]);

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

import { FormEventHandler, useEffect, useId, useState } from 'react';
import styled from 'styled-components';

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
    <StyledForm onSubmit={onFormSubmit}>
      <label htmlFor={id}>Search</label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={evt => setValue(evt.target.value)}
        placeholder="Use the Force, Luke..."
      />
      <button type="submit">Search</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;

  label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
  }

  input {
    display: block;
    width: 100%;
    padding: 1rem;
    font-size: 1.25rem;

    border: none;
    border-radius: 0.5rem;
    background-color: var(--color-input);

    &:focus {
      outline-offset: 4px;
    }
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem 1rem;

    border: none;
    border-radius: 0.25rem;
    background-color: var(--fg);
    color: var(--bg);

    font-size: 1.25rem;
    cursor: pointer;

    &:focus-visible {
      outline-offset: 4px;
    }
  }
`;

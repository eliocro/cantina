import { useState } from 'react';

import useSearch from './hooks/useSearch';

import CharacterTable from './components/CharacterTable';
import SearchField from './components/SearchField';
import Pagination from './components/Pagination';

function App() {
  const [page, setPage] = useState(1);
  const [text, setText] = useState('');
  const { data, count } = useSearch({ text, page });

  const onSubmit = (val: string) => {
    setText(val);
    setPage(1);
  };

  return (
    <>
      <h1>Star Wars Cantina</h1>
      <SearchField onSubmit={onSubmit} />
      <CharacterTable items={data} />
      <Pagination count={count} page={page} setPage={setPage} />
    </>
  );
}

export default App;

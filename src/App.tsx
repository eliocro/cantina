import useSearch from './hooks/useSearch';
import useSearchParams from './hooks/useSearchParams';

import CharacterTable from './components/CharacterTable';
import SearchField from './components/SearchField';
import Pagination from './components/Pagination';

function App() {
  const { text, page, setText, setPage } = useSearchParams();
  const { data, count } = useSearch({ text, page });

  return (
    <>
      <h1>Star Wars Cantina</h1>
      <SearchField initial={text} onSubmit={setText} />
      <CharacterTable items={data} />
      <Pagination count={count} page={page} setPage={setPage} />
    </>
  );
}

export default App;

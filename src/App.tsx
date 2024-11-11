import useSearch from './hooks/useSearch';
import useSearchParams from './hooks/useSearchParams';

import Layout from './components/Layout';
import CharacterTable from './components/CharacterTable';
import SearchField from './components/SearchField';
import Pagination from './components/Pagination';

function App() {
  const { text, page, setText, setPage } = useSearchParams();
  const { data, count } = useSearch({ text, page });

  return (
    <Layout>
      <h1>Character Search</h1>
      <SearchField initial={text} onSubmit={setText} />
      <CharacterTable items={data} />
      <Pagination count={count} page={page} setPage={setPage} />
    </Layout>
  );
}

export default App;

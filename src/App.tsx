import styled from 'styled-components';

import useSearch from './hooks/useSearch';
import useSearchParams from './hooks/useSearchParams';

import Layout from './components/Layout';
import CharacterTable from './components/CharacterTable';
import SearchField from './components/SearchField';
import Pagination from './components/Pagination';
import Spinner from './components/Spinner';
import ErrorView from './components/ErrorView';

function App() {
  const { text, page, setText, setPage } = useSearchParams();
  const { results, count, limit, isLoading, error } = useSearch({ text, page });

  return (
    <Layout>
      <h1>Search characters {isLoading && <Spinner />}</h1>
      <SearchField initial={text} onSubmit={setText} disabled={isLoading} />

      {error && <ErrorView err={error} />}
      {!error &&
        !results.length &&
        (isLoading ? (
          <Message>Loading...</Message>
        ) : (
          <Message>No results found.</Message>
        ))}

      <CharacterTable items={results} />
      <Pagination count={count} limit={limit} page={page} setPage={setPage} />
    </Layout>
  );
}

export default App;

const Message = styled.div`
  margin-top: 2rem;
`;

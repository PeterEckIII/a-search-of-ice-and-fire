import React, { useState } from 'react';
import styled from 'styled-components';
import Results from './components/Results/Results';
import Form from './components/Form/Form';
import useDataAPI from './utils/useDataAPI';

const DivApp = styled.div`
  text-align: center;
`;

const App = () => {
  const [ query, setQuery ] = useState('Stark');
  const [{ data, isLoading, isError }, fetchData] = useDataAPI(`https://www.anapioficeandfire.com/api?query=${query}`);
  return (
    <DivApp>
      <Form query={query} setQuery={setQuery} fetchData={fetchData} />
      { isError && <div>Something went wrong...</div> }
      { isLoading ? <div>Loading...</div> : <Results data={data} /> }
    </DivApp>
  );
};

export default App;

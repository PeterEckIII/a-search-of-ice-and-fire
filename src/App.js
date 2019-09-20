import React, { useState } from 'react';
import styled from 'styled-components';
// import Results from './components/Results/Results';
// import Form from './components/Form/Form';
import useApi from './utils/useApi';

const Container = styled.div`
  text-align: center;
`;

const App = () => {
  const [ query, setQuery ] = useState('Eddard Stark');
  const [ { data, isLoading, isError }, setURL ] = useApi(`http://www.anapioficeandfire.com/api/characters?name=${ query }`);
  return (
    <Container>
      <form onSubmit={ e => {
        setURL(`http://www.anapioficeandfire.com/api/characters?name=${ query }`);
        e.preventDefault();
      } }>
        <input
          type='text'
          value={ query }
          onChange={ e => setQuery(e.target.value) }
        />
        <button type='submit'>Search</button>
      </form>
      { isError && <div>Something went wrong...</div> }
      { isLoading ? <div>Loading...</div> : (
        <ul>
          { data.results.map(char => {
            return (
              <li key={ char.ObjectID }>
                { char.name ? char.name : char.aliases }
              </li>
            );
          }) }
        </ul>
      ) }
      {/* <Form query={ query } setQuery={ setQuery } fetchData={ fetchData } />
      { isError && <div style={ { 'color': '#9B2C2C', 'backgroundColor': '#FED7D7' } }>Something went wrong...</div> }
      { isLoading ? <div>Loading...</div> : (
        data.results.map(res => {
          return (
            <div>{ res.data.name }</div>
          )
        })
      ) } */}
    </Container>
  );
};

export default App;

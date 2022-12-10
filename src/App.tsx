import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { useQueries } from './contexts/useQueries';
import { QueryCard } from './components/QueryCard';

function App() {
  const {queries, addQuery, updateQuery} = useQueries()

  console.log(queries)
  
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" onClick={() => addQuery()}>Add</Button>
      </header>

      <div className="app-body">
        {queries.map(q => <QueryCard query={q} />)}
      </div>
    </div>
  );
}

export default App;

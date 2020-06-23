import React, { useState } from 'react';
import { fetchCorona } from './api/fetchCorona';

import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchCorona(query);
            setData(data);
            setQuery('');
        }
    }

    let itemsToRender;
    if(data) {
        itemsToRender = data.map(country => (
            <div key={country.Country}>
                <h3>Active Corona Cases</h3>
                <h2 className="city-name">{country.Country} </h2><div className="city-temp"> <b>{country.Cases}</b></div></div>
        ));
       
    }  else {
        itemsToRender = "Loading...";
      }

    return(
        <div className="main-container">
            <input type="text"className="search"placeholder="Search Country..."value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
            <div className="city">{itemsToRender}</div>
        </div>
    );
}


export default App;
import React, { useState } from "react";
import './Nav.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className='input'
        type="text"
        placeholder="Search for city..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
        {/* <input type="submit" value="Agregar" /> */}
    </form>
  );
}

import './App.css';
import Users from './Test.json'
import { useEffect, useState } from 'react';
import { Table } from './Table';
import axios from 'axios';


function App() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fechUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    fechUsers();
  }, [query]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)} />
      <Table data={data} />

    </div>
  );
}

export default App;


// Method 2

/*
import './App.css';
import Users from './Test.json'
import { useState } from 'react'
import { Table } from './Table';


function App() {

  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"]

  const search = (data) => {
    return (
      data.filter((item) => {
        if (query === "") {
          return item;
        } else if
          (keys.some((keys) => item[keys].toLowerCase().includes(query.toLowerCase()))) {
          return item;
        }
      })
    )
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)} />
      <Table data={search(Users)} />

    </div>
  );
}

export default App;
*/

// Method 1
// Search by firstname, lastname, and by email
/*
import './App.css';
import Users from './Test.json'
import { useState } from 'react'
import { Table } from './Table';


function App() {

  const [query, setQuery] = useState("");

  const search = (data) => {
    return (
      data.filter((item) => {
        if (query === "") {
          return item;
        } else if
          (item.first_name.toLowerCase().includes(query.toLowerCase()) ||
          item.last_name.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      })
    )
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)} />
      <Table data={search(Users)} />

    </div>
  );
}

export default App;
*/




// Username (single search)
// <ul className="list">
//         {Users.filter((user) => {
//           if (query === "") {
//             return user;
//           } else if (user.first_name.toLowerCase().includes(query.toLowerCase())) {
//             return user;
//           }
//         })
//           .map((user) => (
//             <li key={user.id} className="listItem">{user.first_name}</li>
//           ))}
//       </ul>
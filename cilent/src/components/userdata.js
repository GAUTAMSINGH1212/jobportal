import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make GET request using Axios
    axios.get('http://localhost:8000/api/register')
      .then(response => {
        setMessage(response);
        console.log()
      })
      .catch(error => {
        console.error('Error fetching the API:', error);
      });
  }, []);

  return (
    <div>
      <h1>GET API Example</h1>
     
    </div>
  );
}

export default App;

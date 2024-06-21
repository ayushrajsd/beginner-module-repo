import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);  // Only runs once

  return (
    <div>
      {data ? <p>Data loaded! with first user {data[0].name}</p> : <p>Loading...</p>}
    </div>
  );
}
export default FetchDataComponent;
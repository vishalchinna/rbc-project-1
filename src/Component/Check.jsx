import axios from 'axios';
import React, { useEffect } from 'react'

function Check() {


  useEffect(() => {
    // Use the fetch API to make an HTTP GET request to an API endpoint
    axios.get('https://fakestoreapi.com/products')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
      
  }, []);
  
    return (
    <div>
        <h1>jfjd</h1>
        
    </div>
  )
}

export default Check
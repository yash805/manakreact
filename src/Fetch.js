import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
const Fetch = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const fetches = async ()=>{
            try{
              const res = await fetch("https://jsonplaceholder.typicode.com/users");
              const result = await res.json();
              setData(result)
            } catch(err){
                console.log(err)
            }
        }
        fetches();
    },[])
  return (
    <div>
  <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      
      </tbody>
    </Table>
    </div>
  )
}

export default Fetch

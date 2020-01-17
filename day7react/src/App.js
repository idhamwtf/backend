import React, {useEffect, Fragment, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { APIURL } from './helper/apiurl';
import { Table } from 'reactstrap';

function App() {

  const[datausers, setdatausers]=useState([])
  let diupdatejalan=false

  useEffect(()=>{
    console.log('didmount')
    diupdatejalan=true
    Axios.get(`${APIURL}users`)
    .then((res)=>{  
      setdatausers(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    if(diupdatejalan){
      console.log(`didupdate`)
    }
  })


  const renderusers=()=>{
    datausers.map((val,index)=>{
      return(
        <tr key={index}>
          <th scope="row"> {index+1}</th>
            <td>{val.username}</td>
            <td>{val.email}</td>
            <td>{val.phone}</td>
            <td>{val.usia}</td>
            {
              val.rolename?
              <td>{val.rolename}</td>
              :
              <td>blm ada role</td>
            }
            <td>
              <button>Edit</button>
              <button>delete</button>
            </td>
          
        </tr>
      )

    })
  }


  return (
    <Fragment>
     <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>username</th>
          <th>email</th>
          <th>phone</th>
          <th>usia</th>
          <th>role</th>
        </tr>
      </thead>
      <tbody>
       {renderusers()}
      </tbody>
    </Table>
   </Fragment>
  );
}

export default App;

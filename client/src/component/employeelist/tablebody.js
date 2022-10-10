import axios from 'axios'
import React from 'react'
import Buttom from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function Tablebody({tabledata}) {

  console.log("tabledata._id=>",tabledata)

  const deleteEmployee = (datatdelete) =>{
    console.log("datatdelete=>",datatdelete)
    axios.delete('http://localhost:8000/emp/delete-employee'+tabledata._id)
    .then((res) => {
      console.log('Student successfully deleted!',res)
    }).catch((error) => {
      console.log(error)
  })
  }
  return (
    <tr>
        <td>{tabledata?.name}</td>
        <td>{tabledata?.email}</td>
        <td>{tabledata?.empid}</td>
        <td>
        <Link className="edit-link" to={'/'} >Edit</Link>
        <Buttom onClick={()=>deleteEmployee(tabledata._id)} size="sm" variant="danger" >Delete</Buttom></td>
    </tr>
  )
}

export default Tablebody
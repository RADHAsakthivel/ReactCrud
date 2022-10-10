import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import Tablebody from './tablebody'

function EmployeElist() {

  // const [loading, setLoading] = useState(true);
  const [emplist,setEmpList]=useState([])
  console.log("emplist=>",emplist)
  useEffect(()=>{
    axios.get('http://localhost:8000/emp')
    .then(res => {
      console.table("res.data",res.data)
      setEmpList(res.data)
    })
    .catch(error => {
      console.log("errr=>",error)
    })
  },[])

  
  return (
    <div className='table-wrapper'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Empid</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {emplist.map((data)=> <Tablebody tabledata={data} key={data._id} />)}
              </tbody>
            </Table>
          </div>
  )
}

export default EmployeElist
  



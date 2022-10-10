import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

function CreateEmployee() {
  const [name, setName] = useState({ name: "", email: "", empid: "" });

  const onChangeEmpName = (event) => {
    // console.log("event.name=>", name);
    setName({
      ...name,
      [event.target.name]: event.target.value,
    });
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    // console.log("name=>", name);
    const empObject={
      name:name.name,
      email:name.email,
      empid:name.empid
    }
    axios.post('http://localhost:8000/emp/create-employee',empObject)
    .then(res => console.log(res.data))

      setName({ name: "", email: "", empid: "" })
  };
  return (
    <div className="form-warpper">
      <Form onSubmit={onsubmitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name.name}
            onChange={onChangeEmpName}
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={name.email}
            onChange={onChangeEmpName}
          />
        </Form.Group>
        <Form.Group controlId="Employeeid">
          <Form.Label>Employeeid</Form.Label>
          <Form.Control
            type="number"
            name="empid"
            value={name.empid}
            onChange={onChangeEmpName}
          />
        </Form.Group>
        <Button
          variant="danger"
          size="lg"
          block="block"
          className="mt-4"
          type="submit"
        >
          {" "}
          CreateEmployee
        </Button>
      </Form>
    </div>
  );
}

export default CreateEmployee;

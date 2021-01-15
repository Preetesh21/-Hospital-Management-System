import React, { Fragment, useEffect, useState } from "react";
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';
import {Link} from 'react-router-dom';

const HospitalHome = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/hospital");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      <Navber />
      <h1 className="text-center m-4">Hospital Rooms Description</h1>
      
      <table className="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th>ROOM NUMBER</th>
            <th>AVAILABLE</th>
            <th>PRIVATE ROOM</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.rooms}>
              <td>{todo.rooms}</td>
              <td>
                  {todo.available.toString()}
              </td>
              <td>{todo.pr.toString()}</td>
              <td><Link to={{
                  pathname: `/hospital/${todo.rooms}`}}><button className="btn btn-primary" >Check us </button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </Fragment>
  );
};

export default HospitalHome;
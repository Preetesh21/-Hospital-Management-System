import React,{useState,useEffect} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';
import {Link} from 'react-router-dom';

function DoctorGet(props) {
    //console.log(props.match.params,props.match.params.id)
    const id=props.match.params.id;
    //console.log(id,date,hr);

    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
          const response = await fetch(`http://localhost:5000/doctor/${id}`);
          const jsonData = await response.json();
    
          console.log(jsonData);
          setTodos(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getTodos();
      }, []);

      
    return (
        <>
        <Navber />
        <h1 className="text-center">Our Doctors</h1>
<div className="container">
<div className="card-deck justify-content-center">
{todos.map((todo) => (
  <div className="col-sm-4" key={todo.doctor_id}>
    <div className="card bg-light border-danger mb-3">
    <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png"alt=""></img>
      <div className="card-body">
      <b>
        <h5 className="card-title">Name::{todo.name}</h5>
        <p className="card-text">Field:{todo.specialization}</p>
        <p className="card-text">Gender:{todo.gender}</p>
        <p className="card-text">Age:{todo.age}</p>
        <p className="card-text">Tenure:{todo.tenure}</p>
        <p className="card-text">Available:{todo.available.toString()}</p></b>
        {(localStorage.getItem("admin"))==='t'?
        <Link to={{
                  pathname: `/doctor/update/${todo.doctor_id}`}}>Update </Link>
                  :
                  <></>
        }
      </div>
    </div>
  </div>
))}
</div>
</div>
        <Footer />
        </>
    )
}

export default DoctorGet

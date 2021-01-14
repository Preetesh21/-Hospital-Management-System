import React,{Fragment,useState,useEffect} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';


function PatientGet(props) {
    //console.log(props.match.params,props.match.params.id)
    const id=props.match.params.id;
    //console.log(id,date,hr);

    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
          const response = await fetch(`http://localhost:5000/patient/${id}`);
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

      const mystyle = { width: "60px",
      height: "60px",
      borderRadius: "50%",
      cursor: "pointer"};
    return (
        <>
        <Navber />
        <h1 className="text-center">Patient Details</h1>
<div className="container">
<div className="card-deck justify-content-center">
{todos.map((todo) => (
  <div className="col-sm-4" key={todo.patient_id}>
    <div className="card bg-light border-danger mb-3">
    <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png"alt=""></img>
      <div className="card-body">
      <b>
        <h5 className="card-title">Name::{todo.name}</h5>
        <p className="card-text">Address:{todo.address}</p>
        <p className="card-text">Gender:{todo.gender}</p>
        <p className="card-text">Age:{todo.age}</p>
        <p className="card-text">Disease:{todo.disease}</p>
        <p className="card-text">Arrival Date:{todo.arrival_date.toString().slice(0,10)}</p>
        <p className="card-text">Departure Date:{todo.departure_date.toString().slice(0,10)}</p>
        <div className="fa fa-phone"></div>{todo.contact}</b>
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

export default PatientGet

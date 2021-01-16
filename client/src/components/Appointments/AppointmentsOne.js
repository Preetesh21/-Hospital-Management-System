import React,{useState,useEffect} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';
import './Appointments.css';
import {Link} from 'react-router-dom';

function AppointmentsOne(props) {
    //console.log(props.match.params,props.match.params.id)
    const id=props.match.params.id;
    const date=props.match.params.date.toString().slice(0,10);
    
    const hr=props.match.params.hr;
    //console.log(id,date,hr);

    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
          const response = await fetch(`http://localhost:5000/appointments/one/${id}&${date}&${hr}`);
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
        <h1 className="text-center mb-3">The Appointment</h1>
        <div className="container" align="center">
        {todos.map((todo,index) => (
        <div className="col-sm-4" key={index}>
        <div className="card m-2">
            <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
                <div className="left d-flex flex-column">
                    <h5 className="mb-1">TIME: {todo.hr}:00 hrs</h5>
                    <p className="text-muted mb-1 sm-text">DATE-  {todo.date.toString().slice(0,10)}</p>
                </div>
                <div className="right"> <img style={mystyle} src="https://www.w3schools.com/bootstrap4/img_avatar1.png" alt=""></img> </div>
            </div>
            <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
                <div className="left d-flex flex-column">
                    <h5 className="mb-1">Patient :::{todo.patient_name}</h5>
                    <p className="text-muted mb-1 sm-text">Doctor:::{todo.doctor_name}</p>
                </div>
                <div className="right d-flex">
                    <div className="fa fa-comment-o"></div>
                    <div className="fa fa-phone"></div>
                </div>
            </div>
            <div className="row justify-content-between mx-2 px-3 card-strip">
                <div className="left d-flex">
                    <h5 className="mb-1">DURATION</h5> <span className="time">1 hr</span>
                </div>
                <div className="right d-flex">
                    <p className="mb-0 price mr-2"><strong className="text-muted">$80.00</strong></p>

                    {(localStorage.getItem("admin")==='t' )?
                    <Link to={{
                  pathname: `/history/add/${todo.doctor_id}`}}><button className="btn btn-info"> Conduct </button></Link>
                  :
                  <></>
                    }
                </div>
            </div>
        </div>
        </div>
        ))}
        </div>
        <Footer />
        </>
    )
}

export default AppointmentsOne

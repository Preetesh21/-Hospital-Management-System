import React,{Fragment,useState,useEffect} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';

function HistoryGet(props) {
    const id=props.match.params.id;
    const doctor_id=props.match.params.doctor_id;
    const date=props.match.params.date;
    const hr=props.match.params.hr;
console.log(id,doctor_id,date,hr)
    
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
          const response = await fetch(`http://localhost:5000/history/${id}&${doctor_id}&${date}&${hr}`);
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

      const mystyle = { width: "100px",
      height: "100px",
      //borderRadius: "50%",
      float:"right",
      cursor: "pointer"};
    return (
        <>
        <Navber />
        <div className="container">
        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="card-deck">
                {todos.map((todo,index) => (
                <div className="card" id="card" key={index}>
                    <h1 className="text-center">Prescription</h1>
                    <p className="text-muted text-center sm-text">Hospital </p>
                    <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
                        <div className="left d-flex flex-column">
                            <h6 className="mb-1">Time ::{todo.hr}:00 </h6>
                            <p className=" mb-1 sm-text">Date::{todo.date} </p>
                            <h5 className="mb-1">Disease ::{todo.disease}  </h5>
                            <small className="text-muted">Not Necessaryilty the same</small>
                            <h5 className="mb-1">Cure ::{todo.cure} </h5>
                        </div>
                        <div className="right d-flex">
                            <img style={mystyle} src="https://www.rasmussen.edu/-/media/images/blogs/school-of-health-sciences/2020/types-of-preventive-care-s.jpg"></img>
                        </div>
                        
                    </div>
                    <div className="row d-flex justify-content-between mx-2 px-3 card-strip">
                        <div className="left d-flex flex-column">
                            <h5 className="mb-1">Patient ID::{todo.patient_id}</h5>
                            <h5 className="mb-1">Doctor ID::{todo.doctor_id}</h5>
                        </div>
                        
                    </div>
                    <div className="row justify-content-between mx-2 px-3 m-2">
                        <div className="left d-flex">
                            <h5 className="mb-1 text-muted">Duration</h5> <span className="time">1 hr</span>
                        </div>
                        <div className="right d-flex">
                            <p className="mb-0 price">Amount <strong className="text-muted">$80.00</strong></p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="row d-flex justify-content-between mx-2 px-3 col-sm-12"> 
                    <button className="btn btn-white">Download</button> 
                        <div className="fa fa-comment-o col-sm-3"></div>
                        <div className="fa fa-phone col-sm-3"></div>
                    </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default HistoryGet

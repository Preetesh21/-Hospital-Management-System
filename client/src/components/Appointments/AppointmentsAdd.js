import React,{useState} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';
import {Redirect} from 'react-router-dom';

function AppointmentsAdd(props) {

    const patient_id=props.match.params.id;
    const [doctor_id, setDoctor_id] = useState("");
    const [date, setDate] = useState("");
    const [hr, sethr] = useState("");
    if(patient_id!==localStorage.getItem("id"))
    {
      return <Redirect to={
        {
          pathname: '/unauthorized',
        }
      }/>
    }

    const handleClick=async(e)=>{
        e.preventDefault();
        const body={doctor_id,date,hr};
        console.log(body);

      fetch(`http://localhost:5000/appointments/${patient_id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        let path=`/appointments/one/${patient_id}&${date}&${hr}`;
		props.history.push(path);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    return (
        <>
        <Navber />
        <div className="container">
        <h1 className="text-center">Add a Doctor</h1>
         <form>
        <div className="form-group">
            <label >Doctor_id</label>
            <input type="number"onChange={e => setDoctor_id(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Date</label>
            <input type="date" onChange={e => setDate(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Hour</label>
            <input type="number" onChange={e => sethr(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>

        <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
        </form>   
        </div>
        <Footer />
        </>
    )
}

export default AppointmentsAdd

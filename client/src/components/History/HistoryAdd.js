import React,{useState} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';

function PatientAdd(props) {
    const doctor_id=props.match.params.id;
    const [patient_id, setPatient_id] = useState("");
    const [disease, setDisease] = useState("");
    const [cure, setCure] = useState("");
    const [room_number, setRoom_number] = useState("");
    const [date, setDate] = useState("");
    const [hr, sethr] = useState("");

    const handleClick=async(e)=>{
        e.preventDefault();
        const body={patient_id,disease,cure,room_number,date,hr};
        console.log(body);

      fetch(`http://localhost:5000/history/${doctor_id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        let path=`/history/${patient_id}&${doctor_id}&${date}&${hr}`;
		props.history.push(path);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    return (
        <>
        <Navber />
        <h1>History conduction form</h1>
        <div className="container">
         <form>
        <div className="form-group">
            <label >Patient_id</label>
            <input type="number"onChange={e => setPatient_id(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Disease</label>
            <input type="text" onChange={e => setDisease(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Cure</label>
            <input type="text" onChange={e => setCure(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Room_Number</label>
            <input type="text" onChange={e => setRoom_number(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Date</label>
            <input type="date" onChange={e => setDate(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Hr</label>
            <input type="number" onChange={e => sethr(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>

        <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
        </form>   
        </div>
        <Footer />
        </>
    )
}

export default PatientAdd

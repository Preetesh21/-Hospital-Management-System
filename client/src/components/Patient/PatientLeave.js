import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Redirect} from 'react-router-dom';
  

  function PatientLeave(props) {
    const id=props.match.params.id;
    if(id!==localStorage.getItem("id"))
    {
      return <Redirect to={
        {
          pathname: '/unauthorized',
        }
      }/>
    }
    const handleUpdate=async (e)=>{
        e.preventDefault();
        //const body="true";
        console.log(id)
        const response = await fetch(`http://localhost:5000/patient/leave/${id}`, {
            method: "POST",
          });
          fetch(`http://localhost:5000/patient/leave/${id}`, {
            method: "POST",
          })
          .then(response => response.json())
          .then(result => {
            console.log('Success:', result);
            let path=`/patient/${id}`;
            props.history.push(path);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }

    const handleClose=(e)=>{
        e.preventDefault();
		let path=`/patient/${id}`;
		console.log(path)
		props.history.push(path);
    }

    return (
      <>
      <Modal
      show={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Are you share you want to make this change for room {id} i.e. change its current state of availability to other.
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  
  export default PatientLeave
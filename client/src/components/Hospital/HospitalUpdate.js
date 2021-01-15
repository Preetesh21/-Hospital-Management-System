import React, { Fragment, useEffect, useState } from "react";
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  
  function HospitalUpdate(props) {
    const id=props.match.params.room_number;
  
    const handleUpdate=async (e)=>{
        e.preventDefault();
        const body="true";
        console.log(id)
        const response = await fetch(`http://localhost:5000/hospital/${id}`, {
            method: "POST",
          });

        let path=`/hospital`;
		console.log(path)
		props.history.push(path);
    }

    const handleClose=(e)=>{
        e.preventDefault();
		let path=`/hospital`;
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
  
  export default HospitalUpdate
import Auth from '../Auth/Auth';
import React, { Fragment, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  
  function logout(props) {
  
    const handleUpdate=async (e)=>{
        Auth.setID("");
        Auth.setadmin("");
        localStorage.setItem("admin", "");
        localStorage.setItem("id", "");
        props.history.push('/');
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
            Are you share you want to logout??
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleUpdate}>Logout</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  
  export default logout

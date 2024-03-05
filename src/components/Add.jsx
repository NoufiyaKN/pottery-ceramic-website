import React, { useState }  from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addCategoryAPI } from '../services/allAPI';


function Add() {

  const [show, setShow] = useState(false);
  const [uploadCategory,setUploadCategory]=useState({
    categoryName:""
  })
   const handleShow = () => setShow(true);
   const handleClose = () => {
       setShow(false);
     } 
     const handleupload= async()=>{
       const {categoryName}=uploadCategory
       if(categoryName){
          const result=await addCategoryAPI(uploadCategory)
          if(result.status>=200 && result.status<300){
            alert(`Category ${result.data.categoryName} is added sucessfully`)
          }else{
           alert("api call failed... please try again")
          }
       }else{
           alert("please fill the form completely")
       }
     }

  return (
    <>
    <div className='d-flex'>
        <h5>Upload a Category</h5>
        <button onClick={handleShow} className='btn btn-primary ms-2 rounded-circle'>  <i style={{color: 'white'}} className="fa-solid fa-plus"></i></button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Pottery Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please Fill the following details!!!</p>
            <FloatingLabel
            controlId="floatingInputCaption"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control onChange={e=>setUploadCategory({...uploadCategory,categoryName:e.target.value})} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleupload} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
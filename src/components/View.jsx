import React, { useEffect, useState } from 'react'
import { getCategoryAPI, uploadPotteryAPI } from '../services/allAPI'
import { Button, Modal, FloatingLabel, Form } from 'react-bootstrap';
import ViewPottery from './ViewPottery';

function View(setDeleteCategoryResponse) {

  const [uploadPottery,setUploadPottery] = useState({
    itemName:"",imageURL:"",technique:"",clayType:""
  })
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    setUploadPottery({...uploadPottery, itemName:"",imageURL:"",technique:"",clayType:""
  })
  };
  const handleShow = () => {
    setShow(true)
  };

  const [allCategories,setAllCategories] = useState([])

  const getAllCategories = async ()=>{
    const result = await getCategoryAPI()
    // console.log(result);
    if(result?.status==200){
      setAllCategories(result?.data);
    }
  }

  useEffect(()=>{
    getAllCategories()
  },[])
  console.log(allCategories);
  console.log(uploadPottery);
  
  const handleupload= async()=> {
    const {itemName,imageURL,technique,clayType}=uploadPottery
    if(itemName && imageURL && technique && clayType){
   const result=await uploadPotteryAPI(uploadPottery)
   console.log(result);
   if(result.status>=200 && result.status<300){
     alert(`Pottery'${result.data.itemName}'upload successfully `)
     handleClose()
   }else{
     alert("API call failed ... please try after some time!!!")
   }
    }else{
     alert('please fill the form completely!!')
    }
     }
     
  return (
    <>
      <div className='container-fluid mt-3'>
      {
        allCategories.length>0? allCategories.map((item,index)=>(
          <div key={index} className='border rounded p-3 mb-2'>
            <div className='d-flex justify-content-between'>
              <h5>{item.categoryName}</h5>
              <div className='d-flex justify-content-right'>
                <button  className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
                <button onClick={handleShow} className='btn btn-primary ms-2 rounded-circle'>  <i style={{color: 'white'}} className="fa-solid fa-plus"></i></button>
              </div>            
            </div>
            <ViewPottery />
          </div>
        ))
        : <div className='text-danger fw-bolder'>
          No Categories are added yet!!!
        </div>
      }
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
            label="Item Name"
            className="mb-3"
          >
            <Form.Control value={uploadPottery.itemName} onChange={e=>setUploadPottery({...uploadPottery,itemName:e.target.value})} type="text" placeholder="Item Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputCaption"
            label="Image URL"
            className="mb-3"
          >
            <Form.Control value={uploadPottery.imageURL} onChange={e=>setUploadPottery({...uploadPottery,imageURL:e.target.value})} type="text" placeholder="Image URL" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputCaption"
            label="Technique Used"
            className="mb-3"
          >
            <Form.Control value={uploadPottery.technique} onChange={e=>setUploadPottery({...uploadPottery,technique:e.target.value})} type="text" placeholder="Technique Used" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputCaption"
            label="Clay Type"
            className="mb-3"
          >
            <Form.Control value={uploadPottery.clayType} onChange={e=>setUploadPottery({...uploadPottery,clayType:e.target.value})} type="text" placeholder="Clay Type" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleupload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default View
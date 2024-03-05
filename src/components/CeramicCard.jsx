import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { removeCardAPI } from '../services/allAPI'

function CeramicCard({displayData,setDeleteCardResponse}) {

  const deleteCard = async (cId)=>{
    // api call
    const result = await removeCardAPI(cId)
    setDeleteCardResponse(result.data)
  }

  return (
    <>
    <Card style={{height: '300px',width:'210px'}} className='shadow'>
      <Card.Img style={{cursor: 'pointer',height: '150px'}} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className=''>
            <p>{displayData?.itemName}</p>
            <p>{displayData?.technique}</p>
        </Card.Title>
        <Card.Title className='d-flex justify-content-between'>
            <p>{displayData?.clayType}</p>
        {<button onClick={()=>deleteCard(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>

    
    </>
  )
}

export default CeramicCard
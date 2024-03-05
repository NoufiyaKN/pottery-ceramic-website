import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import CeramicCard from './CeramicCard'
import { getPotteryAPI } from '../services/allAPI'

function ViewPottery() {
    const [deleteCardResponse,setDeleteCardResponse] = useState("")
    const [allPottery,setAllPottery] = useState([])

    const getAllPottery = async ()=>{
       const result = await getPotteryAPI()
       console.log(result);
       if(result?.status==200){
        setAllPottery(result?.data);
       }
    }

    useEffect(()=>{
        getAllPottery()
    },[deleteCardResponse])

console.log(allPottery);
  return (
    <>
        <Row>
            { allPottery?.length>0? allPottery?.map((pottery,index)=>(
                <Col key={index} className='mb-4' sm={12} md={6} lg={6}>
                  <CeramicCard displayData={pottery} setDeleteCardResponse={setDeleteCardResponse} />
                </Col>
            ))
            
            :
            <div className='text-danger fw-bolder'>Nothing to Display!!!</div>
            }
        </Row>
    </>
  )
}

export default ViewPottery
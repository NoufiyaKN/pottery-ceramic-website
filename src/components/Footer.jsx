import React from 'react'
import { Row,Col } from 'react-bootstrap'


function Footer() {
  return (
    <>
    <hr />
    <div style={{backgroundColor: '#8c6854'}} className='box1 container mt-5 w-100'>
        <Row className="d-flex justify-content-between">
            <Col style={{width : '300px',color: 'white'}} className="mt-4" sm={12} md={6} lg={4}>
                <h5 style={{color: 'white'}} className='d-flex'>POTTERY</h5>
                <hr style={{width: '25%'}} />
                <p style={{textAlign : 'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere dolores sed explicabo maiores perspiciatis minus, vitae et.</p>
                <div className='icons d-flex justify-content-between mt-3'>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-twitter"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-linkedin"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-brands fa-github"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i className="fa-solid fa-phone"></i></a>
                </div>
            </Col>
            <Col style={{width : '200px',color: 'white'}} className="d-flex flex-column mt-4" sm={12} md={6} lg={4}>
                <h5 style={{color: 'white'}}>FAMOUS QUOTES</h5>
                <hr style={{width: '50%',color: 'white'}} />
                <p>"Art Is Not What You See, But What You Make Others See." </p>
                <p>"Moulding Soul Into The Clay." </p>
            </Col>
            <Col style={{width : '200px'}} className="d-flex flex-column mt-4" sm={12} md={6} lg={4}>
                <h5 style={{color: 'white'}}>QUICK LINKS</h5>
                <hr style={{width: '50%',color: 'white'}} />

                <a href="https://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React JS</a>
                <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React Routing</a>
                <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration: 'none',color: 'white'}}>React Bootstrap</a>
            </Col>
            <Col style={{width : '250px',color: 'white'}} className="d-flex flex-column mt-4" sm={12} md={6} lg={4}> 
                <h5 style={{color: 'white'}}>CONTACT INFO</h5>
                <hr style={{width: '50%',color: 'white'}} />
                <p>Street 238,52 tempor <br />Donec ultricies mattis nulla,suscipit ut. <br /><br />
                Phone No : +1 500 000 0000 <br />
                Email : demo@lorem.com <br />
                Website : http://demo.com</p>
                
            </Col>
        </Row>
        <p style={{color: 'white'}} className='text-center mt-4'>Copyright &copy; 2024 Media Player. Build with React.</p>
    </div>
    </>
  )
}

export default Footer
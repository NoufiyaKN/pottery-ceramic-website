import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

    const navigate = useNavigate()

    const handleNavigate=()=>{
        navigate('/home')
    }

  return (
    <>
    <div className='d-flex justify-content-center ' style={{height: '100vh',weight: '100%', backgroundImage: 'url("https://images.unsplash.com/photo-1563188083-f420cb05d356?q=80&w=1650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',backgroundSize: 'contain'}}>
        <div>
            <h1 style={{textAlign: 'center'}}><span style={{color: 'black',fontSize: '17px'}}>Exclusive Ceramics & </span><br />Pottery Retailer</h1>
            <h6 style={{fontSize: '12px',textAlign: 'center'}}>We Make Unique Things With Love & Passion </h6>
            <div className='d-flex justify-content-center'>
                <button onClick={handleNavigate} className='btn btn-info'>Get Started</button>
            </div>        
        </div>
    </div>
    <div className='box1 container mt-5 w-100'>
        <Row className="d-flex justify-content-between row1">
            <Col style={{width : '200px'}} className="col1 mt-3" sm={12} md={6} lg={4}>
                <img style={{height: '100px',width: '50%',display: 'block',marginLeft: 'auto',marginRight: 'auto'}} className='mt-5' src="https://cdn0.iconfinder.com/data/icons/outline-interiors/48/vase_jar_ceramic_pottery_jug-512.png" alt="" />
                <h5 style={{color: 'black',fontSize: '22px'}} className='d-flex justify-content-center mt-5 mb-4'>Pottery Classes</h5>
                
                <p style={{textAlign : 'center',fontSize: '14px'}} className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere dolores sed explicabo maiores perspiciatis minus, vitae et.</p>
            </Col>
            <Col style={{width : '200px'}} className="col1 mt-3" sm={12} md={6} lg={4}>
                <img style={{height: '100px',width: '50%',display: 'block',marginLeft: 'auto',marginRight: 'auto'}} className='mt-5' src="https://png.pngtree.com/png-clipart/20230418/original/pngtree-pottery-line-icon-png-image_9065315.png" alt="" />
                <h5 style={{color: 'black',fontSize: '22px'}} className='d-flex justify-content-center mt-5 mb-4'>Design process</h5>
                
                <p style={{textAlign : 'center',fontSize: '14px'}} className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere dolores sed explicabo maiores perspiciatis minus, vitae et.</p>
            </Col>
            <Col style={{width : '200px'}} className="col1 mt-3" sm={12} md={6} lg={4}>
                <img style={{height: '100px',width: '50%',display: 'block',marginLeft: 'auto',marginRight: 'auto'}} className='mt-5' src="https://cdn2.iconfinder.com/data/icons/recreation-hobbies-vol-2-line/128/Pottery-512.png" alt="" />
                <h5 style={{color: 'black',fontSize: '22px'}} className='d-flex justify-content-center mt-5 mb-4'>Gift Cards</h5>
                
                <p style={{textAlign : 'center',fontSize: '14px'}} className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere dolores sed explicabo maiores perspiciatis minus, vitae et.</p>
            </Col>
            <Col style={{width : '200px'}} className="col1 mt-3 " sm={12} md={6} lg={4}>
                <img style={{height: '100px',width: '50%',display: 'block',marginLeft: 'auto',marginRight: 'auto'}} className='mt-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvXsAkefu1CnUfAHBrpkorZXlg1DXr6UlJA&usqp=CAU" alt="" />
                <h5 style={{color: 'black',fontSize: '22px'}} className='d-flex justify-content-center mt-5 mb-4'>Pottery Wheel</h5>
                
                <p style={{textAlign : 'center',fontSize: '14px'}} className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia facere dolores sed explicabo maiores perspiciatis minus, vitae et.</p>
            </Col>
        </Row>
        <div className='box2 container mb-5 w-100 mt-5'>
            <Row className='d-flex justify-content-between row'>
            <Col style={{height: '500px',width: '550px',backgroundImage: 'url("https://i.pinimg.com/736x/28/c7/80/28c7804f5c8269a8ba268f6a77b10b35.jpg")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}} sm={12} md={6} lg={6}>                   
                <h4 style={{fontSize: '30px'}} className='mt-4'>Ceramics & <br /><span style={{fontSize: '40px'}} className='fw-bolder ms-5'>Crafts</span></h4>
                <div style={{marginTop: '25px'}}>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore consectetur sit ut, dolorem voluptatibus totam deserunt.</p>
                    <button className='btn btn-prmary' style={{border: '1px solid'}}>Shop Now</button>
                </div>     
           </Col>
                <Col style={{height: '500px',width: '550px',backgroundImage: 'url("https://www.kolus.in/cdn/shop/products/Kolus2021March-133.jpg?v=1647424996")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center'}} className='mt-5 mb-5' sm={12} md={6} lg={6}>
                <h4 style={{fontSize: '30px',color: 'white'}} className='mt-4'>Pottery & <br /><span style={{fontSize: '40px'}} className='fw-bolder ms-5'>Clay Pot</span></h4>
                <div style={{marginTop: '25px'}}>
                    <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore consectetur sit ut, dolorem voluptatibus totam deserunt.</p>
                    <button className='btn btn-prmary' style={{border: '1px solid white',color: 'white'}}>Shop Now</button>
                </div>
            </Col>
            </Row>
            <Row style={{height: '550px',backgroundColor: '#f2e3da',position: 'relative'}} className='row'>
                <Col className='' style={{height: '50px',width: '100%',position: 'absolute',top: '50px'}} lg={12}>
                    <h2 style={{color: 'black',textAlign: 'center'}}>Customers Feedback</h2>
                </Col>                
                <Col className='d-flex justify-content-center' lg={12}>
                    <section  style={{width: '75%',border: '1px solid white',position: 'absolute',top: '150px',padding: '15px'}} className="about section d-flex justify-content-center align-items-center">
                        <Carousel>
                            <Carousel.Item>
                                <p style={{textAlign: 'center'}}>"Aute adipisicing est pariatur exercitation quis amet voluptate ut culpa adipisicing. Consequat et in nulla laborum est. Labore laborum id duis minim tempor magna non eu irure deserunt esse.Dolor esse deserunt quis est quis labore."</p>
                                <div style={{height: '100px',backgroundImage: 'url("https://www.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-600nw-1836020740.jpg")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',backgroundSize: 'contain'}}>    
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p style={{textAlign: 'center'}}>"Exercitation irure cupidatat irure qui. Laborum  laborum cillum irure nisi id tempor non eiusmod eu et mollit. Anim aute laborum id dolore officia cillum velit aute laborum tempor culpa elit anim. Ex velit esse reprehenderit in aliquip nisi et exercitation."</p>
                                <div style={{height: '100px',backgroundImage: 'url("https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',backgroundSize: 'contain'}}>    
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p style={{textAlign: 'center'}}>"Aute adipisicing est pariatur exercitation quis amet voluptate ut culpa adipisicing. Consequat et in nulla laborum est. Labore laborum id duis minim tempor magna non eu irure deserunt esse.Dolor esse deserunt quis est quis labore."</p>
                                <div style={{height: '100px',backgroundImage: 'url("https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',backgroundSize: 'contain'}}>    
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p style={{textAlign: 'center'}}>"Exercitation irure cupidatat irure qui. Laborum  laborum cillum irure nisi id tempor non eiusmod eu et mollit. Anim aute laborum id dolore officia cillum velit aute laborum tempor culpa elit anim. Ex velit esse reprehenderit in aliquip nisi et exercitation."</p>
                                <div style={{height: '100px',backgroundImage: 'url("https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',backgroundSize: 'contain'}}>    
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <p style={{textAlign: 'center'}}>"Aute adipisicing est pariatur exercitation quis amet voluptate ut culpa adipisicing. Consequat et in nulla laborum est. Labore laborum id duis minim tempor magna non eu irure deserunt esse.Dolor esse deserunt quis est quis labore."</p>
                                <div style={{height: '100px',backgroundImage: 'url("https://sb.kaleidousercontent.com/67418/1920x1282/9d56e09251/christina-wocintechchat-com-50tkcap8m3a-unsplash.jpg")',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundPosition: 'center',backgroundSize: 'contain'}}>    
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        </section>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default LandingPage
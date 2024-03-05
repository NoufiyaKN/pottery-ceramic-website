import React from 'react'
import Add from '../components/Add'
import View from '../components/View'

function Home() {
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <Add />
    </div>
    <div className="container-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
        <h3>All Categories</h3>
        <View />
      </div>
      </div>
    </>
  )
}

export default Home
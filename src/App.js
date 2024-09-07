import React from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import AllRoutes from './allRoutes/AllRoutes'
const App = () => {
  return (
    <>
    <Header/>
    <div className="container" style={{ minHeight:"700px"}}>
    <AllRoutes/>
    </div>
    <Footer/>
    </>
  )
}

export default App
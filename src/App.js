import React from 'react'
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Routing from './Routing';
import "./App.css"
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routing />
      <Footer />
    </>
  )
}

export default App;
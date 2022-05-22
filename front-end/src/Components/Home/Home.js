import React from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import './Home.css'

function Home() {
    return (
        <div className='container-fluid bgimage'>
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home

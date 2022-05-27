import React from 'react'
import './Home.css'
import Navbar from './Navbar/Navbar'
// import Slider from './Slider/Slider'
import Input from './Input/Input'
import Vet from './Vet/Vet'
import FAQ from './FAQ/FAQ'


const Home = () => {
    
    return (
        <div>
            <Navbar />
            {/* <Slider /> */}
            <Input />
            <Vet />
            <FAQ />

        </div>
    )
}

export default Home

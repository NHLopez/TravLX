import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/Hero/HeroImage'
import Navbar from '../components/Navbar/Navbar'
import TrainingSection from '../components/Training/Training'

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.' />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Training

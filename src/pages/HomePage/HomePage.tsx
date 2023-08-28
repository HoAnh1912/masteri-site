import React from 'react'
import Banner from './components/Banner/Banner'
import Residences from './components/Residences/Residences'
import Location from './components/Location/Location'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'


const HomePage = () => {
    return (
        <>
            <Banner />
            <Residences />
            <Location />
            <Gallery />
            <Contact />
        </>

    )
}

export default HomePage
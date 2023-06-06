import React, { useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Shop from '../shope/Shop'
import { UserContext } from '../../UserContext'
const Layout = () => {
    // const {name} = useContext(UserContext)
    return (
        <div>
            
            <Header />
            <Shop/>
            <Footer />
        </div>
    )
}

export default Layout
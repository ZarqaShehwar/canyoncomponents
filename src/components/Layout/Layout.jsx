import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Layout = ({children}) => {
    // const {name} = useContext(UserContext)
    return (
        <div>
            
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
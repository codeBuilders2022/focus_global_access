//styels
import "./Layout.scss"

//components
import Header from '../Header/Header'
import Footer from '../../Footer/Footer'


//react
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='Layout'>
            <Header/>
            <main className='containerMain'>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
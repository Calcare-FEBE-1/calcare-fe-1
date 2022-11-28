
import React, {Fragment, useState} from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../style/css/About.css'

const About = () =>{

    const [ toggleTab, setToggleTab] = useState()
    const toggleState = (index) =>{
        setToggleTab(index)
    }

    return(
        <Fragment>
            <Navbar/>
            <section className='about'>
                <div className='row'>
                    <div className='column'>
                        <div className='about-img'>

                        </div>
                    </div>

                    <div className='column'>
                        <div className='tabs'>
                            <div className={toggleTab === 1 ? 'single-tab active-tab' : 'single-tab'} onClick={() => toggleState(1)}>
                                <h2>About</h2>
                            </div>
                            <div className={toggleTab === 2 ? 'single-tab active-tab' : 'single-tab'} onClick={() => toggleState(2)}>
                                <h2>Fitur</h2>
                            </div>
                            
                        </div>
                        <div className='tab-content'>
                            <div className={toggleTab === 1 ? 'contents active-content' : 'contents'}>
                                <h2>Story About Us</h2>
                                <p>
                                    Calcare adalah sebuah platform yang bisa menghitung kebutuhan kalori tiap hari nya, beserta dengan perhitungan karbon sesuai dengan makanan yang dipilih oleh user. Dan juga bisa mendapatkan rekomendasi diet sehat 
                                </p>
                            </div>
                            <div className={toggleTab === 2 ? 'contents active-content' : 'contents'}>
                                <h2>Fitur</h2>
                                <p>
                                    Calcare memiliki beberapa fitur yang dapat digunakan oleh para pengguna dengan harapan dapat membantu kebutuhan pengguna.
                                    <ul>
                                        <li>Track Kalori</li>
                                        <li>Pilihan Makanan</li>
                                        <li>Dampak Karbon</li>
                                        <li>Track Diet</li>

                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </Fragment>
    )
}

export default About;
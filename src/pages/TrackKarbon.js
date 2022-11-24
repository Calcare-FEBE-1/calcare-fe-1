import React from 'react'
import '../style/css/TrackKarbon.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {IoChevronBack} from 'react-icons/io5'
import Navbar from '../components/Navbar'
import image1 from '../assets/img/img1.png'


const TrackKarbon = () =>{
  


    return(
        <div className='Track-Cal'>
            <Navbar/>
            <main>
            <div className="container-fluid">
            <div className="container section-atas">
                <div className="row backIcon">
                    <Link className="back" to='/Homepage'><IoChevronBack size={35}/></Link>
                </div>
                <div className="teks">
                    <h6 className="heading">Dampak Karbon</h6>
                    <p className="paragraf">Hai, menu Dampak Karbon ini terdapat informasi jumlah karbon dari makanan yang telah kamu makan. Stay Healthy People!!</p>
                </div>
                
            </div>

            <div className="container section-track-kal">
                <div className="container track-left">
                    <div className="card card-left" style={{width:(900)}}>
                    
                    </div>
                    
                </div>
            </div>
            
            <div className='container section-button' style={{justifyContent: 'center'}}>
                    <img src={image1} width={150}></img>
                </div>
            <div className='container section-link' style={{justifyContent: 'center'}}>
                <p style={{color:'#E65924'}} size={14}>Anda belum memilih makanan hari ini di menu<Link className="detail" to='/pilihMakanan'>pilih makanan</Link></p>
            </div>
            
        </div>
            </main>
            <Footer/>
        </div>
    )
    
}

export default TrackKarbon;
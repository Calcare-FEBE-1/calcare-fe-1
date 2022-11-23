import React from 'react'
import { Link } from 'react-router-dom'
import '../style/css/index.css'
import Footer from '../components/Footer'
import NavbarIndex from '../components/NavbarIndex'
import HompePageFoto from '../assets/img/homepage.png'
import G1 from '../assets/img/1.jpeg'
import G2 from '../assets/img/2.jpeg'
import G3 from '../assets/img/3.jpeg'
import G4 from '../assets/img/4.jpeg'

const Index = () => {
  return (
    <div>

      <NavbarIndex url="/LogIn" name="Masuk"/>

      <main className='index'>
        <div className="container-fluid">
            <div className="container">
                <section>
                    <h1>Calcare</h1>
                    <h4>Keep your calories for your health</h4>
                    <p className="pb-3">Sejalan dengan Danone : One Planet One Health, kami mengajak setiap orang
                        untuk peduli terhadap kesehatan tubuh mereka dengan asupan gizi seimbang dari makanan yang
                        mereka konsumsi.
                    </p>
                    <p>Daftar sekarang dan nikmati fitur - fitur menarik
                        dari kami
                    </p>
                    <Link className="btn btn-primary" to='/SignUp'>Daftar Sekarang</Link>
                </section>
                <aside>
                    <img src={HompePageFoto} alt=""/>
                </aside>
            </div>
        </div>

        <div className="fitur">
            <div className="container">
                <h2>Fitur Kami</h2>
                <div className="fitur-atas">
                    <div className="fitur1">
                        <div className="content">
                            <h4>Tracking Kalori</h4>
                            <p>Tracking kalori adalah kalkulator untuk menghitung berapa jumlah kalori yang Anda
                                butuhkan
                                dari
                                makanan setiap hari, berdasarkan berat dan tinggi badan, usia, dan aktivitas Anda
                                sehari
                                -
                                hari.
                            </p>
                        </div>
                        <img src={G4} alt=""/>
                    </div>

                    <div className="fitur3">
                        <div className="content">
                            <h4>Tracking Diet</h4>
                            <p>Tracking diet memungkinkan kamu untuk memperoleh tips dan trik tentang kesehatan
                                tubuhmu
                                sesuai hasil tracking kalori yang sudah didapatkan.
                            </p>
                        </div>
                        <img src={G2} alt=""/>
                    </div>
                </div>

                <div className="fitur-bawah">
                    <div className="fitur2">
                        <div className="content">
                            <h4>Rekomendasi Makanan</h4>
                            <p>Dengan rekomendasi makanan sesuai kebutuhan kalori dapat memastikan kebutuhan kalori
                                terpenuhi.
                            </p>
                        </div>
                        <img src={G3} alt=""/>
                    </div>


                    <div className="fitur4">
                        <div className="content">
                            <h4>Tracking Dampak Karbon</h4>
                            <p>Tracking dampak karbon dapat menghitung kebutuhan karbon dari makanan yang telah kamu
                                makan.
                            </p>
                        </div>
                        <img src={G1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </main>

      <Footer/>

    </div>
  )
}

export default Index

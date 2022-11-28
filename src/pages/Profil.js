import React from 'react'
import Navbar from '../components/Navbar'
import {IoChevronBack} from 'react-icons/io5'
import {FaBirthdayCake} from 'react-icons/fa'
import {BsGenderAmbiguous} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import "../style/css/profil.css"
import Footer from '../components/Footer'

const Profil = () => {
    const nama = localStorage.getItem("nama")
    const email = localStorage.getItem("email")
    const nomorTelepon = localStorage.getItem("nomorTelepon")
    const umur = localStorage.getItem("umur")
    const berat = localStorage.getItem("berat")
    const tinggi = localStorage.getItem("tinggi")
    const aktivitas = localStorage.getItem("aktivitas")
    const kelamin = localStorage.getItem("kelamin")
  return (
    <>    
    <Navbar/>
    
    <div className='profil'>
            <main>
                <div className="container-fluid">
                    <div className="container section-atas">
                        <div className="row backIcon">
                            <Link className="back" to='/Home'><IoChevronBack size={35}/></Link>
                        </div>
                        <div className="teks">
                            <h6 className="heading">Profil</h6>
                            <p className="paragraf">Hai {nama}, di bagian profil berisi data penting tentang diri kamu. Kamu juga bisa menyunting data kamu jika masih ada salah input.</p>
                        </div>
                    </div>
                    <div className="container section-main">
                        <div className='kiri'>
                            <img src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" className='gambar-profil'/>
                            <h4>{nama}</h4>
                            <h5><FaBirthdayCake/> {umur}</h5>
                            <h5><BsGenderAmbiguous/> {kelamin}</h5>
                        </div>
                        <div className='kanan'>
                            <div className='section-kiri'>
                                <p>Email : </p>
                                <p>Nomor Telepon : </p>
                                <p>Berat Badan : </p>
                                <p>Tinggi Badan : </p>
                                <p>Aktivitas : </p>
                            </div>
                            <div className='section-kanan'>
                                <p>{email}</p>
                                <p>{nomorTelepon}</p>
                                <p>{berat} kg</p>
                                <p>{tinggi} cm</p>
                                <p>{aktivitas}</p>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </main>
        </div>
        <Footer/>
        </>

  )
}

export default Profil

import React from 'react'
import CalcareLogo from '../assets/img/CalcareLogo.png'
import LogoDanone from '../assets/img/danone.png'
import LogoSkilvul from '../assets/img/skilvul.png'
import '../style/css/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
            <div className="kiri">
                <img src={CalcareLogo} alt="Logo"/>
                <h5>Keep your calories for your health</h5>
                <p>Jl. H. R. Rasuna Said Daerah Khusus Ibukota Jakarta 12950</p>
                <div className="medsos">
                    <h5 >
                        Ikuti Kami
                    </h5>
                    <a href='www.facebook.com' ><i className="bi bi-facebook"></i></a>
                    <a href='www.instagram.com' ><i className="bi bi-instagram"></i></a>
                    <a href='www.twitter.com' ><i className="bi bi-twitter"></i></a>
                    <a href='www.youtube.com' ><i className="bi bi-youtube"></i></a>
                </div>
            </div>

            <div className="tengah">
                <h5>Layanan</h5>
                <p>Tentang Kami</p>
                <p>Kebijakan dan Privasi</p>
                <p>Hubungi Kami</p>
                <p>bantuan</p>
            </div>

            <div className="kanan">
                <h5>Challenge Partner</h5>
                <img src={LogoDanone} alt="danone" />
                <h5>Mitra</h5>
                <img src={LogoSkilvul} alt="skilvul"/>
            </div>
        </div>
    </footer>
  )
}

export default Footer

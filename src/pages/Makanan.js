import React from "react";
import '../style/css/makanan.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {IoChevronBack} from 'react-icons/io5'
import Navbar from "../components/Navbar";

const Makanan = () => {
    return(
        <div className="makanan">
            <Navbar/>
            <main>
            <div class="container-fluid">
            <div class="container section-atas">
                <div class="row backIcon">
                    <Link className="back" to='/Home'><IoChevronBack size={35}/></Link>
                </div>
                <div class="teks">
                    <h6 class="heading">Daftar Pilihan Makanan</h6>
              
                    <p class="paragraf">Pilihlah makanan yang sesuai dengan yang kamu makan dari daftar yang tersedia. Jika tidak ada, coba gunakan fitur pencarian</p>
                </div>
                <div class="date">
                    <input type="date" name="date" class="tanggal"/>
                </div>
                
            </div>
            
            <div class="container section-makanan">
                <div class="container section-makan-pagi">
                    <table class="table tbl-pagi table-borderless">
                        <thead>
                          <tr>
                            <th scope="col" style={{backgroundColor : '#B8DB70', width:'35rem'}} className="keterangan">Makan Pagi</th>
                            <th scope="col" style={{backgroundColor : 'white', color:'#11999E'}}>Jumlah</th>
                            <th scope="col" style={{backgroundColor : 'white', color:'#11999E'}}>Lemak</th>
                            <th scope="col" style={{backgroundColor : 'white', color:'#11999E'}}>Karb</th>
                            <th scope="col" style={{backgroundColor : 'white', color:'#11999E'}}>Protein</th>
                            <th scope="col" style={{backgroundColor : 'white', color:'#11999E'}}>Kal</th>
                          </tr>
                        </thead>
                        <tbody class="baris-makan-pagi">
                          <tr >
                            <td>name</td>
                            <td></td>
                            <td>fat</td>
                            <td>carbo</td>
                            <td>protein</td>
                            <td id="kalori">calorie</td>
                          </tr>
                        </tbody>
                      </table>
                      
                </div>

                
            </div>

            <div class='container section-tengah' style={{justifyContent: 'center'}}>
                <div class="tambah-item ">
                    <button class="tmbh-item-pagi"><Link to="/pilihMakanan">+ Tambahkan item</Link></button>
                </div>
            </div>

            <div class="container section-bawah" style={{justifyContent: 'center'}}>
              <button type="button" class="btn-lg kalori-btn" ><Link className="track-kal" to='/TrackCal'> Track Kalori</Link></button>
                <button type="button" class="btn-lg karbon-btn" > <Link className="track-karbon" to='/TrackCarbon'>Track Karbon</Link></button>
            </div>
        </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Makanan
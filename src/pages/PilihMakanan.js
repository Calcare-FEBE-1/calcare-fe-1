import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "../style/css/pilihMakanan.css"
import "../style/css/card.css"

const PilihMakanan = () => {
    const [post, setPost] = useState([])
    const [filter, setFilter] = useState('')
    
    
    useEffect(()=>{
        axios.get("https://6354fd4ada523ceadcf7e8d1.mockapi.io/eats")
        .then(res => {
            setPost(res.data)
        })
        .catch(err =>{
            // console.log(post)
        })
    },)
    
  return (
    <div>
      <Navbar/>

        <div className='pilihMakanan'>
            <main>
                <div className="container-fluid">
                    <div className="container section-atas">
                        <div className="row backIcon">
                            <a href="makanan.html" className="" id="back"><i className="fa-solid fa-chevron-left fa-2xl"></i></a>
                        </div>
                        <div className="teks">
                            <h6 className="heading">Daftar Pilihan Makanan</h6>
                            <p className="paragraf">Pilihlah makanan yang sesuai dengan yang kamu makan dari daftar yang tersedia.
                                Jika tidak ada, coba gunakan fitur pencarian</p>
                        </div>
                    </div>
                    <div className='container pb-5'>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" onChange={(e)=>{setFilter(e.target.value)}} id="search" placeholder="Search" aria-label="Search"/>
                        </div>
                    </div>
                    <div className='container pb-5'>
                        <div className='row justify-content-center row-cols-1 row-cols-md-3 lg-3 g-4'>
                            {post.filter((post)=>{
                                if(filter == ""){
                                    return post
                                }
                                else if(post.name.toLowerCase().includes(filter.toLocaleLowerCase())){
                                    return post
                                }
                            }).map((post, index) =>{
                                return(
                                    <Card 
                                        id={post.id} 
                                        post={post} 
                                        key={index} 
                                        image={post.image} 
                                        name={post.name} 
                                        protein={post.protein} 
                                        calories={post.calories} 
                                        carbohydrate={post.carbohydrate} 
                                        fat={post.fat}
                                    />
                                )
                            })}
                            
                        </div>
                    </div>
                    </div>
            </main>
        </div>

      <Footer/>
    </div>
  )
}

export default PilihMakanan

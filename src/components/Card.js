import React, { useState } from 'react'

const Card = (props) => {
    
    
    
    
  return (
        <>
            <div className='col'  >
            <div className="card pilihMakanan h-100">
                <img src={props.image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="card-text d-flex ">
                        <p id="protein" className="me-3">Protein : {props.protein} </p>
                        <p id="kalori">Kalori :{props.calories}   </p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="card-button">
                        <button  className="btn btn-primary me-2" id="pilih"  >Pilih</button>
                        <a className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={'#card'+props.id} id="detail">Detail</a>
                    </div>
                </div>
            </div>
            
       
            <div className="modal  fade" id={'card'+props.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><strong>{props.name}</strong></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex">
                            <img src={props.image}className="me-2" alt=""/>
                            <div className="modal-text ">
                                <h5 id="exampleModalLabel" className='mb-4'><strong>{props.name}</strong></h5>
                                <p id="protein" className="me-3">Protein : {props.protein}   </p>
                                <p id="kalori">Kalori : {props.calories}  </p>
                                <p id="karbohidrat" className="me-3">Karbohidrat : {props.carbohydrate}   </p>
                                <p id="fat">Fat : {props.fat}  </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="card-button">
                                <button  className="btn btn-primary me-2" id="pilih"  >Pilih</button>
                                            
                                <a className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="detail">Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Card
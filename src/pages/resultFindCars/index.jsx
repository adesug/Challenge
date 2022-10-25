import React, { useState, useEffect,useRef } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {Grid} from 'react-loader-spinner';
import './style.css';
// import ImgInnova from './assets/images/car.png';
const ResultFindCars = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true);

    const baseUrl = 'https://633ffc6ed1fcddf69cae3eac.mockapi.io'
    const getCars = () => {
        Axios.get(`${baseUrl}/cars`)
        .then((response) => {
          setCars(response.data);
          console.log(response.data);
          setLoading(false);
        })
        .catch((error) =>
          // handle error
          console.log(error)
        );
    };
    const fetch = useRef(true);
    useEffect(()=>{
        if(fetch.current) {
            getCars();
            fetch.current = false;
        }
    },[]);
    return (
        <>
            <main className="main">
                <section className="hero-section-result">
                </section>

                <section className="find-result">
                    <div className="container">
                        <div className="find-result-border">
                            <h3>Pencarianmu</h3>
                            <div className="row">
                                <div className="find-result-form">
                                    <div className="form">
                                        <div className="col-lg-3">
                                            <div className="form-border-result">
                                                <div className="mb-3">
                                                    <label className="form-label-result">Nama Mobil</label>
                                                    <input type="text" className="form-control" placeholder="Innova" disabled />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border-result">
                                                <label className="form-label-result">Kategori</label>
                                                <select className="form-select" disabled>
                                                    {/* <option>Masukan Kapasitas Mobil</option>
                                                    <option value="1">2 - 4 orang</option>
                                                    <option value="2">4 - 6 orang</option> */}
                                                    <option value="3">6 - 8 orang</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border-result">
                                                <label className="form-label-result">Harga</label>
                                                <select className="form-select" disabled>
                                                    {/* <option>Masukan Harga Sewa per Hari</option> */}
                                                    {/* <option value="1"> Kurang Dari Rp. 400.000 </option> */}
                                                    <option value="2"> Rp. 400.000 - Rp. 600.000 </option>
                                                    {/* <option value="3"> Lebih Dari Rp. 600.000 </option> */}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border-result">
                                                <label className="form-label-result">Status</label>
                                                <select className="form-select" disabled>
                                                    <option >Disewakan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit">
                                        <div className="button-result">
                                            <Link to={`/FindCars`} className="btn btn-outline-primary a">
                                                Edit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                
                <section className="car-choice">
                    <div className="container">
                       
                            <div className="car-choice-border">
                            {loading ? (
                            <Grid
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            wrapperStyle={{}}
                            wrapperClass="grid-loading" 
                            visible={true}
                          />
                        ) : ( 
                            <div className="row">
                                {cars.map((car,index) => {
                                    return (
                                        <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="card-border" >
                                            <div className="card" style={{height:'100%'}}>
                                                <img src={car.image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{car.name}</h5>
                                                    <h4>Rp. {car.price} / hari</h4>
                                                    <p className="card-text">{car.description}</p>
                                                        <Link className='btn btn-success' to={`/CarDetails/${car.id}`}>Pilih Mobil</Link>
                                                    {/* <a href="car-detail.html" className="btn btn-success">Pilih Mobil</a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                               
                              
                            </div>
                        )}
                        </div>
                    
                        
                    </div>
                </section>
            </main>
        </>
    )
}
export default ResultFindCars;
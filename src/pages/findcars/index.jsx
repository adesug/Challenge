import React , {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {Grid} from 'react-loader-spinner';
import './style.css';
import ImgCar from './assets/images/img_car.png';
import { queryData, currencyFormat } from '../../helper';

const CariMobil = () => {
    const [active, setActive] = useState(false);
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true);
    const [emptyData, setEmptyData] = useState(false);

    const overLay = () => {
        setActive(true);
        // console.log('addOverlay');
    }
    const removeOverLay = () => {
        setActive(false);
        // console.log('remove');
    }
    // const baseUrl = 'https://633ffc6ed1fcddf69cae3eac.mockapi.io'
    // const baseUrl = 'https://6350e0713e9fa1244e4f4cab.mockapi.io'
    const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com/customer'

    const getCars = () => {
        Axios.get(`${baseUrl}/car`)
        .then((response) => {
          setCars(response.data);
        //   console.log(response.data);
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

    const namaMobil = useRef('');
    const category = useRef('');
    const harga = useRef('');
    const statusOrder = useRef('');
    const price = () => {
    switch (harga.current.value) {
        case 'small':
          return { maxPrice: 400000 };
        case 'medium':
          return { minPrice: 400000, maxPrice: 600000 };
        case 'large':
          return { minPrice: 600000 };
        default:
          return '';
      }
    }

    const getData = (e) => {
        e.preventDefault();
        const params = {
            name: namaMobil.current.value,
            category: category.current.value,
            minPrice: price().minPrice,
            maxPrice: price().maxPrice,
            isRented: statusOrder.current.value,
        }
        // console.log(params);
        setLoading(true);
        setEmptyData(false);
        setCars([]);
        Axios.get(
            `${baseUrl}/v2/car?${queryData(params)}`
          )
          .then((response) => {
            if (response.data.cars.length > 0) {
              setCars(response.data.cars);
            } else {
              setEmptyData(true);
            }
            setLoading(false)
          })
          .catch((error) => console.log(error));
    };
    const filterData = {
        getData,
        namaMobil,
        category,
        harga,
        statusOrder,
      };
     return (
        <>
       
            <main className="main">
                <section className="hero-section-second">
                    <div className="container">
                        <div className="col-lg-6">
                            <div className="hero-content-second">
                                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-thumbnail-second">
                        <img src={ImgCar} alt="" />
                    </div>
                </section>

                <section className="find-car">
                    <div className="container">
                        <div className={`find-car-border ${active ? 'overlay-active' : ''}`}>
                            <div className="row">
                                <form className="find-car-form" onSubmit={filterData.getData}>
                                    
                                    <div className="form" >
                                        <div className="col-lg-3">
                                            <div className="form-border">
                                                <div className="mb-3" >
                                                    <label className="form-label">Nama Mobil</label>
                                                    <input onClick={overLay} type="text" ref={filterData.namaMobil} className="form-control" placeholder="Ketik nama/tipe mobil" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border">
                                                <label className="form-label">Kategori</label>
                                                <select onClick={overLay} ref={filterData.category} className="form-select">
                                                    {/* <option hidden> Masukkan Kapasitas Mobil</option> */}
                                                    <option></option>
                                                    <option value="small">2 - 4 orang</option>
                                                    <option value="medium">4 - 6 orang</option>
                                                    <option value="large">6 - 8 orang</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border">
                                                <label className="form-label">Harga</label>
                                                <select onClick={overLay} ref={filterData.harga} className="form-select">
                                                    {/* <option hidden>Masukkan Harga Sewa Perhari</option> */}
                                                    <option />
                                                    <option value="small">{'< Rp. 400.000'}</option>
                                                    <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                                                    <option value="large">{'> Rp. 600.000'}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border">
                                                <label className="form-label">Status</label>
                                                <select onClick={overLay} ref={filterData.statusOrder} className="form-select">
                                                    <option />
                                                    <option value="true">Tersedia</option>
                                                    <option value="false">Disewa</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit">
                                        <button type='submit' onClick={removeOverLay} className='button btn btn-success'>Cari Mobil</button>
                                    </div>
                                </form>
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
                                        <div className="col-lg-4 col-md-6" key={index} >
                                        <div className="card-border" >
                                            <div className="card" >
                                                <img src={car.image != null ? car.image : 'https://polteksahid.ac.id/wp-content/uploads/2021/12/placeholder.png'} className="card-img-top" alt="..." />
                                                <div className="card-body" >
                                                    <h5 className="card-title">{car.name}</h5>
                                                    <h4>Rp. {currencyFormat(car.price)} / hari</h4>
                                                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
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
                        {emptyData && <>Data Tidak Ditemukan</>}
                        </div>
                    
                        
                    </div>
                </section>
                <div onClick={removeOverLay} className={`overlay-bg-2 ${active ? 'overlay-active' : ''}`}></div>
            </main>
        </>

    )
}
export default CariMobil;
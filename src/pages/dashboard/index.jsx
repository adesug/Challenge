import { Link } from 'react-router-dom';
import './style.css';
import Header from '../../components/header';
import ReactOwlCarousel from "react-owl-carousel";
import './assets/owl-carousel/owl.carousel.min.css';
import './assets/owl-carousel/owl.theme.default.min.css';
import ImgCar from './assets/images/img_car.png';
import ImgGirl from './assets/images/img_girl.png';
import ImgCeklis from './assets/images/list_ceklis.png';
import ImgComplete from './assets/images/icon_complete.png';
import ImgPrice from './assets/images/icon_price.png';
import Img24 from './assets/images/icon_24hrs.png';
import ImgProfesional from './assets/images/icon_professional.png';
import Img1 from './assets/images/img_photo.png';
import Img2 from './assets/images/img_photo2.png';

const Dashboard = () => {
    const options = {
        loop: true,
        margin: 10,
        dots: false,
        navText: ["<div  className='btn-nav'>&#x2039;</div>", "<div className='btn-nav'>&#x203a;</div>"],
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
                stagePadding: 300,
            }
        }
    };

    return (
        <>
        <Header/>
            <section  className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                <p>
                                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                                    kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                                    kebutuhanmu untuk sewa mobil selama 24 jam.
                                </p>
                                <Link className='btn btn-success' to={`/FindCars`}>
                                    Mulai Sewa Mobil
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-thumbnail">
                    <img src={ImgCar} alt="" />
                </div>
            </section>
            <section id='our-services' className="our_service">
                <div className="our_utama">
                    <div className="our_kiri">
                        <img src={ImgGirl} alt="" className="girl" />
                    </div>

                    <div className="our_kanan">
                        <h2 className="title-services">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                        <p className="desc-services">
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                        </p>
                        <div className="our_kanan_konten">
                            <div className="konten_kiri">
                                <div><img src={ImgCeklis} alt="ceklis" className="konten_img" /></div>
                                <div><img src={ImgCeklis} alt="ceklis" className="konten_img" /></div>
                                <div><img src={ImgCeklis} alt="ceklis" className="konten_img" /></div>
                                <div><img src={ImgCeklis} alt="ceklis" className="konten_img" /></div>
                                <div><img src={ImgCeklis} alt="ceklis" className="konten_img" /></div>
                            </div>
                            <div className="konten_kanan">
                                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                                <p>Sewa Mobil Jangka Panjang Bulanan</p>
                                <p>Gratis Antar - Jemput Mobil di Bandara</p>
                                <p>Layanan Airport Transfer / Drop In Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why" id="why-us">
                <div className="why_atas">
                    <h2>Why Us?</h2>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>

                <div className="card_why_bawah">
                    <div className="card_itm">
                        <img src={ImgComplete} alt="Lengkap" />
                        <h2 className="card-title">Mobil Lengkap</h2>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>

                    <div className="card_itm">
                        <img src={ImgPrice} alt="Harga" />
                        <h2 className="card-title">Harga Murah</h2>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>

                    <div className="card_itm">
                        <img src={Img24} alt="Layanan" />
                        <h2 className="card-title">Layanan 24 Jam</h2>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>

                    <div className="card_itm">
                        <img src={ImgProfesional} alt="Professional" />
                        <h2 className="card-title">Sopir Profesional</h2>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>

                </div>
            </section>
            <section id="testimonial" className="testimonial" >
                <div className="container-fluid">
                    <div className="testi-header">
                        <h3 className="fw-bold">Testimonial</h3>
                        <br />
                        <p >Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <ReactOwlCarousel className="owl-theme"{...options}>

                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src={Img1}
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 className="card-title" >John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src={Img2}
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src={Img1}
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src={Img1}
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>This is a wider card with supporting text below as a
                                                    natural lead-in to additional content. This content is a little bit
                                                    longer.</q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </section >
            <section className="mulai_sewa">
                <div className="container box text-center">
                    <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <div className="parag">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <Link className='btn btn-sm btn-success' to={`/FindCars`}>
                        Mulai Sewa Mobil
                    </Link>
                </div>
            </section>
            <section className="faq" id="faq">
                <div className="utama" id="fourth-section">
                    <div className="faq_kiri">
                        <h1>Frequently Asked Question)</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="faq_kanan">
                        <div className="accordion accordion-flush faq-content" id="accordionFlushExample">
                            <div className="card">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Apa saja syarat yang dibutuhkan?</button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque iure ea excepturi consequuntur non perspiciatis repellat!
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Berapa hari minimal sewa mobil lepas kunci?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque iure ea excepturi consequuntur non perspiciatis repellat!
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque iure ea excepturi consequuntur non perspiciatis repellat!
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Apakah Ada biaya antar-jemput?</button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque iure ea excepturi consequuntur non perspiciatis repellat!
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Bagaimana jika terjadi kecelakaan?</button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestias quo eligendi atque iure ea excepturi consequuntur non perspiciatis repellat!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};
export default Dashboard;
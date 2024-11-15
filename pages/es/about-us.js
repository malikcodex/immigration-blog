import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_13.jpeg';
import sis_two from '@/public/images/team/sis_12.jpeg';
import sis_three from '@/public/images/team/sis_15.png';
import sis_four from '@/public/images/team/sis_7.jpeg';
import sis_five from '@/public/images/team/sis_8.jpeg';
import imigration from '@/public/images/team/sis_14.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout title='About Us' description='To empower, inform, and support individuals and families through every step of the immigration process, from initial consultation to settling into a new community. We believe in simplifying complex immigration procedures, so you can focus on your goals with confidence.' meta='yes' keywords='aboutus, our services, immigration details'>
            <div className='col-12 bg-skin'>
                <div className='container-fluid'>
                    <div className='row align-items-center py-5 px-3'>
                        <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                            <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">Saber Más</span> <b className="text-italic text-bg-yellow">Nosotros</b></h1>
                            <h2 className="fs-2 fw-normal lh-base">Bienvenido a Las Hermanas de Inmigración </h2>
                            <h3 className="fs-4 fw-light lh-base">"Empoderar, informar y apoyar a individuos y familias en cada paso del proceso de inmigración, desde la consulta inicial hasta el establecimiento en una nueva comunidad. Creemos en simplificar los procedimientos de inmigración complejos, para que puedas centrarte en tus objetivos con confianza.</h3>
                        </div>
                        <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                            <div className='d-flex gap-3 mt-3'>
                                <Image 
                                    src={sis_one}
                                    height="500"
                                    width="500"
                                    className="hero_set border-top-right-rounded"
                                    loading='lazy'
                                    alt="image one"
                                />
                                <Image 
                                    src={sis_two}
                                    height="500"
                                    width="500"
                                    className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                    loading='lazy'
                                    alt="image two"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 bg-purple">
                <div className="container-fluid py-5">
                    <div className="row justify-content-center">
                        <div className='col-xl-8 col-lg-9 col-md-9 col-sm-12 col-12'>
                            <div className="p-2">
                                <h2 className="display-4 fw-bold text-brown text-center lh-base">Lo Que Ofrecemos</h2>
                                <h4 className="fs-3 fw-normal text-brown text-center lh-base">Con una combinación de experiencia legal, apoyo personalizado y servicios de integración cultural, ofrecemos un enfoque integral a la inmigración. Nuestro equipo de abogados, gestores de casos y asesores culturales trabajan estrechamente contigo para comprender tus necesidades únicas, ofreciendo soluciones a medida que hacen que tu transición sea más suave y manejable.</h4>
                            </div>
                        </div>
                    </div>
                    <div className='row py-3'>
                        <div className='col-xl-4 col-md-4 col-sm-6 col-6 mb-2'>
                            <div className="position-absoltute top-0 d-flex justify-content-center rounded" style={{background: `linear-gradient(45deg, #ffffff, transparent)`}}>
                                <Image 
                                    src={sis_three}
                                    width="600"
                                    height="600"
                                    className="hero_set dropshadow p-3"
                                    loading="lazy"
                                    alt="image three"
                                />     
                            </div> 
                        </div>
                        <div className='col-xl-4 col-md-4 col-sm-6 col-6 mb-2'>
                            <div className="position-absoltute top-0 d-flex justify-content-center rounded" style={{background: `linear-gradient(45deg, #ffffff, transparent)`}}>
                                <Image 
                                    src={sis_four}
                                    width="600"
                                    height="600"
                                    className="hero_set dropshadow p-3"
                                    loading='lazy'
                                    alt="image four"
                                />     
                            </div> 
                        </div>
                        <div className='col-xl-4 col-md-4 col-sm-6 col-6 mb-2'>
                            <div className="position-absoltute top-0 d-flex justify-content-center rounded" style={{background: `linear-gradient(45deg, #ffffff, transparent)`}}>
                                <Image 
                                    src={sis_five}
                                    width="600"
                                    height="600"
                                    className="hero_set dropshadow p-3"
                                    loading="lazy"
                                    alt="image five"
                                />     
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                 <div className="container-fluid">
                     <div className="row pt-5 pb-3">
                         <h3 className="text-center display-4 text-brown fw-bold lh-base mb-2">Por Qué <b className="text-italic text-bg-yellow">Elegir</b> Nosotros ?</h3>
                         <h4 className="text-center fs-3 text-brown fw-normal lh-base mb-5">La <b className="text-underline-purple">Hermanas de Inmigración</b> están aquí para ayudarte a convertir tus sueños de inmigración en realidad</h4>
                         <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Enfoque Centrado en el Cliente</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Ponemos a ti y a tus objetivos en el centro de todo lo que hacemos, asegurando una atención personalizada y una comunicación abierta.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Profesionales Experimentados</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Nuestro equipo aporta años de experiencia en derecho de inmigración y servicios al cliente, ofreciendo las ideas y soluciones que necesitas.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Apoyo Integral</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Más allá de la documentación de inmigración, te ayudamos con la integración cultural, ayudándote a construir una base para el éxito en tu nuevo hogar.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Compromiso con la Integridad</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">La transparencia, la honestidad y el respeto forman el núcleo de nuestra práctica. Estamos aquí para abogar por ti y proteger tus intereses.</h3>
                            </div>
                        </div>
                     </div>
                     <div className="d-flex justify-content-center align-items-center gap-3 pb-4">
                         <Link href='/es/support' className="bg-brown btn-lg btn text-white"><i className="bi bi-telephone-forward"></i> Verificar Soporte</Link>
                         <Link href='/es/blog' className="bg-brown btn-lg btn text-white"><i className="bi bi-journals"></i>Verificar Blogs</Link>
                     </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Home;
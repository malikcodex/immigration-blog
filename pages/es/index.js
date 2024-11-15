import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_4.jpeg';
import sis_two from '@/public/images/team/sis_5.jpeg';
import sis_three from '@/public/images/team/sis_3.jpeg';
import sis_four from '@/public/images/team/sis_5.jpeg';
import sis_five from '@/public/images/team/sis_6.jpeg';
import imigration from '@/public/images/team/sis_1.png';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout title='The Immigration Sisters' description='Empowering Immigrants with Trusted Support and Expertise' meta='yes' keywords='Empowering Immigrants, Trusted Support, Expertise'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">La Inmigración</span> <b className="text-italic text-bg-yellow">Hermanas</b></h1>
                        <h2 className="fs-2 fw-normal lh-base">Empoderando a los Inmigrantes con Apoyo Confiable y Experiencia</h2>
                        <h3 className="fs-4 fw-light lh-base mb-5">Las Hermanas de Inmigración proporcionan orientación personalizada para ayudarte a navegar las complejidades de la inmigración. Con una profunda experiencia y un compromiso con tu éxito, estamos aquí para apoyarte en cada etapa, asegurando un camino más suave para alcanzar tus sueños.</h3>
                        <Link href="/es/team" className="mt-3 text-decoration-none rounded  bg-purple px-3 py-3 text-white fw-bold fs-5"><i className="bi bi-microsoft-teams"></i> Conoce a Nuestro Equipo</Link>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <div className='d-flex gap-3 mt-5'>
                            <Image 
                                src={sis_one}
                                height="500"
                                width="500"
                                className="hero_set border-top-right-rounded"
                                loading='lazy'
                                alt="hero image one"
                            />
                            <Image 
                                src={sis_two}
                                height="500"
                                width="500"
                                className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                loading='lazy'
                                alt="hero image two"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 bg-brown">
                <div className="container-fluid py-5">
                    <div className="row justify-content-center">
                        <div className='col-xl-8 col-lg-9 col-md-9 col-sm-12 col-12'>
                            <div className="p-2">
                                <h2 className="display-5 fw-bold text-white text-center lh-base">Tus Socios Confiables en el Éxito de la Inmigración</h2>
                                <h4 className="fs-3 fw-normal text-white text-center lh-base">"Las Hermanas de Inmigración ofrecen apoyo dedicado y asesoramiento profesional para que tu viaje de inmigración sea sencillo y sin estrés. Estamos aquí para empoderarte con conocimiento y navegar juntos los desafíos, ayudándote a alcanzar tus objetivos con confianza.</h4>
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
                                    alt="home image three"
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
                                    alt='home image four'
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
                                    loading='lazy'
                                    alt="home image five"
                                />     
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

           {/* second part */}
            <div className="col-12">
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Inmigración Integral</h3>
                                <h4 className="fs-5 lh-base mb-2">Asesoramiento Personalizado Adaptado a Tus Necesidades</h4>
                                <h5 className="fs-6 lh-base mb-2">Las Hermanas de Inmigración ofrecen consultas en profundidad para comprender tu situación y objetivos únicos. Con estrategias personalizadas, te guiamos a través de los primeros pasos, asegurándonos de que estés bien preparado e informado para el camino por delante.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Asistencia Paso a Paso para la Aplicación</h3>
                                <h4 className="fs-5 lh-base mb-2">Apoyo desde la Preparación de Documentos hasta la Presentación</h4>
                                <h5 className="fs-6 lh-base mb-2">"Simplificamos el proceso de aplicación, ayudándote con la recopilación de documentos, la cumplimentación de formularios y la presentación. Nuestro equipo está aquí para asegurar que cada detalle cumpla con los requisitos necesarios, para que tu aplicación tenga la mejor oportunidad de éxito.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Orientación Experta en Visas y Residencia</h3>
                                <h4 className="fs-5 lh-base mb-2">Navega Requisitos Complejos con Confianza</h4>
                                <h5 className="fs-6 lh-base mb-2">Nuestra experiencia abarca varios tipos de visas y opciones de residencia, ayudándote a entender y elegir la mejor ruta. Desglosamos las regulaciones complejas y te mantenemos informado sobre cualquier cambio, asegurando que siempre estés un paso adelante.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Servicios de Apoyo Post-Inmigración</h3>
                                <h4 className="fs-5 lh-base mb-2">Ayudándote a Establecerte y Prosperar en Tu Nuevo Hogar</h4>
                                <h5 className="fs-6 lh-base mb-2">Más allá de la inmigración, asistimos con servicios esenciales como orientación para la búsqueda de empleo, recursos comunitarios y apoyo para la aclimatación. Las Hermanas de Inmigración están comprometidas a ayudarte a sentirte en casa, empoderándote para prosperar en tu nuevo entorno.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                 <div className="container-fluid">
                    <div className='row'>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                            <div className="p-3">
                                <h2 className="fs-2 fw-bold text-brown lh-base mb-1">Confiable <b className="text-underline-purple">Defensa</b> para <b className="text-italic text-bg-yellow">Complejo </b> Casos</h2>
                                <h3 className="fs-4 fw-normal text-brown lh-base mb-1">"Apoyo Especializado para Asuntos de Inmigración Desafiantes</h3>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">Para casos únicos o complejos, Las Hermanas de Inmigración brindan defensa centrada y soluciones estratégicas. Trabajamos estrechamente contigo para superar obstáculos, aprovechando nuestra experiencia para manejar apelaciones, exenciones y casos especializados con dedicación y experiencia.</h4>
                                <div className="d-flex">
                                    <Link href='/es/about-us' className="btn bg-green text-brown btn-lg">"Sobre Nosotros</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-skin col-xl-6 col-md-6 col-sm-12 col-12">
                            <div className="d-flex justify-content-center py-3">
                                <Image
                                    src={imigration}
                                    height="500"
                                    width="500"
                                    className="hero_set"
                                    loading='lazy'
                                    alt="immigration image"
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="col-12">
                 <div className="container-fluid">
                     <div className="row py-5">
                         <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">99.7%</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Tasa de Éxito</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">100,000</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Inmigrantes Ayudados</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">4.7%</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Reseñas de Trustpilot</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">A+</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Acreditación BBB</h3>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Home;
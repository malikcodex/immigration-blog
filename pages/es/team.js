import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_6.jpeg';
import sis_two from '@/public/images/team/sis_5.jpeg';
import sis_three from '@/public/images/team/sis_10.jpeg';
import sis_four from '@/public/images/team/sis_9.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const Team = () => {
    return (
        <Layout title='Meet Our Team' description='At The Immigration Sisters, our team is composed of skilled professionals dedicated to supporting you on your immigration journey. With a range of expertise in immigration law, cultural transitions, and case management, each team member is committed to providing personalized guidance and unwavering support.' meta='yes' keywords='Our team, Our Management, Our Efforts, Our Group'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">Conoce a Nuestro</span> <b className="text-italic text-bg-yellow">Equipo</b></h1>
                        <h3 className="fs-4 fw-light lh-base">"En Las Hermanas de Inmigración, nuestro equipo está compuesto por profesionales capacitados dedicados a apoyarte en tu viaje de inmigración. Con una gama de conocimientos en leyes de inmigración, transiciones culturales y gestión de casos, cada miembro del equipo está comprometido a proporcionar orientación personalizada y apoyo inquebrantable.</h3>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <div className='d-flex gap-3 mt-3'>
                            <Image 
                                src={sis_one}
                                height="500"
                                width="500"
                                className="hero_set border-top-right-rounded"
                                loading='lazy'
                            />
                            <Image 
                                src={sis_two}
                                height="500"
                                width="500"
                                className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Consultas Personalizadas 🤝</h3>
                                <h5 className="fs-4 lh-base mb-2">En Las Hermanas de Inmigración, creemos que cada historia es única. Nuestro equipo ofrece consultas personalizadas para comprender tus metas y desafíos, creando un camino personalizado para tu viaje de inmigración.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Gestión Experta de Casos 📂 </h3>
                                <h5 className="fs-4 lh-base mb-2">Nuestros gestores de casos mantienen cada detalle bajo control, gestionando la documentación y los plazos con precisión. Nos aseguramos de que toda tu documentación esté organizada y cumpla con los estándares requeridos.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Actualizaciones Transparentes del Proceso 🔄</h3>
                                <h5 className="fs-4 lh-base mb-2">Sabemos que esperar puede ser estresante. Por eso, nuestro equipo te mantiene actualizado sobre el progreso de tu caso, proporcionando información regular y comunicación clara para que nunca estés en la oscuridad.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Servicios de Apoyo Post-Inmigración</h3>
                                <h5 className="fs-4 lh-base mb-2">Más allá de la inmigración, brindamos servicios esenciales como orientación para la búsqueda de empleo, recursos comunitarios y apoyo para la adaptación. Las Hermanas de Inmigración están comprometidas a ayudarte a sentirte como en casa.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                 <div className="container-fluid">
                    <div className='row py-4'>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                            <div className="p-3">
                                <h2 className="fs-1 fw-bold text-brown lh-base mb-3">Cultural  <b className="text-underline-purple">Integración</b> <b className="text-italic text-bg-yellow">Asistencia  </b> 🌍</h2>
                                <h3 className="fs-4 fw-normal text-brown lh-base mb-1">Ayudándote a Sentirte como en Casa en un Nuevo País</h3>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">Mudarse a un nuevo país puede ser un desafío. Nuestros especialistas en integración cultural te ayudan a adaptarte a las costumbres locales, encontrar recursos y construir una base sólida en tu nueva comunidad.</h4>
                                <div className="d-flex">
                                    <Link href='/es/support' className="btn bg-purple text-white btn-lg">Apoyo</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                            <div className='d-flex gap-3'>
                                <Image 
                                    src={sis_three}
                                    height="500"
                                    width="500"
                                    className="hero_set border-top-right-rounded"
                                    loading='lazy'
                                    alt="Team Image One"
                                />
                                <Image 
                                    src={sis_four}
                                    height="500"
                                    width="500"
                                    className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                    loading='lazy'
                                    alt="Team Image Two"
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Team;
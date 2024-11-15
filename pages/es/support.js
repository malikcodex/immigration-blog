import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_16.png';
import sis_two from '@/public/images/team/sis_15.png';
import sis_three from '@/public/images/team/sis_14.png';
import sis_four from '@/public/images/team/sis-15.jpg';
import imigration from '@/public/images/team/imigration.webp';
import Image from 'next/image';
import Link from 'next/link';

const Support = () => {
    return (
        <Layout title='Our Support' description='At The Immigration Sisters, we’re dedicated to making your experience as seamless as possible. Whether you have questions, need guidance, or want updates on your case, our support team is here to assist every step of the way.' meta='yes' keywords='Our Support, Our Guide, We Help You'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-skin">Cómo Podemos Ayudarte</span> <b className="text-italic text-bg-skin">Tú?</b></h1>
                        <h3 className="fs-4 fw-light lh-base">En Las Hermanas de Inmigración, estamos dedicados a hacer que tu experiencia sea lo más fluida posible. Ya sea que tengas preguntas, necesites orientación o quieras actualizaciones sobre tu caso, nuestro equipo de soporte está aquí para ayudarte en cada paso del camino.</h3>
                        <div className="input-group bg-shadow-sm mt-4 rounded">
                            <input
                               type="text"
                               className="form-control p-3"
                               spellCheck="false"
                               autoComplete='off'
                               placeholder="Search articles"
                            />
                            <button className="bg-purple text-white btn btn-lg"><i className="bi bi-search"></i></button>
                        </div>
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

            <div className="col-12">
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-skin border rounded'>
                                <h3 className="text-dark fs-2 fw-bold lh-base mb-2">"Preguntas Frecuentes (FAQ) </h3>
                                <h5 className="text-dark fs-4 lh-base mb-2">Visita nuestro <Link href="/es/support" className="btn btn-md bg-purple text-brown">PÁGINA DE SOPORTE</Link> para obtener respuestas a preguntas comunes sobre nuestros servicios, procesos de solicitud, requisitos de documentación y más. La sección de preguntas frecuentes es una manera rápida de encontrar información en cualquier momento que la necesites.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-purple border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">Gestión Experta de Casos 📂 </h3>
                                <h5 className="text-white fs-4 lh-base mb-2">Nuestros gestores de casos mantienen cada detalle bajo control, gestionando la documentación y los plazos con precisión. Nos aseguramos de que todos tus documentos estén organizados y cumplan con los estándares requeridos.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-brown border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">Actualizaciones Transparentes del Proceso 🔄</h3>
                                <h5 className="text-white fs-4 lh-base mb-2">"Sabemos que la espera puede ser estresante. Es por eso que nuestro equipo te mantiene informado sobre el progreso de tu caso, proporcionando actualizaciones regulares y comunicación clara para que nunca estés en la oscuridad.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-green border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">"Servicios de Apoyo Post-Inmigración</h3>
                                <h5 className="text-white fs-4 lh-base mb-2">Más allá de la inmigración, brindamos asistencia con servicios esenciales como orientación para la búsqueda de empleo, recursos comunitarios y apoyo para la aclimatación. Las Hermanas de Inmigración están comprometidas a ayudarte a sentirte en casa.</h5>
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
                                <h2 className="fs-1 fw-bold text-brown lh-base mb-3">Actualizaciones de Casos y <b className="text-underline-purple">Estado de la Solicitud</b> <b className="text-italic text-bg-yellow">Asistencia  </b> </h2>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">"Explora nuestro centro de recursos para artículos, guías y consejos que pueden ayudarte a comprender mejor el proceso de inmigración. Cubrimos todo, desde la preparación de documentos hasta el asentamiento en tu nuevo hogar.</h4>
                                <div className="d-flex">
                                    <Link href='/es/blog' className="btn bg-purple text-white btn-lg">Blogs</Link>
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
                                    alt="image three"
                                />
                                <Image 
                                    src={sis_four}
                                    height="500"
                                    width="500"
                                    className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                    loading='lazy'
                                    alt="image four"
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Support;
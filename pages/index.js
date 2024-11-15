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
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">The Immigration</span> <b className="text-italic text-bg-yellow">Sisters</b></h1>
                        <h2 className="fs-2 fw-normal lh-base">Empowering Immigrants with Trusted Support and Expertise</h2>
                        <h3 className="fs-4 fw-light lh-base mb-5">The Immigration Sisters provide personalized guidance to help you navigate the complexities of immigration. With deep expertise and a commitment to your success, we’re here to support you at every stage, ensuring a smoother path to achieving your dreams.</h3>
                        <Link href="/team" className="mt-3 text-decoration-none rounded  bg-purple px-3 py-3 text-white fw-bold fs-5"><i className="bi bi-microsoft-teams"></i> Meet Our Team</Link>
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
                                <h2 className="display-5 fw-bold text-white text-center lh-base">Your Trusted Partners in Immigration Success</h2>
                                <h4 className="fs-3 fw-normal text-white text-center lh-base">The Immigration Sisters offer dedicated support and professional advice to make your immigration journey straightforward and stress-free. We’re here to empower you with knowledge and navigate challenges together, helping you achieve your goals with confidence.</h4>
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

            <div className="col-12">
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Comprehensive Immigration</h3>
                                <h4 className="fs-5 lh-base mb-2">Personalized Advice Tailored to Your Needs</h4>
                                <h5 className="fs-6 lh-base mb-2">The Immigration Sisters offer in-depth consultations to understand your unique situation and goals. With customized strategies, we guide you through the initial steps, ensuring you're well-prepared and informed for the journey ahead.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Step-by-Step Application Assistance</h3>
                                <h4 className="fs-5 lh-base mb-2">Support from Document Preparation to Submission</h4>
                                <h5 className="fs-6 lh-base mb-2">We simplify the application process, assisting you with document collection, form completion, and submission. Our team is here to ensure every detail meets the necessary requirements, so your application has the best chance of success.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Expert Visa & Residency Guidance</h3>
                                <h4 className="fs-5 lh-base mb-2">Navigate Complex Requirements with Confidence</h4>
                                <h5 className="fs-6 lh-base mb-2">Our expertise covers various visa types and residency options, helping you understand and choose the best pathway. We break down complex regulations and keep you updated on any changes, ensuring you’re always a step ahead.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Post-Immigration Support Services</h3>
                                <h4 className="fs-5 lh-base mb-2">Helping You Settle and Thrive in Your New Home</h4>
                                <h5 className="fs-6 lh-base mb-2">Beyond immigration, we assist with essential services like job search guidance, community resources, and acclimation support. The Immigration Sisters are committed to helping you feel at home, empowering you to thrive in your new environment.</h5>
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
                                <h2 className="fs-2 fw-bold text-brown lh-base mb-1">Trusted <b className="text-underline-purple">Advocacy</b> for <b className="text-italic text-bg-yellow">Complex </b> Cases</h2>
                                <h3 className="fs-4 fw-normal text-brown lh-base mb-1">Specialized Support for Challenging Immigration Matters</h3>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">For unique or complex cases, The Immigration Sisters provide focused advocacy and strategic solutions. We work closely with you to overcome obstacles, leveraging our experience to handle appeals, waivers, and specialized cases with dedication and expertise.</h4>
                                <div className="d-flex">
                                    <Link href='/about-us' className="btn bg-green text-brown btn-lg">About Us</Link>
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
                                <h3 className="fs-5 lh-base fw-normal mb-2">Success Rate</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">100,000</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Immigrants Helped</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">4.7%</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Trustpilot Reviews</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">A+</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">BBB Accredidation</h3>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Home;
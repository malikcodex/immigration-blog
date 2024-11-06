import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis-10.jpg';
import sis_two from '@/public/images/team/sis-11.jpg';
import sis_three from '@/public/images/team/sis-12.jpg';
import sis_four from '@/public/images/team/sis-13.jpg';
import sis_five from '@/public/images/team/sis-14.jpg';
import imigration from '@/public/images/team/imigration.webp';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout title='About Us' description='To empower, inform, and support individuals and families through every step of the immigration process, from initial consultation to settling into a new community. We believe in simplifying complex immigration procedures, so you can focus on your goals with confidence.' meta='yes' keywords='aboutus, our services, immigration details'>
            <div className='col-12 bg-skin'>
                <div className='container-fluid'>
                    <div className='row align-items-center py-5 px-3'>
                        <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                            <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">Know More</span> <b className="text-italic text-bg-yellow">Us</b></h1>
                            <h2 className="fs-2 fw-normal lh-base">Welcome to The Immigration Sisters </h2>
                            <h3 className="fs-4 fw-light lh-base">To empower, inform, and support individuals and families through every step of the immigration process, from initial consultation to settling into a new community. We believe in simplifying complex immigration procedures, so you can focus on your goals with confidence.</h3>
                        </div>
                        <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                            <div className='d-flex gap-3'>
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
                                <h2 className="display-4 fw-bold text-brown text-center lh-base">What We Offer</h2>
                                <h4 className="fs-3 fw-normal text-brown text-center lh-base">With a combination of legal expertise, personalized support, and cultural integration services, we provide a holistic approach to immigration. Our team of attorneys, case managers, and cultural advisors work closely with you to understand your unique needs, offering tailored solutions that make your transition smoother and more manageable.</h4>
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
                         <h3 className="text-center display-4 text-brown fw-bold lh-base mb-2">Why <b className="text-italic text-bg-yellow">Choose</b> Us ?</h3>
                         <h4 className="text-center fs-3 text-brown fw-normal lh-base mb-5">The <b className="text-underline-purple">Immigration Sisters</b> are here to help you turn your immigration dreams into reality</h4>
                         <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Client-Focused Approach</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">We place you and your goals at the center of everything we do, ensuring personalized attention and open communication.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Experienced Professionals</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Our team brings years of experience in immigration law and client services, offering the insights and solutions you need.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Comprehensive Support</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Beyond immigration paperwork, we assist with cultural integration, helping you build a foundation for success in your new home.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Commitment to Integrity</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Transparency, honesty, and respect form the core of our practice. We’re here to advocate for you and protect your interests.</h3>
                            </div>
                        </div>
                     </div>
                     <div className="d-flex justify-content-center align-items-center gap-3 pb-4">
                         <Link href='/support' className="bg-brown btn-lg btn text-white"><i className="bi bi-telephone-forward"></i> Check Support</Link>
                         <Link href='/blog' className="bg-brown btn-lg btn text-white"><i className="bi bi-journals"></i> Check Blogs</Link>
                     </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Home;
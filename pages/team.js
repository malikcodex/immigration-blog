import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis-6.jpg';
import sis_two from '@/public/images/team/sis-8.jpg';
import sis_three from '@/public/images/team/sis-9.jpg';
import sis_four from '@/public/images/team/sis-10.jpg';
import imigration from '@/public/images/team/imigration.webp';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout title='Meet Our Team' description='At The Immigration Sisters, our team is composed of skilled professionals dedicated to supporting you on your immigration journey. With a range of expertise in immigration law, cultural transitions, and case management, each team member is committed to providing personalized guidance and unwavering support.' meta='yes' keywords='Our team, Our Management, Our Efforts, Our Group'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">Meet Our</span> <b className="text-italic text-bg-yellow">Team</b></h1>
                        <h3 className="fs-4 fw-light lh-base">At The Immigration Sisters, our team is composed of skilled professionals dedicated to supporting you on your immigration journey. With a range of expertise in immigration law, cultural transitions, and case management, each team member is committed to providing personalized guidance and unwavering support.</h3>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <div className='d-flex gap-3'>
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
                                <h3 className="fs-2 fw-bold lh-base mb-2">Personalized Consultations 🤝</h3>
                                <h5 className="fs-4 lh-base mb-2">At The Immigration Sisters, we believe every story is unique. Our team offers personalized consultations to understand your goals and challenges, creating a customized path for your immigration journey.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Expert Case Management 📂 </h3>
                                <h5 className="fs-4 lh-base mb-2">Our case managers keep every detail in check, managing documentation and timelines with precision. We ensure that all your paperwork is organized and meets the required standards.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Transparent Process Updates 🔄</h3>
                                <h5 className="fs-4 lh-base mb-2">We know that waiting can be stressful. That’s why our team keeps you updated on the progress of your case, providing regular insights and clear communication so you’re never in the dark.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Post-Immigration Support Services</h3>
                                <h5 className="fs-4 lh-base mb-2">Beyond immigration, we assist with essential services like job search guidance, community resources, and acclimation support. The Immigration Sisters are committed to helping you feel at home.</h5>
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
                                <h2 className="fs-1 fw-bold text-brown lh-base mb-3">Cultural  <b className="text-underline-purple">Integration</b> <b className="text-italic text-bg-yellow">Assistance  </b> 🌍</h2>
                                <h3 className="fs-4 fw-normal text-brown lh-base mb-1">Helping You Feel at Home in a New Country</h3>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">Moving to a new country can be challenging. Our cultural integration specialists help you adapt to local customs, find resources, and build a strong foundation in your new community.</h4>
                                <div className="d-flex">
                                    <Link href='/about-us' className="btn bg-purple text-white btn-lg">Support</Link>
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

export default Home;
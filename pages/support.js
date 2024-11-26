import React, {useState} from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_16.png';
import sis_two from '@/public/images/team/sis_15.png';
import sis_three from '@/public/images/team/sis_14.png';
import sis_four from '@/public/images/team/sis-15.jpg';
import imigration from '@/public/images/team/imigration.webp';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { str_to_heading } from '@/core/util';
import { getArticlesBySearch } from '@/core/db';

const Support = ({articles}) => {
    const router = useRouter();
    const [value, set_search] = useState(null);
    function set_search_btn(e) {
        e.preventDefault();
        if(value !== null) {
            router.push(`/support?search=${value}`);
        } else {
            make_msg("Warning", "Please enter something to search ..", "error");
            return false;
        }
    }
    return (
        <Layout title='Our Support' description='At The Immigration Sisters, we’re dedicated to making your experience as seamless as possible. Whether you have questions, need guidance, or want updates on your case, our support team is here to assist every step of the way.' meta='yes' keywords='Our Support, Our Guide, We Help You'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-skin">How Can We Help </span> <b className="text-italic text-bg-skin">You?</b></h1>
                        <h3 className="fs-4 fw-light lh-base">At The Immigration Sisters, we’re dedicated to making your experience as seamless as possible. Whether you have questions, need guidance, or want updates on your case, our support team is here to assist every step of the way.</h3>
                        <div className="input-group bg-shadow-sm mt-4 rounded">
                            <input
                               type="text"
                               className="form-control p-3"
                               spellCheck="false"
                               autoComplete='off'
                               placeholder="Search articles"
                               onChange={(e) => set_search(e.target.value || null)}
                            />
                            <button onClick={(e) => set_search_btn(e)} className="bg-purple text-brown btn btn-lg"><i className="bi bi-search"></i></button>
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
                                <h3 className="text-dark fs-2 fw-bold lh-base mb-2">Frequently Asked Questions (FAQ) </h3>
                                <h5 className="text-dark fs-4 lh-base mb-2">Visit our <Link href="/support" className="btn btn-md bg-purple text-brown">SUPPORT PAGE</Link> for answers to common questions about our services, application processes, documentation requirements, and more. The FAQ section is a quick way to find information anytime you need it.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-purple border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">Expert Case Management 📂 </h3>
                                <h5 className="text-white fs-4 lh-base mb-2">Our case managers keep every detail in check, managing documentation and timelines with precision. We ensure that all your paperwork is organized and meets the required standards.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-brown border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">Transparent Process Updates 🔄</h3>
                                <h5 className="text-white fs-4 lh-base mb-2">We know that waiting can be stressful. That’s why our team keeps you updated on the progress of your case, providing regular insights and clear communication so you’re never in the dark.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-green border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">Post-Immigration Support Services</h3>
                                <h5 className="text-white fs-4 lh-base mb-2">Beyond immigration, we assist with essential services like job search guidance, community resources, and acclimation support. The Immigration Sisters are committed to helping you feel at home.</h5>
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
                                <h2 className="fs-1 fw-bold text-brown lh-base mb-3">Case Updates and <b className="text-underline-purple">Application Status</b> <b className="text-italic text-bg-yellow">Assistance  </b> </h2>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">Explore our resource center for articles, guides, and tips that can help you understand the immigration process better. We cover everything from document preparation to settling in your new home.</h4>
                                <div className="d-flex">
                                    <Link href='/blog' className="btn bg-purple text-white btn-lg">Blogs</Link>
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

            {/* support blogs */}
            <div className="col-12">
                <div className="container-fluid">
                    <div className="row py-4">
                        {
                            articles && articles.notFound ? (
                                <div className='col-xl-5'>
                                    <h2>No Blog Articles Were Found</h2>
                                </div>
                            ) : articles.map((d, k) => (
                                <div key={k} className="col-xl-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div className="p-3 bg-shadow-sm bg-white rounded">
                                        <Link href={`/blog/${d.slug}`}>
                                            <Image
                                                src={d.featured}
                                                className='object-cover col-12 rounded h-lg mb-3'
                                                width="600"
                                                height="600"
                                                alt="blog one"
                                                loading='lazy'
                                            />
                                        </Link>
                                        <h1 className="fs-4 lh-base fw-bold mb-2">{str_to_heading(d.title)}</h1>
                                        <h2 className="fs-5 lh-base fw-normal mb-4">{d.desc.substring(0, 102) + '...'}</h2>
                                        <h2 className="fs-6 lh-base fw-normal mb-2">{d.date}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Support;
export async function getServerSideProps(context) {
    const {search} = context.query || null;
    let articles = await getArticlesBySearch({search: search, category: 'support'});
    return {
        props: {
            articles
        }
    }
}
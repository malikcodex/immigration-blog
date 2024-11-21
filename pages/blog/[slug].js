import React, { useEffect, useState } from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_2.jpeg';
import sis_two from '@/public/images/team/sis_3.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { getArticlesBySlug } from '@/core/db';
import { str_to_heading } from '@/core/util';

const Blog = ({articles}) => {
    const [scroll, doScroll] = useState(null);
     
    function handleHeading(e) {
        e.preventDefault();
        let v = e.target.value;
        doScroll(v);
    }

    useEffect(() => {
        if(scroll !== null) {
            document.querySelector(`.box_${scroll}`).scrollIntoView({
                top: '0',
                behavior: 'smooth'
            })
        }
     }, [scroll])

    let title = articles[0].title || "Read Blog | Articles";
    let slug = articles[0].slug || "";
    let image = articles[0].featured || "https://res.cloudinary.com/dfvn8crqd/image/upload/v1731325443/illustration-of-cloud-uploading-and-database-servers-secure-file-sharing-people-isolated-concept-vector_tiz0bm.jpg";
    let desc = articles[0].desc || "Welcome to The Immigration Sisters Blog, where we share valuable insights, practical advice, and inspirational stories from the world of immigration. Here, you’ll find up-to-date news on immigration policies, in-depth guides to simplify your application process, and stories from individuals who’ve successfully navigated their journeys. Whether you're just beginning your immigration process or looking for tips on integrating into a new community, our blog is designed to provide the information and encouragement you need.";
    let tags = articles[0].tags || "Blog, Articles, Guides, News";
    return (
        <Layout title={`${title}`} description={`${desc}`} meta='yes' keywords={`${tags}`}>
            <div className='container-fluid'>
                <div className='row justify-content-start py-5 px-3'>
                    {
                        articles && articles.notFound ? (
                            <div className="col-xl-4">
                                <div className="bg-shadow-sm p-3">
                                    <h3>No Details Were Found</h3>
                                </div>
                            </div>
                        ) : articles.map((d, k) => (
                            <>
                            <div key={k} className={`col-xl-9 col-md-9 col-sm-12 col-12`}>
                                <h1 className="fs-1 lh-base mb-2 fw-bold">{str_to_heading(title)}</h1>
                                <h2 className="fs-5 lh-base mb-3 fw-normal">{str_to_heading(desc)}</h2>

                                {
                                    d.tags !== "" && d.tags !== null && (
                                        <>
                                        <h3 className="fw-bold mb-3 lh-base fs-4">Tags</h3>
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                        {
                                            d.tags && d.tags.split(/\,/).map((tags, index) => (
                                                <a href="#" key={index} className="border rounded btn btn-light p-2">{tags}</a>
                                            ))
                                        }
                                        </div>
                                        </>
                                    )
                                }

                                <Image
                                    src={image}
                                    className="object-cover h-full mt-2 mb-3"
                                    height="700"
                                    width="700"
                                    alt={title}
                                />

                                {
                                    d.boxes && d.boxes.map((d2, k2) => (
                                        <div key={k2} className={`box_${k2}`}>
                                            <h3 className="fs-3 lh-base mt-2 mb-2 fw-bold">{d2.heading}</h3>
                                            <h3 className="fs-5 lh-base mb-3 fw-normal">{d2.subheading}</h3>
                                            {
                                                d2.image !== null && d2.image !== '' && (
                                                    <Image
                                                        src={d2.image}
                                                        className="object-cover col-8 h-full mt-2 mb-2"
                                                        height="1200"
                                                        width="1200"
                                                        loading='lazy'
                                                        alt={d2.heading}
                                                    />
                                                )
                                            }

                                            {
                                                d2.points && d2.points[0] !== null && (
                                                    <>
                                                    <div style={{borderBottom: '1px solid #ccc'}} className="my-3"></div>
                                                    <div className="p-3 mb-3 rounded" style={{border: '2px solid #ccc'}}>
                                                        <h3 className="fw-bold mb-3 lh-base fs-2 text-underline-purple">Key Points</h3>
                                                        {
                                                            d2.points.map((d4, k4) => (
                                                                
                                                                (d4 !== null) && (
                                                                    <li key={k4} className="text-brown mb-2">
                                                                        <i class="bi bi-bag-check fs-4 text-primary"></i> 
                                                                        <span
                                                                        className="lh-base fs-5 fw-normal text-dark mx-2"
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: d4.replaceAll(/([^:]+):/ig, '<b>$1</b>'),
                                                                        }}
                                                                        />
                                                                    </li>
                                                                )
                                                            ))
                                                        }
                                                    </div>
                                                    </>
                                                )
                                            }

                                            {
                                                d2.desc && d2.desc !== null && (
                                                    <div className="border p-3 rounded">
                                                            {
                                                                d2.desc.split(/\n./).map((d3, k3) => (
                                                                    
                                                                    <h5 key={k3} className="fs-5 lh-base mb-2 fw-light">{d3}</h5>
                                                                ))
                                                            }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }

                                {
                                    d.disclaimer !== null && (
                                    <div className="p-2 rounded mb-5">
                                        <h5 className="fs-2 fw-bold lh-base mb-2 fw-light text-underline-skin">Disclaimer</h5>
                                        <h5 className="fs-5 fw-light lh-base mb-2 fw-light">{d.disclaimer}</h5>
                                    </div>
                                    )
                                }
                            </div>

                            <div key={k} className="col-xl-3 col-md-3 col-sm-12 col-12">
                                <div className="d-flex gap-2 align-items-center justify-content-evenly mb-3">
                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${slug}`} className="btn btn-md btn-outline-dark"><i className="bi bi-facebook"></i></a>
                                    <a href={`https://twitter.com/intent/tweet?text=${slug}`} className="btn btn-md btn-outline-dark"><i className="bi bi-twitter"></i></a>
                                    <a href={`https://www.linkedin.com/shareArticle?mini=true&source=Printify&title=How%20to%20sell%20photography%20prints%20(2025)&url=${slug}`} className="btn btn-md btn-outline-dark"><i className="bi bi-linkedin"></i></a>
                                </div>
                                <h3 className="fs-3 fw-bold lh-base mb-2">Table Of Content</h3>
                                <select onChange={(e) => handleHeading(e)} className="form-select bg-shadow-sm bg-white p-3">
                                    {
                                        d.boxes && d.boxes.map((d, k) => (
                                            <option style={{cursor: 'pointer'}} value={k} key={k}>{d.heading.substring(0, 35) + '...'}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Blog;
export async function getServerSideProps(context) {
    const {slug} = context.params || {};
    let articles = await getArticlesBySlug({slug: slug});
    return {
        props: {
            articles
        }
    }
}
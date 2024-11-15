import React, { useState } from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_2.jpeg';
import sis_two from '@/public/images/team/sis_3.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { getArticlesBySearch } from '@/core/db';
import { make_msg, str_to_heading } from '@/core/util';
import { useRouter } from 'next/router';

const Blog = ({articles}) => {
    const router = useRouter();
    const [value, set_search] = useState(null);
    function set_search_btn(e) {
        e.preventDefault();
        if(value !== null) {
            router.push(`/blog?search=${value}`);
        } else {
            make_msg("Warning", "Please enter something to search ..", "error");
            return false;
        }
    }
    return (
        <Layout title='Read Blog | Articles' description="Welcome to The Immigration Sisters Blog, where we share valuable insights, practical advice, and inspirational stories from the world of immigration. Here, you’ll find up-to-date news on immigration policies, in-depth guides to simplify your application process, and stories from individuals who’ve successfully navigated their journeys. Whether you're just beginning your immigration process or looking for tips on integrating into a new community, our blog is designed to provide the information and encouragement you need." meta='yes' keywords='Blog, Articles, Guides, News'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-6 fw-bold lh-base"><span className="text-underline-skin">Insights & Stories from The Immigration Journey</span> <b className="text-italic text-bg-skin">Explore</b> Blogs</h1>
                        <h3 className="fs-5 fw-light lh-base">Welcome to The Immigration Sisters Blog, where we share valuable insights, practical advice, and inspirational stories from the world of immigration. Here, you’ll find up-to-date news on immigration policies, in-depth guides to simplify your application process, and stories from individuals who’ve successfully navigated their journeys. Whether you're just beginning your immigration process or looking for tips on integrating into a new community, our blog is designed to provide the information and encouragement you need.</h3>
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
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12 pt-3 pt-sm-3 pt-md-0 pt-lg-0 pt-xl-0'>
                        <div className='d-flex gap-3'>
                            <Image 
                                src={sis_one}
                                height="500"
                                width="500"
                                className="hero_set border-top-right-rounded"
                                loading='lazy'
                                alt="Blog Image One"
                            />
                            <Image 
                                src={sis_two}
                                height="500"
                                width="500"
                                className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                loading='lazy'
                                alt="Blog Image Two"
                            />
                        </div>
                    </div>
                </div>
            </div>

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

export default Blog;
export async function getServerSideProps(context) {
    const {search} = context.query || null;
    let articles = await getArticlesBySearch({search: search, category: 'blog'});
    return {
        props: {
            articles
        }
    }
}
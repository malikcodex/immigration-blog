import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/items/blog-1.webp';
import sis_two from '@/public/images/items/blog-2.webp';
import blog_one from '@/public/images/items/blog-3.webp';
import blog_two from '@/public/images/items/blog-4.webp';
import blog_three from '@/public/images/items/blog-5.webp';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
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
                            />
                            <button className="bg-purple text-brown btn btn-lg"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12 mt-3 mt-sm-3 mt-md-0 mt-lg-0 mt-xl-0'>
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
                        <div className="col-xl-4 col-md-6 col-sm-6 col-12 mb-3">
                            <div className="p-3 bg-shadow-sm bg-white rounded">
                                <Image
                                    src={blog_one}
                                    className='object-cover col-12 rounded h-lg mb-3'
                                    width="600"
                                    height="600"
                                    alt="blog one"
                                    loading='lazy'
                                />
                                <h1 className="fs-4 lh-base fw-bold mb-2">Building Engagement and Growing Your Audience</h1>
                                <h2 className="fs-5 lh-base fw-normal mb-4">TikTok isn’t just for viral dances—it’s a powerful platform for building authentic connections and engaging with a massive global audience</h2>
                                <h2 className="fs-6 lh-base fw-normal mb-2">10 Nov, 2024</h2>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6 col-12 mb-3">
                            <div className="p-3 bg-shadow-sm bg-white rounded">
                                <Image
                                    src={blog_three}
                                    className='object-cover mb-3 col-12 rounded h-lg'
                                    width="600"
                                    height="600"
                                    alt="blog two"
                                    loading='lazy'
                                />
                                <h1 className="fs-4 lh-base fw-bold mb-2">Maximizing Your Facebook Presence - Tips for Success in 2024</h1>
                                <h2 className="fs-5 lh-base fw-normal mb-4">With billions of users, Facebook remains a cornerstone for digital marketing and brand building. </h2>
                                <h2 className="fs-6 lh-base fw-normal mb-2">10 Nov, 2024</h2>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-6 col-12 mb-3">
                            <div className="p-3 bg-shadow-sm bg-white rounded">
                                <Image
                                    src={blog_two}
                                    className='object-cover col-12 rounded h-lg mb-3'
                                    width="600"
                                    height="600"
                                    alt="blog three"
                                    loading='lazy'
                                />
                                <h1 className="fs-3 lh-base fw-bold mb-2">Building Engagement and Growing Your Audience</h1>
                                <h2 className="fs-5 lh-base fw-normal mb-4">TikTok isn’t just for viral dances—it’s a powerful platform for building authentic connections and engaging with a massive global audience</h2>
                                <h2 className="fs-6 lh-base fw-normal mb-2">10 Nov, 2024</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog;
import Layout from '@/component/Layout';
import React from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import {getArticlesFor30, getFeedbacksFor30, getContactsFor30} from '@/core/db';

const SitePerformance = ({articlesCount,
    feedbackCount,
    usersCount,
    contactCount}) => {
    console.log(feedbackCount);

    let fb_count = ((feedbackCount.count || 1) / 10) * 100;
    let ar_count = ((articlesCount.count || 1) / 20) * 100;
    console.log(fb_count);
    return (
        <Layout title='Website Performance' description='Empowering Immigrants with Trusted Support and Expertise' meta='yes' keywords='Empowering Immigrants, Trusted Support, Expertise'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <h4 className="fs-1 fw-bold lh-base mb-4">Website Performance </h4>
                            <div className="row">

                                <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                                   <div className="bg-shadow-sm bg-white rounded p-3 mb-3">
                                        <p>Blogs Last 30 Days: {ar_count}%</p>
                                        <div className="bg-light">
                                            <h4 className="bg-skin" style={{height: '20px', width: `${ar_count}px`}}></h4>
                                        </div>
                                   </div>
                                </div>

                                <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                                    <div className="bg-shadow-sm bg-white rounded p-3 mb-3">
                                       <p>Users Last 30 Days: 50%</p>
                                       <div className="bg-light">
                                            <h4 className="bg-skin" style={{height: '20px', width: `${fb_count}px`}}></h4>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                                    <div className="bg-shadow-sm bg-white rounded p-3 mb-3">
                                        <p>Feedbacks | Last 30 Days: {fb_count}% </p>
                                        <div className="bg-light">
                                            <h4 className="bg-skin" style={{height: '20px', width: `${fb_count}px`}}></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-md-6 col-sm-12 col-12">
                                    <div className="bg-shadow-sm bg-white rounded p-3 mb-3">
                                        <p>Feedbacks | Last 30 Days: {fb_count}%</p>
                                        <div className="bg-light">
                                            <h4 className="bg-skin" style={{height: '20px', width: `${ar_count}px`}}></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SitePerformance;
export async function getServerSideProps(context) {
    let articlesCount = await getArticlesFor30({category: 'blog'});
    let feedbackCount = await getFeedbacksFor30();
    let usersCount = await getFeedbacksFor30();
    let contactCount = await getContactsFor30();
    return {
        props: {
            articlesCount,
            feedbackCount,
            usersCount,
            contactCount
        }
    }
}
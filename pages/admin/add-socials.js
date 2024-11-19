import Layout from '@/component/Layout';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';
import { makeRequest, make_msg, change_str_to_title, change_str_to_slug } from '@/core/util';
import { getSocialAddings } from '@/core/db';

const AddSocials = ({socialDetails}) => {
    const btnRef = useRef(null);
    const [instagram_link, change_instagram] = useState(null);
    const [facebook_link, change_facebook] = useState(null);
    const [youtube_link, change_youtube] = useState(null);
    const [twitter_link, change_twitter] = useState(null);
    const [tiktok_link, change_tiktok] = useState(null);


    useEffect(() => {
        socialDetails && !socialDetails.notFound && socialDetails.map((d, k) => {
            change_instagram(d.instagram_link);
            change_facebook(d.facebook_link);
            change_youtube(d.youtube_link);
            change_twitter(d.twitter_link);
            change_tiktok(d.tiktok_link);
        })
    }, [socialDetails])

    async function addSubmit(e) {
        e.preventDefault();
        if(btnRef.current) {
            btnRef.current.classList.add("disable");
        }
        let data = JSON.stringify({
            id: 1,
            instagram_link: instagram_link,
            facebook_link: facebook_link,
            twitter_link: twitter_link,
            youtube_link: youtube_link,
            tiktok_link: tiktok_link
        });

        let res = await makeRequest("/api/add-socials", data);
        make_msg("Notice !" , res.msg , res.status)
        if(btnRef.current) {
            btnRef.current.classList.remove("disable");
        }
    }
    return (
        <Layout title='Add Social Management' description='You can add categories and change there status accordingly' meta='no' keywords='Add Categories, Upload Categories, Categorized Content'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="fs-1 fw-bold lh-base mb-4">Add Social Links</h2>
                                <form onSubmit={addSubmit} className="col-12">
                                    <h2 className="fs-4 fw-normal lh-base mb-3">Instagram Link</h2>
                                    <input type="url" onChange={(e) => change_instagram(e.target.value || null)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={instagram_link} />

                                    <h2 className="fs-4 fw-normal lh-base mb-3">Facebook Link</h2>
                                    <input type="url" onChange={(e) => change_facebook(e.target.value || null)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={facebook_link}/>

                                    <h2 className="fs-4 fw-normal lh-base mb-3">Youtube Link</h2>
                                    <input type="url" onChange={(e) => change_youtube(e.target.value || null)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={youtube_link}/>
                                    
                                    <h2 className="fs-4 fw-normal lh-base mb-3">Twitter Link</h2>
                                    <input type="url" onChange={(e) => change_twitter(e.target.value || null)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={twitter_link}/>

                                    <h2 className="fs-4 fw-normal lh-base mb-3">Tiktok Link</h2>
                                    <input type="url" onChange={(e) => change_tiktok(e.target.value || null)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={tiktok_link}/>
                                    {/* add more boxes */}
                                    <div className="d-flex py-3 gap-3 align-items-center">
                                        <button ref={btnRef} className="btn bg-brown btn-md text-white mb-3">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddSocials;
export async function getServerSideProps(context) {
    const socialDetails = await getSocialAddings();
    return {
        props: {
            socialDetails
        }
    }
}
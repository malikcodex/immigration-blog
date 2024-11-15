import Layout from '@/component/Layout';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';
import { makeRequest, optimizeImage, make_msg, change_str_to_title, change_str_to_slug } from '@/core/util';
import { getCategoryById } from '@/core/db';

const AddCategories = ({categories}) => {
    const [id, changeId] = useState(null);
    const [title, changeTitle] = useState(null);
    const [slug, changeSlug] = useState(null);
    const [featured, changeFeatured] = useState(null);
    const btnRef = useRef(null);
    
    useEffect(() => {
        if(categories && categories[0]) {
            categories.map(async(d, k) => {
                changeId(d._id);
                changeTitle(d.title);
                changeSlug(d.slug);
                if(d.image !== null) {
                    let img = await optimizeImage(d.image , 'url');
                    console.log(img);
                    changeFeatured(img);   
                }
            })
        }
    }, [categories]);

    async function changeFeaturedImage(e) {
        let files = e.target.files[0] || "";
        if(files) {
            if(btnRef.current) {
                btnRef.current.classList.add("disable");
            }
            let op = await optimizeImage(files);
            changeFeatured(op);
            if(btnRef.current) {
                btnRef.current.classList.remove("disable");
            }
        }
    }

    async function addSubmit(e) {
        e.preventDefault();
        if(btnRef.current) {
            btnRef.current.classList.add("disable");
        }
        let data = JSON.stringify({
            id: id,
            title: change_str_to_title(title),
            slug: change_str_to_slug(slug),
            image: featured
        });

        let res = await makeRequest("/api/add-categories", data);
        make_msg("Notice !" , res.msg , res.status)
        if(btnRef.current) {
            btnRef.current.classList.remove("disable");
        }
    }
    return (
        <Layout title='Add Categories' description='You can add categories and change there status accordingly' meta='no' keywords='Add Categories, Upload Categories, Categorized Content'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="fs-1 fw-bold lh-base mb-4">Add Categories</h2>
                                <form onSubmit={addSubmit} className="col-12">
                                    <h2 className="fs-4 fw-normal lh-base mb-3">Category Name</h2>
                                    <input type="text" onChange={(e) => changeTitle(e.target.value)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={title} />

                                    <h2 className="fs-4 fw-normal lh-base mb-3">Category Slug</h2>
                                    <input type="text" onChange={(e) => changeSlug(e.target.value)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={slug}/>
                                    
                                    <h2 className="fs-4 fw-normal lh-base mb-3">Category Image</h2>
                                    <input type="file" onChange={changeFeaturedImage} className="form-control p-3 mb-3" accept="image/jpg, image/jpeg, image/png"/>
                                    {
                                        (id !== null) && (
                                            (featured !== null) && (
                                                <Image 
                                                    src={featured}
                                                    width="400"
                                                    height="400"
                                                    className="object-cover h-full"
                                                />
                                            )
                                        )
                                    }

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

export default AddCategories;
export async function getServerSideProps(context) {
    const {id} = context.query || {};
    const categories = await getCategoryById({id: id});
    return {
        props: {
            categories
        }
    }
}
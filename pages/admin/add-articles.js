import Layout from '@/component/Layout';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SetSidebar from '@/component/Sidebar';
import { change_str_to_slug, make_msg, change_str_to_title, makeRequest, optimizeImage } from '@/core/util';
import { getArticleById, getAllCategories } from '@/core/db';

const AddArticles = ({articles, categories}) => {
    const btnRef = useRef(null);
    const [id, set_id] = useState(null);
    const [title, set_title] = useState(null);
    const [slug, set_slug] = useState(null);
    const [desc, set_desc] = useState(null);
    const [category, set_category] = useState(null);
    const [disclaimer, set_disclaimer] = useState(null);
    const [imgId, set_imgId] = useState(null);
    const [image, set_featured] = useState(null);
    const [tags, set_tags] = useState(null);
    const [boxes, set_boxes] = useState([
        {
            heading: null,
            subheading: null,
            desc: null,
            image: null,
            imgId: null,
            points: [{
                value: null
            }]
        }
    ])

    // use effect used
    useEffect(() => {
        if(articles && !articles.notFound) {
            let nboxes = [];
            articles.map(async(d, k) => {
                set_id(d._id);
                set_title(d.title);
                set_slug(d.slug);
                set_desc(d.desc);
                set_category(d.category);
                set_disclaimer(d.disclaimer);
                set_tags(d.tags);
                set_boxes(d.boxes);
            })
        }
    }, [articles])

    console.log(boxes);

    function removeBoxes(e, k) {
        e.preventDefault();
        console.log(k);
        let nboxes = [...boxes];
        nboxes = nboxes.filter((_, i) => i !== k);
        set_boxes(nboxes);
    }

    function removePoints(e, m, d) {
        e.preventDefault();
        let nboxes = [...boxes];
        nboxes[m].points = nboxes[m].points.filter((_, i) => i !== d);
        console.log(nboxes);
        set_boxes(nboxes);
    }

    function changeBoxDesc(e, k) {
        e.preventDefault();
        let nboxes = [...boxes];
        nboxes[k].desc = e.target.value;
        set_boxes(nboxes);
    }

    function changeHeading(e, k) {
        e.preventDefault();
        let nboxes = [...boxes];
        nboxes[k].heading = e.target.value;
        set_boxes(nboxes);
    }

    function changeSubHeading(e, k) {
        e.preventDefault();
        let nboxes = [...boxes];
        nboxes[k].subheading = e.target.value;
        set_boxes(nboxes);
    }

    function handlePoint(e, m, d) {
        e.preventDefault();
        let nboxes = [...boxes];
        nboxes[m].points[d].value = e.target.value;
        set_boxes(nboxes);
    }

    async function changeImage(e, i) {
        if(!e.target.files[0]) {
            return;
        }

        let files = e.target.files[0];
        if(files) {
            if(btnRef.current) {
                btnRef.current.classList.add("disable");
            }
            let nboxes = [...boxes];
            let op = await optimizeImage(files);
            let image = JSON.stringify({
                img: op,
                imgId: nboxes[i].imgId
            });
            let rq = await makeRequest("/api/upload_images", image);
            if(rq.status && rq.status == "success") {
                nboxes[i].image = rq.msg.secure_url;
                nboxes[i].imgId = rq.msg.public_id;
                set_boxes(nboxes);
            }

            if(btnRef.current) {
                btnRef.current.classList.remove("disable");
            }
        }
    }

    async function changeFeaturedImage(e) {
        if(!e.target.files[0]) {
            return;
        }

        let files = e.target.files[0];
        if(files) {
            if(btnRef.current) {
                btnRef.current.classList.add("disable");
            }
            let op = await optimizeImage(files);
            let json_string = JSON.stringify({
                img: op,
                imgId: imgId
            });
            let rq = await makeRequest("/api/upload_images", json_string);
            if(rq.status && rq.status == "success") {
                set_featured(rq.msg.secure_url);
                set_imgId(rq.msg.public_id);
            }
            
            if(btnRef.current) {
                btnRef.current.classList.remove("disable");
            }
        }
    }

    function addPoints(e, m) {
        e.preventDefault();
        let nboxes = [...boxes];
        nboxes[m].points.push({value: ''});
        set_boxes(nboxes);
    }

    function addBoxes(e) {
        e.preventDefault();
        let nboxes = [...boxes];
        nboxes.push({
            heading: null,
            subheading: null,
            image: null,
            imgId: null,
            points: [{
                value: null
            }]
        })
        set_boxes(nboxes);
    }

    const AddSubmit = async(e) => {
        e.preventDefault();
        if(btnRef.current) {
            btnRef.current.classList.add("disable");
        }
        let data = JSON.stringify({
            id: id,
            title: change_str_to_title(title),
            slug: change_str_to_slug(slug),
            desc: change_str_to_title(desc),
            featured: image,
            imgId: imgId,
            category: category,
            boxes: boxes.map((d, k) => (
                {
                    heading: d.heading,
                    subheading: d.subheading,
                    desc: d.desc,
                    image: d.image,
                    imgId: d.imgId,
                    points: d.points.map((d2, k2) => (d2.value))
                }
            )),
            disclaimer: disclaimer,
            tags: tags
        })

        let req = await makeRequest("/api/add-article", data);
        make_msg("Notice !" , req.msg , req.status)
        if(btnRef.current) {
            btnRef.current.classList.remove("disable");
        }
    }

    return (
        <Layout title='Add Articles' description='You can upload blog articles with advanced and capable feture to proove that something will be deployed stunning' meta='no' keywords='Upload Blog, Add Articles, Create Content, Optimize Blog Articles'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="fs-1 fw-bold lh-base mb-4">Add Article</h2>
                                <form onSubmit={AddSubmit} className="col-12">
                                    <h2 className="fs-4 fw-normal lh-base mb-3">Enter Title</h2>
                                    <input type="text" onChange={(e) => set_title(e.target.value)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={title} />

                                    <h2 className="fs-4 fw-normal lh-base mb-3">Enter Slug</h2>
                                    <input type="text" onChange={(e) => set_slug(e.target.value)} className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" value={slug} />
                                    
                                    <h2 className="fs-4 fw-normal lh-base mb-3">Upload Feature Image</h2>
                                    <input type="file" onChange={(e) => changeFeaturedImage(e)} className="form-control p-3 mb-3" accept="image/jpg, image/jpeg, image/png"/>

                                    {/* display img */}
                                    {
                                        (id !== null) && (
                                            image !== null && (
                                                 articles.map((d, k) => (
                                                      <Image src={image} height="400" width="400" className="h-full object-contain" />
                                                ))
                                            )
                                        )
                                    }

                                    <h2 className="fs-4 fw-normal lh-base mb-3">Category</h2>
                                    <select onChange={(e) => set_category(e.target.value)} className="form-select p-3 mb-3">
                                        <option value="">Select Category</option>
                                        {
                                            categories && categories.notFound ? (
                                                <option value="">No Category Found</option>
                                            ) : (
                                                categories && categories.map((d, k) => (
                                                    (d.title === category) ? (
                                                        <option selected key={k} value={`${d.title}`}>{d.title}</option>
                                                    ) : (
                                                        <option key={k} value={`${d.title}`}>{d.title}</option>
                                                    )
                                                ))
                                            )
                                        }
                                    </select>
                                    <h2 className="fs-4 fw-normal lh-base mb-3">Enter Description</h2>
                                    <textarea type="text" onChange={(e) => set_desc(e.target.value)} className="form-control p-3 mb-3 resize-none" spellCheck="false" autoComplete="off" rows="6" cols="10" value={desc} />
                                        
                                    {
                                        boxes && boxes.map((d, k) => (
                                            <div key={k}>
                                                <div className="form-group">
                                                    {/* content boxes */}
                                                    <h3 className="fs-3 lh-base fw-normal">Add Content Boxes <b className="text-danger fs-5 lh-base">(This means that by clicking onto below add more button you will get another same box)</b></h3>
                                                    <h2 className="fs-5 fw-normal lh-base mb-3">Enter Heading (In SEO We Use H1 Tag To Optimize Headings)</h2>
                                                    <input type="text" className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" onChange={(e) => changeHeading(e , k)} value={d.heading}/>

                                                    <h2 className="fs-5 fw-normal lh-base mb-3">Enter SubHeading (In SEO We Use H2 Tag To Optimize Subheadings)</h2>
                                                    <input type="text" className="form-control p-3 mb-3" spellCheck="false" autoComplete="off" onChange={(e) => changeSubHeading(e , k)} value={d.subheading}/>

                                                    <h2 className="fs-4 fw-normal lh-base mb-3">Upload Box Image (In SEO We use better image formates for image seo, Images are the best way to increase redability)</h2>
                                                    <input type="file" className="form-control p-3 mb-3" accept="image/jpg, image/jpeg, image/png" onChange={(e) => changeImage(e, k)} />
                                                    
                                                    {
                                                        id !== null && d.image !== null && (
                                                             <Image src={d.image} width="500" height="500" className="h-full object-contain" />
                                                        )
                                                    }

                                                    <h2 className="fs-5 fw-normal lh-base mb-3">Enter Paragraph (In SEO We Use P Tag To Optimize Paragraphs)</h2>
                                                    <textarea type="text" className="form-control p-3 mb-3 resize-none" spellCheck="false" autoComplete="off" rows="6" cols="10" onChange={(e) => changeBoxDesc(e, k)} value={d.desc} />

                                                    {
                                                    d && d.points && d.points.map((d2, k2) => (
                                                        <div key={k2}>
                                                            {/* points */}
                                                            <h2 className="fs-3 lh-base fw-bold mb-3">Add Points (In SEO We use Ul Tag To Improve Bullet Points)</h2>
                                                            <input type="text" className="form-control p-3 mb-3" autoComplete="off" spellCheck="false" onChange={(e) => handlePoint(e, k, k2)} value={d2.value} />
                                                            {/* remove more points button */}
                                                            <button onClick={(e) => removePoints(e, k, k2)} className="btn bg-danger btn-md text-white mb-3">Remove Points</button>
                                                        </div>
                                                    ))}

                                                    {/* add more points button */}
                                                    <button onClick={(e) => addPoints(e, k)} className="btn bg-purple btn-md text-white mb-3">Add More Points</button>
                                                </div>
                                                {
                                                    (k > 0) && (
                                                        <button onClick={(e) => removeBoxes(e, k)} className="btn bg-danger btn-md text-white mb-3">Remove Box</button>
                                                    ) 
                                                }
                                            </div>
                                        ))
                                    }

                                    <h2 className="fs-3 lh-base fw-bold mb-3">Add Tags (Seperate Each Tag With Comma)</h2>
                                    <input type="text" className="form-control p-3 mb-3" autoComplete="off" spellCheck="false" onChange={(e) => set_tags(e.target.value)} value={tags} />
                                    
                                    <h3 className="fs-3 mb-3 lh-base">Disclaimer Message</h3>
                                    <textarea type="text" rows="6" cols="10" className="form-control p-3 resize-none" onChange={(e) => set_disclaimer(e.target.value)} value={disclaimer} />
                                    
                                    {/* add more boxes */}
                                    <div className="d-flex py-3 gap-3 align-items-center">
                                        <button onClick={(e) => addBoxes(e)} className="btn bg-skin btn-md text-brown mb-3">Add More Boxes</button>
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

export default AddArticles;
export async function getServerSideProps(context) {
    const {id} = context.query || null;
    let articles = await getArticleById({id: id});
    let categories = await getAllCategories({id: null, search: ''});
    return {
        props: {
            articles,
            categories
        }
    }
}
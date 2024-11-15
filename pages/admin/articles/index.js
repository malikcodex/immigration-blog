import Layout from '@/component/Layout';
import React, { useState } from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';
import { getAllArticles } from '@/core/db';
import { getPagination, make_msg } from '@/core/util';
import { useRouter } from 'next/router';
const Articles = ({articles}) => {
    let router = useRouter();
    let [searched, set_search] = useState(0);
    const {page} = router.query || 1;
    const {search} = router.query || "";

    function set_search_btn(e) {
        e.preventDefault();
        if(search != 0 && search != null) {
            router.push(`/admin/articles/${search}`);
        } else {
            make_msg("Note!", "Pleasee enter something to search", "success");
        }
    }
    let data = getPagination(articles, page);
    return (
        <Layout title='Manage All Blog Articles' description='Manage All Blog Articles' meta='yes' keywords='handle blogs, list articles'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <h3 className="fs-3 fw-bold lh-base pt-3 pb-2">Manage All Blog Articles</h3>
                            <Link href="/admin/add-articles" className="text-white btn btn-sm bg-dark mb-3">Add Articles</Link>
                            <div className="col-xl-6 col-12 mb-4">
                                <div className="input-group bg-white bg-shadow-sm">
                                    <input type="text" className="form-control p-2" autoComplete="off" spellCheck="false" onChange={(e) => set_search} />
                                    <button onClick={(e) => set_search_btn} className="btn btn-sm bg-primary text-white fw-bold"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                            {
                                data && data.data.length === 0 ? (
                                    <div>
                                        <h3 className="fs-4 lh-base mb-3">No Blogs Were Found</h3>
                                    </div>
                                ) : (
                                   <>
                                    <div className="table-responsive">
                                        <table className="table table-borderless bg-shadow-sm">
                                            {/* thead */}
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Image</th>
                                                    <th>Slug</th>
                                                    <th>Status</th>
                                                    <th>Created On</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>

                                            {/* tbody */}
                                            <tbody>
                                                {
                                                    data && data.data.map((d, k) => (
                                                    <tr>
                                                        <td>{k <= 0 ? 1 : k + page + 1}</td>
                                                        <td>{d.title}</td>
                                                        <td>{d.desc.substring(0, 42) + '...'}</td>
                                                        <td><Image src={d.featured || "https://res.cloudinary.com/dfvn8crqd/image/upload/v1731325443/illustration-of-cloud-uploading-and-database-servers-secure-file-sharing-people-isolated-concept-vector_tiz0bm.jpg"} alt="Featured" loading="lazy" height="200" width="200" className="table_img" /></td>
                                                        <td>{d.slug}</td>
                                                        <td><h5 className="fs-6 lh-base text-success">Active</h5></td>
                                                        <td>{d.date}</td>
                                                        <td>
                                                            <Link href={`/admin/add-articles?id=${d._id}`} className="btn btn-primary btn-sm">Edit</Link>
                                                            <Link href={`/admin/articles?id=${d._id}`} className="btn btn-danger mx-2 btn-sm">Delete</Link>
                                                        </td>
                                                    </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* pagination */}
                                    <div className="input-group py-3">
                                        {
                                            data.data && data.data.length > 0 && (
                                                <>
                                                <Link href={`/admin/articles?page=1`} className={`btn btn-md bg-green text-white ${data.prev_disable}`}>First</Link>
                                                <Link href={`/admin/articles?page=${data.prev_page}`} className={`btn btn-md bg-green text-white ${data.prev_disable}`}>Prev</Link>
                                                <Link href={`/admin/articles?page=${data.next_page}`} className={`btn btn-md bg-green text-white ${data.next_disable}`}>Next</Link>
                                                <Link href={`/admin/articles?page=${data.next_page}`} className={`btn btn-md bg-green text-white ${data.next_disable}`}>Last</Link>
                                                </>
                                            )
                                        }
                                    </div>
                                   </>    
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Articles;
export async function getServerSideProps(context) {
    const {id} = context.query || null;
    let articles = await getAllArticles({id: id, category: 'blog'});
    return {
        props: {
            articles
        }
    }
}
import Layout from '@/component/Layout';
import React from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';
import { getPagination } from '@/core/util';
import {questionAnswers} from '@/core/db';
import {useRouter} from 'next/router';

const Qan = ({qan_details}) => {
    const router = useRouter();
    const {page} = router.query || "";
    const {search} = router.query || "";

    function set_search_btn(e) {
        e.preventDefault();
        if(search != 0 && search != null) {
            router.push(`/admin/qan/${search}`);
        } else {
            make_msg("Note!", "Pleasee enter something to search", "success");
        }
    }
    let data = getPagination(qan_details, page);
    return (
        <Layout title='List All Question Answers' description='List All Question Answers' meta='yes' keywords='question, faqs, answers'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <h3 className="fs-3 fw-bold lh-base pt-3 pb-2">Manage Quetion & Answers</h3>
                            <Link href="/admin/add-articles" className="text-white btn btn-sm bg-dark mb-3">Add Articles</Link>
                            <div className="col-xl-6 col-12 mb-4">
                                <div className="input-group bg-white bg-shadow-sm">
                                    <input type="text" className="form-control p-2" autoComplete="off" spellCheck="false" />
                                    <button className="btn btn-sm bg-primary text-white fw-bold"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-borderless bg-shadow-sm">
                                    {/* thead */}
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Question</th>
                                            <th>Answer</th>
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
                                                <Link href={`/admin/guides?id=${d._id}`} className="btn btn-danger mx-2 btn-sm">Delete</Link>
                                            </td>
                                        </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>

                            {/* pagination */}
                            <div className="input-group py-3">
                                <Link href="" className="btn btn-md bg-green text-white">First</Link>
                                <Link href="" className="btn btn-md bg-green text-white">Prev</Link>
                                <Link href="" className="btn btn-md bg-green text-white">Next</Link>
                                <Link href="" className="btn btn-md bg-green text-white">Last</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Qan;
export async function getServerSideProps(context) {
    let qan_details = await questionAnswers();
    return {
        props: {
            qan_details
        }
    }
}
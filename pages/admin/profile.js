import Layout from '@/component/Layout';
import React from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';

const Support = () => {
    return (
        <Layout title='List All Blog Support' description='All Blog Articles' meta='yes' keywords='handle blogs, list articles'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <h3 className="fs-3 fw-bold lh-base pt-3 pb-2">Manage Support Center</h3>
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
                                        <tr>
                                            <td>1</td>
                                            <td>New Article</td>
                                            <td>New Article Description</td>
                                            <td><Image src={''} alt="Featured" loading="lazy" height="200" width="200" className="table_img" /></td>
                                            <td>best-online-courses</td>
                                            <td><h5 className="fs-6 lh-base text-success">Active</h5></td>
                                            <td>Nov 8, 2024</td>
                                            <td>
                                                <Link href="" className="btn btn-primary btn-sm">Edit</Link>
                                                <Link href="" className="btn btn-danger mx-2 btn-sm">Delete</Link>
                                            </td>
                                        </tr>
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

export default Support;
import Layout from '@/component/Layout';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';
import { getAllArticles } from '@/core/db';
import { useRouter } from 'next/router';
import { change_str_to_slug, remove_dash, change_str_to_title, getPagination, nothing_found } from '@/core/util';

const AllSupportBlogs = ({ articles }) => {
    console.log(articles);
    const router = useRouter();
    const { page = 1 } = router.query;
    const [search, setSearch] = useState('');
    const [paginatedData, setPaginatedData] = useState([]);

    useEffect(() => {
        if (articles && !articles.notFound) {
            const paginated = getPagination(articles, page);
            setPaginatedData(paginated);
        }
    }, [articles, page]);

    const handleSearch = () => {
        if (search.trim()) {
            router.push(`/admin/support?search=${change_str_to_slug(search)}`);
        }
    };

    return (
        <Layout title="Manage All Support Blogs" description="Manage All Support Blogs" meta="no" keywords="Manage Support, Support Center, Need Help?">
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <h3 className="fs-3 fw-bold lh-base pt-3 pb-2">Manage Your Support Center</h3>
                            <Link href="/admin/add-content" className="text-white btn btn-sm bg-dark mb-3">
                                Add Support Blogs
                            </Link>
                            <div className="col-xl-6 col-12 mb-4">
                                <div className="input-group bg-white bg-shadow-sm">
                                    <input
                                        type="text"
                                        className="form-control p-2"
                                        autoComplete="off"
                                        spellCheck="false"
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <button onClick={handleSearch} className="btn btn-sm bg-primary text-white fw-bold">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>

                            {paginatedData?.data?.length > 0 ? (
                                <div className="table-responsive">
                                    <table className="table table-borderless bg-shadow-sm">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>Desc</th>
                                                <th>Slug</th>
                                                <th>Image</th>
                                                <th>Created On</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginatedData.data.map((d, k) => (
                                                <tr key={k}>
                                                    <td>{k + 1}</td>
                                                    <td>{nothing_found(d.title)}</td>
                                                    <td>{nothing_found(d.desc)}</td>
                                                    <td>{nothing_found(d.slug)}</td>
                                                    <td>
                                                        <Image
                                                            src={d.image || '/default-image.png'}
                                                            alt="Featured"
                                                            loading="lazy"
                                                            height="200"
                                                            width="200"
                                                            className="table_img"
                                                        />
                                                    </td>
                                                    <td>Active</td>
                                                    <td>{d.date}</td>
                                                    <td>
                                                        <Link href={`/admin/add-content?id=${d._id}`} className="btn btn-primary btn-sm">
                                                            Edit
                                                        </Link>
                                                        <Link href={`/admin/support?id=${d._id}`} className="btn btn-danger mx-2 btn-sm">
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="fs-5 lh-base fw-normal">No Support Blogs Were Found</h2>
                                </div>
                            )}

                            {paginatedData?.data?.length > 0 && (
                                <div className="input-group py-3">
                                    <Link
                                        href={`/admin/support?page=1`}
                                        className={`btn btn-md bg-green text-white ${paginatedData.prev_disable}`}
                                    >
                                        First
                                    </Link>
                                    <Link
                                        href={`/admin/support?page=${paginatedData.prev_page}`}
                                        className={`btn btn-md bg-green text-white ${paginatedData.prev_disable}`}
                                    >
                                        Prev
                                    </Link>
                                    <Link
                                        href={`/admin/support?page=${paginatedData.next_page}`}
                                        className={`btn btn-md bg-green text-white ${paginatedData.next_disable}`}
                                    >
                                        Next
                                    </Link>
                                    <Link
                                        href={`/admin/support?page=${paginatedData.total_pages}`}
                                        className={`btn btn-md bg-green text-white ${paginatedData.next_disable}`}
                                    >
                                        Last
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AllSupportBlogs;
export async function getServerSideProps(context) {
    const { id, search } = context.query || {};
    const articles = await getAllArticles({ id, category:'support', search });
    return {
        props: {
            articles: articles,
        }
    };
}

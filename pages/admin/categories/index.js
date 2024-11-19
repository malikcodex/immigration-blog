import Layout from '@/component/Layout';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';
import { getAllCategories } from '@/core/db';
import { useRouter } from 'next/router';
import { change_str_to_title, getPagination } from '@/core/util';

const AllCategories = ({ categories }) => {
    const router = useRouter();
    const { page = 1 } = router.query;
    const [search, setSearch] = useState('');
    const [paginatedData, setPaginatedData] = useState([]);

    useEffect(() => {
        if (categories && !categories.notFound) {
            const paginated = getPagination(categories, page);
            setPaginatedData(paginated);
        }
    }, [categories, page]);

    const handleSearch = () => {
        if (search.trim()) {
            router.push(`/admin/categories?search=${change_str_to_title(search)}`);
        }
    };

    return (
        <Layout title="List All Blog Articles" description="All Blog Articles" meta="yes" keywords="handle blogs, list articles">
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <h3 className="fs-3 fw-bold lh-base pt-3 pb-2">List All Categories</h3>
                            <Link href="/admin/add-categories" className="text-white btn btn-sm bg-dark mb-3">
                                Add Categories
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
                                                <th>Slug</th>
                                                <th>Image</th>
                                                <th>Created On</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {paginatedData.data.map((d, k) => (
                                                <tr key={k}>
                                                    <td>{k + 1}</td>
                                                    <td>{d.title}</td>
                                                    <td>{d.slug}</td>
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
                                                    <td>{d.date}</td>
                                                    <td>
                                                        <Link href={`/admin/add-categories?id=${d._id}`} className="btn btn-primary btn-sm">
                                                            Edit
                                                        </Link>
                                                        <Link href={`/admin/categories?id=${d._id}`} className="btn btn-danger mx-2 btn-sm">
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
                                    <h2>No Categories Were Found</h2>
                                </div>
                            )}

                            {paginatedData?.data?.length > 0 && (
                                <div className="input-group py-3">
                                    <Link
                                        href={`/admin/categories?page=1`}
                                        className={`btn btn-md bg-green text-white ${paginatedData.prev_disable}`}
                                    >
                                        First
                                    </Link>
                                    <Link
                                        href={`/admin/categories?page=${paginatedData.prev_page}`}
                                        className={`btn btn-md bg-green text-white ${paginatedData.prev_disable}`}
                                    >
                                        Prev
                                    </Link>
                                    <Link
                                        href={`/admin/categories?page=${paginatedData.next_page}`}
                                        className={`btn btn-md bg-green text-white ${paginatedData.next_disable}`}
                                    >
                                        Next
                                    </Link>
                                    <Link
                                        href={`/admin/categories?page=${paginatedData.total_pages}`}
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

export default AllCategories;

export async function getServerSideProps(context) {
    const { id, search } = context.query || {};
    const categories = await getAllCategories({ id, search });
    return {
        props: {
            categories: categories || { notFound: true },
        },
    };
}

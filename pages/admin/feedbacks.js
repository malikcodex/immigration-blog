import Layout from '@/component/Layout';
import React, {useState} from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';
import Image from 'next/image';
import { getAllFeedbacks } from '@/core/db';
import { useRouter } from 'next/router';
import { change_str_to_title , getPagination } from '@/core/util';

const AllFeedbacks = ({feedbacks}) => {
    const router = useRouter();
    const {page} = router.query || 1;
    const [search, searchFeedbacks] = useState(null);

    function search_do() {
        if(search != '') {
            router.push(`/admin/feedbacks?search=${change_str_to_title(search)}`)
        }
    }

    let get_pagination = getPagination(feedbacks, page);
    return (
        <Layout title='Feedback Management' description='Manage Feedback Center' meta='no' keywords='manage feedback, feedback message, user rating, reviews'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <h3 className="fs-3 fw-bold lh-base pt-3 pb-2">All Feedback Messages</h3>
                            <div className="col-xl-6 col-12 mb-4">
                                <div className="input-group bg-white bg-shadow-sm">
                                    <input type="text" className="form-control p-2" autoComplete="off" spellCheck="false" onChange={(e) => searchFeedbacks(e.target.value)} />
                                    <button onClick={search_do} className="btn btn-sm bg-primary text-white fw-bold"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                            {
                                get_pagination.data && get_pagination.data <= 0 ? (
                                    <div>
                                         <h2>No Feedbacks Were Found</h2>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="table table-borderless bg-shadow-sm">
                                            {/* thead */}
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>E-mail</th>
                                                    <th>Username</th>
                                                    <th>Feedback</th>
                                                    <th>Date</th>
                                                </tr>
                                            </thead>

                                            {/* tbody */}
                                            <tbody>
                                                {
                                                    get_pagination.data && get_pagination.data.map((d, k) => (
                                                    <tr key={k}>
                                                        <td>{k <= 0 ? 1 : k + 1}</td>
                                                        <td>{d.email}</td>
                                                        <td>{d.username}</td>
                                                        <td>{d.feedback}</td>
                                                        <td>{d.date}</td>
                                                    </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                )
                            }
                            

                            {/* pagination */}
                            <div className="input-group py-3">
                                {
                                    get_pagination.data && get_pagination.data.length > 0 && (
                                        <>
                                        <Link href={`/admin/feedbacks?page=1`} className={`btn btn-md bg-green text-white ${get_pagination.prev_disable}`}>First</Link>
                                        <Link href={`/admin/feedbacks?page=${get_pagination.prev_page}`} className={`btn btn-md bg-green text-white ${get_pagination.prev_disable}`}>Prev</Link>
                                        <Link href={`/admin/feedbacks?page=${get_pagination.next_page}`} className={`btn btn-md bg-green text-white ${get_pagination.next_disable}`}>Next</Link>
                                        <Link href={`/admin/feedbacks?page=${get_pagination.next_page}`} className={`btn btn-md bg-green text-white ${get_pagination.next_disable}`}>Last</Link>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AllFeedbacks;
export async function getServerSideProps(context) {
     let {slug} = context.params || {};
     let {id} = context.query || null;
     let {search} = context.query || null;
     let feedbacks = await getAllFeedbacks({search: search}); 
     return {
        props: {
            feedbacks
        }
     }
}
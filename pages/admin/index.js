import Layout from '@/component/Layout';
import React from 'react';
import Link from 'next/link';
import SetSidebar from '@/component/Sidebar';

const AdminBackend = () => {
    return (
        <Layout title='Admin Dashboard' description='Empowering Immigrants with Trusted Support and Expertise' meta='yes' keywords='Empowering Immigrants, Trusted Support, Expertise'>
            <div className="container-fluid">
                <div className="row py-4">
                    <SetSidebar />
                    <div className="col-xl-9 col-md-8 col-sm-7 col-12">
                        <div className="container-fluid">
                            <h3 className="fs-1 lh-base mb-2 fw-bold text-brown">Welcome to the dashboard Admin</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminBackend;
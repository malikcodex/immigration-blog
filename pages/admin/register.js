import Layout from '@/component/Layout';
import React, {useState} from 'react';
import Link from 'next/link';
import { make_msg, makeRequest } from '@/core/util';

const AdminRegister = () => {
    const [email, set_email] = useState(null);
    const [password, set_password] = useState(null);

    async function addSubmit(e) {
        e.preventDefault();
        let json = JSON.stringify({
            email: email,
            password: password
        })

        let res = await makeRequest("/api/admin-register", json);
        if(res.status) {
            make_msg("Note!", res.msg, res.status);
        }
    }
    return (
        <Layout title='Login to Admin Dashboard' description='Login to Admin Dashboard' meta='no' keywords='admin dashboard, login to admin panel'>
            <div className="container-fluid">
                <div className="row justify-content-center py-4">
                    <div className="col-xl-5 col-md-6 col-sm-10 col-12">
                        <div className="container-fluid">
                            <h3 className="fs-2 text-center lh-base mb-2 fw-bold text-brown">Login to Backend Dashboard</h3>
                            <h3 className="fs-5 text-center lh-base mb-4 fw-light text-brown">Use Correct Crediantials To Login</h3>
                            <form onSubmit={addSubmit} className="bg-shadow-sm bg-white p-3 mb-4">
                                <input
                                   type='text'
                                   className='form-control p-3 mb-3'
                                   placeholder='enter email address'
                                   autoComplete='off'
                                   onChange={(e) => set_email(e.target.value || '')}
                                   spellCheck={false}
                                   value={email}
                                />

                                <input
                                   type='text'
                                   className='form-control p-3 mb-3'
                                   placeholder='enter password'
                                   autoComplete='off'
                                   onChange={(e) => set_password(e.target.value || '')}
                                   spellCheck={false}
                                   value={password}
                                />
                                <button className="btn btn-md bg-purple text-white">Register as Admin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminRegister;
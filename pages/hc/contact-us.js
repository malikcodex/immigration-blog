import React, { useState } from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis-1.jpg';
import sis_two from '@/public/images/team/sis-2.jpg';
import sis_three from '@/public/images/team/sis-4.png';
import sis_four from '@/public/images/team/sis-5.png';
import sis_five from '@/public/images/team/sis-6.png';
import email_im from '@/public/images/items/email.png';
import Image from 'next/image';
import Link from 'next/link';
import { make_msg, makeRequest } from '@/core/util';

const Contact = () => {
    const [email, addEmail] = useState(null);
    const [name, addName] = useState(null);
    const [subject, addSubject] = useState(null);
    const [message, addMessage] = useState(null);
    async function addSubmit(e) {
        e.preventDefault();
        let data = JSON.stringify({
            email: email,
            username: name,
            subject: subject,
            message: message
        });

        let req = await makeRequest('/api/add-contact', data);
        make_msg("Note", req.msg, req.status);
    }
    return (
        <Layout title='Contact Us' description='The Immigration Sisters are committed to providing compassionate and reliable support. Reach out to us with any concerns or feedback—your success and satisfaction are our top priorities.' meta='yes' keywords='contact us, reach us, our support'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <Image 
                           src={email_im}
                           className="col-12 object-contain dropshadow h-full p-2 mb-3 rounded"
                           height="700"
                           width="700"
                           loading="lazy"
                           alt="image one"
                        />
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">Nou La Pou</span> <b className="text-italic text-bg-yellow">Ou!</b></h1>
                        <h3 className="fs-4 fw-light lh-base">Sè Imigrasyon yo angaje pou bay sipò konpasyon ak fyab. Kontakte nou ak nenpòt enkyetid oswa fidbak—siksè ak satisfaksyon ou se priyorite nou.</h3>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <form onSubmit={addSubmit} className="form-group">
                            <h3 className="fs-2 lh-base fw-bold mb-2">Ranpli Fòm Konplè a Pou Kontakte Nou ?</h3>
                            <h4 className="fs-5 lh-base mb-2">Imèl</h4>
                            <input
                               type="text"
                               className="form-control p-3 mb-3"
                               placeholder=""
                               spellCheck="false"
                               autoComplete='off'
                               onChange={(e) => addEmail(e.target.value || null)}
                               value={email}
                            />

                            <h4 className="fs-5 lh-base mb-2">Non</h4>
                            <input
                               type="text"
                               className="form-control p-3 mb-3"
                               placeholder=""
                               spellCheck="false"
                               autoComplete='off'
                               onChange={(e) => addName(e.target.value || null)}
                               value={name}
                            />

                            <h4 className="fs-5 lh-base mb-2">Sijè</h4>
                            <input
                               type="text"
                               className="form-control p-3 mb-3"
                               placeholder=""
                               spellCheck="false"
                               autoComplete='off'
                               onChange={(e) => addSubject(e.target.value || null)}
                               value={subject}
                            />

                            <h4 className="fs-5 lh-base mb-2">Mesaj</h4>
                            <textarea
                               type="text"
                               className="form-control p-3 mb-3"
                               placeholder=""
                               spellCheck="false"
                               autoComplete='off'
                               rows="6"
                               cols="10"
                               onChange={(e) => addMessage(e.target.value || null)}
                               value={message}
                            />

                            <button className="btn bg-purple btn-lg">Soumèt</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;
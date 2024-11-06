import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis-1.jpg';
import sis_two from '@/public/images/team/sis-2.jpg';
import sis_three from '@/public/images/team/sis-4.png';
import sis_four from '@/public/images/team/sis-5.png';
import sis_five from '@/public/images/team/sis-6.png';
import email from '@/public/images/items/email.png';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
    return (
        <Layout title='Contact Us' description='The Immigration Sisters are committed to providing compassionate and reliable support. Reach out to us with any concerns or feedback—your success and satisfaction are our top priorities.' meta='yes' keywords='contact us, reach us, our support'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <Image 
                           src={email}
                           className="col-12 object-contain dropshadow h-full p-2 mb-3 rounded"
                           height="700"
                           width="700"
                           loading="lazy"
                           alt="image one"
                        />
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">We’re Here for</span> <b className="text-italic text-bg-yellow">You!</b></h1>
                        <h3 className="fs-4 fw-light lh-base">The Immigration Sisters are committed to providing compassionate and reliable support. Reach out to us with any concerns or feedback—your success and satisfaction are our top priorities.</h3>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <form className="form-group">
                            <h3 className="fs-2 lh-base fw-bold mb-2">Fill The Complete Form To React Us ?</h3>
                            <h4 className="fs-5 lh-base mb-2">E-mail</h4>
                            <input
                               type="text"
                               className="form-control p-3 mb-3"
                               placeholder=""
                               spellCheck="false"
                               autoComplete='off'
                            />

                            <h4 className="fs-5 lh-base mb-2">Name</h4>
                            <input
                               type="text"
                               className="form-control p-3 mb-3"
                               placeholder=""
                               spellCheck="false"
                               autoComplete='off'
                            />

                            <h4 className="fs-5 lh-base mb-2">Subject</h4>
                            <input
                               type="text"
                               className="form-control p-3 mb-3"
                               placeholder=""
                               spellCheck="false"
                               autoComplete='off'
                            />

                            <h4 className="fs-5 lh-base mb-2">Message</h4>
                            <textarea
                               type="text"
                               className="form-control p-3 mb-3"
                               placeholder=""
                               spellCheck="false"
                               autoComplete='off'
                               rows="6"
                               cols="10"
                            />

                            <button className="btn bg-purple btn-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;
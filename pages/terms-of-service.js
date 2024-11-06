import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis-1.jpg';
import sis_two from '@/public/images/team/sis-2.jpg';
import sis_three from '@/public/images/team/sis-4.png';
import sis_four from '@/public/images/team/sis-5.png';
import sis_five from '@/public/images/team/sis-6.png';
import imigration from '@/public/images/team/imigration.webp';
import Image from 'next/image';
import Link from 'next/link';

const Terms = () => {
    return (
        <Layout title='Terms Of Services' description='You agree not to engage in any activities that are illegal or harmful to The Immigration Sisters, our team, or other users' meta='yes' keywords='terms and policy, terms and condiitions'>
            <div className="col-12 bg-light">
                <div className="container-fluid py-5">
                    <div className="row justify-content-center">
                        <div className='col-xl-8 col-lg-9 col-md-9 col-sm-12 col-12'>
                            <div className="p-2">
                                <h2 className="display-5 fw-bold text-brown text-center lh-base mb-2">Terms of Service</h2>
                                <h4 className="text-center fs-4 lh-base mb-3">You agree not to engage in any activities that are illegal or harmful to The Immigration Sisters, our team, or other users</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Welcome to The Immigration Sisters</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2">By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully, as they contain important information about your legal rights, remedies, and obligations.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Acceptance of Terms</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> By using our website or any services provided by The Immigration Sisters, you confirm that you have read, understood, and agree to these Terms of Service. If you do not agree with any part of these terms, you should not access or use our services.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Services Overview</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> The Immigration Sisters provides immigration guidance, consulting, and support services. Our services are informational and supportive in nature and do not constitute legal representation. We strive to provide accurate and up-to-date information, but we recommend consulting with a licensed immigration attorney for any legal advice.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Prohibited Activities</h2>
                                <ul>
                                    <li className="fs-5 lh-base">Misusing the site’s resources, including hacking or other forms of unauthorized access.</li>
                                    <li className="fs-5 lh-base">Posting false or misleading information. </li>
                                    <li className="fs-5 lh-base">Engaging in any behavior that disrupts our services or affects the experience of other users.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">User Responsibilities</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Eligibility:</b> You must be at least 18 years of age to use our services. By using our website, you represent that you meet this age requirement.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Accurate Information:</b> You agree to provide accurate, current, and complete information when requested. Misrepresentation of information may result in the termination of your access to our services.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Confidentiality:</b> Users are responsible for maintaining the confidentiality of their account information and any activities conducted under their account.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Intellectual Property Rights</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> All content provided on this website, including text, images, graphics, and software, is the property of The Immigration Sisters or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content from our website without express permission.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2">These Terms of Service are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Limitation of Liability</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> To the fullest extent permitted by law, The Immigration Sisters is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our services are provided "as is" without warranties of any kind, express or implied.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Termination of Service</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> We reserve the right to suspend or terminate your access to our website and services at our sole discretion, without notice, if you violate these Terms of Service or engage in any harmful or inappropriate conduct.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Changes to Terms</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> The Immigration Sisters reserves the right to modify or update these Terms of Service at any time. We will notify users of any significant changes, but it is your responsibility to review the terms periodically. Continued use of our services after changes signifies acceptance of the updated terms.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Terms;
import React from "react";
import footer_logo from '@/public/images/items/logo.png';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="col-12 bg-skin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-5 col-md-6 col-sm-6 col-12">
                        <div className="p-3">
                            <Image
                                src={footer_logo}
                                width="500"
                                height="500"
                                className="mb-3 logo_set"
                                loading="lazy"
                                alt="footer logo"
                            />
                            <h3 className="fs-5 fw-normal mb-2 lh-base">The Immigration Sisters are dedicated to empowering individuals on their immigration journeys with reliable guidance and personalized support. We’re here to make your path to a new beginning as seamless and positive as possible.</h3>
                            <div className="d-flex gap-3 mt-3">
                                <i className="btn border-brown btn-md bi bi-instagram"></i>
                                <i className="btn border-brown btn-md bi bi-facebook"></i>
                                <i className="btn border-brown btn-md bi bi-threads"></i>
                                <i className="btn border-brown btn-md bi bi-twitter"></i>
                                <i className="btn border-brown btn-md bi bi-youtube"></i>
                                <i className="btn border-brown btn-md bi bi-whatsapp"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-6 col-sm-6 col-12 py-4 d-flex justify-content-start justify-content-sm-start justify-content-md-center justify-content-lg-center justify-content-xl-center">
                        <div className="mt-3 d-flex flex-column px-3">
                            <h3 className="fs-3 fw-bold lh-base mb-2">Useful Links</h3>
                            <Link href='/about-us' className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">About Us</Link>
                            <Link href='/contact-us' className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">Contact Us</Link>
                            <Link href='/support' className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">Support</Link>
                            <Link href='/terms-of-service' className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">Terms of Services</Link>
                            <Link href='/blog' className="fs-5 text-brown text-decoration-none lh-base mb-2 col-12">Blog</Link>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-3">
                    <h4 className="fs-4 lh-base">&copy; All Rights Reserved <b>The Immigration Sistsers</b> 2024</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer;
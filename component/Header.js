import Head from "next/head";
import React from "react";
import Image from "next/image";
import logo from '@/public/images/items/logo.png'
import Link from "next/link";

const Header = ({title, keywords, description, meta = false}) =>  {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <meta name="keyword" content={keywords} />
            <meta name="description" content={description} />
            <link rel='favicon' type='image/x-icon' href={logo.src}/>
            {
                !meta ? (
                    <meta name="robots" content="noindex, nofollow" />
                ) : (
                    <meta name="robots" content="index, follow" />
                )
            }
        </Head>
        <div className="col-12 border-down-purple position-sticky top-0 bg-white" style={{zIndex: '111111'}}>
           <div className="container-fluid">
               <div className="row justify-content-between align-items-center">
                    <div className="col-xl-3 col-md-4 col-sm-5 col-5">
                        <Link href='/' className="text-decoration-none">
                            <Image
                                height='400'
                                width='400'
                                src={logo}
                                className="logo_set p-1"
                                loading="lazy"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    
                    <div  className="col-xl-9 col-md-8 col-sm-7 col-7 px-2 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none justify-content-end align-items-center">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-list"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><Link href='/about-us' className='dropdown-item'>About Us</Link></li>
                                <li><Link href='/support' className='dropdown-item'><i className="bi bi-telephone-forward"></i> Support</Link></li>
                                <li><Link href='/contact-us' className='dropdown-item'>Contact Us</Link></li>
                                <li><Link href='/terms-of-service' className='dropdown-item'>Terms of Service</Link></li>
                                <li><Link href='/team' className='dropdown-item'><i className="bi bi-microsoft-teams"></i> Team</Link></li>
                                <li><Link href='/blog' className='dropdown-item'><i className="bi bi-journals"></i> Blog</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-9 col-md-8 col-sm-7 col-7 px-2 d-none d-sm-none d-md-none d-lg-flex d-xl-flex justify-content-end align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            <Link href='/about-us' className='btn-regular text-brown fs-5'>About Us</Link>
                            <Link href='/support' className='btn-regular text-brown fs-5'><i className="bi bi-telephone-forward"></i> Support</Link>
                            <Link href='/contact-us' className='btn-regular text-brown fs-5'>Contact Us</Link>
                            <Link href='/terms-of-service' className='btn-regular text-brown fs-5'>Terms of Service</Link>
                            <Link href='/team' className='btn-regular text-brown fs-5'><i className="bi bi-microsoft-teams"></i> Team</Link>
                            <Link href='/blog' className='px-3 py-2 rounded text-decoration-none bg-purple text-white fs-5'><i className="bi bi-journals"></i> Blog</Link>
                        </div>
                    </div>
               </div>
           </div>
        </div>
        </>
    )
}

export default Header;
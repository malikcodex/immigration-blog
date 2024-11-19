import Head from "next/head";
import React, {useState} from "react";
import Image from "next/image";
import logo from '@/public/images/items/logo.png'
import Favicon from '@/public/images/items/favicon.jpg'
import Link from "next/link";
import { useRouter } from "next/router";
const Header = ({title, keywords, description, meta = false}) =>  {
    const router = useRouter();
    const {pathname} = router;
    const [lang, set_lang] = useState("en");

    function set_language(lg) {
        if(lg == "en" || lg == "") {
            set_lang(lg);
            router.push("/");
        } else if(lg == "es") {
            set_lang(lg);
            router.push("/es");
        } else if(lg == "hc") {
            set_lang(lg);
            router.push("/hc");
        }
    }
    
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <meta name="keyword" content={keywords} />
            <meta name="description" content={description} />
            <link rel="apple-touch-icon" href={Favicon.src} sizes="180x180" />
            <link rel="icon" href={Favicon.src} sizes="32x32" type="image/png" />
            <link rel="icon" href={Favicon.src} sizes="16x16" type="image/png" />
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
                        <Link href={pathname.includes("hc") ? "/hc" : pathname.includes("es") ? "/es" : "/"} className="text-decoration-none">
                            <Image
                                height='400'
                                width='400'
                                src={logo}
                                className="logo_set p-1"
                                loading="lazy"
                                alt="logo"
                                quality={90}
                            />
                        </Link>
                    </div>
                    
                    <div  className="col-xl-9 col-md-8 col-sm-7 col-7 px-2 d-flex d-sm-flex d-md-flex d-lg-none d-xl-none justify-content-end align-items-center">
                        <div className="dropdown">
                            <button className="btn bg-skin btn-md dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-list fs-4"></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link href={pathname.includes("hc") ? "/hc/about-us" : pathname.includes("es") ? "/es/about-us" : "/about-us"} className='dropdown-item'>{pathname.includes("hc") ? "Sou Nou" : "About Us"}</Link></li>
                                <li><Link href={pathname.includes("hc") ? "/hc/support" : pathname.includes("es") ? "/es/support" : "/support"} className='dropdown-item'><i className="bi bi-telephone-forward"></i> {pathname.includes("hc") ? "Sipò" : "Support"}</Link></li>
                                <li><Link href={pathname.includes("hc") ? "/hc/contact-us" : pathname.includes("es") ? "/es/contact-us" : "/contact-us"} className='dropdown-item'>{pathname.includes("hc") ? "Kontakte Nou" : "Contact Us"}</Link></li>
                                <li><Link href={pathname.includes("hc") ? "/hc/terms-of-service" : pathname.includes("es") ? "/es/terms-of-service" : "/terms-of-service"} className='dropdown-item'>{pathname.includes("hc") ? "Tèm Sèvis" : "Terms of service"}</Link></li>
                                <li><Link href={pathname.includes("hc") ? "/hc/team" : pathname.includes("es") ? "/es/team" : "/team"} className='dropdown-item'><i className="bi bi-microsoft-teams"></i> {pathname.includes("hc") ? "Ekip" : "Team"}</Link></li>
                                <li><Link href='/blog' className='dropdown-item'><i className="bi bi-journals"></i> {pathname.includes("hc") ? "Blòg" : "Blog"}</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-9 col-md-8 col-sm-7 col-7 px-2 d-none d-sm-none d-md-none d-lg-flex d-xl-flex justify-content-end align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            <Link href={pathname.includes("hc") ? "/hc/about-us" : pathname.includes("es") ? "/es/about-us" : "/about-us"}  className='btn-regular text-brown fs-6'>{pathname.includes("hc") ? "Sou Nou" : pathname.includes("es") ? "Sobre Nosotros" : "About Us"}</Link>
                            <Link href={pathname.includes("hc") ? "/hc/support" : pathname.includes("es") ? "/es/support" : "/support"} className='btn-regular text-brown fs-6'><i className="bi bi-telephone-forward"></i> {pathname.includes("hc") ? "Sipò" : pathname.includes("es") ? "Soporte" : "Support"}</Link>
                            <Link href={pathname.includes("hc") ? "/hc/contact-us" : pathname.includes("es") ? "/es/contact-us" : "/contact-us"} className='btn-regular text-brown fs-6'>{pathname.includes("hc") ? "Kontakte Nou" : pathname.includes("es") ? "Contáctanos" : "Contact Us"}</Link>
                            <Link href={pathname.includes("hc") ? "/hc/terms-of-service" : pathname.includes("es") ? "/es/terms-of-service" : "/terms-of-service"} className='btn-regular text-brown fs-6'>{pathname.includes("hc") ? "Tèm Sèvis" : pathname.includes("es") ? "Términos de Servicio" : "Terms of service"}</Link>
                            <Link href={pathname.includes("hc") ? "/hc/team" : pathname.includes("es") ? "/es/team" : "/team"} className='btn-regular text-brown fs-6'><i className="bi bi-microsoft-teams"></i> {pathname.includes("hc") ? "Ekip" : pathname.includes("es") ? "Equipo" : "Team"}</Link>
                            <select onChange={(e) => set_language(e.target.value || "en")} style={{width: '14%', padding: '3px', border: '1px solid #ccc', outline: 'none'}}>

                                {
                                    ["en","es","hc"].map((d, k) => (
                                        (d == lang || pathname.includes(d)) ? (
                                            <option selected={true} key={k} value={`${d}`}>{d == "hc" ? "Haithan Creola" : d == "es" ? "Spanish" : "English"}</option>
                                        ) : (
                                            <option key={k} value={`${d}`}>{d == "hc" ? "Haithan Creola" : d == "es" ? "Spanish" : "English"}</option>
                                        )
                                    ))
                                }
                            </select>
                            <Link href='/blog' className='px-3 py-2 rounded text-decoration-none bg-purple text-white fs-5'><i className="bi bi-journals"></i> {pathname.includes("hc") ? "Blòg" : "Blog"}</Link>
                        </div>
                    </div>
               </div>
           </div>
        </div>
        </>
    )
}

export default Header;
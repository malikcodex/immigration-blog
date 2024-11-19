import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/img_18.jpg';
import sis_two from '@/public/images/team/img_19.jpg';
import sis_three from '@/public/images/team/sis_3.jpeg';
import sis_four from '@/public/images/team/sis_5.jpeg';
import sis_five from '@/public/images/team/sis_6.jpeg';
import imigration from '@/public/images/team/sis_1.png';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout title='The Immigration Sisters' description='Empowering Immigrants with Trusted Support and Expertise' meta='yes' keywords='Empowering Immigrants, Trusted Support, Expertise'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">Imigrasyon an</span> <b className="text-italic text-bg-yellow">Sè</b></h1>
                        <h2 className="fs-2 fw-normal lh-base">Bay Imigran yo Pouvwa ak Sipò ak Ekspètiz ou Konfyans</h2>
                        <h3 className="fs-4 fw-light lh-base mb-5">Sè Imigrasyon yo bay konsèy pèsonalize pou ede w navige konplèksite imigrasyon an. Avèk gwo ekspètiz ak yon angajman pou siksè ou, nou la pou sipòte ou nan chak etap, asire yon chemen plis lis pou reyalize rèv ou.</h3>
                        <Link href="/team" className="mt-3 text-decoration-none rounded  bg-purple px-3 py-3 text-white fw-bold fs-5"><i className="bi bi-microsoft-teams"></i> Rankontre Ekip Nou</Link>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <div className='d-flex gap-3 mt-5'>
                            <Image 
                                src={sis_one}
                                height="500"
                                width="500"
                                className="hero_set border-top-right-rounded"
                                loading='lazy'
                                alt="hero image one"
                            />
                            <Image 
                                src={sis_two}
                                height="500"
                                width="500"
                                className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                loading='lazy'
                                alt="hero image two"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 bg-brown">
                <div className="container-fluid py-5">
                    <div className="row justify-content-center">
                        <div className='col-xl-8 col-lg-9 col-md-9 col-sm-12 col-12'>
                            <div className="p-2">
                                <h2 className="display-5 fw-bold text-white text-center lh-base">Patnè Konfyans ou nan Siksè Imigrasyon</h2>
                                <h4 className="fs-3 fw-normal text-white text-center lh-base">"Sè Imigrasyon yo ofri sipò dedye ak konsèy pwofesyonèl pou fè vwayaj imigrasyon ou dirèk ak san estrès. Nou la pou ba w pouvwa ak konesans ak navige defi yo ansanm, ede w reyalize objektif ou ak konfyans.</h4>
                            </div>
                        </div>
                    </div>
                    <div className='row py-3'>
                        <div className='col-xl-4 col-md-4 col-sm-6 col-6 mb-2'>
                            <div className="position-absoltute top-0 d-flex justify-content-center rounded" style={{background: `linear-gradient(45deg, #ffffff, transparent)`}}>
                                <Image 
                                    src={sis_three}
                                    width="600"
                                    height="600"
                                    className="hero_set dropshadow p-3"
                                    loading="lazy"
                                    alt="home image three"
                                />     
                            </div> 
                        </div>
                        <div className='col-xl-4 col-md-4 col-sm-6 col-6 mb-2'>
                            <div className="position-absoltute top-0 d-flex justify-content-center rounded" style={{background: `linear-gradient(45deg, #ffffff, transparent)`}}>
                                <Image 
                                    src={sis_four}
                                    width="600"
                                    height="600"
                                    className="hero_set dropshadow p-3"
                                    loading='lazy'
                                    alt='home image four'
                                />     
                            </div> 
                        </div>
                        <div className='col-xl-4 col-md-4 col-sm-6 col-6 mb-2'>
                            <div className="position-absoltute top-0 d-flex justify-content-center rounded" style={{background: `linear-gradient(45deg, #ffffff, transparent)`}}>
                                <Image 
                                    src={sis_five}
                                    width="600"
                                    height="600"
                                    className="hero_set dropshadow p-3"
                                    loading='lazy'
                                    alt="home image five"
                                />     
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Imigrasyon konplè</h3>
                                <h4 className="fs-5 lh-base mb-2">"Konsèy Pèsonalize adapte ak Bezwen ou</h4>
                                <h5 className="fs-6 lh-base mb-2">Sè Imigrasyon yo ofri konsiltasyon apwofondi pou konprann sitiyasyon inik ou ak objektif ou. Avèk estrateji koutim, nou gide w nan premye etap yo, asire w ke w byen prepare epi enfòme pou vwayaj la devan ou.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Asistans Aplikasyon Pas a Pas</h3>
                                <h4 className="fs-5 lh-base mb-2">Sipò soti nan Preparasyon Dokiman pou soumèt</h4>
                                <h5 className="fs-6 lh-base mb-2">Nou senplifye pwosesis aplikasyon an, ede w ak koleksyon dokiman, konplete fòm, ak soumèt. Ekip nou an isit pou asire chak detay satisfè egzijans ki nesesè yo, pou aplikasyon w lan gen pi bon chans pou reyisi.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Gid Ekspè pou Viza ak Rezidans</h3>
                                <h4 className="fs-5 lh-base mb-2">Navige Kondisyon Konplèks yo ak Konfyans</h4>
                                <h5 className="fs-6 lh-base mb-2">Ekspètiz nou kouvri diferan kalite viza ak opsyon rezidans, ede w konprann epi chwazi pi bon chemen an. Nou dekoupaj regilasyon konplèks yo epi kenbe w enfòme sou nenpòt chanjman, asire w ke w toujou yon etap devan.</h5>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className='p-3 bg-shadow-sm bg-white'>
                                <h3 className="fs-4 fw-bold lh-base mb-2">Sèvis Sipò apre Imigrasyon</h3>
                                <h4 className="fs-5 lh-base mb-2">Ede w Enstale ak Pwospere nan Nouvo Kay ou</h4>
                                <h5 className="fs-6 lh-base mb-2">Anplis imigrasyon, nou ede ak sèvis esansyèl tankou gid rechèch travay, resous kominotè, ak sipò adaptasyon. Sè Imigrasyon yo angaje pou ede w santi w lakay ou, ba w pouvwa pou w pwospere nan nouvo anviwònman ou.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                 <div className="container-fluid">
                    <div className='row'>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                            <div className="p-3">
                                <h2 className="fs-2 fw-bold text-brown lh-base mb-1">Konfyans <b className="text-underline-purple">Pledwaye</b> pou <b className="text-italic text-bg-yellow">Konplèks </b> Ka</h2>
                                <h3 className="fs-4 fw-normal text-brown lh-base mb-1">Sipò Espesyalize pou Zafè Imigrasyon Difisil</h3>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">Pou ka inik oswa konplèks, Sè Imigrasyon yo bay pledwaye konsantre ak solisyon estratejik. Nou travay sere sere avèk ou pou simonte obstak yo, sèvi ak eksperyans nou pou jere apèl, egzansyon, ak ka espesyalize ak devouman ak ekspètiz.</h4>
                                <div className="d-flex">
                                    <Link href='/about-us' className="btn bg-green text-brown btn-lg">Konsènan Nou</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-skin col-xl-6 col-md-6 col-sm-12 col-12">
                            <div className="d-flex justify-content-center py-3">
                                <Image
                                    src={imigration}
                                    height="500"
                                    width="500"
                                    className="h-full object-contain"
                                    loading='lazy'
                                    alt="immigration image"
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="col-12">
                 <div className="container-fluid">
                     <div className="row py-5">
                         <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">99.7%</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Pousantaj Siksè</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">100,000</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Imigran Ede</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">4.7%</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Revizyon Trustpilot</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12 mb-3">
                            <div className="bg-yellow p-5 bg-shadow-sm">
                                <h2 className="fs-1 lh-base fw-bold mb-1">A+</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Akreditasyon BBB</h3>
                            </div>
                        </div>
                     </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Home;
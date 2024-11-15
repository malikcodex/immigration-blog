import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_13.jpeg';
import sis_two from '@/public/images/team/sis_12.jpeg';
import sis_three from '@/public/images/team/sis_15.png';
import sis_four from '@/public/images/team/sis_7.jpeg';
import sis_five from '@/public/images/team/sis_8.jpeg';
import imigration from '@/public/images/team/sis_14.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout title='About Us' description='To empower, inform, and support individuals and families through every step of the immigration process, from initial consultation to settling into a new community. We believe in simplifying complex immigration procedures, so you can focus on your goals with confidence.' meta='yes' keywords='aboutus, our services, immigration details'>
            <div className='col-12 bg-skin'>
                <div className='container-fluid'>
                    <div className='row align-items-center py-5 px-3'>
                        <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                            <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">Konnen Plis Sou </span> <b className="text-italic text-bg-yellow">Nou</b></h1>
                            <h2 className="fs-2 fw-normal lh-base">Byenveni nan Sè Imigrasyon an </h2>
                            <h3 className="fs-4 fw-light lh-base">Pou pèmèt, enfòme, ak sipòte moun ak fanmi nan chak etap nan pwosesis imigrasyon an, depi premye konsiltasyon jiska etablisman nan yon nouvo kominote. Nou kwè nan senplifye pwosedi imigrasyon konplike yo, pou ou ka konsantre sou objektif ou ak konfyans.</h3>
                        </div>
                        <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                            <div className='d-flex gap-3 mt-3'>
                                <Image 
                                    src={sis_one}
                                    height="500"
                                    width="500"
                                    className="hero_set border-top-right-rounded"
                                    loading='lazy'
                                    alt="image one"
                                />
                                <Image 
                                    src={sis_two}
                                    height="500"
                                    width="500"
                                    className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                    loading='lazy'
                                    alt="image two"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 bg-purple">
                <div className="container-fluid py-5">
                    <div className="row justify-content-center">
                        <div className='col-xl-8 col-lg-9 col-md-9 col-sm-12 col-12'>
                            <div className="p-2">
                                <h2 className="display-4 fw-bold text-brown text-center lh-base">Sa Nou Ofri</h2>
                                <h4 className="fs-3 fw-normal text-brown text-center lh-base">Avèk yon konbinezon ekspètiz legal, sipò pèsonalize, ak sèvis entegrasyon kiltirèl, nou bay yon apwòch holistik nan imigrasyon. Ekip avoka nou yo, manadjè ka yo, ak konseye kiltirèl yo travay kole kole avèk ou pou konprann bezwen inik ou yo, ofri solisyon pèsonalize ki fè tranzisyon ou pi fasil ak pi manageab.</h4>
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
                                    alt="image three"
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
                                    alt="image four"
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
                                    loading="lazy"
                                    alt="image five"
                                />     
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                 <div className="container-fluid">
                     <div className="row pt-5 pb-3">
                         <h3 className="text-center display-4 text-brown fw-bold lh-base mb-2">Poukisa <b className="text-italic text-bg-yellow">Chwazi</b> Nou ?</h3>
                         <h4 className="text-center fs-3 text-brown fw-normal lh-base mb-5">La <b className="text-underline-purple">Sè Imigrasyon</b> la pou ede ou reyalize rèv imigrasyon ou yo</h4>
                         <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Apwòch Santre sou Kliyan</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Nou mete ou menm ak objektif ou yo nan sant tout sa nou fè, asire atansyon pèsonalize ak kominikasyon ouvè.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Pwofesyonèl ki Gen Eksperyans</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Ekip nou an pote ane eksperyans nan lwa sou imigrasyon ak sèvis kliyan, ofri konesans ak solisyon ou bezwen yo.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Sipò Konplè</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Anplis papye imigrasyon, nou ede ak entegrasyon kiltirèl, ede ou bati yon fondasyon pou siksè nan nouvo kay ou.</h3>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                            <div className="bg-green p-3 dropshadow mb-4">
                                <h2 className="fs-2 lh-base fw-bold mb-1">Angajman Pou Entegrite</h2>
                                <h3 className="fs-5 lh-base fw-normal mb-2">Transparans, onètete, ak respè fòme nwayo pratik nou an. Nou la pou defann ou ak pwoteje enterè ou.</h3>
                            </div>
                        </div>
                     </div>
                     <div className="d-flex justify-content-center align-items-center gap-3 pb-4">
                         <Link href='/support' className="bg-brown btn-lg btn text-white"><i className="bi bi-telephone-forward"></i> Tcheke Sipò</Link>
                         <Link href='/blog' className="bg-brown btn-lg btn text-white"><i className="bi bi-journals"></i> Tcheke Blòg</Link>
                     </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Home;
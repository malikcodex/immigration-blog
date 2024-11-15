import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_6.jpeg';
import sis_two from '@/public/images/team/sis_5.jpeg';
import sis_three from '@/public/images/team/sis_10.jpeg';
import sis_four from '@/public/images/team/sis_9.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <Layout title='Meet Our Team' description='At The Immigration Sisters, our team is composed of skilled professionals dedicated to supporting you on your immigration journey. With a range of expertise in immigration law, cultural transitions, and case management, each team member is committed to providing personalized guidance and unwavering support.' meta='yes' keywords='Our team, Our Management, Our Efforts, Our Group'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-purple">Rankontre Ekip Nou</span> <b className="text-italic text-bg-yellow">Ekip</b></h1>
                        <h3 className="fs-4 fw-light lh-base">Nan Sè Imigrasyon yo, ekip nou an konpoze de pwofesyonèl kalifye ki dedye a sipòte ou nan vwayaj imigrasyon ou. Avèk yon varyete ekspètiz nan lwa imigrasyon, tranzisyon kiltirèl, ak jesyon ka, chak manm ekip angaje nan bay konsèy pèsonalize ak sipò san fay.</h3>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <div className='d-flex gap-3 mt-3'>
                            <Image 
                                src={sis_one}
                                height="500"
                                width="500"
                                className="hero_set border-top-right-rounded"
                                loading='lazy'
                            />
                            <Image 
                                src={sis_two}
                                height="500"
                                width="500"
                                className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Konsiltasyon Pèsonalize 🤝</h3>
                                <h5 className="fs-4 lh-base mb-2">Nan Sè Imigrasyon yo, nou kwè chak istwa se inik. Ekip nou an ofri konsiltasyon pèsonalize pou konprann objektif ou ak defi yo, kreye yon chemen koutim pou vwayaj imigrasyon ou.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Jesyon Ka Ekspè 📂 </h3>
                                <h5 className="fs-4 lh-base mb-2">"Manadjè ka nou yo kenbe chak detay anba kontwòl, jere dokiman ak delè avèk presizyon. Nou asire ke tout papye ou yo òganize epi satisfè estanda yo mande yo.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Mizajou Pwosesis Transparan 🔄</h3>
                                <h5 className="fs-4 lh-base mb-2">"Nou konnen tann ka estrès. Se poutèt sa ekip nou an kenbe w enfòme sou pwogrè ka w la, bay enfòmasyon regilye ak kominikasyon klè pou w pa janm rete nan fènwa.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm border rounded'>
                                <h3 className="fs-2 fw-bold lh-base mb-2">Sèvis Sipò apre Imigrasyon</h3>
                                <h5 className="fs-4 lh-base mb-2">"Anplis imigrasyon, nou ede ak sèvis esansyèl tankou gid rechèch travay, resous kominotè, ak sipò adaptasyon. Sè Imigrasyon yo angaje pou ede w santi w lakay ou.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                 <div className="container-fluid">
                    <div className='row py-4'>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
                            <div className="p-3">
                                <h2 className="fs-1 fw-bold text-brown lh-base mb-3">Kiltirèl  <b className="text-underline-purple">Integration</b> <b className="text-italic text-bg-yellow">Asistans  </b> 🌍</h2>
                                <h3 className="fs-4 fw-normal text-brown lh-base mb-1">Ede w Santi w Lakay ou nan yon Nouvo Peyi</h3>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">"Deplase nan yon nouvo peyi ka difisil. Espesyalis entegre kiltirèl nou yo ede ou adapte ak koutim lokal yo, jwenn resous, epi bati yon fondasyon solid nan nouvo kominote w la.</h4>
                                <div className="d-flex">
                                    <Link href='/about-us' className="btn bg-purple text-white btn-lg">Sipò</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                            <div className='d-flex gap-3'>
                                <Image 
                                    src={sis_three}
                                    height="500"
                                    width="500"
                                    className="hero_set border-top-right-rounded"
                                    loading='lazy'
                                    alt="Team Image One"
                                />
                                <Image 
                                    src={sis_four}
                                    height="500"
                                    width="500"
                                    className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                    loading='lazy'
                                    alt="Team Image Two"
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Home;
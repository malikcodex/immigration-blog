import React from 'react';
import Layout from '@/component/Layout';
import sis_one from '@/public/images/team/sis_16.png';
import sis_two from '@/public/images/team/sis_15.png';
import sis_three from '@/public/images/team/sis_14.png';
import sis_four from '@/public/images/team/sis-15.jpg';
import imigration from '@/public/images/team/imigration.webp';
import Image from 'next/image';
import Link from 'next/link';
import { str_to_heading } from '@/core/util';
import { getArticlesBySearch } from '@/core/db';
import { useRouter } from 'next/router';

const Support = ({articles}) => {
    const router = useRouter();
    const [value, set_search] = useState(null);
    function set_search_btn(e) {
        e.preventDefault();
        if(value !== null) {
            router.push(`/support?search=${value}`);
        } else {
            make_msg("Warning", "Please enter something to search ..", "error");
            return false;
        }
    }
    return (
        <Layout title='Our Support' description='At The Immigration Sisters, we’re dedicated to making your experience as seamless as possible. Whether you have questions, need guidance, or want updates on your case, our support team is here to assist every step of the way.' meta='yes' keywords='Our Support, Our Guide, We Help You'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-3'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-12'>
                        <h1 className="display-5 fw-bold lh-base"><span className="text-underline-skin">Kijan Nou Ka Ede </span> <b className="text-italic text-bg-skin">Ou?</b></h1>
                        <h3 className="fs-4 fw-light lh-base">Nan Sè Imigrasyon, nou angaje pou fè eksperyans ou a pi senp posib. Kit ou gen kesyon, bezwen konsèy, oswa vle mizajou sou ka ou, ekip sipò nou an la pou ede ou nan chak etap.</h3>
                        <div className="input-group bg-shadow-sm mt-4 rounded">
                            <input
                               type="text"
                               className="form-control p-3"
                               spellCheck="false"
                               autoComplete='off'
                               placeholder="Search articles"
                               onChange={(e) => set_search(e.target.value || null)}
                            />
                            <button onClick={(e) => set_search_btn(e)} className="bg-purple text-brown btn btn-lg"><i className="bi bi-search"></i></button>
                        </div>
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

            <div className="col-12">
                <div className="container-fluid">
                    <div className="row py-4">
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-skin border rounded'>
                                <h3 className="text-dark fs-2 fw-bold lh-base mb-2">Kesyon Souvan Poze (FAQ) </h3>
                                <h5 className="text-dark fs-4 lh-base mb-2">Vizite nou <Link href="/hc/support" className="btn btn-md bg-purple text-brown">SUPPORT PAGE</Link> pou repons sou kesyon komen sou sèvis nou yo, pwosesis aplikasyon, kondisyon dokimantasyon, ak plis ankò. Seksyon FAQ a se yon fason rapid pou jwenn enfòmasyon nenpòt lè ou bezwen li.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-purple border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">Jesyon Ka Ekspè 📂 </h3>
                                <h5 className="text-white fs-4 lh-base mb-2">Manadjè ka nou yo kenbe chak detay an tcheke, jere dokiman ak delè avèk presizyon. Nou asire ke tout papye ou òganize e ke yo satisfè estanda yo mande yo.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-brown border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">Mizajou Pwosesis Transparan</h3>
                                <h5 className="text-white fs-4 lh-base mb-2">Nou konnen ke tann kapab strese. Se poutèt sa ekip nou an kenbe ou enfòme sou pwogrè ka ou a, bay mizajou regilye ak kominikasyon klè pou ou pa janm nan fè nwa.</h5>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 col-12 mb-3">
                            <div className='p-4 bg-shadow-sm bg-green border rounded'>
                                <h3 className="text-white fs-2 fw-bold lh-base mb-2">Sèvis Sipò Aprè Imigrasyon</h3>
                                <h5 className="text-white fs-4 lh-base mb-2">Anplis imigrasyon, nou ede ak sèvis esansyèl tankou gid rechèch travay, resous kominotè, ak sipò aklimatasyon. Sè Imigrasyon yo angaje pou ede ou santi ou alèz lakay ou.</h5>
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
                                <h2 className="fs-1 fw-bold text-brown lh-base mb-3">Mizajou Ka ak <b className="text-underline-purple">Estati Aplikasyon</b> <b className="text-italic text-bg-yellow">Asistans  </b> </h2>
                                <h4 className="fs-5 fw-light text-brown lh-base mb-4">Eksplore sant resous nou an pou atik, gid, ak konsèy ki ka ede w konprann pwosesis imigrasyon an pi byen. Nou kouvri tout bagay soti nan preparasyon dokiman jiskaske ou enstale nan nouvo kay ou.</h4>
                                <div className="d-flex">
                                    <Link href='/hc/blog' className="btn bg-purple text-white btn-lg">Blòg</Link>
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
                                    alt="image three"
                                />
                                <Image 
                                    src={sis_four}
                                    height="500"
                                    width="500"
                                    className="hero_set border-bottom-left-rounded mt-0 mt-sm-0 mt-md-4 mt-lg-5 mt-xl-5"
                                    loading='lazy'
                                    alt="image four"
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </Layout>
    )
}

export default Support;
export async function getServerSideProps(context) {
    const {search} = context.query || null;
    let articles = await getArticlesBySearch({search: search, category: 'support'});
    return {
        props: {
            articles
        }
    }
}
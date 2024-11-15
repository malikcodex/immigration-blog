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
                                <h2 className="display-5 fw-bold text-brown text-center lh-base mb-2">Tèm Sèvis</h2>
                                <h4 className="text-center fs-4 lh-base mb-3">Ou dakò pou pa angaje w nan okenn aktivite ki ilegal oswa danjere pou Sè Imigrasyon yo, ekip nou an, oswa lòt itilizatè yo.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Byenveni nan Sè Imigrasyon yo</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2">Lè ou jwenn aksè oswa itilize sit entènèt nou an ak sèvis nou yo, ou dakò pou respekte epi ou pral oblije swiv Tèm Sèvis sa yo. Tanpri li tèm sa yo ak anpil atansyon, paske yo genyen enfòmasyon enpòtan sou dwa legal ou, remèd, ak obligasyon ou.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Akseptasyon Tèm yo</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2">Lè ou itilize sit entènèt nou an oswa nenpòt sèvis Sè Imigrasyon yo ofri, ou konfime ke ou li, konprann, epi dakò ak Tèm Sèvis sa yo. Si ou pa dakò ak okenn pati nan tèm sa yo, ou pa ta dwe jwenn aksè oswa itilize sèvis nou yo.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Apèsi Sèvis yo</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Sè Imigrasyon yo bay konsèy, konsiltasyon, ak sèvis sipò sou imigrasyon. Sèvis nou yo se enfòmasyon ak sipò epi yo pa konstitiye reprezantan legal. Nou fè efò pou bay enfòmasyon egzat ak ajou, men nou rekòmande pou konsilte yon avoka imigrasyon lisansye pou nenpòt konsèy legal.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Aktivite Entèdi</h2>
                                <ul>
                                    <li className="fs-5 lh-base">Mal sèvi ak resous sit la, tankou fè pirataj oswa lòt fòm aksè san otorizasyon.</li>
                                    <li className="fs-5 lh-base">Pibliye enfòmasyon fo oswa ki twonpe. </li>
                                    <li className="fs-5 lh-base">Angaje nan nenpòt konpòtman ki deranje sèvis nou yo oswa ki afekte eksperyans lòt itilizatè yo.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Responsablite Itilizatè yo</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Responsablite Itilizatè yo:</b> Ou dwe gen omwen 18 an pou w sèvi ak sèvis nou yo. Lè w sèvi ak sit entènèt nou an, ou reprezante ke ou satisfè kondisyon laj sa a.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Enfòmasyon Egzat:</b> "Ou dakò pou bay enfòmasyon egzat, aktyèl, epi konplè lè yo mande l. Fo reprezantan enfòmasyon yo ka lakòz revokasyon aksè ou nan sèvis nou yo.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Konfidansyalite:</b> Itilizatè yo responsab pou kenbe enfòmasyon kont yo konfidansyèl ak nenpòt aktivite ki fèt anba kont yo..</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Dwa Pwopriyete Entèlektyèl</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Tout kontni ki bay sou sit entènèt sa a, ki gen ladan tèks, imaj, grafik, ak lojisyèl, se pwopriyete Sè Imigrasyon yo oswa founisè kontni yo epi li pwoteje pa copyright, trademark, ak lòt lwa pwopriyete entelektyèl. Ou pa ka itilize, repwodui, oswa distribye okenn kontni nan sit entènèt nou an san pèmisyon eksprime.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2">Tèm Sèvis sa yo gouvène pa epi entèprete an akò avèk lwa [Peyi/Ou Eta]. Nenpòt konfli ki rive nan tèm sa yo ap sijè a jiridiksyon eksklizif nan tribinal yo nan [Jiridiksyon Ou].</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Limitasyon Responsablite</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Nan tout limit lalwa pèmèt, Sè Imigrasyon yo pa responsab pou okenn domaj endirèk, aksidantal, oswa konsekans ki rive nan itilize sit entènèt nou an oswa sèvis nou yo. Sèvis nou yo bay 'jan sa ye' san okenn garanti de nenpòt kalite, ekspre oswa enplisit.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Revokasyon Sèvis</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Nou rezève dwa pou nou sispann oswa mete fen nan aksè ou nan sit entènèt nou an ak sèvis nou yo nan diskresyon nou an, san avètisman, si ou vyole Tèm Sèvis sa yo oswa angaje w nan nenpòt konduit danjere oswa apwopriye.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Chanjman nan Tèm yo</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Sè Imigrasyon yo rezève dwa pou modifye oswa mete ajou Tèm Sèvis sa yo nenpòt lè. Nou pral notifye itilizatè yo sou nenpòt chanjman enpòtan, men se responsabilite w pou revize tèm yo detanzantan. Kontinye itilize sèvis nou yo apre chanjman yo endike akseptasyon tèm ajou yo.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Terms;
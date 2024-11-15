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
                                <h2 className="display-5 fw-bold text-brown text-center lh-base mb-2">Términos de Servicio</h2>
                                <h4 className="text-center fs-4 lh-base mb-3">Aceptas no participar en ninguna actividad que sea ilegal o perjudicial para Las Hermanas de Inmigración, nuestro equipo u otros usuarios.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Bienvenido a Las Hermanas de Inmigración</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2">"Al acceder o utilizar nuestro sitio web y servicios, aceptas cumplir y estar sujeto a los siguientes Términos de Servicio. Por favor, lee estos términos cuidadosamente, ya que contienen información importante sobre tus derechos legales, recursos y obligaciones.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Aceptación de Términos</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Al usar nuestro sitio web o cualquier servicio proporcionado por Las Hermanas de Inmigración, confirmas que has leído, entendido y aceptas estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no deberías acceder ni usar nuestros servicios.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Resumen de Servicios</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> "Las Hermanas de Inmigración brindan orientación sobre inmigración, consultoría y servicios de apoyo. Nuestros servicios son informativos y de apoyo por naturaleza y no constituyen representación legal. Nos esforzamos por proporcionar información precisa y actualizada, pero recomendamos consultar con un abogado de inmigración con licencia para cualquier asesoramiento legal.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Actividades Prohibidas</h2>
                                <ul>
                                    <li className="fs-5 lh-base">Uso indebido de los recursos del sitio, incluyendo el hacking u otras formas de acceso no autorizado.</li>
                                    <li className="fs-5 lh-base">Publicar información falsa o engañosa. </li>
                                    <li className="fs-5 lh-base">Participar en cualquier comportamiento que interrumpa nuestros servicios o afecte la experiencia de otros usuarios.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Responsabilidades del Usuario</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Elegibilidad:</b> "Debes tener al menos 18 años de edad para usar nuestros servicios. Al usar nuestro sitio web, declaras que cumples con este requisito de edad.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Información Precisa:</b> Aceptas proporcionar información precisa, actual y completa cuando se solicite. La tergiversación de la información puede resultar en la terminación de tu acceso a nuestros servicios.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> <b>Confidencialidad:</b> Los usuarios son responsables de mantener la confidencialidad de la información de su cuenta y de cualquier actividad realizada bajo su cuenta.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Derechos de Propiedad Intelectual</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Todo el contenido proporcionado en este sitio web, incluyendo texto, imágenes, gráficos y software, es propiedad de Las Hermanas de Inmigración o de sus proveedores de contenido y está protegido por derechos de autor, marcas comerciales y otras leyes de propiedad intelectual. No puedes usar, reproducir o distribuir ningún contenido de nuestro sitio web sin el permiso expreso.</h4>
                                <h4 className="fs-5 fw-normal lh-base mb-2">Estos Términos de Servicio se rigen e interpretan de acuerdo con las leyes de [Tu País/Estado]. Cualquier disputa que surja de estos términos estará sujeta a la jurisdicción exclusiva de los tribunales en [Tu Jurisdicción].</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Limitación de Responsabilidad</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2">En la máxima medida permitida por la ley, Las Hermanas de Inmigración no son responsables de ningún daño indirecto, incidental o consecuente que surja de tu uso de nuestro sitio web o servicios. Nuestros servicios se proporcionan 'tal cual' sin garantías de ningún tipo, expresas o implícitas.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Terminación del Servicio</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Nos reservamos el derecho de suspender o terminar tu acceso a nuestro sitio web y servicios a nuestra exclusiva discreción, sin previo aviso, si violas estos Términos de Servicio o participas en cualquier conducta dañina o inapropiada.</h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12 col-12 mb-3">
                            <div className="p-4 bg-shadow-sm bg-white rounded">
                                <h2 className="fs-2 fw-bold lh-base mb-2">Cambios en los Términos</h2>
                                <h4 className="fs-5 fw-normal lh-base mb-2"> Las Hermanas de Inmigración se reservan el derecho de modificar o actualizar estos Términos de Servicio en cualquier momento. Notificaremos a los usuarios sobre cualquier cambio significativo, pero es tu responsabilidad revisar los términos periódicamente. El uso continuo de nuestros servicios después de los cambios significa la aceptación de los términos actualizados.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Terms;
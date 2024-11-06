import React from "react";
import Image from "next/image";
import logo from '@/public/images/items/logo.png';
const Loader = ({mode = false}) => {
    return (
        <div className={`${mode ? 'header_show' : 'header_hide'} d-flex justify-content-center align-items-center col-12 position-fixed left-0 bg-white`}>
            <div className="container-fluid">
                 <div className="row justify-content-center">
                      <div className="col-xl-6 col-md-6 col-sm-6 col-12">
                           <Image
                            src={logo}
                            width="500"
                            height="500"
                            className="col-12 h-md object-contain"
                            alt="logo loader"
                            loading="lazy"
                           />
                      </div>
                 </div>
            </div>
        </div>
    )
}

export default Loader;
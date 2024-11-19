import React, { useEffect, useState } from 'react';
import '@/styles/globals.css';
import Script from 'next/script';
import Loader from '@/component/Loader';
import Router, { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
    const route = useRouter();
    const [loader_on, show_loader] = useState(false);

    function set_loader() {
         show_loader(true)
    }

    function hide_loader() {
        setTimeout(() => {
            show_loader(false)
        }, 1000);
    }

    useEffect(() => {
        route.events.on("routeChangeStart", set_loader);
        route.events.on("routeChangeComplete", hide_loader);
        route.events.on("routeChangeError", set_loader);

        return(() => {
            route.events.off("routeChangeStart", set_loader);
            route.events.off("routeChangeComplete", hide_loader);
            route.events.off("routeChangeError", set_loader);
        })
    }, [route]);

    return (
        <>
            <Loader mode={loader_on} />
            <Script 
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossOrigin="anonymous"
                strategy="afterInteractive"
            />
            <Script 
                src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"
                crossOrigin="anonymous"
                strategy="beforeInteractive"
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

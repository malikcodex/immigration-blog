import React, {useEffect} from "react";
import { useRouter } from "next/router";

function Logout() {
    let router =  useRouter();
    return (
        useEffect(() => {
             if(localStorage.getItem("token")) {
                localStorage.removeItem("token");
             }

             router.push("/admin/login");
        }, [router])
    )
}

export default Logout;
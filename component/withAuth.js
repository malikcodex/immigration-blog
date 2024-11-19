import jwt from 'jsonwebtoken';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const jwtToken = process.env.JWT_SECRET || '0cd82e9ce4afd34e878ec8ef142090d6e6c86bc9d58c37e5328d88b9acb70e4d';

        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.replace('/admin/login');
                return;
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };
};
export default withAuth;

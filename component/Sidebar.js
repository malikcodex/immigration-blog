import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SetSidebar() {
    const router = useRouter();
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="p-2 d-flex flex-column bg-shadow-sm bg-white" style={{position: 'sticky', top: '0', zIndex: '111111111'}}>
                <Link className={`${router.route == "/admin/contact" ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`} href="/admin/contact">Contacts</Link>
                <Link className={`${router.route == "/admin/articles" || router.route == "/admin/add-articles"  ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`}  href="/admin/articles">Articles</Link>
                <Link className={`${router.route == "/admin/support" || router.route == "/admin/add-support"  ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`}  href="/admin/support">Supports</Link>
                <Link className={`${router.route == "/admin/categories" || router.route == "/admin/add-categories"  ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`} href="/admin/categories">Categories</Link>
                <Link className={`${router.route == "/admin/guides" || router.route == "/admin/add-guides"  ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`} href="/admin/guides">Guides</Link>
                {/* <Link className={`${router.route == "/admin/profile" || router.route == "/admin/change-password"  ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`} href="/admin/profile">Profile</Link> */}
                <Link className={`${router.route == "/admin/feedbacks"  ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`} href="/admin/feedbacks">Feedbacks</Link>
                <Link className={`${router.route == "/admin/performance"  ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`} href="/admin/performance">Site Performance</Link>
                {/* <Link className={`${router.route == "/admin/logout"  ? "bg-purple text-white" : "btn-regular text-dark"} btn lh-base fs-5 mb-3 col-12 text-start`} href="/admin/logout">Logout</Link> */}
            </div>
        </div>
    )
}
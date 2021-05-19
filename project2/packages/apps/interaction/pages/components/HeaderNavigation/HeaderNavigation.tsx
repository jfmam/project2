import Link from "next/link";

export default function HeaderNavigation() {
    return (
        <nav className="header-nav">
            <div className="header-nav__links">
                <Link href="#">
                    <a className="header-nav__links__item">
                        Rooms
                    </a>
                </Link>
                <Link href="#">
                    <a className="header-nav__links__item">
                        Ideas
                    </a>
                </Link>
                <Link href="#">
                    <a className="header-nav__links__item">
                        Stores
                    </a>
                </Link>
                <Link href="#">
                    <a className="header-nav__links__item">
                        Contact
                    </a>
                </Link>
            </div>
        </nav>
    );
}
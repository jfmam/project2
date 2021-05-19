import Link from 'next/link';

export default function ProductNavigation() {
    return(
        <nav className="product-nav">
             <div className="product-nav__links">
                <Link href="#">
                    <a className="product-nav__links__item">
                        Rooms
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        Ideas
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        Stores
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        Contact
                    </a>
                </Link>
            </div>
        </nav>
    );
}
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-16">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                {/* Logo and About */}
                <div>
                    <h2 className="text-2xl font-bold text-primary">Bistro Boss</h2>
                    <p className="mt-2 text-sm">
                        Your destination for delicious meals, warm ambiance, and unforgettable dining experiences. Taste the magic in every bite!
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="link link-hover">Home</Link></li>
                        <li><Link to="/menu" className="link link-hover">Menu</Link></li>
                        <li><Link to="/about" className="link link-hover">About Us</Link></li>
                        <li><Link to="/contact" className="link link-hover">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p>123 Flavor Street, Foodie Town</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: contact@bistroboss.com</p>
                    <div className="mt-3 flex justify-center md:justify-start space-x-4">
                        <Link to="#" className="link link-hover"><i className="fa-brands fa-facebook"></i></Link>
                        <Link to="#" className="link link-hover"><i className="fa-brands fa-instagram"></i></Link>
                        <Link to="#" className="link link-hover"><i className="fa-brands fa-twitter"></i></Link>
                    </div>
                </div>

            </div>

            <div className="text-center py-4 bg-base-300 text-sm">
                &copy; {new Date().getFullYear()} Bistro Boss. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
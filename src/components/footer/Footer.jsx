import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/MyContext';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    const context = useContext(myContext);
    const { toggleMode, mode } = context;

    return (
        <footer className={` bg-gray-400 text-gray-600 body-font bg-${mode === 'dark' ? 'gray-300' : 'gray-300'}`} style={{ color: mode === 'dark' ? 'white' : '' }}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Order</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Local For Vocal</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Customer Service</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to="/returnpolicy" className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to="/privacypolicy" className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
                    </div>
                </div>

            </div>

            <div className={`bg-${mode === 'dark' ? 'gray-200' : 'gray-300'}`} style={{ color: mode === 'dark' ? 'white' : '' }}>
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to="/" className="flex">
                        <div className="flex">
                            <h1 className="text-2xl font-bold text-black px-2 py-1 rounded" style={{ color: mode === 'dark' ? 'white' : '' }}>E-Bharat</h1>
                        </div>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                        © 2023 E-bharat — <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.ebharat.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <CalendarDaysIcon className="w-5 h-5" />
                        </a>
                        <a className="ml-3 text-gray-500">
                            <HandRaisedIcon className="w-5 h-5" />
                        </a>
                        {/* Add other social media icons here */}
                    </span>
                </div>
            </div>
        </footer>
    );
}

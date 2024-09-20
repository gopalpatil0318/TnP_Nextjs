import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-400 text-black py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Shirpur Education Society&apos;s
                        R. C. Patel Institute of Technology, Shirpur

                        Near Nimzari Naka, Shahada Road, Shirpur Dist. Dhule (M.S.) Maharashtra, India - 425405
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-gray-300 transition-colors duration-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300 transition-colors duration-300"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-300 transition-colors duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                    <p>(02563) 259600, 801, 802.</p>
                    <p> director@rcpit.ac.in  </p>
                    <p>www.rcpit.ac.in</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">Copyright © 2024 R. C. Patel Institute of Technology, Shirpur All Rights Reserved.</p>
        </footer>
    )
}

export default Footer

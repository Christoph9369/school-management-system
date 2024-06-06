// components/Footer.js

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Christoph Felix</h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/christoph-felix-909144135/"
                target="_blank"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaLinkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
              <Link
                href="https://x.com/MojuyeF"
                target="_blank"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaTwitter className="w-5 h-5 mr-2" />
                Twitter
              </Link>
              <Link
                href="https://github.com/Christoph9369"
                target="_blank"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                Github
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-4">Amos Kipkorir</h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/amos-koech-5b2974298/"
                target="_blank"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaLinkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/Calixday"
                target="_blank"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaTwitter className="w-5 h-5 mr-2" />
                Twitter
              </Link>
              <Link
                href="https://github.com/calixday"
                target="_blank"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

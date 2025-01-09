import { FaFacebook, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center py-4 bg-gray-100 text-gray-700">
      <div className="flex justify-center items-center space-x-4 mb-2">
        <a
          href="https://www.facebook.com/farhan.sadiq2407"
          target="farhan-sadik-facebook"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-500"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://github.com/farhan-sadik247/"
          target="farhan-sadik-github"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-800"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://farhan-sadik-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-green-500"
        >
          <FaGlobe size={24} />
        </a>
        <a
          href="mailto:md.farhan.sadik.578@gmail.com"
          className="text-gray-700 hover:text-red-500"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <p>© 2025 Md Farhan Sadik. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


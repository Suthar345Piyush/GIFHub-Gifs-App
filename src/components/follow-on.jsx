import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div className="faded-text pt-2">
      <span>Connect on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://x.com/piPlaysS" className="text-gray-600 hover:text-white transition-colors duration-300">
          <FaXTwitter size={25}/>
        </a>
        <a href="https://github.com/Suthar345Piyush/GIFHub-Gifs-App" className="text-gray-600 hover:text-white transition-colors duration-300">
          <FaGithub size={25}/>
        </a>
        <a href="https://www.linkedin.com/in/piyush-suthar-641a0826a/" className="text-gray-600 hover:text-[#0A66C2] transition-colors duration-300">
          <FaLinkedin size={25}/>
        </a>
      </div>
    </div>
  );
};

export default FollowOn;

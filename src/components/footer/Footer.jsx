import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    id: 2,
    icon: <FiGithub className="text-4xl sm:text-5xl md:text-6xl" />,
    url: "https://github.com/Thakur-Neupane",
  },
  {
    id: 4,
    icon: <FiLinkedin className="text-4xl sm:text-5xl md:text-6xl" />,
    url: "https://www.linkedin.com/in/thakurneupane111/",
  },
  {
    id: 5,
    icon: <MdEmail className="text-4xl sm:text-5xl md:text-6xl" />,
    url: "mailto:thakur.neupane.neupane@gmail.com",
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 border-t-2 dark:border-neutral-600 border-neutral-300">
        {/* Footer social links */}
        <div className="flex flex-col justify-center items-center mb-8 sm:mb-16">
          <p className="text-3xl sm:text-4xl text-amber-500 dark:text-amber-500 mb-5">
            Connect With Me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.id}
                className="dark:bg-[#111111] hover:bg-neutral-200 dark:hover:bg-[#1b1b1b] cursor-pointer rounded-xl bg-gray-100 shadow-sm p-4 border dark:border-white/5 border-black/5 hover:text-indigo-600 transition-transform duration-300 transform hover:scale-105"
              >
                {link.icon}
              </a>
            ))}
          </ul>
        </div>
        <div className="font-general-regular flex justify-center items-center text-center">
          <p className="text-blue-500 text-lg md:text-xl">
            &copy; {new Date().getFullYear()} Thakur Neupane. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

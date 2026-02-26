import { FaInstagram, FaFacebookF, FaLinkedinIn, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6b0f1a] text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-serif mb-6 tracking-wide">
              Arts To Hearts
            </h3>

            <p className="text-gray-200 leading-relaxed mb-6">
              A global creative community empowering women artists
              through collaboration, education, and opportunity.
            </p>

            <p className="text-gray-300 mb-6">
              info@artstoheartsproject.com
            </p>

            <div className="flex gap-4">
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaInstagram size={14} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaFacebookF size={14} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaLinkedinIn size={14} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                <FaSpotify size={14} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="uppercase text-xs tracking-widest text-gray-300 mb-6">
              About
            </h4>

            <ul className="space-y-3 text-gray-200">
              <li className="hover:text-white transition cursor-pointer">
                Who we are
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Our Values
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Community Guidelines
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="uppercase text-xs tracking-widest text-gray-300 mb-6">
              Support
            </h4>

            <ul className="space-y-3 text-gray-200">
              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Shipping Policy
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="uppercase text-xs tracking-widest text-gray-300 mb-6">
              Join Our Newsletter
            </h4>

            <p className="text-gray-200 mb-6">
              Stay inspired. Get curated art insights delivered weekly.
            </p>

            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-white"
              />
              <button className="px-6 py-3 bg-white text-[#6b0f1a] rounded-r-lg font-medium hover:bg-gray-200 transition">
                Join
              </button>
            </div>

            <div className="mt-6 text-gray-300 text-sm leading-relaxed">
              New Delhi, India <br />
              USA Office
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">

          <p>
            © {new Date().getFullYear()} Arts To Hearts Project. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed for visionary creators.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
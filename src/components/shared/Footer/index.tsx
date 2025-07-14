import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='mt-7'>
      <div className="bg-black text-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive the latest updates and exclusive offers.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 mb-4 md:mb-0 md:mr-4 border text-xs py-2 px-5 w-full md:w-auto"
              />
              <button
                type="submit"
                className="bg-black text-white border text-xs uppercase py-2 px-10 hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f7f7]  py-10 px-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <h4 className="text-sm text- black font-bold mb-4 uppercase">About Us</h4>
              <ul className="space-y-2 text-[#8fa2b0] text-xs">
                <li><a href="/about" className="hover:underline">Our Story</a></li>
                <li><a href="/team" className="hover:underline">Our Team</a></li>
                <li><a href="/careers" className="hover:underline">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm text- black font-bold mb-4 uppercase">Customer Service</h4>
              <ul className="space-y-2 text-[#8fa2b0] text-xs">
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/returns" className="hover:underline">Returns</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm text- black font-bold mb-4 uppercase">Follow Us</h4>
              <ul className="space-y-2 text-[#8fa2b0] text-xs">
                <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
                <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
                <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm text- black font-bold mb-4 uppercase">Legal</h4>
              <ul className="space-y-2 text-[#8fa2b0] text-xs">
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/cookies" className="hover:underline">Cookie Policy</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
      <div className="bg-[#f7f7f7] copyright text-center text-black text-sm ">
        <h2>{new Date().getFullYear()} <span className=" font-bold uppercase">Mini-</span><span className='text-yellow-500 font-bold uppercase'>Commerce </span> STORE | All Right Reserved</h2>
        <p className="pb-2">Developed & Maintained by <span className='font-bold'>Panda</span></p>
      </div>
    </footer>
  );
};

export default Footer;

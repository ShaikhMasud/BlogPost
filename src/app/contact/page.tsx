import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-covwer bg-[50%] bg-no-repeat bg-[url('https://utfs.io/f/9c9ad8ac-b1fd-4c91-af93-b54b9dea86fd-2vy51x.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="mb-12 grid grid-x-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
                <h6 className="font-medium">India</h6>
              </div>
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h6 className="font-medium">Mumbai, 400010</h6>
              </div>
              <div className="mx-auto mb-12 text-center lg:mb-0">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
  >
    <rect
      width="16"
      height="10"
      x="4"
      y="6"
      rx="1"
      ry="1"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
    />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M4 6l8 5 8-5"
    />
  </svg>
  <h6 className="font-medium">shaikhmasud507@gmail.com</h6>
</div>
<div className="mx-auto mb-12 text-center lg:mb-0">
  <div className="bg-primary dark:bg-primary-400 p-2 text-4xl rounded-full inline-block">
  <FaTwitter  />
  </div>
  <h6 className="font-medium">iamMasud19</h6>
</div>





            </div>
            <div className="bg-white-800 p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-4">My Contacts</h1>
            <p className="mb-4">
              Hello! I'm available for new opportunities and collaborations. Feel free to reach out to me. Lets Make something together.
            </p>
            <div className="mb-4">
              <strong>Email:</strong> shaikhmasud@507@gmail.com
            </div>
            <div className="mb-4">
              <strong>Linkedin:</strong> Masud Shaikh
            </div>
            <div className="mb-4">
              <strong>Instagram:</strong> masud._19
            </div>
            
            <div className="mb-4">
              <strong>Location:</strong> Mumbai, India
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
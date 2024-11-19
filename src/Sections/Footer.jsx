import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Socials */}
      <div className="flex gap-3">
        <a href="https://github.com/BunnyEncoder20" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/varun-verma-1547442a5/" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/linkedin.png"
              alt="LinkedIn"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>

        <a href="https://takeuforward.org/plus/profile/BunnyEncoder" target="_blank">
          <div className="social-icon">
            <svg
              width="126"
              height="36"
              viewBox="0 0 156 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_687_3228)">
                <path
                  d="M0 5.89536H15.3223L9.50286 36H21.7707L27.13 5.89536H42.1221L43.28 0H1.16732L0 5.89536Z"
                  fill="white"
                >
                </path>
                <path
                  d="M47.1522 0L42.3828 26.9435L49.8343 36H82.6225L88.8816 0H76.8845L71.594 30.0089H56.6895L54.3064 27.0926L58.9256 0H47.1522Z"
                  fill="white"
                >
                </path>
                <path
                  d="M86.6602 36H98.4758L100.389 23.966H130.291L131.478 18H101.513L102.898 8.93565L106.397 5.82473H121.644L120.456 11.9822H132.403L134.516 0H101.842L91.3467 9.00157L86.6602 36Z"
                  fill="white"
                >
                </path>
                <path
                  d="M154.9 11.8064H148.503L147.254 18.0706H141.425L142.674 11.8064H136.277L137.374 6.26421H143.771L145.023 0H150.852L149.603 6.26421H156L154.9 11.8064Z"
                  fill="#D41F30"
                >
                </path>
              </g>
              <defs>
                <clipPath id="clip0_687_3228">
                  <rect width="156" height="36" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>
	  <p className="text-white-500">©️ 2024 Varun Verma. On the Grind 💪</p>
    </section>
  );
};

export default Footer;

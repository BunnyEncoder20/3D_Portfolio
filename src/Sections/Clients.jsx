import React from "react";

// import data
import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="c-space my-20" id="clients">
      <h3 className="head-text">Hear from my Co-workers</h3>

      {/* All Reviews */}
      <div className="client-container">
        {clientReviews.map(({ id, name, position, img, review, ln_link }) => (
          <div key={id} className="client-review">
            {/* review */}
            <div>
              <p className="text-white font-light">&quot;{review}&quot;</p>
            </div>

            {/* content */}
            <div className="client-content">
              {/* <div className="flex gap-3"> */}
              <a href={ln_link} target="_blank" className="flex gap-3">
                <img src={img} alt={name} className="w-12 h-12 rounded-full" />

                <div className="flex flex-col">
                  <p className="font-semibold text-white-800">{name}</p>
                  <p className="text-white-500 md:text-base text-sm">
                    {position}
                  </p>
                </div>
              </a>
              {/* </div> */}

              {/* star rating */}
              <div className="flex self-end items-center gap-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <div key={index}>
                    <img
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

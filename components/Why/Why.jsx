import React from "react";
import Image from "next/image";

import meta from "../../assets/104.jpg";
import meta1 from "../../assets/16.jpg";
import meta2 from "../../assets/girl.jpg";

const Why = () => {
  return (
    <div>
      <div className="py-16">
        <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          <div className="justify-center gap-6 text-center md:flex md:text-left lg:items-center lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
              <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
                Why
              </h1>
              <h1 className="text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
                <span className="text-primary dark:text-sky-300">
                  Campus Director
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Devoted to acting as a symbiotic link between the entrepreneurs
                and the existing startup ecosystem, E-Cell IIT BHU provides you
                with an opportunity to lead and educate the students masses in
                your college with various startup related activities and events
                to inculcate the entrpreneurial culture in your own college!
              </p>
              <div className="flex flex-wrap gap-6">
                {/* <a
            href="#"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-base font-semibold text-white dark:text-dark"
              >Shop now</span
            >
          </a> */}
                <a
                  href="#"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary dark:text-white">
                    Learn More
                  </span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
              <div className="col-span-2 row-span-4">
                <Image
                  src={meta}
                  className="rounded-full"
                  width="640"
                  height="960"
                  alt="shoes"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 row-span-2">
                <Image
                  src={meta1}
                  className="h-full w-full rounded-xl object-cover object-top"
                  width="640"
                  height="640"
                  alt="shoe"
                  loading="lazy"
                />
              </div>
              <div className="col-span-3 row-span-3">
                <Image
                  src={meta2}
                  className="h-full w-full rounded-xl object-cover object-top"
                  width="640"
                  height="427"
                  alt="shoes"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

import React from "react";

export default function Footer() {
  return (
    <footer className="scroll-mt-40 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className=" text-center">
        <p className=" font-medium md:text-2xl lg:text-3xl text-xl">
          ©{new Date().getFullYear()} Shrujan S Shetty All rights reserved.
        </p>
      </div>
    </footer>
  );
}

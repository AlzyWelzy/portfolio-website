import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
        &copy; {currentYear} Manvendra Rajpoot. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Explore my work in Web development.</span> Each project reflects my skills and passion. Thanks for visiting!
      </p>


    </footer>
  );
}

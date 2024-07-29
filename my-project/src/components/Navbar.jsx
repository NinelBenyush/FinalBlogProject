import React from 'react';
import { navLinks } from '../data';

function Navbar() {
  return (
    <nav className="bg-violet-100 w-full">
    <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
      <h2 className="text-3xl font-bold">
        Blog<span className="text-violet-600">Post</span>
      </h2>
      <div className="flex gap-x-3 sm:ml-auto">
        {navLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <button key={id} href={href} className="capitalized text-lg tracking-wide hover:text-violet-600 duration-300">
              {text}
            </button>
          );
        })}
      </div>
    </div>
  </nav>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import img from '../assets/footerImg.png';

function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <img src={img} alt="Footer" width="50" height="50" className="mr-4" />
        <p>
          BlogPost Ltd.
          <br />
          {year}
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Log-in</a>
        <a className="link link-hover">Register</a>
        <a className="link link-hover">About</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input type="text" placeholder="username@mail.com" className="input input-bordered join-item" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer;

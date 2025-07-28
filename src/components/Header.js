import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const links = document.querySelectorAll('nav a');

    for (const link of links) {
      link.addEventListener('click', clickHandler);
    }

    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const offsetTop = document.querySelector(href).offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    return () => {
      for (const link of links) {
        link.removeEventListener('click', clickHandler);
      }
    };
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

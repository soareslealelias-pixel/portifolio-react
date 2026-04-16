import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Projetado e desenvolvido por Elias Soares Leal.</p>
    </footer>
  );
};

export default Footer;
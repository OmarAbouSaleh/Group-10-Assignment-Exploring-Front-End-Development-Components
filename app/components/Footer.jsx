import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 p-8 text-center mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} A+ Inc. All rights reserved.</p>
        {/* Add additional content or links as needed */}
      </div>
    </footer>
  );
};

export default Footer;

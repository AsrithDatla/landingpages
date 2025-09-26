import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
      <Link 
        href="/" 
        className="block transition-opacity duration-200 hover:opacity-80 bg-white/90 p-2 rounded-lg shadow-md"
      >
        <img 
          src="https://pre-built-images.s3.amazonaws.com/webapp-uploads/4a7c818821764b5fc4ecca88e27e5a38.gif" 
          alt="ReLiv Healthy Logo" 
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24" 
        />
      </Link>
    </div>
  );
};

export default Logo;

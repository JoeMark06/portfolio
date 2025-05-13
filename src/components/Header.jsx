import React from 'react';

function Header() {
  return (
    <header className="py-20 relative flex items-center justify-between">
      <div className="max-w-3xl">
        <h2 className="text-gray-300 text-xl mb-5">HELLO!</h2>
        <h2 className="text-gray-400 text-xl">I'M</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
          JOE MARK B. TOLENTINO
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          I have undertaken self-training in data analysis, which has further
          enhanced my analytical skills and technical expertise. This
          self-directed learning has equipped me with the ability to interpret
          complex data sets, and derive meaningful insights.
        </p>
      </div>
      <div className="w-1/3 flex justify-center">
        <img
          src="https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg"
          alt="Joe Mark B. Tolentino"
          className="rounded-full w-full h-auto max-w-xs object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
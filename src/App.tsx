import React from 'react';
import Anime, { anime } from './components/Anime';

const App = () => {
  const props = {
    scale: [0.1, 0.9],
    autoplay: true,
    direction: 'alternate',
    delay: anime.stagger(2),
  };

  return (
    <div className="w-96 p-5 bg-gray-300 flex flex-col gap-2 items-start justify-start">
      <Anime {...props}>
        <div className="bg-red-200 p-2 w-24">Child 1</div>
        <div className="bg-red-200 p-2 w-24">Child 2</div>
      </Anime>
    </div>
  );
};

export default App;

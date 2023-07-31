'use client';

import Typewriter from 'typewriter-effect';

export default function TypewriterEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hey, I'm Noah.",
          'Guy who loves coffee,',
          'but loves to code more.',
        ],
        autoStart: true,
        loop: true,
        wrapperClassName: 'text-5xl md:text-6xl font-bold text-neutral-500',
        cursorClassName: 'typewriter-cursor',
      }}
    />
  );
}

'use client';

import Typewriter from 'typewriter-effect';

export default function TypewriterEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hey, I'm Noah.",
          'Guy who loves coffee.',
          'But loves to code more.',
        ],
        autoStart: true,
        loop: true,
        wrapperClassName: 'text-xl font-bold text-neutral-400',
        cursorClassName: 'typewriter-cursor',
      }}
    />
  );
}

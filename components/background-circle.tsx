'use client';

import { motion } from 'framer-motion';

export default function BackgroundCircle() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 2.3, 0],
        opacity: [0.1, 0.2, 0.4, , 0.8, 0.1, 0.5],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='absolute top-10'
    >
      <div className='w-[250px] h-[250px] rounded-full border border-neutral-400'></div>
    </motion.div>
  );
}

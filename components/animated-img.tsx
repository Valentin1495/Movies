'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AnimatedImg() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      className='relative h-44 w-44 sm:w-72 sm:h-96 rounded-full sm:rounded-md overflow-hidden flex-shrink-0 mt-5'
    >
      <Image
        src={'/avatar-2.jpeg'}
        alt='avatar-2'
        fill
        priority
        sizes='100%'
        className='object-cover'
      />
    </motion.div>
  );
}

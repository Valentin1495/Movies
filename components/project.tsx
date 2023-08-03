'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

type Props = {
  idx: number;
  name: string;
  image: string;
  href?: string;
  description: string;
};

export default function Project({
  idx,
  name,
  image,
  href,
  description,
}: Props) {
  return (
    <div className='flex flex-col items-center justify-center pt-20 sm:pt-0 sm:mt-28 md:mt-36 gap-y-5 w-full snap-center flex-shrink-0 px-2 sm:px-14 lg:px-24 xl:px-48'>
      <motion.section
        initial={{
          opacity: 0,
          y: -200,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className='relative h-28 md:h-56 aspect-video'
      >
        <Image src={image} alt='project image' fill priority sizes='100%' />
      </motion.section>

      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className='space-y-5'
      >
        <h2 className='text-base sm:text-2xl font-bold text-neutral-600 text-center'>
          Case study {idx + 1} of 2 :{' '}
          {href ? (
            <a
              href={href}
              target='_blank'
              className='underline decoration-sky-400 underline-offset-4'
            >
              {name}
            </a>
          ) : (
            <span className='underline decoration-sky-400 underline-offset-4'>
              {name}
            </span>
          )}
        </h2>
        <p className='text-neutral-600 text-sm sm:text-base'>{description}</p>
      </motion.section>
    </div>
  );
}

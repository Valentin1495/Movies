'use client';

import { InstagramIcon, MailIcon, TwitterIcon } from './icons';
import SocialLink from './social-link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <div className='z-20 px-2 sm:px-5 max-w-sm sm:max-w-xl md:max-w-3xl mx-auto fixed top-0 inset-x-0 py-2.5 sm:py-5 flex justify-between items-center overflow-x-hidden'>
      <motion.div
        initial={{
          x: -100,
          scale: 0.1,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
          transition: {
            delay: 2,
            duration: 1.5,
          },
        }}
        className='flex items-center gap-x-1.5'
      >
        <SocialLink href='https://twitter.com/Noah_Han14'>
          <TwitterIcon />
        </SocialLink>
        <SocialLink href='https://instagram.com/Noah.Han14'>
          <InstagramIcon />
        </SocialLink>
      </motion.div>
      <motion.div
        initial={{ x: 100, scale: 0.1, opacity: 0 }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
          transition: {
            delay: 2,
            duration: 1.5,
          },
        }}
        className='sm:flex items-center gap-x-1.5 mr-3 sm:mr-0'
      >
        <SocialLink href='mailto:valentink1495@gmail.com'>
          <MailIcon />
        </SocialLink>
        <p className='hidden sm:block uppercase animate-pulse text-neutral-500 text-sm md:text-base font-bold'>
          get in touch
        </p>
      </motion.div>
    </div>
  );
}

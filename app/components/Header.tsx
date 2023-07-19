'use client';

import { InstagramIcon, MailIcon, TwitterIcon } from './Icons';
import SocialLink from './SocialLink';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className='max-w-7xl mx-auto px-5 py-2.5 sm:px-10 sm:py-5 flex justify-between items-center'>
      <motion.div
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{ x: 0, scale: 1, opacity: 1, transition: { duration: 1.5 } }}
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
        initial={{ x: 500, scale: 0.5, opacity: 0 }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1.5,
          },
        }}
        className='flex items-center gap-x-1.5'
      >
        <SocialLink href='mailto:valentink1495@gmail.com'>
          <MailIcon />
        </SocialLink>
        <p className='hidden sm:block text-neutral-600 font-medium'>
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

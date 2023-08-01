'use client';

import {
  CSSIcon,
  FirebaseIcon,
  HTMLIcon,
  JSIcon,
  NextJSIcon,
  ReactIcon,
  ReactQueryIcon,
  RecoilIcon,
  ReduxIcon,
  SupabaseIcon,
  TSIcon,
  TailwindIcon,
} from './icons';

import { motion } from 'framer-motion';

export default function SkillIcons() {
  return (
    <div className='absolute top-1/4 left-1/2 -translate-x-1/2 min-w-max space-y-8 overflow-x-hidden'>
      <motion.section
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: [-150, -100, 0], opacity: 1 }}
        transition={{ duration: 1.4 }}
        className='grid grid-cols-3 gap-8'
      >
        <HTMLIcon className='skill-icon' />
        <CSSIcon className='skill-icon' />
        <JSIcon className='skill-icon' />
        <TSIcon className='skill-icon' />
        <ReactIcon className='skill-icon' />
        <NextJSIcon className='skill-icon' />
      </motion.section>

      <motion.section
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: [150, 100, 0], opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='grid grid-cols-3 gap-8'
      >
        <TailwindIcon className='skill-icon' />
        <ReactQueryIcon className='skill-icon' />
        <RecoilIcon className='skill-icon' />
        <ReduxIcon className='skill-icon' />
        <FirebaseIcon className='skill-icon' />
        <SupabaseIcon className='skill-icon' />
      </motion.section>
    </div>
  );
}

'use client';

import {
  CSSIcon,
  FirebaseIcon,
  GoogleIcon,
  HTMLIcon,
  JSIcon,
  NextJSIcon,
  ReactIcon,
  ReactQueryIcon,
  RecoilIcon,
  ReduxIcon,
  TSIcon,
  TailwindIcon,
} from './icons';
import { motion } from 'framer-motion';
import SkillIconBtn from './skill-icon-btn';

const skillIcons1 = [
  {
    icon: <HTMLIcon />,
    msg: 'HTML',
  },
  {
    icon: <CSSIcon />,
    msg: 'CSS',
  },
  {
    icon: <JSIcon />,
    msg: 'JavaScript',
  },
  {
    icon: <TSIcon />,
    msg: 'TypeScript',
  },
  {
    icon: <ReactIcon />,
    msg: 'React',
  },
  {
    icon: <NextJSIcon />,
    msg: 'Next.js',
  },
];

const skillIcons2 = [
  {
    icon: <TailwindIcon />,
    msg: 'Tailwind CSS',
  },
  {
    icon: <ReactQueryIcon />,
    msg: 'React Query',
  },
  {
    icon: <RecoilIcon />,
    msg: 'Recoil',
  },
  {
    icon: <ReduxIcon />,
    msg: 'Redux',
  },
  {
    icon: <FirebaseIcon />,
    msg: 'Firebase',
  },
  {
    icon: <GoogleIcon />,
    msg: 'PaLM API',
  },
];

export default function SkillIcons() {
  return (
    <div className='absolute top-1/4 left-1/2 -translate-x-1/2 min-w-max space-y-8 overflow-x-hidden'>
      <motion.section
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: [-150, -100, 0], opacity: 1 }}
        transition={{ duration: 1.4 }}
        className='grid grid-cols-3 gap-8'
      >
        {skillIcons1.map((icon) => (
          <SkillIconBtn key={icon.msg} icon={icon.icon} msg={icon.msg} />
        ))}
      </motion.section>

      <motion.section
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: [150, 100, 0], opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='grid grid-cols-3 gap-8'
      >
        {skillIcons2.map((icon) => (
          <SkillIconBtn key={icon.msg} icon={icon.icon} msg={icon.msg} />
        ))}
      </motion.section>
    </div>
  );
}

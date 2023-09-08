'use client';

import { motion } from 'framer-motion';
import AnimatedImg from './animated-img';

export default function AboutMe() {
  return (
    <div className='layout-width absolute space-y-5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex flex-col sm:flex-row items-center sm:items-start gap-y-5 sm:gap-x-5'>
      <AnimatedImg />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='text-neutral-600 text-xs sm:text-base'
      >
        <h2>
          🔥 <span className='font-bold text-neutral-700'>열정</span>
        </h2>
        <p className='mt-1 leading-relaxed sm:leading-normal pl-[25px]'>
          프론트엔드 개발에 진정한 열정을 갖고 있으며, 아름다운 UI와 디자인을
          통해 사람들의 UX를 개선하는 데 보람을 느껴요.
        </p>
        <br />
        <h2>
          🤝 <span className='font-bold text-neutral-700'>협업과 소통</span>
        </h2>
        <p className='mt-1 leading-relaxed sm:leading-normal pl-[25px]'>
          팀원들과의 원활한 소통과 협업을 즐기며, 서로를 존중하고 배려하는 문화
          속에서 최상의 결과물을 도출하기 위해 노력해요.
        </p>
        <br />
        <h2>
          🚀 <span className='font-bold text-neutral-700'>성장과 발전</span>
        </h2>
        <p className='mt-1 leading-relaxed sm:leading-normal pl-[25px]'>
          빠르게 변화하는 프론트엔드 개발 분야에서 최신 기술을 습득하고
          프로젝트를 통해 능력을 향상시키고 싶은 열망이 있으며, 동료들과의 지식
          공유를 통해 서로의 성장을 촉진하고자 해요.
        </p>
      </motion.section>
    </div>
  );
}

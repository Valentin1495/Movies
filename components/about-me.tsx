'use client';

import { motion } from 'framer-motion';
import AnimatedImg from './animated-img';

export default function AboutMe() {
  return (
    <div className='pt-20 layout-width sm:mt-2 absolute top-1/2 -translate-y-1/2 flex flex-col items-center sm:items-start sm:flex-row gap-y-5 sm:gap-x-5'>
      <AnimatedImg />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='text-neutral-600 text-sm sm:text-base'
      >
        <h2>
          🔥 <span className='font-bold text-neutral-700'>열정</span>
        </h2>
        <p className='mt-1 leading-relaxed sm:leading-normal pl-[25px]'>
          프론트엔드 개발에 진정한 열정을 갖고 있으며, 웹 인터페이스로 최고의
          사용자 경험과 아름다운 디자인을 통해 사람들의 삶을 개선하는 데 보람을
          느껴요.
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
          빠르게 변화하는 웹 개발 분야에서 최신 기술을 습득하고 개인적인
          프로젝트를 통해 능력을 향상시키려는 열망이 있으며, 동료들과의 지식
          공유를 통해 서로의 성장을 촉진하고자 해요.
        </p>
      </motion.section>
    </div>
  );
}

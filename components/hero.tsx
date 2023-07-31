import Link from 'next/link';
import BackgroundCircle from './background-circle';
import TypewriterEffect from './typewriter-effect';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative flex justify-center pt-52 h-screen'>
      <div className='gap-y-5 flex flex-col items-center'>
        <div className='relative mx-auto h-40 w-40 rounded-full overflow-hidden'>
          <Image
            src={'/avatar.JPEG'}
            alt='avatar'
            fill
            priority
            sizes='100%'
            className='object-cover'
          />
        </div>
        <h1 className='uppercase text-sm tracking-[15px] text-neutral-500'>
          frontend developer
        </h1>
        <TypewriterEffect />
        <div className='space-x-10 mt-3'>
          <Link href={'#about'} className='hero-link'>
            about
          </Link>
          <Link href={'#skills'} className='hero-link'>
            skills
          </Link>
          <Link href={'#projects'} className='hero-link'>
            projects
          </Link>
        </div>
      </div>

      <BackgroundCircle />
    </div>
  );
}

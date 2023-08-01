import About from '@/components/about';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main>
      <Header />
      <div className='snap-y snap-mandatory overflow-y-auto h-screen vertical-scrollbar'>
        <div id='hero' className='snap-center'>
          <Hero />
        </div>

        <div id='about' className='snap-center'>
          <About />
        </div>

        <div id='skills' className='snap-center'>
          <Skills />
        </div>

        <div id='projects' className='snap-center'>
          <Projects />
        </div>
      </div>
    </main>
  );
}

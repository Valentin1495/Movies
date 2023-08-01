import About from '@/components/about';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='snap-y snap-mandatory overflow-y-auto h-screen vertical-scrollbar'>
        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>

        <section id='projects' className='snap-center'>
          <Projects />
        </section>
      </main>
    </div>
  );
}

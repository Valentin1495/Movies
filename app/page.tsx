import About from '@/components/about';
import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='snap-y snap-mandatory overflow-y-auto h-screen'>
        <section id='hero' className='snap-start'>
          <Hero />
        </section>
        <section id='about' className='snap-start'>
          <About />
        </section>
      </main>
    </div>
  );
}

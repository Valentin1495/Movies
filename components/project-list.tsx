import Project from './project';

export default function ProjectList() {
  const projects = [
    {
      name: 'Google News',
      image:
        'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg',
      href: 'https://google-news-delta.vercel.app',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae existe sapiente! Quibusdam quaerat quasi iusto consequatur perferendis cuenim, alias earum voluptatum iste necessitatibus fugit sint delenitveritatis? Unde aut id dolore soluta numquam maiores ullam expeditharum.',
    },
    {
      name: 'Open Sea',
      image: '/nft.png',

      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias minima cumque quis, ea, aspernatur aliquid vel odio vitae ratione totam iusto assumenda tempore non. Nisi nemo quisquam, deleniti, soluta ipsam maiores animi iure illo necessitatibus, facilis quasi expedita distinctio excepturi.',
    },
  ];
  return (
    <div>
      <div className='z-10 absolute flex left-1/2 -translate-x-1/2 snap-x snap-mandatory overflow-x-auto w-full h-full horizontal-scrollbar'>
        {projects.map((project, idx) => {
          const newProject = { ...project, idx };
          return <Project {...newProject} key={idx} />;
        })}
      </div>

      <div className='absolute top-[30%] left-0 bg-sky-100/80 -skew-y-12 w-full h-[350px]'></div>
    </div>
  );
}

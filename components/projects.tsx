import ProjectList from './project-list';

export default function Projects() {
  return (
    <div className='h-screen relative flex flex-col items-center'>
      <h1 className='title'>projects</h1>

      <ProjectList />
    </div>
  );
}

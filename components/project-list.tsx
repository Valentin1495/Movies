import Project from './project';

export default function ProjectList() {
  const projects = [
    {
      name: 'Google News',
      image:
        'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg',
      href: 'https://news-noahhan.vercel.app',
      description:
        'New York Times API를 이용하여 섹션 별 뉴스를 제공합니다. Next.js 기본 옵션인 React Server Component를 활용하여 Server Rendering을 구현하였습니다. 또한 검색을 통해 뉴스 기사를 찾아볼 수도 있는데, 이는 무한 스크롤 UI로 만들기 위해 React Query와 Client Component를 활용해 Client Rendering을 하였습니다. 실시간으로 업데이트되는 뉴스의 특성을 고려하여 데이터 Revalidation을 1시간 간격으로 설정했습니다. NextAuth.js로 OAuth를 처리하고, 데이터베이스를 위해 Firebase를 연동함으로써, 사용자가 원하는 기사를 저장할 수 있도록 하였습니다.',
    },
    {
      name: 'AIWanderlust',
      image: '/AI.jpg',
      href: 'https://aiwanderlust-noahhan.vercel.app',
      description:
        '사용자가 여행 목적지를 선택할 때 Google Maps API를 사용하여 장소 이름과 위치 정보를 자동 완성으로 확보하고, 사용자의 관심사를 선택한 후 이 데이터를 기반으로 동적으로 프롬프트를 생성하여 PaLM API에 전송합니다. 그런 다음 Google Maps API를 활용하여 목적지를 지도에 표시하고, PaLM API가 이를 기반으로 맞춤형 여행 일정을 추천합니다. 이러한 과정을 통해 사용자는 원하는 여행 정보를 쉽게 얻고 맞춤형 일정을 받을 수 있습니다.',
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

      <div
        className='absolute top-[30%] left-0 bg-sky-100/80 
      -skew-y-12 w-full h-[350px]'
      ></div>
    </div>
  );
}

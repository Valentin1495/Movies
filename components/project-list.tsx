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
        'Custom Hook을 사용하여 만든 Multistep form을 통해 원하는 여행지와 활동을 제출합니다. Form을 제출하면, 사용자가 입력한 목적지의 경도와 위도를 Search parameters로 전달합니다. 이를 이용하여 Google Maps API를 호출하고, 해당 위치를 Google Maps에 표시합니다.  사용자가 선택한 활동도 Search parameters로 전달합니다. 여행지와 활동을 Prompt에 포함하여 PaLM API에 전송합니다. PaLM API는 이를 Request body로 하여 맞춤 여행 일정을 Response로 생성합니다. 특정 UI를 만들기 위해, Next.js에서 제공하는 파일들을 사용했습니다. e.g. layout.tsx, loading.tsx, not-found.tsx, error.tsx, etc',
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

import Project from './project';

export default function ProjectList() {
  const projects = [
    {
      name: 'Google News',
      image:
        'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg',
      href: 'https://google-news-delta.vercel.app',
      description:
        'Google News 앱을 이용했던 경험을 바탕으로 만든 개인 프로젝트입니다. Next.js 13의 app router 안에 server component를 사용하여, 실시간으로 업데이트되는 뉴스를 카테고리별로 제공합니다. 또한 검색을 통해 기사를 찾아볼 수도 있는데, 이는 React Query와 client component를 활용해 무한 스크롤 UI로 구현하였습니다. Tailwind CSS의 반응형 디자인을 통해, 모든 디바이스에서 시각적으로 깔끔하도록 만들었습니다. NextAuth.js로 OAuth를 처리하고, 데이터베이스를 위해 Firebase를 연동함으로써, 사용자가 원하는 뉴스 기사를 저장할 수 있도록 하였습니다.',
    },
    {
      name: 'Open Sea',
      image: '/nft.png',
      description:
        'NFT 거래소인 Open Sea를 모티브로 하여 개발을 진행한 팀 프로젝트입니다. 저의 주 역할은 React Query를 이용하여 상품과 사용자 프로필을 조회하고, 업데이트하는 기능(Query & Mutation)이었습니다. 또한 컬렉션/아이템 CRUD 기능과, 사용자 프로필 조회/수정/삭제 기능을 구현하였습니다. 성과로는 첫 번째, React Query를 활용하여 API 데이터 요청과 서버 상태 관리를 효율적으로 처리하였습니다. 두 번째, React Router를 통해 다양한 페이지 간의 경로 관리와 내비게이션 및 검색 기능을 구현하였습니다. 마지막으로, Intersection Observer API를 활용하여 페이지 스크롤 및 요소의 가시성을 감지하고, 이를 이용하여 무한 스크롤 기능을 구현했습니다.',
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

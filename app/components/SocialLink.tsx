import { ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  children: ReactNode;
};

export default function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <div className='max-w-fit rounded-full overflow-hidden hover:opacity-80 transition-opacity'>
      <a href={href} target='_blank'>
        {children}
      </a>
    </div>
  );
}

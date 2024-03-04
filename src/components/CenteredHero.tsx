import Link from 'next/link';

import { badgeVariants } from './ui/badge';

const CenteredHero = (props: {
  banner: {
    href: string;
    text: React.ReactNode;
  };
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) => (
  <>
    <div className="text-center">
      <Link className={badgeVariants()} href={props.banner.href}>
        {props.banner.text}
      </Link>
    </div>

    <div className="mt-3 text-center text-5xl font-bold tracking-tight">
      {props.title}
    </div>

    <div className="mx-auto mt-5 max-w-screen-sm text-center text-xl text-muted-foreground">
      {props.description}
    </div>

    <div className="mt-8 flex flex-row justify-center gap-x-5">
      {props.buttons}
    </div>
  </>
);

export { CenteredHero };

import Image from 'next/image';
import Link from 'next/link';

import { LogoCloud } from '@/components/LogoCloud';

const Sponsors = () => (
  <LogoCloud text="Sponsored by">
    <Link href="/">
      <Image
        src="/assets/images/clerk.png"
        alt="Clerk"
        width="128"
        height="40"
      />
    </Link>

    <Link href="/">
      <Image
        src="/assets/images/turso.png"
        alt="Turso"
        width="128"
        height="32"
      />
    </Link>

    <Link href="/">
      <Image
        src="/assets/images/crowdin-dark.png"
        alt="Crowdin"
        width="128"
        height="26"
      />
    </Link>

    <Link href="/">
      <Image
        src="/assets/images/sentry-dark.png"
        alt="Sentry"
        width="128"
        height="38"
      />
    </Link>

    <Link href="/">
      <Image
        src="/assets/images/better-stack-dark.png"
        alt="Better Stack"
        width="128"
        height="22"
      />
    </Link>

    <Link href="https://nextlessjs.com">
      <Image
        src="/assets/images/nextlessjs.png"
        alt="Nextless"
        width="128"
        height="30"
      />
    </Link>
  </LogoCloud>
);

export { Sponsors };

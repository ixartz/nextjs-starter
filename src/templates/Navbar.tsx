import Link from 'next/link';

import { CenteredMenu } from '@/components/CenteredMenu';
import { buttonVariants } from '@/components/ui/button';

import { Logo } from './Logo';

const Navbar = () => (
  <CenteredMenu
    logo={<Logo />}
    rightMenu={
      <>
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link className={buttonVariants()} href="/sign-up">
            Sign Up
          </Link>
        </li>
      </>
    }
  >
    <li>
      <Link href="/">Product</Link>
    </li>

    <li>
      <Link href="/">Docs</Link>
    </li>

    <li>
      <Link href="/">Blog</Link>
    </li>

    <li>
      <Link href="/">Community</Link>
    </li>

    <li>
      <Link href="/">Company</Link>
    </li>
  </CenteredMenu>
);

export { Navbar };

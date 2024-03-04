import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import { CTABanner } from '@/components/CTABanner';
import { buttonVariants } from '@/components/ui/button';

const CTA = () => (
  <CTABanner
    title="You are ready?"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    buttons={
      <Link
        className={buttonVariants({ variant: 'outline', size: 'lg' })}
        href="https://github.com/ixartz/Next-js-Boilerplate"
      >
        <GitHubLogoIcon className="mr-2 size-5" />
        Star on GitHub
      </Link>
    }
  />
);

export { CTA };

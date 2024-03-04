import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

import { CenteredHero } from '@/components/CenteredHero';
import { buttonVariants } from '@/components/ui/button';

const Hero = () => (
  <CenteredHero
    banner={{
      href: 'https://twitter.com/ixartz',
      text: (
        <>
          <TwitterLogoIcon className="mr-1 size-5" /> Follow @Ixartz on Twitter
        </>
      ),
    }}
    title={
      <>
        The perfect{' '}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          SaaS template
        </span>{' '}
        to build and scale your business with ease.
      </>
    }
    description="A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS."
    buttons={
      <>
        <a
          className={buttonVariants({ size: 'lg' })}
          href="https://github.com/ixartz/Next-js-Boilerplate#getting-started"
        >
          Get Started
        </a>

        <a
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
          href="https://github.com/ixartz/Next-js-Boilerplate"
          target="_blank"
          rel="noopener"
        >
          <GitHubLogoIcon className="mr-2 size-5" />
          Star on GitHub (~6k)
        </a>
      </>
    }
  />
);

export { Hero };

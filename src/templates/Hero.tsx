import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

import { CenteredHero } from '@/components/CenteredHero';
import { Section } from '@/components/Section';
import { buttonVariants } from '@/components/ui/button';

const Hero = () => (
  <Section className="py-48 pb-96">
    <CenteredHero
      banner={{
        href: 'https://twitter.com/ixartz',
        text: (
          <>
            <TwitterLogoIcon className="mr-1 size-5" /> Follow @Ixartz on
            Twitter
          </>
        ),
      }}
      title={
        <>
          Kickstart your project effortlessly with the Free and Open-Source{' '}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Next.js Boilerplate
          </span>
        </>
      }
      description="Jumpstart your project in seconds, bundled with built-in Authentication, Database, I18n, Forms, SEO, Logging, Error Reporting, Testing, Deployment, Monitoring, and more!"
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
  </Section>
);

export { Hero };

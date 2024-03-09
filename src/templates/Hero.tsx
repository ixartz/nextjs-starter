import { TwitterLogoIcon } from '@radix-ui/react-icons';

import { CenteredHero } from '@/components/CenteredHero';
import { Section } from '@/components/Section';

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
          Kickstart your project effortlessly with the Free and Open-Source
          Next.js Boilerplate
        </>
      }
      description="Jumpstart your project in seconds, bundled with built-in Authentication, Database, I18n, Forms, SEO, Logging, Error Reporting, Testing, Deployment, Monitoring, and more!"
      buttons={
        <>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-9xl font-extrabold text-transparent">
            6000
          </div>

          <div className="text-5xl font-bold">GitHub Stars</div>
        </>
      }
    />
  </Section>
);

export { Hero };

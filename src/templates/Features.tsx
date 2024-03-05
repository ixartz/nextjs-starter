import { Background } from '@/components/Background';
import { FeatureCard } from '@/components/FeatureCard';
import { Section } from '@/components/Section';

const Features = () => (
  <Background>
    <Section
      subtitle="Features"
      title="Explore the Powerful Features of Next.js Boilerplate"
      description="Take a moment to explore the features below and see how Next.js boilerplate can significantly accelerate your project launch."
    >
      <div className="grid grid-cols-3 gap-x-3 gap-y-8">
        <FeatureCard
          icon={
            <svg
              className="stroke-primary-foreground stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5" />
            </svg>
          }
          title="Free and Open-Source"
        >
          Take advantage of the Free and Open-Source Next.js Boilerplate.
          It&apos;s cost-free, encourages community contribution, and keeps you
          updated with the latest Next.js updates.
        </FeatureCard>

        <FeatureCard
          icon={
            <svg
              className="stroke-primary-foreground stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5" />
            </svg>
          }
          title="Modern Stack with Next.js"
        >
          Experience modern development with Next.js, the React metaframework.
          The code is written in TypeScript and uses Zod for schema validation.
          The UI is styled with Tailwind CSS.
        </FeatureCard>

        <FeatureCard
          icon={
            <svg
              className="stroke-primary-foreground stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5" />
            </svg>
          }
          title="Authentication"
        >
          Secure your app with Email and Social authentication (Google,
          Facebook, etc.). This feature provides a self-service for users to
          reset passwords, update profiles, and manage sessions.
        </FeatureCard>

        <FeatureCard
          icon={
            <svg
              className="stroke-primary-foreground stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5" />
            </svg>
          }
          title="CRUD Operations with Database"
        >
          A free and open-source landing page template for your SaaS business,
          built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.
        </FeatureCard>

        <FeatureCard
          icon={
            <svg
              className="stroke-primary-foreground stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5" />
            </svg>
          }
          title="Internationalization (i18n)"
        >
          A free and open-source landing page template for your SaaS business,
          built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.
        </FeatureCard>

        <FeatureCard
          icon={
            <svg
              className="stroke-primary-foreground stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5" />
            </svg>
          }
          title="Developer-Focused"
        >
          A free and open-source landing page template for your SaaS business,
          built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.
        </FeatureCard>
      </div>
    </Section>
  </Background>
);

export { Features };

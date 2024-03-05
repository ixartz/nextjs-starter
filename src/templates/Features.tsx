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
          title="CRUD with Database"
        >
          Effortlessly manage data with Drizzle ORM for a type-safe ORM. The
          template also includes an example of CRUD, providing a practical guide
          to handle your database.
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
          Expand your application&apos;s global reach with the i18n feature.
          This feature not only enhances user experience but also helps in
          breaking language barriers, making your application truly global.
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
          Discover an environment with TypeScript, ESLint, and Prettier,
          ensuring a clean codebase. The boilerplate includes unit, integration,
          and E2E testing for robust development.
        </FeatureCard>
      </div>
    </Section>
  </Background>
);

export { Features };

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
      <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M12 3a9 9 0 0 1 3.618 17.243l-2.193-5.602a3 3 0 1 0-2.849 0l-2.193 5.603A9 9 0 0 1 12 3z" />
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M12 4 4 8l8 4 8-4-8-4M4 12l8 4 8-4M4 16l8 4 8-4" />
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3" />
              <path d="M11 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 12v2.5" />
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
              <path d="M4 6v6a8 3 0 0 0 16 0V6" />
              <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 5h7M9 3v2c0 4.418-2.239 8-5 8" />
              <path d="M5 9c0 2.144 2.952 3.908 6.7 4M12 20l4-9 4 9M19.1 18h-6.2" />
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="m8 9 3 3-3 3M13 15h3" />
              <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
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

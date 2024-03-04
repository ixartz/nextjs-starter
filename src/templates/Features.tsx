import { Background } from '@/components/Background';
import { FeatureCard } from '@/components/FeatureCard';
import { Section } from '@/components/Section';

const Features = () => (
  <Background>
    <Section
      title="Features"
      subtitle="Unlock the Full Potential of the SaaS Template"
      description="A free and open-source landing page template for your SaaS business, built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS."
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
          title="Next.js"
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
          title="React"
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
          title="Tailwind CSS"
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
          title="TypeScript"
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
          title="Shadcn UI"
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
          title="ESLint"
        >
          A free and open-source landing page template for your SaaS business,
          built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.
        </FeatureCard>
      </div>
    </Section>
  </Background>
);

export { Features };

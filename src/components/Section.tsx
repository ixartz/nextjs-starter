import { cn } from '@/utils/Style';

const Section = (props: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}) => (
  <div className={cn('py-16', props.className)}>
    {(props.title || props.subtitle || props.description) && (
      <div className="mx-auto mb-12 max-w-screen-sm text-center">
        {props.subtitle && (
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-bold text-transparent">
            Features
          </div>
        )}

        {props.title && (
          <div className="mt-1 text-3xl font-bold">
            Unlock the Full Potential of the SaaS Template
          </div>
        )}

        {props.description && (
          <div className="mt-2 text-lg text-muted-foreground">
            A free and open-source landing page template for your SaaS business,
            built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.
          </div>
        )}
      </div>
    )}

    <div className="mx-auto max-w-screen-lg">{props.children}</div>
  </div>
);

export { Section };

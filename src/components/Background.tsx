import { cn } from '@/utils/Style';

const Background = (props: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn('w-full bg-secondary', props.className)}>
    {props.children}
  </div>
);

export { Background };

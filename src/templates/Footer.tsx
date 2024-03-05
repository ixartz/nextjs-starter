import { Section } from '@/components/Section';
import { SimpleCenteredFooter } from '@/components/SimpleCenteredFooter';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section className="pb-16 pt-0">
    <SimpleCenteredFooter name={AppConfig.name} />
  </Section>
);

export { Footer };

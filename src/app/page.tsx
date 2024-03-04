import { CTA } from '@/templates/CTA';
import { Features } from '@/templates/Features';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';
import { Sponsors } from '@/templates/Sponsors';

export async function generateMetadata() {
  return {
    title: 'Next.js Boilerplate',
    description: 'Next.js Boilerplate with Tailwind CSS and TypeScript',
  };
}

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

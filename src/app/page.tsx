import { CTA } from '@/templates/CTA';
import { Features } from '@/templates/Features';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';

export async function generateMetadata() {
  return {
    title: 'Next JS Boilerplate: Kickstart Your Next.js and React app',
    description:
      'Enhance your Next.js and React applications with our developer-focused starter template. Benefit from a flexible and modern stack with built-in authentication, multi-language support, and comprehensive testing tools.',
  };
}

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

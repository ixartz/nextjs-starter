import { CTA } from '@/templates/CTA';
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
      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <Navbar />
      </div>

      <div className="mx-auto max-w-screen-lg py-36">
        <Hero />
      </div>

      <div className="mx-auto max-w-screen-lg py-16">
        <Sponsors />
      </div>

      <div className="mx-auto max-w-screen-lg py-16">
        <CTA />
      </div>

      <div className="mx-auto max-w-screen-lg pb-16">
        <Footer />
      </div>
    </>
  );
}

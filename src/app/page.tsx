export async function generateMetadata() {
  return {
    title: 'Next.js Boilerplate',
    description: 'Next.js Boilerplate with Tailwind CSS and TypeScript',
  };
}

export default function Index() {
  return (
    <p>
      Explore our GitHub project for more information about{' '}
      <a
        className="text-blue-700 hover:border-b-2 hover:border-blue-700"
        href="https://github.com/ixartz/Next-js-Boilerplate"
      >
        Next.js Boilerplate
      </a>
      .
    </p>
  );
}

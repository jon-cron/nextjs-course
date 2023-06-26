import Link from "next/link";

// NOTE the next router works differently. By default the first index within the pages folder will be your domain www.domain.com/, then the next folder will be a new screen with its own index
export default function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </div>
  );
}

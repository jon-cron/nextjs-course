import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// NOTE the next router works differently. By default the first index within the pages folder will be your domain www.domain.com/, then the next folder will be a new screen with its own index
export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

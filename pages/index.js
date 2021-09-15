import Head from "next/head";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center "></main>

        <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
      </div>
    </Layout>
  );
}

import Head from "next/head";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div className=" items-center justify-center  h-screen py-2 overflow-hidden ">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 min-h-screen h-screen text-center overflow-y-auto">
          Welcome
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
      </div>
    </Layout>
  );
}

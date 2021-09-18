import Head from "next/head";
import Layout from "../components/layout/index";
export default function Home() {
  return (
    <Layout>
      <div className=" items-center justify-center   h-screen py-10 overflow-y-auto overflow-x-hidden transition-all ">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <main className="flex flex-col items-center justify-center text-4xl w-full flex-1 px-20 h-full text-center ">
          الحب سماء لا تمطر غير الأحلام
        </main>

        <footer className=""></footer>
      </div>
    </Layout>
  );
}
